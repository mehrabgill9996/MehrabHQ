
Update the Contact page form so that submissions send email via **Resend** instead of (or in addition to) Web3Forms. When a visitor submits the quote/contact form, two emails should be sent:

1. **Notification email to me (Mehrab / MehrabHQ owner)** — contains all the submitted form details, sent to my business inbox (env variable `NOTIFY_EMAIL`).
2. **Thank-you/confirmation email to the visitor** — a short, warm, on-brand email confirming their inquiry was received, sent to the email address they entered in the form.

## Implementation Requirements

- Use the **Resend Node SDK** (`resend` npm package), not raw fetch, unless a Route Handler makes raw fetch simpler.
- Create a **Next.js Route Handler** at `app/api/contact/route.ts` (App Router, POST method) that:
  - Validates the incoming form data server-side (name, email, and message are required; reject if missing or if the honeypot field is filled).
  - Sends the two emails using Resend.
  - Returns a JSON response indicating success or failure, with proper HTTP status codes.
- Update the Contact form's client-side submit handler to POST to `/api/contact` instead of (or in addition to) the Web3Forms endpoint, and handle the success/error states already built into the form (success message, error message, loading state on the submit button).
- Store secrets in environment variables, never hard-coded:
  - `RESEND_API_KEY`
  - `NOTIFY_EMAIL` (my inbox — where lead notifications go)
  - `FROM_EMAIL` (a verified sending address/domain in Resend — use `support@mehrabhq.com`)
- Add these variables to a `.env.local.example` file with placeholder values and a short comment explaining each one, and mention them in the README setup steps.

## Email 1 — Lead Notification (to me)
- Subject: something like `New Quote Request from {name}` (dynamic, includes the lead's name).
- Body: clean HTML email listing every field they submitted (Name, Email, Business Name, Project Type, Budget Range, Message/Project Details) in a simple readable layout — labels bolded, values below or beside them.
- Include a "Reply to this lead" mailto link pre-filled with their email address at the top for quick action.
- Set `replyTo` on the email to the lead's own email address, so I can hit reply and respond directly to them.

## Email 2 — Thank You (to the visitor)
- Subject: something warm and simple, e.g. `Thanks for reaching out to MehrabHQ!`
- Body: short, friendly HTML email — not corporate. Should:
  - Thank them by first name for reaching out.
  - Briefly confirm what happens next (e.g. "I'll review your project details and get back to you within 24 hours with next steps.").
  - Restate the core value props briefly (fast turnaround, fair pricing, direct communication) to keep them warm while they wait.
  - Include a simple signature block (Mehrab, MehrabHQ, contact email, maybe a link back to the site).
  - Match the site's brand colors/tone in the HTML styling (inline styles, since most email clients strip `<style>` tags/external CSS).
- Set `from` to the verified `FROM_EMAIL` with a friendly display name: `Mehrab from MehrabHQ <support@mehrabhq.com>`.

## Technical Notes
- Build both email HTML bodies as small reusable template functions (e.g. `lib/emails/leadNotification.ts` and `lib/emails/thankYou.ts`) that take the form data as input and return an HTML string — keep this separate from the route handler for readability and future editing.
- Wrap the Resend calls in try/catch; if the notification email fails, still attempt the thank-you email (and vice versa) rather than failing the whole request on one error — log failures clearly.
- Add basic rate limiting or duplicate-submission protection if straightforward (e.g. disable the submit button after one click, ignore repeated identical submissions within a short window) to avoid spam/email abuse.
- Keep the existing honeypot spam field from the form and check it server-side too, not just client-side.
- After implementing, add a short section to the README explaining: how to get a Resend API key, how to verify a sending domain, and where to set the env variables (locally and on the hosting platform, e.g. Vercel).

Implement this end to end: the API route, the email templates, the updated form submission logic, and the README updates.