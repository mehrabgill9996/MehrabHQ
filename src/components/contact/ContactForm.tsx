"use client";

import { FormEvent, type ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, X } from "lucide-react";
import { Button } from "@/components/Button";
import { budgetRanges, projectTypes } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (status !== "success") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot — bots fill this; real users leave it empty
    if (String(formData.get("botcheck") || "").trim()) {
      setStatus("success");
      form.reset();
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_KEY to your .env.local file."
      );
      return;
    }

    const payload = {
      access_key: accessKey,
      name: formData.get("name"),
      email: formData.get("email"),
      business_name: formData.get("business_name") || "N/A",
      project_type: formData.get("project_type"),
      budget: formData.get("budget") || "Not specified",
      message: formData.get("message"),
      subject: "New MehrabHQ quote request",
      from_name: "MehrabHQ Website",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  function closeThankYou() {
    setStatus("idle");
  }

  return (
    <>
      <div className="relative rounded-2xl border border-ink/8 bg-white p-6 shadow-soft sm:p-8">
        <form onSubmit={onSubmit} className="space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="name" required>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
              />
            </Field>
            <Field label="Email" htmlFor="email" required>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Business Name" htmlFor="business_name">
            <input
              id="business_name"
              name="business_name"
              type="text"
              autoComplete="organization"
              className={inputClass}
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Project Type" htmlFor="project_type" required>
              <select
                id="project_type"
                name="project_type"
                required
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Select a type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Budget range" htmlFor="budget">
              <select
                id="budget"
                name="budget"
                defaultValue=""
                className={inputClass}
              >
                <option value="">Optional</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Project details" htmlFor="message" required>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={`${inputClass} resize-y`}
              placeholder="Tell me about your business and what you need..."
            />
          </Field>

          {/* Honeypot spam protection — leave empty */}
          <div className="absolute left-[-9999px]" aria-hidden="true">
            <label htmlFor="botcheck">Leave blank</label>
            <input
              id="botcheck"
              name="botcheck"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {status === "error" ? (
            <p
              className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
              role="alert"
            >
              {errorMessage}
            </p>
          ) : null}

          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" aria-hidden />
                Sending...
              </>
            ) : (
              "Send message"
            )}
          </Button>
        </form>
      </div>

      <AnimatePresence>
        {status === "success" ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
              aria-label="Close thank you message"
              onClick={closeThankYou}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="thank-you-title"
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-md rounded-2xl border border-ink/8 bg-white p-8 text-center shadow-lift"
            >
              <button
                type="button"
                onClick={closeThankYou}
                className="absolute right-3 top-3 rounded-lg p-2 text-ink-muted transition-colors hover:bg-sand hover:text-ink"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <CheckCircle2 className="mx-auto mb-4 text-accent" size={52} aria-hidden />
              <h3
                id="thank-you-title"
                className="text-2xl font-semibold tracking-tight text-ink"
              >
                Thank you!
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Your message was sent successfully. I&apos;ll get back to you
                soon with next steps for your quote.
              </p>
              <div className="mt-7">
                <Button type="button" onClick={closeThankYou} className="w-full sm:w-auto">
                  Got it
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

const inputClass =
  "w-full rounded-xl border border-ink/10 bg-sand px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-accent focus:bg-white";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
