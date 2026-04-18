import Link from "next/link";
import { ArrowRight, TrendingUp, Target, Monitor, Bot } from "lucide-react";

const services = [
  {
    slug: "seo",
    icon: TrendingUp,
    title: "Local SEO for Tradies",
    benefit: "Rank #1 in Google Maps when locals search your trade.",
    outcomes: ["Show up in the map pack", "Rank for 'near me' searches", "More calls from Google Business"],
  },
  {
    slug: "google-ads",
    icon: Target,
    title: "Google Ads That Pay Back",
    benefit: "Get leads in 48 hours. Scale what works, kill what doesn't.",
    outcomes: ["Call-only campaigns", "Service-area targeting", "No wasted click spend"],
  },
  {
    slug: "websites",
    icon: Monitor,
    title: "Tradie Websites That Convert",
    benefit: "Fast, mobile-first, built to turn visitors into booked jobs.",
    outcomes: ["Loads in under 2 seconds", "Click-to-call everywhere", "Quote forms that actually work"],
  },
  {
    slug: "ai-automation",
    icon: Bot,
    title: "AI Lead Follow-Up",
    benefit: "Never miss a lead again. AI qualifies and books them while you're on the tools.",
    outcomes: ["Instant SMS response", "Qualifies before you call", "Syncs to your calendar"],
  },
];

export function ServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-[var(--color-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
              What we build for you
            </p>
            <h2
              id="services-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
            >
              Four systems. One goal — more booked jobs.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-action)]"
          >
            See all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map(({ slug, icon: Icon, title, benefit, outcomes }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="group flex flex-col rounded-xl border border-[var(--color-border)] bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)]/5 ring-1 ring-inset ring-[var(--color-primary)]/10"
                aria-hidden="true"
              >
                <Icon className="h-6 w-6 text-[var(--color-primary)]" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-[var(--color-primary)]">
                {title}
              </h3>
              <p className="mt-2 text-[var(--color-muted-foreground)]">
                {benefit}
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-[var(--color-secondary)]">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-action)]"
                    />
                    {o}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-action)]">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
