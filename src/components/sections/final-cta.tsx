import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-[var(--color-primary)] py-24 md:py-32"
    >
      {/* decorative glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--color-action)] opacity-10 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2
          id="final-cta-heading"
          className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          Ready to stop chasing work?
        </h2>
        <p className="mt-5 text-lg text-white/75 md:text-xl">
          Book a free 30-minute lead audit. No pitch — you leave with a plan
          even if you don&rsquo;t hire us.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/audit">
            <Button variant="action" size="lg">
              Book your free audit
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center gap-2 text-white underline-offset-4 hover:underline"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span>
              or call{" "}
              <span className="tabular-nums font-semibold">
                {siteConfig.contact.phoneDisplay}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
