import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { services, siteConfig } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.description,
      url: absoluteUrl(`/services/${service.slug}`),
      type: "website",
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="pb-20 pt-12 lg:pt-16">
      <div className="container-page max-w-3xl">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
            <Link href="/#services" className="hover:underline">
              Services
            </Link>
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            {service.longDescription}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <ul className="mt-10 space-y-3 rounded-2xl border border-ink/8 bg-white p-6 shadow-soft">
            {service.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg">
              Request a free quote
              <ArrowRight size={18} aria-hidden />
            </Button>
            <Link
              href="/#work"
              className="text-sm font-medium text-[#2563EB] hover:text-[#1D4ED8]"
            >
              See recent work
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
