import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-page">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-center shadow-lift sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 bg-hero-glow opacity-40"
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready for a Website That Works as Hard as You Do?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
                Tell me about your business. You&apos;ll get a clear quote and
                timeline — no obligation.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/contact" size="lg">
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
