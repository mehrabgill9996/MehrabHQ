import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { portfolioCaseStudies, siteConfig } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return portfolioCaseStudies.map((project) => ({ slug: project.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = portfolioCaseStudies.find((item) => item.id === params.slug);
  if (!project) return {};

  return {
    title: project.headline,
    description: project.description,
    alternates: { canonical: `/work/${project.id}` },
    openGraph: {
      title: `${project.headline} | ${siteConfig.name}`,
      description: project.description,
      url: absoluteUrl(`/work/${project.id}`),
      type: "article",
      images: [{ url: project.image }],
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = portfolioCaseStudies.find((item) => item.id === params.slug);
  if (!project) notFound();

  return (
    <div className="pb-20 pt-12 lg:pt-16">
      <div className="container-page">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
            <Link href="/#work" className="hover:underline">
              Selected Work
            </Link>
          </p>
          <span className="mt-4 inline-flex rounded-full border border-[#2563EB]/20 bg-[#DBEAFE] px-3 py-1 text-xs font-semibold text-[#1D4ED8]">
            {project.category}
          </span>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {project.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {project.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <li
                key={item}
                className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg">
              Request a similar project
              <ArrowRight size={18} aria-hidden />
            </Button>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB] hover:text-[#1D4ED8]"
              >
                View live site
                <ExternalLink size={14} aria-hidden />
              </a>
            ) : null}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft">
            <div className="flex items-center gap-2 border-b border-ink/10 bg-sand-warm px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" aria-hidden />
              <div className="ml-2 h-5 flex-1 rounded-md bg-white" aria-hidden />
            </div>
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={project.imageWidth}
              height={project.imageHeight}
              unoptimized
              sizes="100vw"
              className="h-auto w-full"
              priority
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
