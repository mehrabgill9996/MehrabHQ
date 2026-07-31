import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredProjects } from "@/lib/content";

export function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-24 py-20 pb-32 lg:py-24 lg:pb-36">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Recent Work"
            title="Featured Projects"
            description="Real builds for local businesses — dealerships, trades, and more."
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <FadeIn key={`${project.title}-${project.subtitle}`} delay={index * 0.08}>
              <article
                data-sticky-hide
                className="card-surface group overflow-hidden transition-shadow duration-300 hover:shadow-lift"
              >
                <div className="border-b border-ink/10 bg-sand-warm/80 px-3 py-2.5">
                  <div className="mb-2 flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden />
                    <span className="ml-2 truncate rounded-md bg-white px-2.5 py-1 text-[11px] text-ink-muted">
                      {project.title} · {project.subtitle}
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-ink/5">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    priority={index === 0}
                  />
                </div>

                <div className="border-t border-ink/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                    {project.category}
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold text-ink">
                    {project.title}
                    <span className="font-normal text-ink-muted">
                      {" "}
                      — {project.subtitle}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
