import { FadeIn } from "@/components/FadeIn";
import { trustSignals } from "@/lib/content";

export function TrustBar() {
  return (
    <section className="border-y border-ink/8 bg-white" aria-label="Trust signals">
      <div className="container-page py-6">
        <FadeIn>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustSignals.map((signal) => (
              <li
                key={signal}
                className="text-sm font-medium text-ink-muted"
              >
                {signal}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
