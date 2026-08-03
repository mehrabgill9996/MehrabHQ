import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content";

export const runtime = "edge";
export const alt = `${siteConfig.name} — Custom websites for small businesses`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #0B1220 0%, #1E3A8A 55%, #2563EB 100%)",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#FFFFFF",
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#DBEAFE",
              color: "#1D4ED8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            MHQ
          </div>
          {siteConfig.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 920,
            }}
          >
            Custom websites that turn visitors into customers
          </div>
          <div
            style={{
              color: "#BFDBFE",
              fontSize: 28,
              lineHeight: 1.35,
              maxWidth: 820,
            }}
          >
            Landing pages, business sites &amp; e-commerce for Ontario small
            businesses — fast turnaround, fair pricing.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#DBEAFE",
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          mehrabhq.com
        </div>
      </div>
    ),
    { ...size },
  );
}
