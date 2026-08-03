import type { ContactPayload } from "./leadNotification";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function firstName(fullName: string) {
  const part = fullName.trim().split(/\s+/)[0];
  return part || "there";
}

export function thankYouHtml(data: ContactPayload) {
  const name = escapeHtml(firstName(data.name));
  const siteUrl = "https://mehrabhq.com";
  const supportEmail = process.env.FROM_EMAIL || "support@mehrabhq.com";

  return `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#F7F8FA;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F7F8FA;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border:1px solid #E5E7EB;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:linear-gradient(145deg,#0B1220 0%,#1E3A8A 55%,#2563EB 100%);padding:28px;">
                <div style="font-size:14px;font-weight:700;color:#DBEAFE;">
                  MehrabHQ
                </div>
                <div style="margin-top:10px;font-size:24px;font-weight:700;line-height:1.25;color:#ffffff;">
                  Thanks for reaching out, ${name}!
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;color:#374151;font-size:15px;line-height:1.65;">
                <p style="margin:0 0 16px;">
                  I got your message and I'll review your project details shortly.
                  You can expect a reply within <strong style="color:#0B1220;">one business day</strong>
                  with clear next steps — usually sooner.
                </p>
                <p style="margin:0 0 16px;">
                  While you wait, here's what working with MehrabHQ looks like:
                </p>
                <ul style="margin:0 0 20px;padding-left:20px;color:#374151;">
                  <li style="margin-bottom:8px;"><strong style="color:#0B1220;">Fast turnaround</strong> — days, not months</li>
                  <li style="margin-bottom:8px;"><strong style="color:#0B1220;">Fair, fixed pricing</strong> — no surprise invoices</li>
                  <li style="margin-bottom:8px;"><strong style="color:#0B1220;">Direct communication</strong> — you work with me, not a middleman</li>
                </ul>
                <p style="margin:0 0 24px;">
                  If anything changes on your end, just reply to this email.
                </p>
                <a href="${siteUrl}" style="display:inline-block;background:#2563EB;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 18px;border-radius:10px;">
                  Visit MehrabHQ
                </a>
                <div style="margin-top:32px;padding-top:20px;border-top:1px solid #E5E7EB;font-size:14px;line-height:1.6;color:#6B7280;">
                  <div style="font-weight:700;color:#0B1220;">Mehrab</div>
                  <div>MehrabHQ</div>
                  <div>
                    <a href="mailto:${escapeHtml(supportEmail)}" style="color:#2563EB;text-decoration:none;">
                      ${escapeHtml(supportEmail)}
                    </a>
                  </div>
                  <div>
                    <a href="${siteUrl}" style="color:#2563EB;text-decoration:none;">
                      mehrabhq.com
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}
