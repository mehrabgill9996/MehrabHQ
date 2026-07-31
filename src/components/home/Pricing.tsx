import { Check } from "lucide-react";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingNote, pricingTiers } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Pricing"
            title="Straightforward starting points"
            description="No scary packages. Starting prices that help you plan — final quote based on your needs."
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <FadeIn key={tier.name} delay={index * 0.08}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 shadow-soft ${
                  "highlighted" in tier && tier.highlighted
                    ? "border-accent bg-accent-soft/40 ring-1 ring-accent/20"
                    : "border-ink/8 bg-sand"
                }`}
              >
                <h3 className="text-lg font-semibold text-ink">{tier.name}</h3>
                <p className="mt-4">
                  <span className="text-sm text-ink-muted">Starting at </span>
                  <span className="text-3xl font-semibold tracking-tight text-ink">
                    {tier.price}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {tier.description}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-ink"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-accent"
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="/contact"
                    variant={
                      "highlighted" in tier && tier.highlighted
                        ? "primary"
                        : "secondary"
                    }
                    className="w-full"
                  >
                    Get a Free Quote
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-center text-sm text-ink-muted">{pricingNote}</p>
        </FadeIn>
      </div>
    </section>
  );
}
