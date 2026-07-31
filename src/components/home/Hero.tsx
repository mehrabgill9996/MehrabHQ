"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-glow">
      <div
        className="pointer-events-none absolute inset-0 bg-grain opacity-60"
        aria-hidden
      />
      <FloatingShapes />

      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          {siteConfig.acceptingProjects ? (
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-hover"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Currently accepting new projects
            </motion.span>
          ) : null}

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            Custom Websites That Turn Visitors Into Customers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted"
          >
            Fast turnaround, fair pricing, and a site built for your small
            business — whether you need a simple landing page or full e-commerce
            with Stripe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative"
          aria-hidden
        >
          <BrowserMockup />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-16 top-24 h-40 w-40 rounded-full bg-accent/10 blur-2xl"
        animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-8 top-10 h-28 w-28 rounded-full bg-ink/5 blur-xl"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 h-24 w-24 rounded-3xl bg-accent/15 blur-lg"
        animate={{ rotate: [0, 8, 0], y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function BrowserMockup() {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-3 shadow-lift">
      <div className="mb-3 flex items-center gap-2 px-1">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-3 h-6 flex-1 rounded-md bg-sand-warm" />
      </div>
      <div className="overflow-hidden rounded-xl bg-gradient-to-br from-sand via-white to-accent-soft p-6">
        <div className="mb-4 h-3 w-24 rounded bg-accent/40" />
        <div className="mb-2 h-5 w-4/5 max-w-[240px] rounded bg-ink/80" />
        <div className="mb-6 h-3 w-full max-w-[280px] rounded bg-ink/15" />
        <div className="mb-6 h-3 w-3/4 max-w-[200px] rounded bg-ink/10" />
        <div className="flex gap-3">
          <div className="h-9 w-28 rounded-lg bg-accent" />
          <div className="h-9 w-24 rounded-lg border border-ink/10 bg-white" />
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-20 rounded-xl border border-ink/5 bg-white/80 shadow-soft"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
