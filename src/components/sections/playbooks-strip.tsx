import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PlaybooksStrip() {
  return (
    <section
      aria-labelledby="playbooks-heading"
      className="bg-[var(--color-background)] py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e293b] via-[var(--color-primary)] to-[#0c1525] p-10 md:p-14">
          {/* decorative accent */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-action)] opacity-20 blur-3xl"
          />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-action)]">
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                For DIY tradies
              </span>
              <h2
                id="playbooks-heading"
                className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl"
              >
                Prefer to run marketing yourself?{" "}
                <span className="text-[var(--color-action)]">
                  Get the exact playbook we use.
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-lg text-white/75">
                Step-by-step systems for local SEO, Google Ads, and Google
                Business Profile — the same ones behind the case studies above.
                Own your marketing. Pay once.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Link href="/playbooks">
                <Button variant="action" size="lg">
                  Browse playbooks
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
              <p className="text-sm text-white/60">
                From <span className="tabular-nums font-semibold text-white">$49</span>. Lifetime updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
