"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./Button";

/** Approximate floating CTA footprint in the bottom-right corner */
const CTA = { width: 200, height: 56, bottom: 24, right: 24 };

function isOverlappingCta(el: Element) {
  const rect = el.getBoundingClientRect();
  const viewW = window.innerWidth;
  const viewH = window.innerHeight;

  const ctaLeft = viewW - CTA.right - CTA.width;
  const ctaRight = viewW - CTA.right;
  const ctaTop = viewH - CTA.bottom - CTA.height;
  const ctaBottom = viewH - CTA.bottom;

  // Expand hit area slightly so text near the button also counts
  const pad = 12;
  const left = ctaLeft - pad;
  const right = ctaRight + pad;
  const top = ctaTop - pad;
  const bottom = ctaBottom + pad;

  return !(
    rect.right < left ||
    rect.left > right ||
    rect.bottom < top ||
    rect.top > bottom
  );
}

export function StickyQuoteButton() {
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);
  const [overCards, setOverCards] = useState(false);
  const hideOnPage = pathname === "/contact";

  useEffect(() => {
    if (hideOnPage) return;

    const update = () => {
      setPastHero(window.scrollY > 420);

      const zones = document.querySelectorAll("[data-sticky-hide]");
      let overlapping = false;
      zones.forEach((zone) => {
        if (isOverlappingCta(zone)) overlapping = true;
      });
      setOverCards(overlapping);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // Recheck after layout/fonts settle
    const t = window.setTimeout(update, 300);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.clearTimeout(t);
    };
  }, [hideOnPage]);

  const visible = !hideOnPage && pastHero && !overCards;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed bottom-5 right-5 z-40 md:bottom-8 md:right-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
        >
          <Button href="/contact" size="md" className="shadow-lift">
            Get a Free Quote
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
