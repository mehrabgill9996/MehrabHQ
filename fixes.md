Create a fully responsive React component named `PortfolioSection.jsx` using Tailwind CSS and Lucide React icons to display client project case studies on my freelance agency website.

### Image Asset Setup
- IMAGE ATTACHED IN CHAT

---

### Component Requirements & Layout

1. Section Header:
   - Eyebrow Badge: A pill/badge reading "SELECTED WORK" using small font, bold text, and subtle background accent color.
   - Title: "Recent Projects That Drive Results" (large, bold, responsive font size).
   - Subtitle: "Real websites built for real businesses to capture leads and grow revenue."

2. Card Layout (Desktop & Mobile):
   - Wrap the case study in a main card container with `rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white overflow-hidden`.
   - Grid layout on desktop (`lg:grid lg:grid-cols-12 gap-8 p-6 lg:p-8`), stacking vertically on mobile screens.

3. Browser Mockup Frame (Visual Preview):
   - Render a Chrome/Safari style top bar with 3 window dots (red `#EF4444`, yellow `#F59E0B`, green `#10B981`) and a fake address bar reading `tiling-contractor.com`.
   - Below the header bar, create a fixed-height image container (`h-80 sm:h-96 w-full overflow-hidden relative group cursor-pointer`).
   - Image Styling: Use `w-full object-cover object-top transition-transform duration-[3000ms] ease-in-out`.

4. Desktop Interaction (Hover Scroll):
   - On desktop screens (`hidden md:block`), hovering over the image container should smoothly scroll the image downward (`group-hover:-translate-y-[calc(100%-24rem)]`) so the user can preview the full-length page screenshot without leaving the card.

5. Mobile Interaction (Tap-to-Expand Modal):
   - On mobile screens (`block md:hidden`), do NOT rely on hover.
   - Overlay a semi-transparent badge at the bottom of the image frame reading "Tap to view full page".
   - Clicking anywhere on the image on mobile opens a full-screen React Modal / Dialog overlay (`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm`).
   - Inside the modal:
     - Include a sticky top header with a close button ("X" icon) and title.
     - Display the full-height image in a scrollable container (`max-h-[85vh] overflow-y-auto rounded-lg`) so mobile visitors can freely swipe up/down through the entire full-page screenshot.

6. Project Details Column:
   - Category Badge: "Bathroom & Tiling Contractor"
   - Headline: "Custom Landing Page for Local Contractor"
   - Description: "Designed and built to turn local traffic into high-value quote requests. Features clean service breakdowns, trust badges, clear CTAs, and instant form notifications via Web3Forms."
   - Tech Stack Pills: Render tags for `Next.js`, `Tailwind CSS`, `Web3Forms`, and `Sanity CMS`.
   - CTA Buttons: 
     - Primary Button: "Request Similar Project →" (triggers quote workflow).
     - Secondary Button: "View Live Demo" (link style).

7. Code Quality:
   - Ensure clean React state management for the mobile modal (`const [isModalOpen, setIsModalOpen] = useState(false)`).
   - Fully responsive across mobile, tablet, and desktop viewports.