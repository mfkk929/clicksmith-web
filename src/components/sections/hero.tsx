import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

/**
 * Homepage hero.
 * Design rules: `design-system/pages/homepage.md` §1 Hero.
 * One primary CTA (orange), one secondary (ghost). Never compete.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)] pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left column — copy */}
          <div>
            {/* Eyebrow */}
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-action)]" />
              Marketing for Australian tradies
            </p>

            {/* H1 — the LCP element; no image above it */}
            <h1 className="text-[2.5rem] leading-[1.05] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-[var(--color-primary)]">
              More tradie jobs on your calendar.{" "}
              <span className="text-[var(--color-action)]">
                Less time chasing them.
              </span>
            </h1>

            {/* Subhead */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted-foreground)] md:text-xl">
              Lead-generating websites, local SEO and Google Ads for
              tradespeople across NSW. Book more jobs — without relying on word
              of mouth.
            </p>

            {/* CTAs — one primary, one ghost. Never compete. */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/audit">
                <Button variant="action" size="lg" className="w-full sm:w-auto">
                  Get my free lead audit
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/playbooks" className="sm:ml-2">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                  Or grab the DIY playbook
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
                No lock-in contracts
              </li>
              <li className="inline-flex items-center gap-1.5">
                <span aria-hidden="true">·</span> Australian team
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Star
                  className="h-4 w-4 fill-[var(--color-warning)] text-[var(--color-warning)]"
                  aria-hidden="true"
                />
                <span className="tabular-nums">5.0</span> Google rating
              </li>
            </ul>

            {/* Mobile-friendly phone fallback */}
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

          {/* Right column — visual placeholder (replace with real tradie photo) */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-primary)] via-[#1e293b] to-[#0c1525] shadow-xl">
              {/* Decorative grid overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Glow accent */}
              <div
                aria-hidden="true"
                className="absolute -right-10 top-10 h-56 w-56 rounded-full bg-[var(--color-action)] opacity-30 blur-3xl"
              />

              {/* Mock "results" card — the kind of thing a real photo would show */}
              <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-action)]">
                  Last 30 days
                </p>
                <p className="mt-1.5 text-2xl font-bold text-white tabular-nums">
                  47 jobs booked
                </p>
                <p className="mt-1 text-sm text-white/70">
                  From local SEO + Google Ads
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-white/60">
                  <span>Plumber · Wollongong</span>
                  <span className="tabular-nums text-[var(--color-action)]">
                    +220% YoY
                  </span>
                </div>
              </div>

              {/* TODO: Replace whole card with <Image priority src="/hero/tradie-on-phone.jpg" ... /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
