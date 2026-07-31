"use client";

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
    <section id="services" className="scroll-mt-24 py-20 pb-28 lg:py-24 lg:pb-32">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="What I can build for you"
            description="From a simple landing page to a full online store — clear options, modern tech, and results that help your business grow."
          />
        </FadeIn>

        <div
          data-sticky-hide
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <FadeIn key={service.title} delay={index * 0.06}>
                <Card className="h-full">
                  <div className="mb-4 inline-flex rounded-xl bg-[#DBEAFE] p-2.5 text-[#1D4ED8]">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
