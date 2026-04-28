import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuditForm } from "@/components/forms/audit-form";
import { siteConfig } from "@/lib/site";

/**
 * Homepage hero.
 * Design rules: `design-system/pages/homepage.md` §1 Hero.
 * Right column is the primary lead-capture form (replaces the old photo slot).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)] pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left column — copy */}
          <div>
            {/* Eyebrow */}
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-action)]" />
              Marketing & AI systems for Australian tradies
            </p>

            {/* H1 — the LCP element */}
            <h1 className="text-[2.5rem] leading-[1.05] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-[var(--color-primary)]">
              We don&apos;t just bring you leads.{" "}
              <span className="text-[var(--color-action)]">
                We win them, keep them, and run the ops behind it all.
              </span>
            </h1>

            {/* Subhead */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted-foreground)] md:text-xl">
              Marketing, sales follow-up, customer retention and smooth admin —
              done by ClickSmith and AI working together. So you book more
              jobs, keep more customers, and stay on top of what you actually
              want to be doing.
            </p>

            {/* CTAs — on mobile, primary scrolls to the form further down.
                On desktop the form is visible beside this, so primary is softened. */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#audit-form" className="lg:hidden">
                <Button variant="action" size="lg" className="w-full sm:w-auto">
                  Book my free 30-min audit
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </a>
              <Link href="/services">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                  Show me what&apos;s included
                </Button>
              </Link>
            </div>

            {/* Trust line */}
            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--color-muted-foreground)]">
              <li className="inline-flex items-center gap-1.5">
                <ShieldCheck
                  className="h-4 w-4 text-[var(--color-success)]"
                  aria-hidden="true"
                />
                Australian team
              </li>
              <li className="inline-flex items-center gap-1.5">
                <span aria-hidden="true">·</span> Immigrant founder
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Sparkles
                  className="h-4 w-4 text-[var(--color-action)]"
                  aria-hidden="true"
                />
                Helping tradies win the AI era
              </li>
            </ul>

            {/* Phone fallback */}
            <p className="mt-5 text-sm text-[var(--color-muted-foreground)]">
              Prefer to talk?{" "}
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-1 font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="tabular-nums">
                  {siteConfig.contact.phoneDisplay}
                </span>
              </a>
            </p>
          </div>

          {/* Right column — audit form (primary lead-capture) */}
          <div className="relative">
            <AuditForm />
          </div>
        </div>
      </div>
    </section>
  );
}
