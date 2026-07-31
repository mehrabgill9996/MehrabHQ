import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import { siteConfig } from "@/lib/content";
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
  metadataBase: new URL("https://mehrabhq.com"),
  title: {
    default: `${siteConfig.name} | Custom Websites for Small Businesses`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "MehrabHQ builds custom websites for small businesses in Ontario — landing pages, business sites, and e-commerce with fast turnaround and fair pricing.",
  openGraph: {
    title: `${siteConfig.name} | Custom Websites for Small Businesses`,
    description:
      "Custom websites that turn visitors into customers. Fast turnaround, transparent pricing, direct communication.",
    url: "https://mehrabhq.com",
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
    // Placeholder OG image — replace public/og.svg with a designed PNG later
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Custom Websites for Small Businesses`,
    description:
      "Custom websites that turn visitors into customers. Fast turnaround, transparent pricing.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0D9488",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-sand font-sans text-ink antialiased`}
      >
        {/*
          Analytics placeholder — drop Google Analytics / Plausible here later:
          <Script src="..." strategy="afterInteractive" />
        */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyQuoteButton />
      </body>
    </html>
  );
}
