import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free quote from MehrabHQ. Tell us about your project and get a clear estimate for your custom website.",
};

export default function ContactPage() {
  return (
    <div className="pb-20 pt-12 lg:pt-16">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
            Contact
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Get a free quote
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
            Share a few details about your business and what you need. I&apos;ll
            follow up with a clear next step — usually within one business day.
          </p>

          <ul className="mt-10 space-y-4 text-sm text-ink">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-3 transition-colors hover:text-[#2563EB]"
              >
                <span className="inline-flex rounded-xl bg-[#DBEAFE] p-2.5 text-[#1D4ED8]">
                  <Mail size={18} aria-hidden />
                </span>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 transition-colors hover:text-[#2563EB]"
              >
                <span className="inline-flex rounded-xl bg-[#DBEAFE] p-2.5 text-[#1D4ED8]">
                  <MessageCircle size={18} aria-hidden />
                </span>
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center gap-3 transition-colors hover:text-[#2563EB]"
              >
                <span className="inline-flex rounded-xl bg-[#DBEAFE] p-2.5 text-[#1D4ED8]">
                  <Phone size={18} aria-hidden />
                </span>
                Call Now — {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="inline-flex items-center gap-3">
              <span className="inline-flex rounded-xl bg-[#DBEAFE] p-2.5 text-[#1D4ED8]">
                <MapPin size={18} aria-hidden />
              </span>
              {siteConfig.location}
            </li>
          </ul>
        </FadeIn>

        <FadeIn delay={0.08}>
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
