import Link from "next/link";
import { ArrowRight, TrendingUp, PhoneCall } from "lucide-react";

// TODO: replace with real case studies + photos once CoastalCo data is packaged.
const caseStudies = [
  {
    slug: "coastal-solar-south-coast",
    trade: "Solar installer",
    suburb: "South Coast, NSW",
    headline: "$47k in booked jobs in 60 days",
    body: "SEO + Google Ads launched from scratch. Now ranking page 1 for 'solar installer south coast' and 40+ local variations.",
    metrics: [
      { icon: TrendingUp, label: "Page 1 keywords", value: "0 → 43" },
      { icon: PhoneCall, label: "Calls per week", value: "2 → 19" },
    ],
  },
  {
    slug: "electrician-sydney",
    trade: "Electrician",
    suburb: "Inner West Sydney",
    headline: "Booked jobs tripled in 90 days",
    body: "Google Business Profile overhaul + Google Ads targeted by service area. Went from 8 jobs a week to 24 — without taking on a second ute.",
    metrics: [
      { icon: TrendingUp, label: "Weekly jobs", value: "8 → 24" },
      { icon: PhoneCall, label: "Cost per lead", value: "$92 → $31" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="bg-[var(--color-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
              Proof in numbers
            </p>
            <h2
              id="case-studies-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
            >
              Real tradies. Real dollars booked.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-action)]"
          >
            All case studies
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <article
              key={cs.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-primary)] to-[#1e293b] p-8 shadow-md"
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-action)]">
                <span>{cs.trade}</span>
                <span aria-hidden="true" className="text-white/30">·</span>
                <span className="text-white/70">{cs.suburb}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white md:text-3xl">
                {cs.headline}
              </h3>
              <p className="mt-4 text-white/75">{cs.body}</p>

              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                {cs.metrics.map(({ icon: Icon, label, value }) => (
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

              <Link
                href={`/case-studies/${cs.slug}`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white transition-colors hover:text-[var(--color-action)]"
              >
                Read the full story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
