"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/content";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 235, 0.16), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(26, 35, 54, 0.08), transparent)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grain opacity-60"
        aria-hidden
      />
      <FloatingShapes />

      <div className="container-page relative flex flex-col items-center py-16 text-center lg:py-24">
        {siteConfig.acceptingProjects ? (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-[#DBEAFE] px-3 py-1 text-xs font-semibold text-[#1D4ED8]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" aria-hidden />
            Currently accepting new projects
          </motion.span>
        ) : null}

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
        >
          Custom Websites That Turn Visitors Into Customers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted"
        >
          Fast turnaround, fair pricing, and a site built for your Ontario small
          business — whether you need a simple landing page or full e-commerce
          with Stripe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href="/contact" size="lg">
            Get a Free Quote
            <ArrowRight size={18} aria-hidden />
          </Button>
          <Button href="/#process" variant="secondary" size="lg">
            How It Works
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-16 top-24 h-40 w-40 rounded-full bg-[#2563EB]/10 blur-2xl"
        animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-8 top-10 h-28 w-28 rounded-full bg-ink/5 blur-xl"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 h-24 w-24 rounded-3xl bg-[#2563EB]/15 blur-lg"
        animate={{ rotate: [0, 8, 0], y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
