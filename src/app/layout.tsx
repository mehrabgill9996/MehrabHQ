import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import { siteConfig } from "@/lib/content";
import { organizationJsonLd, SITE_URL, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.name} | Custom Websites for Ontario Small Businesses`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "MehrabHQ builds custom websites for small businesses in Ontario — landing pages, business sites, and e-commerce with fast turnaround and fair pricing.",
  keywords: [
    "Ontario web design",
    "small business website",
    "custom website developer",
    "landing page design",
    "e-commerce website Ontario",
    "MehrabHQ",
  ],
  authors: [{ name: siteConfig.owner, url: SITE_URL }],
  creator: siteConfig.owner,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Custom Websites for Ontario Small Businesses`,
    description:
      "Custom websites that turn visitors into customers. Fast turnaround, transparent pricing, direct communication.",
    url: SITE_URL,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Custom Websites for Ontario Small Businesses`,
    description:
      "Custom websites that turn visitors into customers. Fast turnaround, transparent pricing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GSC_VERIFICATION ||
      "LkkAEaJ5dIX3Lj_EEoSFxMZsZiTDe1tA_xqKw6p001g",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-sand font-sans text-ink antialiased`}
      >
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Analytics />
        <Navbar />
        <main className="pb-28 md:pb-32">{children}</main>
        <Footer />
        <StickyQuoteButton />
      </body>
    </html>
  );
}
