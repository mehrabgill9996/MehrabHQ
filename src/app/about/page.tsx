import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, techStack } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Mehrab — the designer and developer behind MehrabHQ, helping Ontario small businesses get modern, conversion-focused websites.",
};

export default function AboutPage() {
  return (
    <div className="pb-20">
      <section className="bg-hero-glow py-16 lg:py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          <FadeIn>
            {/* TODO: replace with real profile photo */}
            <div
              className="mx-auto aspect-square w-48 overflow-hidden rounded-3xl bg-gradient-to-br from-accent/30 via-ink/10 to-accent-soft shadow-lift sm:w-56 lg:mx-0 lg:w-full"
              role="img"
              aria-label={`${siteConfig.owner} profile photo placeholder`}
            >
              <div className="flex h-full w-full items-end justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.35),transparent_55%)] pb-6">
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-ink-muted">
                  Photo coming soon
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              About
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Hi, I&apos;m {siteConfig.owner} — the person behind {siteConfig.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              I help small business owners across {siteConfig.location} get
              websites that look professional, load fast, and actually bring in
              customers — without agency prices or weeks of waiting.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="The story"
              title="Why MehrabHQ exists"
              description="Too many local businesses are stuck with outdated sites — or no site at all — because web projects feel expensive, slow, and confusing. MehrabHQ is the opposite: clear communication, fair quotes, and modern builds that ship on time."
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-ink/8 bg-white p-7 shadow-soft">
              <h2 className="text-xl font-semibold text-ink">
                How I work with clients
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
                <li>
                  Plain English updates — you always know what&apos;s happening
                  and what&apos;s next.
                </li>
                <li>
                  You talk directly with me, not a project manager chain.
                </li>
                <li>
                  Feedback is welcome. Revisions are part of getting it right.
                </li>
                <li>
                  After launch, I help with hosting, domain, and practical next
                  steps.
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Toolkit"
              title="Tech that keeps your site reliable"
              description="Modern tools chosen for speed, flexibility, and easy updates — not buzzwords."
            />
          </FadeIn>
          <FadeIn delay={0.06}>
            <ul className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-ink/10 bg-sand px-4 py-2 text-sm font-medium text-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="container-page py-16 text-center">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            Let&apos;s talk about your project
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-ink-muted">
            Free quote, clear timeline, no pressure.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" size="lg">
              Get a Free Quote
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
