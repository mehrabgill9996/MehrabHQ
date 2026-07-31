import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-20 pb-28 lg:py-24 lg:pb-32">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Process"
            title="Idea to Launch"
            description="Four clear steps. You always know where things stand."
          />
        </FadeIn>

        <ol
          data-sticky-hide
          className="relative grid gap-6 lg:grid-cols-4"
        >
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-ink/10 lg:block"
            aria-hidden
          />
          {processSteps.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.08}>
              <li className="card-surface relative p-6">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
