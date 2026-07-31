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
            <FadeIn key={project.title} delay={index * 0.08}>
              <article
                data-sticky-hide
                className="card-surface flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lift"
              >
                <div className="border-b border-ink/10 bg-sand-warm/80 px-3 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden />
                    <span className="ml-2 truncate rounded-md bg-white px-2.5 py-1 text-[11px] text-ink-muted">
                      {project.title}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3 bg-sand p-3">
                  {project.images.map((image, imageIndex) => (
                    <figure
                      key={image.src}
                      className="overflow-hidden rounded-xl border border-ink/8 bg-white"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[2/1]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-top"
                          priority={index === 0 && imageIndex === 0}
                        />
                      </div>
                      <figcaption className="border-t border-ink/8 px-3 py-2 text-center text-xs font-medium text-ink-muted">
                        {image.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>

                <div className="border-t border-ink/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                    {project.category}
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold text-ink">
                    {project.title}
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
