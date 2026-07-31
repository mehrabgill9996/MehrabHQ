import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Social proof"
            title="Trusted by local businesses"
            description="Placeholder testimonials — swap these with real client quotes when ready. Each card is marked as editable."
          />
        </FadeIn>

        {/* TODO: replace placeholder logo slots with real client logos */}
        <FadeIn>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="flex h-12 w-28 items-center justify-center rounded-xl border border-dashed border-ink/15 bg-white text-xs font-medium text-ink-muted"
              >
                Logo {n}
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.08}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-ink/8 bg-white p-6 shadow-soft">
                {item.editable ? (
                  <span className="mb-3 w-fit rounded-md bg-sand-warm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
                    Editable placeholder
                  </span>
                ) : null}
                <p className="flex-1 text-sm leading-relaxed text-ink">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-5 border-t border-ink/8 pt-4">
                  <cite className="not-italic">
                    <span className="block text-sm font-semibold text-ink">
                      {item.name}
                    </span>
                    <span className="text-xs text-ink-muted">{item.role}</span>
                  </cite>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
