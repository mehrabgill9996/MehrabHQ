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
            description="A few spots for real project screenshots — swap these placeholders as soon as your portfolio assets are ready."
          />
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.06}>
              {/* TODO: replace placeholder frame with a next/image screenshot */}
              <article
                data-sticky-hide
                className="card-surface overflow-hidden"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-sand-warm via-white to-[#DBEAFE] px-4 text-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                      {project.category}
                    </p>
                    <p className="mt-2 text-sm font-medium text-ink-muted">
                      {project.note}
                    </p>
                  </div>
                </div>
                <div className="border-t border-ink/10 px-4 py-3">
                  <h3 className="text-sm font-semibold text-ink">
                    {project.title}
                  </h3>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
