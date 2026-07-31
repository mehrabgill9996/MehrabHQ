"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./Button";

export function StickyQuoteButton() {
  const [pastHero, setPastHero] = useState(false);
  const [overCards, setOverCards] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const zones = document.querySelectorAll("[data-sticky-hide]");
    if (!zones.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setOverCards(entries.some((entry) => entry.isIntersecting));
      },
      {
        // Hide when a card zone overlaps the floating CTA area (bottom-right)
        root: null,
        rootMargin: "0px 0px -72px 0px",
        threshold: 0.12,
      }
    );

    zones.forEach((zone) => observer.observe(zone));
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !overCards;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed bottom-5 right-5 z-40 md:bottom-8 md:right-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
        >
          <Button href="/contact" size="md" className="shadow-lift">
            Get a Free Quote
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
