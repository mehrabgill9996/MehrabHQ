import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
        404
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-ink-muted">
        That page doesn’t exist or may have moved. Head home or request a quote
        instead.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to home</Button>
        <Button href="/contact" variant="secondary">
          Get a free quote
        </Button>
      </div>
      <Link
        href="/#work"
        className="mt-6 text-sm font-medium text-[#2563EB] hover:text-[#1D4ED8]"
      >
        Browse selected work
      </Link>
    </div>
  );
}
