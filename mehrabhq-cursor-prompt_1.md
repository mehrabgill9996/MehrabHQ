# Cursor Prompt — MehrabHQ Landing Page

Copy everything below into Cursor (Composer/Agent mode) as your instruction.

---

Build a modern, animated marketing website for **MehrabHQ**, a freelance web design & development studio. Use **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for animations. The site's goal is to convert small business owners into leads — every section should build trust and push toward the contact page.

## Brand & Positioning
- Business: MehrabHQ, run by Mehrab, a solo web designer/developer based in Ontario, Canada.
- Specialty: custom websites — from simple landing pages to full e-commerce sites with Stripe checkout and product listings.
- Integrations offered: Web3Forms (contact forms), Resend API (transactional email), Sanity (CMS for easy client content updates).
- Key differentiators: fast turnaround (days, not weeks), reasonable/transparent pricing, easy and responsive communication, helping small businesses that have outdated sites or no site at all.
- Tone: clean, modern, approachable — not corporate/stiff, not overly "techy jargon." Should feel trustworthy to a non-technical small business owner (e.g. a restaurant owner, tiler, dealership owner, salon owner).

## Design Direction
- Color palette: pick a likeable, modern palette — e.g. a deep indigo/navy or near-black as the primary text/background anchor, one confident accent color (electric blue, teal, or warm coral) for CTAs, and a soft off-white/light gray background for readability. Avoid neon or clashing colors. Support light mode by default (dark mode optional, not required).
- Typography: one clean sans-serif (e.g. Inter, Geist, or Satoshi via next/font) — large, confident headings, generous line-height on body text, nothing cramped.
- Layout: generous whitespace, rounded corners (xl/2xl), soft shadows, subtle gradients or grain/noise texture in hero background — nothing that looks like a generic template.
- Animations (Framer Motion): fade/slide-up on scroll for sections, staggered reveals for feature/service cards, a subtle hover-lift on cards and buttons, animated gradient or floating shapes in the hero, smooth page transitions. Keep animations tasteful and fast (200–500ms) — not gimmicky, not laggy.
- Fully responsive, mobile-first. Test that nothing breaks below 375px width.

## Pages & Structure

### 1. Home / Landing Page (`/`)
- **Navbar**: logo/wordmark "MehrabHQ", nav links (Services, Process, Pricing, About, Contact), a prominent "Get a Free Quote" CTA button. Sticky on scroll, condenses slightly.
- **Hero section**: Bold headline focused on outcome for the business owner (e.g. "Custom Websites That Turn Visitors Into Customers"), subheadline mentioning fast turnaround + reasonable pricing, primary CTA ("Get a Free Quote") and secondary CTA ("See My Work" or "How It Works"). Include a visual — abstract animated graphic, browser mockup, or code/website snippet illustration (no fake screenshots of real client logos yet).
- **Trust bar** (optional but recommended): small row of trust signals — "Fast Turnaround", "Fixed, Fair Pricing", "Direct Communication — No Middlemen", "Built With Modern Tech (Next.js, Stripe, Sanity)".
- **Services section**: card grid covering — Landing Pages, Business Websites, E-Commerce (Stripe checkout + product listings), CMS Integration (Sanity), Contact Forms & Email (Web3Forms/Resend), Website Redesigns/Modernization. Each card: icon, short title, 1–2 line description.
- **Why MehrabHQ / Benefits section**: 3–4 columns — Speed (days not weeks), Transparent Pricing, Easy Communication, Small-Business Focus. Use short, confident copy.
- **Process section**: simple numbered steps (e.g. 1. Free Consultation → 2. Design & Build → 3. Review & Revisions → 4. Launch & Support). Animate as a horizontal or vertical timeline.
- **Pricing section**: simple, non-scary pricing — 3 tiers (e.g. Starter Landing Page, Business Website, E-Commerce) with "starting at $X" framing and a note like "Final quote depends on your needs — get a free estimate." Include a CTA button on each tier.
- **Social proof placeholder**: testimonials carousel/grid with placeholder quotes clearly marked as editable, and/or a "Trusted by local businesses" strip with placeholder logo slots — structure this so real testimonials/logos can be swapped in later.
- **FAQ section**: accordion with questions like "How long does a project take?", "Do I need to provide content?", "What if I need changes after launch?", "Do you offer hosting/domain help?", "How does payment work?".
- **Final CTA section**: full-width banner with strong headline ("Ready for a Website That Works as Hard as You Do?") and a button to the Contact page.
- **Footer**: logo, short tagline, nav links, contact email, social/LinkedIn links, location (Ontario, Canada), copyright.

### 2. About / Owner Page (`/about`)
- Separate page introducing Mehrab personally (builds trust with small business owners who want to know who they're hiring).
- Reserve a clear, well-designed space for a profile photo (circular or rounded-square frame, with a placeholder avatar/gradient background until a real photo is added — comment in code: `/* TODO: replace with real profile photo */`).
- Sections: short bio/story (why MehrabHQ exists, focus on helping small businesses), skills/tech stack list (Next.js, Tailwind, Stripe, Sanity, Web3Forms, Resend), personal touch (approach to client work, communication style), and a CTA to contact.

### 3. Contact Page (`/contact`)
- Clean contact form: Name, Email, Business Name (optional), Project Type (dropdown: Landing Page / Business Website / E-Commerce / Redesign / Other), Budget range (optional dropdown), Message/Project Details (textarea).
- Wire the form to **Web3Forms** (use an access-key env variable placeholder `NEXT_PUBLIC_WEB3FORMS_KEY`) with a client-side fetch POST to `https://api.web3forms.com/submit`.
- Show a success state (animated checkmark or confirmation message) and error state.
- Include direct contact info alongside the form (email, and optionally a Calendly-style "Book a Call" link placeholder).
- Add simple honeypot spam protection field.

## Technical Requirements
- Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion.
- Use `next/font` for fonts, `next/image` for any images.
- Organize code cleanly: `app/`, `components/`, `lib/`, with reusable components (Navbar, Footer, Button, Card, SectionHeading, etc.).
- SEO: proper `metadata` exports per page (title, description, Open Graph tags), semantic HTML, alt text on images.
- Accessibility: sufficient color contrast, keyboard-navigable nav and form, aria-labels where needed.
- Performance: lazy-load below-the-fold animations, optimize for fast Lighthouse scores.
- Add a `README.md` explaining how to set the Web3Forms key and run the project locally.
- Include a simple `sitemap.ts` and `robots.ts` for SEO basics.
- Make all copy easy to edit — pull repeatable content (services, pricing tiers, FAQs) into simple arrays/objects near the top of each component or in a `lib/content.ts` file, so Mehrab can update text without digging through JSX.

## Extras Worth Adding
- Sticky "Get a Free Quote" button that appears on scroll (mobile especially) for extra lead conversion.
- Simple analytics-ready structure (leave a clearly marked spot to drop in a Google Analytics / Plausible script tag later).
- Open Graph image placeholder for link previews when shared on social media.
- A subtle "currently accepting new projects" badge/indicator near the hero CTA — creates urgency and feels current.
- Favicon and basic manifest for a polished feel.

Build this out page by page, starting with the layout, Navbar, and Footer, then the Home page sections, then About, then Contact.
