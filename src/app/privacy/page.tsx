import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects and uses information from this website.`,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description: `How ${siteConfig.name} collects and uses information from this website.`,
    url: absoluteUrl("/privacy"),
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <div className="pb-20 pt-12 lg:pt-16">
      <div className="container-page max-w-3xl">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
            Legal
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-ink-muted">
            Last updated: August 3, 2026
          </p>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="prose-mehrab mt-10 space-y-8 text-sm leading-relaxed text-ink-muted">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-ink">Overview</h2>
              <p>
                {siteConfig.name} (&quot;we&quot;, &quot;us&quot;) operates{" "}
                <Link href="/" className="text-[#2563EB] hover:underline">
                  mehrabhq.com
                </Link>
                . This policy explains what information we collect when you use
                the site or request a quote, and how we use it.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-ink">
                Information you provide
              </h2>
              <p>
                When you submit the contact or quote form, we collect the
                details you enter — typically your name, email address, business
                name, project type, budget range, and message. We use this
                information only to respond to your inquiry and discuss a
                potential project.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-ink">
                Form delivery
              </h2>
              <p>
                Quote form submissions are processed on our server and delivered
                by{" "}
                <a
                  href="https://resend.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:underline"
                >
                  Resend
                </a>
                {" "}
                so we can email you a confirmation and notify MehrabHQ about your
                inquiry. Their handling of data is governed by their own privacy
                policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-ink">Analytics</h2>
              <p>
                We use Google Analytics to understand how visitors use the site
                (for example, which pages are viewed). Google may set cookies or
                similar technologies and process usage data according to{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:underline"
                >
                  Google&apos;s Privacy Policy
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-ink">
                How we use information
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>To reply to quote requests and support messages</li>
                <li>To improve the website and our services</li>
                <li>To measure traffic and page performance</li>
              </ul>
              <p>
                We do not sell your personal information. We do not use form
                submissions for unrelated marketing lists.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-ink">Contact</h2>
              <p>
                Questions about this policy or your data:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#2563EB] hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
