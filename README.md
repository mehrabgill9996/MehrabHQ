# MehrabHQ

Marketing site for **MehrabHQ** — a freelance web design & development studio helping small businesses get modern, conversion-focused websites.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Web3Forms (contact page)

1. Create a free account at [web3forms.com](https://web3forms.com) and generate an access key.
2. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

3. Set your key:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

4. Restart the dev server. Form submissions POST to `https://api.web3forms.com/submit`.

## Editable content

Most marketing copy lives in `src/lib/content.ts` — services, pricing, FAQs, nav links, contact details, and more. Update that file to change site text without digging through JSX.

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Start local development  |
| `npm run build` | Production build       |
| `npm run start` | Run production server  |
| `npm run lint`  | Run ESLint             |

## Pages

- `/` — Landing page
- `/about` — About Mehrab / MehrabHQ
- `/contact` — Quote request form (Web3Forms)

## Notes

- Replace placeholder email, LinkedIn, and Calendly URLs in `src/lib/content.ts`.
- Replace the About page photo placeholder (search for `TODO: replace with real profile photo`).
- Analytics: drop a Google Analytics / Plausible script in `src/app/layout.tsx` where marked.
