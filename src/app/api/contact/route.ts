import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  leadNotificationHtml,
  type ContactPayload,
} from "@/lib/emails/leadNotification";
import { thankYouHtml } from "@/lib/emails/thankYou";

export const runtime = "nodejs";

const WINDOW_MS = 60_000;
const recentSubmissions = new Map<string, number>();

function cleanupRecent() {
  const now = Date.now();
  Array.from(recentSubmissions.entries()).forEach(([key, ts]) => {
    if (now - ts > WINDOW_MS) recentSubmissions.delete(key);
  });
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot — pretend success so bots don't retry
    if (asString(body.botcheck)) {
      return NextResponse.json({ success: true });
    }

    const data: ContactPayload = {
      name: asString(body.name),
      email: asString(body.email),
      businessName: asString(body.business_name) || "N/A",
      projectType: asString(body.project_type),
      budget: asString(body.budget) || "Not specified",
      message: asString(body.message),
    };

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and project details are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!data.projectType) {
      return NextResponse.json(
        { success: false, message: "Please select a project type." },
        { status: 400 },
      );
    }

    cleanupRecent();
    const ip = getClientIp(request);
    const fingerprint = `${ip}|${data.email.toLowerCase()}|${data.message}`;
    const last = recentSubmissions.get(fingerprint);
    if (last && Date.now() - last < WINDOW_MS) {
      return NextResponse.json(
        {
          success: false,
          message: "Looks like that was just sent. Please wait a moment before trying again.",
        },
        { status: 429 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    // Lead alerts go to Gmail — Namecheap MX on support@ interferes with inbound
    const notifyEmail =
      process.env.NOTIFY_EMAIL?.trim() || "mehrabhqofficial@gmail.com";
    const fromEmail =
      process.env.FROM_EMAIL?.trim() || "support@mehrabhq.com";

    if (!apiKey) {
      console.error("[contact] Missing RESEND_API_KEY");
      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured yet. Set RESEND_API_KEY, then restart the server.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const from = `MehrabHQ <${fromEmail}>`;

    let notifyOk = false;
    let thankYouOk = false;
    const errors: string[] = [];

    try {
      const { data: notifyResult, error } = await resend.emails.send({
        from,
        to: [notifyEmail],
        replyTo: data.email,
        subject: `New Quote Request from ${data.name}`,
        html: leadNotificationHtml(data),
      });
      if (error) {
        errors.push(`notify: ${error.message}`);
        console.error("[contact] Lead notification failed:", error);
      } else {
        notifyOk = true;
        console.log("[contact] Lead notification sent:", notifyResult?.id);
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown notify error";
      errors.push(`notify: ${msg}`);
      console.error("[contact] Lead notification threw:", err);
    }

    try {
      const { data: thankYouResult, error } = await resend.emails.send({
        from,
        to: [data.email],
        subject: "Thanks for reaching out to MehrabHQ!",
        html: thankYouHtml(data),
      });
      if (error) {
        errors.push(`thankYou: ${error.message}`);
        console.error("[contact] Thank-you email failed:", error);
      } else {
        thankYouOk = true;
        console.log("[contact] Thank-you email sent:", thankYouResult?.id);
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown thank-you error";
      errors.push(`thankYou: ${msg}`);
      console.error("[contact] Thank-you email threw:", err);
    }

    if (!notifyOk && !thankYouOk) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Could not send email right now. Please try again or email us directly.",
        },
        { status: 502 },
      );
    }

    recentSubmissions.set(fingerprint, Date.now());

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
