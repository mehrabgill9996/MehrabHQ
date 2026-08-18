"use client";

import Script from "next/script";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

const ELFSIGHT_APP_ID = "6dd2801c-1eca-45dd-99eb-bc2dd1d52db5";

export function GoogleReviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 py-20 pb-32 lg:py-24 lg:pb-36"
      aria-labelledby="reviews-heading"
    >
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            id="reviews-heading"
            eyebrow="Google reviews"
            title="What clients say on Google"
            description="Real reviews from Google — so you can see how local businesses describe working with MehrabHQ."
          />
        </FadeIn>

        <div className="overflow-hidden rounded-2xl border border-ink/8 bg-white p-4 sm:p-6">
          <Script
            src="https://elfsightcdn.com/platform.js"
            strategy="lazyOnload"
            id="elfsight-platform"
          />
          <div
            className={`elfsight-app-${ELFSIGHT_APP_ID} min-h-[280px]`}
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}
