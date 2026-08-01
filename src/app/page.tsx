import { Benefits } from "@/components/home/Benefits";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { Pricing } from "@/components/home/Pricing";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustBar } from "@/components/home/TrustBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <PortfolioSection />
      <Benefits />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
