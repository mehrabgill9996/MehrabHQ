"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { portfolioCaseStudies } from "@/lib/content";

export function PortfolioSection() {
  return (
    <section id="work" className="scroll-mt-24 py-20 pb-32 lg:py-24 lg:pb-36">
      <div className="container-page">
        <FadeIn>
          <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center">
            <span className="inline-flex rounded-full bg-[#DBEAFE] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
              Selected Work
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Recent Projects That Drive Results
            </h2>
            <p className="text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
              Real websites built for real businesses to capture leads and grow
              revenue.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-10">
          {portfolioCaseStudies.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.06}>
              <CaseStudyCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

type CaseStudy = (typeof portfolioCaseStudies)[number];

function CaseStudyCard({ project }: { project: CaseStudy }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isModalOpen]);

  return (
    <>
      <article
        data-sticky-hide
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
      >
        <div className="grid gap-8 p-6 lg:grid-cols-12 lg:gap-8 lg:p-8">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-ink/10 bg-sand shadow-soft">
              <div className="flex items-center gap-2 border-b border-ink/10 bg-sand-warm px-3 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" aria-hidden />
                <div className="ml-2 flex-1 truncate rounded-md bg-white px-3 py-1 text-center text-[11px] text-ink-muted">
                  {project.domain}
                </div>
              </div>

              <div className="hidden md:block">
                <HoverScrollPreview
                  src={project.image}
                  alt={project.imageAlt}
                  width={project.imageWidth}
                  height={project.imageHeight}
                />
              </div>

              <button
                type="button"
                className="relative block h-80 w-full overflow-hidden md:hidden"
                style={{ backgroundColor: "#F5F2EA" }}
                onClick={() => setIsModalOpen(true)}
                aria-label={`View full page preview of ${project.headline}`}
              >
                <Image
                  src={project.image}
                  alt=""
                  width={project.imageWidth}
                  height={project.imageHeight}
                  unoptimized
                  className="block h-auto w-full"
                  aria-hidden
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-4 pb-4 pt-10 text-center text-sm font-semibold text-white">
                  Tap to view full page
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5">
            <span className="inline-flex w-fit rounded-full border border-[#2563EB]/20 bg-[#DBEAFE] px-3 py-1 text-xs font-semibold text-[#1D4ED8]">
              {project.category}
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-[1.75rem]">
              {project.headline}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-ink/10 bg-sand px-3 py-1 text-xs font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" size="md">
                Request Similar Project
                <ArrowRight size={16} aria-hidden />
              </Button>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-2 py-2 text-sm font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
                >
                  View Live Demo
                  <ExternalLink size={14} aria-hidden />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-medium text-ink-muted">
                  Live demo coming soon
                </span>
              )}
            </div>
          </div>
        </div>
      </article>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`portfolio-modal-${project.id}`}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-ink/90 px-4 py-3 text-white backdrop-blur">
            <h4
              id={`portfolio-modal-${project.id}`}
              className="truncate pr-3 text-sm font-semibold"
            >
              {project.headline}
            </h4>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="rounded-lg p-2 transition-colors hover:bg-white/10"
              aria-label="Close full page preview"
            >
              <X size={20} />
            </button>
          </div>
          <div className="max-h-[85vh] overflow-y-auto px-3 py-4">
            <div className="mx-auto max-w-lg overflow-hidden rounded-lg bg-white">
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={project.imageWidth}
                height={project.imageHeight}
                unoptimized
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

/** Native overflow scroll — no CSS transform/bg-position, so no white halo */
function HoverScrollPreview({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function animateScroll(toBottom: boolean) {
    const el = ref.current;
    if (!el) return;
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

    const start = el.scrollTop;
    const end = toBottom ? el.scrollHeight - el.clientHeight : 0;
    const distance = end - start;
    if (Math.abs(distance) < 1) return;

    const duration = 16000;
    const t0 = performance.now();

    const easeInOutCubic = (x: number) =>
      x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      el.scrollTop = start + distance * easeInOutCubic(t);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }

  return (
    <div
      ref={ref}
      className="portfolio-scroll-preview h-80 w-full overflow-x-hidden overflow-y-auto sm:h-96"
      style={{ backgroundColor: "#F5F2EA" }}
      onMouseEnter={() => animateScroll(true)}
      onMouseLeave={() => animateScroll(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        draggable={false}
        className="pointer-events-none block h-auto w-full select-none"
      />
    </div>
  );
}
