import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Hammer,
  Sun,
  Waves,
  Home,
  ThermometerSun,
  TreePine,
  Wrench,
  Zap,
  TreeDeciduous,
  Box,
  Paintbrush,
  Bug,
  TrendingUp,
  Calendar,
  Sparkles,
  Target,
  Phone,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  trades,
  getTradeBySlug,
  getAllTradeSlugs,
  getRelatedTrades,
  type Trade,
  type ChannelPriority,
} from "@/lib/trades-data";
import { siteConfig } from "@/lib/site";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Hammer,
  Sun,
  Waves,
  Home,
  ThermometerSun,
  TreePine,
  Wrench,
  Zap,
  TreeDeciduous,
  Box,
  Paintbrush,
  Bug,
};

// Priority badge styling
const PRIORITY_STYLES: Record<ChannelPriority, string> = {
  Primary:
    "bg-[var(--color-action)] text-[var(--color-on-action)] border-[var(--color-action)]",
  High: "bg-[var(--color-action)]/10 text-[var(--color-action)] border-[var(--color-action)]/30",
  Supporting:
    "bg-[var(--color-muted)] text-[var(--color-muted-foreground)] border-[var(--color-border)]",
};

// ─────────────────────────────────────────────────────────────
// STATIC PARAMS — generate all 12 trade pages at build time
// ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return getAllTradeSlugs().map((slug) => ({ slug }));
}

// ─────────────────────────────────────────────────────────────
// METADATA — per-trade title, description, OG, canonical
// ─────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trade = getTradeBySlug(slug);
  if (!trade) return { title: "Trade not found" };

  const url = `${siteConfig.url}/trades/${trade.slug}`;
  return {
    title: trade.metaTitle,
    description: trade.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: trade.metaTitle,
      description: trade.metaDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: trade.metaTitle,
      description: trade.metaDescription,
    },
  };
}

// ─────────────────────────────────────────────────────────────
// SCHEMA.ORG JSON-LD
// ─────────────────────────────────────────────────────────────
function buildSchema(trade: Trade) {
  const url = `${siteConfig.url}/trades/${trade.slug}`;

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Marketing for ${trade.plural}`,
    serviceType: `Marketing services for ${trade.plural} in Australia`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: { "@type": "Country", name: "Australia" },
    audience: { "@type": "BusinessAudience", audienceType: trade.plural },
    url,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Trades",
        item: `${siteConfig.url}/trades`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: trade.plural,
        item: url,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: trade.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return [service, breadcrumb, faq];
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default async function TradePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trade = getTradeBySlug(slug);
  if (!trade) notFound();

  const Icon = ICONS[trade.icon] ?? Hammer;
  const related = getRelatedTrades(trade.slug);
  const schemas = buildSchema(trade);

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* ── 1. HERO ──────────────────────────────────────── */}
      <section
        aria-labelledby="hero-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="mb-8 text-sm text-[var(--color-muted-foreground)]">
            <Link href="/" className="hover:text-[var(--color-action)]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/trades" className="hover:text-[var(--color-action)]">
              Trades
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--color-primary)]">{trade.plural}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
                <Icon className="h-4 w-4" />
                {trade.hero.eyebrow}
              </div>
              <h1
                id="hero-title"
                className="text-4xl font-bold leading-tight text-[var(--color-primary)] md:text-6xl"
              >
                {trade.hero.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-[var(--color-muted-foreground)] md:text-xl">
                {trade.hero.sub}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/audit">
                  <Button variant="action" size="lg">
                    Book a free marketing audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/playbooks">
                  <Button variant="secondary" size="lg">
                    Get the {trade.singular} playbook
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
                <div className="flex items-center gap-3 text-[var(--color-action)]">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Built for {trade.plural}
                  </span>
                </div>
                <p className="mt-4 text-2xl font-bold text-[var(--color-primary)]">
                  Trade-specific marketing — not a generic SEO retainer.
                </p>
                <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
                  Channel mix, content, and timing built around how {trade.plural.toLowerCase()} actually win work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STRIP ───────────────────────────────── */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 text-center md:grid-cols-4">
            <div>
              <div className="text-2xl font-bold text-[var(--color-primary)]">
                Built for {trade.plural}
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)]">
                Trade-specific strategy, not generic templates
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--color-primary)]">
                AU-based team
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)]">
                Local market knowledge, not offshore generic
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--color-primary)]">
                AI + data driven
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)]">
                Decisions backed by performance data, not gut-feel
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--color-primary)]">
                Monthly reporting
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)]">
                Transparent performance against agreed metrics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INTRO ─────────────────────────────────────── */}
      <section
        aria-labelledby="intro-title"
        className="bg-[var(--color-background)] py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2
            id="intro-title"
            className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
          >
            Why marketing for {trade.plural.toLowerCase()} is different
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted-foreground)]">
            {trade.intro}
          </p>
        </div>
      </section>

      {/* ── 4. PAIN POINTS ──────────────────────────────── */}
      <section
        aria-labelledby="pain-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
              <Target className="h-4 w-4" />
              The {trade.singular} Pain Points
            </div>
            <h2
              id="pain-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              The four problems killing your pipeline right now
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {trade.painPoints.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-8"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-action)]/10 text-lg font-bold text-[var(--color-action)]">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[var(--color-muted-foreground)]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CHANNEL MIX ───────────────────────────────── */}
      <section
        aria-labelledby="channels-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="channels-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              How {trade.plural.toLowerCase()} customers actually find you
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
              Channels ranked by typical priority for {trade.plural.toLowerCase()} — based on AU industry data and our own client work, not generic 'do everything' advice.
            </p>
          </div>

          <div className="mt-12 grid gap-4">
            {trade.channelMix.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold text-[var(--color-primary)]">
                        {c.channel}
                      </h3>
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${PRIORITY_STYLES[c.priority]}`}
                      >
                        {c.priority}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                      {c.why}
                    </p>
                    {c.benchmark && (
                      <div className="mt-3 flex items-start gap-2 rounded-lg bg-[var(--color-background)] p-3 text-xs text-[var(--color-muted-foreground)]">
                        <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--color-action)]" />
                        <span>
                          <strong className="text-[var(--color-primary)]">Benchmark:</strong>{" "}
                          {c.benchmark}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. RECOMMENDED SERVICES ─────────────────────── */}
      <section
        aria-labelledby="services-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="services-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              The 3 services that matter most for {trade.plural.toLowerCase()}
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
              We could sell you 12 services. For {trade.plural.toLowerCase()}, these three move the needle.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {trade.recommendedServices.map((s, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-8"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-action)] text-lg font-bold text-[var(--color-on-action)]">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)]">
                  {s.name}
                </h3>
                <p className="mt-3 flex-1 text-[var(--color-muted-foreground)]">
                  {s.why}
                </p>
                <Link
                  href={s.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-action)] hover:text-[var(--color-action-strong)]"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. WHAT GOOD LOOKS LIKE (was: Case study) ───── */}
      <section
        aria-labelledby="scenario-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 md:p-14">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
              <TrendingUp className="h-4 w-4" />
              What good looks like
            </div>
            <h2
              id="scenario-title"
              className="text-2xl font-bold text-[var(--color-primary)] md:text-3xl"
            >
              {trade.scenario.scenario}
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-6">
                <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                  Typical starting state
                </div>
                <p className="mt-2 text-base font-semibold text-[var(--color-primary)]">
                  {trade.scenario.before}
                </p>
              </div>
              <div className="rounded-xl border border-[var(--color-action)] bg-[var(--color-action)]/5 p-6">
                <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-action)]">
                  Realistic 90-day outcome
                </div>
                <p className="mt-2 text-base font-semibold text-[var(--color-primary)]">
                  {trade.scenario.after}
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] p-4">
              <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-muted-foreground)]" />
              <p className="text-sm text-[var(--color-muted-foreground)]">
                <strong className="text-[var(--color-primary)]">Honest note:</strong>{" "}
                {trade.scenario.caveat}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. SEASONAL PLAY ─────────────────────────────── */}
      <section
        aria-labelledby="seasonal-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
              <Calendar className="h-4 w-4" />
              The Seasonal Play
            </div>
            <h2
              id="seasonal-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              When to push, when to prep
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                Peak season
              </div>
              <p className="mt-3 text-base font-bold text-[var(--color-primary)]">
                {trade.seasonal.peak}
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                Trough season
              </div>
              <p className="mt-3 text-base font-bold text-[var(--color-primary)]">
                {trade.seasonal.trough}
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                Prep window
              </div>
              <p className="mt-3 text-base font-bold text-[var(--color-primary)]">
                {trade.seasonal.prepTime}
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-action)] bg-[var(--color-action)]/5 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-action)]">
                The play
              </div>
              <p className="mt-3 text-base font-bold text-[var(--color-primary)]">
                {trade.seasonal.play}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. PRICING ───────────────────────────────────── */}
      <section
        aria-labelledby="pricing-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="pricing-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              Pricing for {trade.plural.toLowerCase()}
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
              Monthly retainers. No lock-ins. Ad spend separate from retainer fees.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                Foundation
              </div>
              <div className="mt-2 text-4xl font-bold text-[var(--color-primary)]">
                $2,000
                <span className="text-base font-normal text-[var(--color-muted-foreground)]">
                  /mo
                </span>
              </div>
              <p className="mt-2 text-xs text-[var(--color-muted-foreground)]">
                Excludes ad spend
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted-foreground)]">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  GBP optimisation + local SEO
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  Review engine setup
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  Monthly performance report
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  On-page schema + technical SEO
                </li>
              </ul>
            </div>

            <div className="relative rounded-2xl border-2 border-[var(--color-action)] bg-[var(--color-surface)] p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-action)] px-3 py-1 text-xs font-semibold text-[var(--color-on-action)]">
                Most popular
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-action)]">
                Growth
              </div>
              <div className="mt-2 text-4xl font-bold text-[var(--color-primary)]">
                $3,500
                <span className="text-base font-normal text-[var(--color-muted-foreground)]">
                  /mo
                </span>
              </div>
              <p className="mt-2 text-xs text-[var(--color-muted-foreground)]">
                Excludes ad spend (typically $1K-$5K/mo additional)
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted-foreground)]">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  Everything in Foundation
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  Google Ads + LSA management
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  {trade.recommendedServices[1]?.name}
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  Conversion-tracked landing pages
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                Scale
              </div>
              <div className="mt-2 text-4xl font-bold text-[var(--color-primary)]">
                $5,000+
                <span className="text-base font-normal text-[var(--color-muted-foreground)]">
                  /mo
                </span>
              </div>
              <p className="mt-2 text-xs text-[var(--color-muted-foreground)]">
                Custom scope, ad spend separate
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted-foreground)]">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  Everything in Growth
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  {trade.recommendedServices[0]?.name}
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  Multi-suburb expansion
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  Dedicated account manager
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
            <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-muted-foreground)]" />
            <p className="text-sm text-[var(--color-muted-foreground)]">
              <strong className="text-[var(--color-primary)]">Pricing context:</strong>{" "}
              AU digital marketing retainers for trades typically run $1,500-$5,000/month for SEO + GBP, plus $800-$2,500/month for Google Ads management on top of ad spend (industry benchmarks 2026). Our tiers sit comfortably in those ranges with monthly performance reporting and no lock-in contracts.
            </p>
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ──────────────────────────────────────── */}
      <section
        aria-labelledby="faq-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="faq-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              {trade.singular}-specific FAQs
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
              The questions {trade.plural.toLowerCase()} actually ask us before they sign.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {trade.faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-[var(--color-primary)]">
                  {f.q}
                  <span className="ml-4 text-[var(--color-action)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[var(--color-muted-foreground)]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. RELATED TRADES ──────────────────────────── */}
      {related.length > 0 && (
        <section
          aria-labelledby="related-title"
          className="bg-[var(--color-background)] py-20"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2
              id="related-title"
              className="text-2xl font-bold text-[var(--color-primary)] md:text-3xl"
            >
              Related trades we work with
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => {
                const RIcon = ICONS[r.icon] ?? Hammer;
                return (
                  <Link
                    key={r.slug}
                    href={`/trades/${r.slug}`}
                    className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition hover:border-[var(--color-action)]"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-action)]/10 text-[var(--color-action)]">
                      <RIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-action)]">
                      Marketing for {r.plural}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-muted