import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { benefits } from "@/lib/content";

export function Benefits() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Why MehrabHQ"
            title="Built for busy small business owners"
            description="No fluff, no runaround — just a clear path to a website that works as hard as you do."
          />
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 0.06}>
              <div>
                <p className="mb-3 text-sm font-semibold text-[#2563EB]">
                  0{index + 1}
                </p>
                <h3 className="text-lg font-semibold text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
