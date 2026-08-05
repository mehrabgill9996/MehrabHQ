import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { navLinks, siteConfig } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/8 bg-ink text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <BrandLogo variant="dark" />
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/privacy"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail size={16} aria-hidden />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone size={16} aria-hidden />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <MessageCircle size={16} aria-hidden />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <ExternalLink size={16} aria-hidden />
                LinkedIn
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin size={16} aria-hidden />
              {siteConfig.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Custom websites for small businesses across {siteConfig.location}.</p>
        </div>
      </div>
    </footer>
  );
}
