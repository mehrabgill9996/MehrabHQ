import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

type BrandLogoProps = {
  /** Light navbar vs dark footer */
  variant?: "light" | "dark";
  className?: string;
  /** Hide the wordmark and show mark only */
  markOnly?: boolean;
};

export function BrandLogo({
  variant = "light",
  className = "",
  markOnly = false,
}: BrandLogoProps) {
  const textClass = variant === "dark" ? "text-white" : "text-ink";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-[2px] ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src={siteConfig.logo}
        alt=""
        width={319}
        height={129}
        className="h-[20px] w-auto shrink-0 object-contain"
        priority
      />
      {markOnly ? (
        <span className="sr-only">{siteConfig.name}</span>
      ) : (
        <span
          className={`text-xl font-semibold tracking-tight sm:text-[1.35rem] ${textClass}`}
        >
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
