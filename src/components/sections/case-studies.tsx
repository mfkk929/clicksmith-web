import Link from "next/link";
import { ArrowRight, TrendingUp, PhoneCall, Sparkles } from "lucide-react";

// Card 1 reflects real Coastal Co solar numbers.
// Card 2 is intentionally an honest "open spot" CTA — we'd rather show one
// real case study than a wall of dressed-up ones while we're early.
const caseStudy = {
  slug: "coastal-solar-south-coast",
  trade: "Solar installer",
  suburb: "South Coast, NSW",
  headline: "$100k in booked jobs in 4 weeks",
  body: "SEO + Google Ads launched from scratch. Ranked page 1 for 'solar installer south coast' and 40+ local variations within the first month.",
  metrics: [
    { icon: TrendingUp, label: "Page 1 keywords", value: "0 → 43" },
    { icon: PhoneCall, label: "Calls per week", value: "2 → 19" },
  ],
};

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="bg-[var(--color-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
            Real numbers, no fluff
          </p>
          <h2
            id="case-studies-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
          >
            We&apos;re early. Here&apos;s the work so far.
          </h2>
          <p className="mt-3 text-[var(--color-muted-foreground)]">
            We&apos;d rather show you one real result than ten dressed-up ones. More are on the way as our first wave of clients hit their stride.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Card 1 — real client */}
          <article className="flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-primary)] to-[#1e293b] p-8 shadow-md">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-action)]">
              <span>{caseStudy.trade}</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span className="text-white/70">{caseStudy.suburb}</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white md:text-3xl">
              {caseStudy.headline}
            </h3>
            <p className="mt-4 text-white/75">{caseStudy.body}</p>

            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              {caseStudy.metrics.map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/60">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold tabular-nums text-[var(--color-action)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          {/* Card 2 — honest "open spot" CTA */}
          <article className="flex flex-col rounded-2xl border-2 border-dashed border-[var(--color-border)] bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-action)]">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Open spot</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-[var(--color-primary)] md:text-3xl">
              The next case study could be yours.
            </h3>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              We&apos;re picking the next handful of tradie businesses to install the full system with — marketing, AI follow-up and customer retention all wired together. If you want to be one of them, the audit is where we start.
            </p>
            <Link
              href="/audit"
              className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-action)]"
            >
              Apply for an audit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
