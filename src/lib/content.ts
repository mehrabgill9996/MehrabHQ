export const siteConfig = {
  name: "MehrabHQ",
  tagline: "Custom websites for small businesses that mean business.",
  owner: "Mehrab",
  location: "Ontario, Canada",
  email: "support@mehrabhq.com",
  phone: "3063165228",
  phoneDisplay: "(306) 316-5228",
  phoneTel: "tel:+13063165228",
  whatsappUrl: "https://wa.me/13063165228",
  linkedIn: "https://linkedin.com/in/mehrab", // TODO: replace with real profile URL
  logo: "/images/MHQ.png",
  acceptingProjects: true,
};

export const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#work", label: "Work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const trustSignals = [
  "Fast Turnaround",
  "Fixed, Fair Pricing",
  "Direct Communication — No Middlemen",
  "Built With Modern Tech (Next.js, Stripe, Sanity)",
] as const;

export const services = [
  {
    slug: "landing-pages",
    title: "Landing Pages",
    description:
      "Focused one-page sites that introduce your business and turn visitors into leads.",
    longDescription:
      "A single, conversion-focused page that presents your offer clearly — strong headline, trust signals, services overview, and a quote form that actually gets used. Ideal when you need to go live fast and start capturing inquiries.",
    highlights: [
      "Clear hero and call-to-action",
      "Mobile-first layout",
      "Contact / quote form",
      "Basic SEO and analytics-ready",
    ],
    icon: "layout",
  },
  {
    slug: "business-websites",
    title: "Business Websites",
    description:
      "Multi-page sites with clear services, about, and contact — built to look sharp on every device.",
    longDescription:
      "A full small-business site with the pages you need to look established online: home, services, about, and contact. Designed to be easy to navigate, fast on phones, and ready for Google.",
    highlights: [
      "Up to multi-page structure",
      "Custom design for your brand",
      "Contact form and email setup",
      "SEO foundations included",
    ],
    icon: "globe",
  },
  {
    slug: "e-commerce",
    title: "E-Commerce",
    description:
      "Product listings and Stripe checkout so you can sell online without the headache.",
    longDescription:
      "Sell products online with a clean catalog and secure Stripe checkout. Built so orders notify you reliably and customers can buy without friction — without a bloated platform you don’t need.",
    highlights: [
      "Product listings",
      "Stripe checkout",
      "Order notifications",
      "Admin-friendly updates",
    ],
    icon: "shopping",
  },
  {
    slug: "cms-integration",
    title: "CMS Integration",
    description:
      "Sanity-powered content so you can update text and images yourself — no coding required.",
    longDescription:
      "Connect your site to Sanity so you can edit copy, images, and listings yourself. No waiting on a developer for every small change — and no messy WordPress plugins.",
    highlights: [
      "Sanity CMS setup",
      "Editable pages and fields",
      "Image management",
      "Training so you’re comfortable updating",
    ],
    icon: "edit",
  },
  {
    slug: "contact-forms-email",
    title: "Contact Forms & Email",
    description:
      "Reliable forms with Web3Forms and Resend so inquiries land where you need them.",
    longDescription:
      "Forms that deliver — quote requests, contact messages, and notifications set up so leads don’t disappear into spam. Built with Web3Forms and Resend for dependable delivery.",
    highlights: [
      "Custom form fields",
      "Instant email notifications",
      "Spam protection",
      "Optional CRM / inbox routing",
    ],
    icon: "mail",
  },
  {
    slug: "website-redesigns",
    title: "Website Redesigns",
    description:
      "Modernize an outdated site into something fast, mobile-friendly, and conversion-ready.",
    longDescription:
      "Replace an outdated or DIY site with a modern rebuild that loads fast, looks sharp on mobile, and guides visitors toward calling, booking, or buying.",
    highlights: [
      "UX and content cleanup",
      "Modern tech stack",
      "Mobile performance focus",
      "Migration help for domain and hosting",
    ],
    icon: "refresh",
  },
] as const;

export const benefits = [
  {
    title: "Speed",
    description:
      "Days, not weeks. Most projects ship on a clear timeline so you can get online sooner.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Know what you're paying for upfront. Fixed quotes with no surprise invoices.",
  },
  {
    title: "Easy Communication",
    description:
      "You work directly with Mehrab — quick replies, plain English, no agency runaround.",
  },
  {
    title: "Small-Business Focus",
    description:
      "Built for restaurants, salons, trades, dealerships, and local shops — not Fortune 500 jargon.",
  },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Free Consultation",
    description:
      "We talk through your goals, audience, and must-haves. No pressure, no jargon.",
  },
  {
    step: 2,
    title: "Design & Build",
    description:
      "You get a clear plan and a polished site built with modern, reliable tech.",
  },
  {
    step: 3,
    title: "Review & Revisions",
    description:
      "You review, we refine. Feedback is welcome until it feels right for your brand.",
  },
  {
    step: 4,
    title: "Launch & Support",
    description:
      "We launch together, and you get help with hosting, domain, and next steps.",
  },
] as const;

export const pricingTiers = [
  {
    name: "Starter Landing Page",
    price: "$799",
    description: "A focused one-page site to get you online and collecting leads.",
    features: [
      "Custom design",
      "Mobile-responsive",
      "Contact form",
      "Basic SEO setup",
    ],
  },
  {
    name: "Business Website",
    price: "$1,499",
    description: "A full multi-page site that presents your business with confidence.",
    features: [
      "Up to 5 pages",
      "Custom design",
      "Contact form & email",
      "SEO + analytics-ready",
    ],
    highlighted: true,
  },
  {
    name: "E-Commerce",
    price: "$2,499",
    description: "Sell online with product listings and secure Stripe checkout.",
    features: [
      "Product catalog",
      "Stripe checkout",
      "Order notifications",
      "Admin-friendly updates",
    ],
  },
] as const;

export const pricingNote =
  "Final quote depends on your needs — get a free estimate with no obligation.";

export const portfolioCaseStudies = [
  {
    id: "tiling-contractor",
    domain: "tiling-contractor.com",
    category: "Bathroom & Tiling Contractor",
    headline: "Custom Landing Page for Local Contractor",
    description:
      "Designed and built to turn local traffic into high-value quote requests. Features clean service breakdowns, trust badges, clear CTAs, and instant form notifications via Web3Forms.",
    tech: ["Next.js", "Tailwind CSS", "Web3Forms", "Sanity CMS"],
    liveUrl: undefined as string | undefined,
    image: "/images/projects/FULLPAGERSHOT1.jpg",
    imageAlt:
      "Full-page screenshot of a bathroom and tiling contractor landing page",
    imageWidth: 1400,
    imageHeight: 9201,
  },
  {
    id: "kingpin-auto-sales",
    domain: "kingpinautosales.com",
    category: "Dealership Website",
    headline: "Full Dealership Site for Kingpin Auto Sales",
    description:
      "A premium Regina dealership experience with a dark hero, inventory listings, recently sold vehicles, and clear CTAs built to convert shoppers into leads.",
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Framer Motion"],
    liveUrl: undefined as string | undefined,
    image: "/images/projects/kingpin1.jpg",
    imageAlt: "Full-page screenshot of the Kingpin Auto Sales website",
    imageWidth: 1400,
    imageHeight: 4266,
  },
];

export const featuredProjects = [
  {
    title: "Kingpin Auto Sales",
    category: "Dealership Website",
    description:
      "A premium dealership site with a dark hero, trust signals, and a polished inventory experience for a Regina pre-owned dealer.",
    images: [
      {
        src: "/images/projects/kingpin-home.png",
        alt: "Kingpin Auto Sales homepage",
        label: "Homepage",
      },
      {
        src: "/images/projects/kingpin-inventory.png",
        alt: "Kingpin Auto Sales inventory page",
        label: "Inventory",
      },
      {
        src: "/images/projects/kingpin-recently-sold.png",
        alt: "Kingpin Auto Sales recently sold page",
        label: "Recently Sold",
      },
    ],
  },
  {
    title: "Tiles With Gill",
    category: "Trade Business Website",
    description:
      "A clean contractor site for Brampton & the GTA — strong quote CTAs, service-area map, and a trust-building why-us section.",
    images: [
      {
        src: "/images/projects/tiles-home.png",
        alt: "Tiles With Gill homepage",
        label: "Homepage",
      },
      {
        src: "/images/projects/tiles-contact.png",
        alt: "Tiles With Gill contact and map section",
        label: "Contact & Map",
      },
      {
        src: "/images/projects/tiles-why-us.png",
        alt: "Tiles With Gill why choose us section",
        label: "Why Choose Us",
      },
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "Mehrab rebuilt our outdated site in under two weeks. Customers finally say they can find us easily.",
    name: "Alex Rivera",
    role: "Owner, Local Salon",
    editable: true,
  },
  {
    quote:
      "Clear pricing, quick replies, and a site that actually brings in inquiries. Exactly what we needed.",
    name: "Jordan Lee",
    role: "Owner, Home Services Co.",
    editable: true,
  },
  {
    quote:
      "We went from no website to selling online with Stripe. The whole process felt simple and human.",
    name: "Sam Patel",
    role: "Founder, Boutique Shop",
    editable: true,
  },
] as const;

export const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Most landing pages and business sites ship in days to a couple of weeks, depending on scope and how quickly feedback comes back. You'll get a clear timeline before we start.",
  },
  {
    question: "Do I need to provide content?",
    answer:
      "If you have copy and photos, great — we'll use them. If not, we can help shape structure and messaging based on your business, or leave clearly marked placeholders for you to fill in.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "Small tweaks are normal. We can include a round of post-launch support, and ongoing updates are available if you need them later.",
  },
  {
    question: "Do you offer hosting/domain help?",
    answer:
      "Yes. Happy to guide you through domain setup and hosting options, or set things up with you so you're not stuck figuring it out alone.",
  },
  {
    question: "How does payment work?",
    answer:
      "Typically a deposit to start and the balance on launch. Exact terms are spelled out in your quote so there are no surprises.",
  },
] as const;

export const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Stripe",
  "Sanity",
  "Web3Forms",
  "Resend",
  "Framer Motion",
] as const;

export const projectTypes = [
  "Landing Page",
  "Business Website",
  "E-Commerce",
  "Redesign",
  "Other",
] as const;

export const budgetRanges = [
  "Under $1,000",
  "$1,000 – $2,000",
  "$2,000 – $4,000",
  "$4,000+",
  "Not sure yet",
] as const;
