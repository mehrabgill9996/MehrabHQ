# MehrabHQ

Marketing site for **MehrabHQ** — a freelance web design & development studio helping small businesses get modern, conversion-focused websites.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (Resend)

Quote requests POST to `/api/contact`, which sends:

1. A **lead notification** to your inbox (`NOTIFY_EMAIL`)
2. A **thank-you email** to the visitor

### Setup

1. Create an account at [resend.com](https://resend.com) and generate an API key under **API Keys**.
2. Verify your sending domain (e.g. `mehrabhq.com`) in Resend → **Domains**, then add the DNS records Resend shows you.
3. Put these in `.env.local` (see `.env.example` / `.env.local.example`):

```env
RESEND_API_KEY=re_xxxxxxxx
NOTIFY_EMAIL=support@mehrabhq.com
FROM_EMAIL=support@mehrabhq.com
```

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Server-side Resend API key (never expose to the browser) |
| `NOTIFY_EMAIL` | Where new quote notifications are delivered |
| `FROM_EMAIL` | Verified sender address (must match your Resend domain) |

4. Restart the dev server after changing env vars.

### Production (e.g. Vercel)

Add the same three variables in your hosting project’s **Environment Variables** settings, then redeploy. Local `.env.local` is not uploaded — production must set them separately.

Until the domain is verified, Resend may only allow sending to your own account email for testing.

## Editable content

Most marketing copy lives in `src/lib/content.ts` — services, pricing, FAQs, nav links, contact details, and more. Update that file to change site text without digging through JSX.

## Scripts

| Command         | Description             |
|-----------------|-------------------------|
| `npm run dev`   | Start local development |
| `npm run build` | Production build        |
| `npm run start` | Run production server   |
| `npm run lint`  | Run ESLint              |

## Pages

- `/` — Landing page
- `/about` — About Mehrab / MehrabHQ
- `/contact` — Quote request form (Resend)
- `/privacy` — Privacy policy
- `/services/[slug]` — Service detail pages
- `/work/[slug]` — Case study pages

## Notes

- Replace the LinkedIn URL in `src/lib/content.ts` when ready.
- Analytics: set `NEXT_PUBLIC_GA_ID` in `.env.local` for Google Analytics 4.
