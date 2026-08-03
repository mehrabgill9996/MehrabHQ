import { faqs, siteConfig } from "@/lib/content";

export const SITE_URL = "https://mehrabhq.com";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: siteConfig.name,
    url: SITE_URL,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.logo),
    description:
      "Custom websites for small businesses in Ontario — landing pages, business sites, and e-commerce with fast turnaround and fair pricing.",
    email: siteConfig.email,
    telephone: `+1${siteConfig.phone}`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: siteConfig.location,
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
    },
    sameAs: [siteConfig.linkedIn, siteConfig.whatsappUrl].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+1${siteConfig.phone}`,
      contactType: "customer service",
      email: siteConfig.email,
      areaServed: "CA",
      availableLanguage: ["English"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: SITE_URL,
    description: siteConfig.tagline,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: absoluteUrl(siteConfig.logo),
    },
    inLanguage: "en-CA",
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.owner,
    jobTitle: "Web Designer & Developer",
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: SITE_URL,
    },
    url: absoluteUrl("/about"),
    image: absoluteUrl("/images/mehrab-profile.png"),
    address: {
      "@type": "PostalAddress",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    sameAs: [siteConfig.linkedIn].filter(Boolean),
  };
}
