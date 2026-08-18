import type { Metadata } from "next";
import { Benefits } from "@/components/home/Benefits";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { Hero } from "@/components/home/Hero";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { Pricing } from "@/components/home/Pricing";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { TrustBar } from "@/components/home/TrustBar";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/content";
import { faqPageJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Custom Websites for Ontario Small Businesses`,
  },
  description:
    "MehrabHQ builds custom websites for small businesses in Ontario — landing pages, business sites, and e-commerce with fast turnaround and fair pricing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Custom Websites for Ontario Small Businesses`,
    description:
      "Custom websites that turn visitors into customers. Fast turnaround, transparent pricing, direct communication.",
    url: SITE_URL,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <Hero />
      <TrustBar />
      <Services />
      <PortfolioSection />
      <Benefits />
      <Process />
      <Pricing />
      <GoogleReviews />
      <FAQ />
      <FinalCTA />
    </>
  );
}
