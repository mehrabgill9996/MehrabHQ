import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, techStack } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Mehrab — the designer and developer behind MehrabHQ, helping Ontario small businesses get modern, conversion-focused websites.",
};

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10767442.305948127!2d-95.32040568514148!3d48.786279273955856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x70f8425629621e09!2sOntario!5e0!3m2!1sen!2sca!4v1785533348376!5m2!1sen!2sca";

export default function AboutPage() {
  return (
    <div className="pb-20">
      <section
        className="py-16 lg:py-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 235, 0.16), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(26, 35, 54, 0.08), transparent)",
        }}
      >
        <div className="container-page grid items-center gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          <FadeIn>
            <div className="mx-auto aspect-square w-48 overflow-hidden rounded-3xl border border-ink/10 bg-sand-warm shadow-lift sm:w-56 lg:mx-0 lg:w-full">
              <Image
                src="/images/mehrab-profile.png"
                alt={`${siteConfig.owner}, founder of ${siteConfig.name}`}
                width={480}
                height={480}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
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
            <div className="card-surface p-7">
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
              eyebrow="Based in"
              title={`Serving small businesses across ${siteConfig.location}`}
              description="Local enough to understand your market — flexible enough to work with clients wherever you are."
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="card-surface overflow-hidden">
              <iframe
                src={MAP_EMBED_SRC}
                title={`Map of ${siteConfig.location}`}
                className="h-[280px] w-full border-0 sm:h-[360px] lg:h-[450px]"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
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
