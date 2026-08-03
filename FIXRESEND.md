Update my quote form API route (e.g., app/api/quote/route.ts) to fix an email delivery issue with Resend.

Please update the resend.emails.send calls to match this exact logic:

Sender Address: Use MehrabHQ <support@mehrabhq.com> for both emails.

Client Thank-You Email: Send directly to the client's submitted email address (to: [email]).

Internal Lead Notification Email: Send directly to my personal Gmail mehrabhqofficial@gmail.com (do NOT send to support@mehrabhq.com, as Namecheap's MX redirect interferes with inbound routing).

Ensure proper error handling (try/catch), typed parameters, and return a clean JSON success response so the frontend form shows the success state."