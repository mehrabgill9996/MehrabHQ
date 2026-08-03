"use client";

import Link from "next/link";
import {
  Globe,
  LayoutTemplate,
  Mail,
  PencilLine,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/content";

const icons = {
  layout: LayoutTemplate,
  globe: Globe,
  shopping: ShoppingCart,
  edit: PencilLine,
  mail: Mail,
  refresh: RefreshCw,
} as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 pb-32 lg:py-24 lg:pb-36">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="What I can build for you"
            description="From a simple landing page to a full online store — clear options, modern tech, and results that help your business grow."
          />
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <FadeIn key={service.slug} delay={index * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                >
                  <Card className="flex h-full flex-col transition-shadow hover:shadow-lift" data-sticky-hide>
                    <div className="mb-4 inline-flex rounded-xl bg-[#DBEAFE] p-2.5 text-[#1D4ED8]">
                      <Icon size={22} aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 pb-2 text-sm leading-relaxed text-ink-muted">
                      {service.description}
                    </p>
                    <span className="mt-auto text-sm font-medium text-[#2563EB]">
                      Learn more →
                    </span>
                  </Card>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
