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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  trades,
  getTradeBySlug,
  getAllTradeSlugs,
  getRelatedTrades,
  type Trade,
} from "@/lib/trades-data";
import { siteConfig } from "@/lib/site";

// Map of icon names → lucide components (server-safe)
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
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: trade.plural,
    },
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
      {/* JSON-LD Schema */}
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
                    The Promise
                  </span>
                </div>
                <p className="mt-4 text-2xl font-bold text-[var(--color-primary)]">
                  10 qualified leads in 60 days, or you don't pay the next
                  month.
                </p>
                <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
                  Built for {trade.plural.toLowerCase()}. No retainer lock-ins.
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
              <div className="text-3xl font-bold text-[var(--color-primary)]">
                Built for {trade.plural}
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)]">
                Trade-specific strategy, not generic templates
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-primary)]">
                10 leads / 60 days
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)]">
                Performance guarantee, in writing
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-primary)]">
                AI-driven
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)]">
                Data-backed, not gut-feel marketing
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-primary)]">
                Australian
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)]">
                Local team, local market knowledge
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
              The channel mix that works for {trade.plural.toLowerCase()},
              backed by real data — not generic 'do everything' advice.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <table className="w-full">
              <thead className="bg-[var(--color-surface)]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--color-primary)]">
                    Channel
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--color-primary)]">
                    % of leads
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--color-primary)]">
                    Why it matters
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)] bg-[var(--color-background)]">
                {trade.channelMix.map((c, i) => (
                  <tr key={i}>
                    <td className="px-6 py-5 align-top font-semibold text-[var(--color-primary)]">
                      {c.channel}
                    </td>
                    <td className="px-6 py-5 align-top">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-24 rounded-full bg-[var(--color-muted)]">
                          <div
                            className="h-2 rounded-full bg-[var(--color-action)]"
                            style={{ width: `${c.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-[var(--color-action)]">
                          {c.percentage}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 align-top text-sm text-[var(--color-muted-foreground)]">
                      {c.why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              We could sell you 12 services. For {trade.plural.toLowerCase()},
              these three move the needle.
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

      {/* ── 7. CASE STUDY ────────────────────────────────── */}
      <section
        aria-labelledby="case-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 md:p-14">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
              <TrendingUp className="h-4 w-4" />
              Case Snapshot
            </div>
            <h2
              id="case-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              {trade.caseStudy.name}
            </h2>
            <p className="text-base text-[var(--color-muted-foreground)]">
              {trade.caseStudy.suburb}
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-6">
                <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                  Before
                </div>
                <p className="mt-2 text-lg font-semibold text-[var(--color-primary)]">
                  {trade.caseStudy.before}
                </p>
              </div>
              <div className="rounded-xl border border-[var(--color-action)] bg-[var(--color-action)]/5 p-6">
                <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-action)]">
                  After
                </div>
                <p className="mt-2 text-lg font-semibold text-[var(--color-primary)]">
                  {trade.caseStudy.after}
                </p>
              </div>
            </div>

            <p className="mt-8 text-lg italic text-[var(--color-primary)]">
              "{trade.caseStudy.result}"
            </p>
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
              <p className="mt-3 text-lg font-bold text-[var(--color-primary)]">
                {trade.seasonal.peak}
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                Trough season
              </div>
              <p className="mt-3 text-lg font-bold text-[var(--color-primary)]">
                {trade.seasonal.trough}
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                Prep window
              </div>
              <p className="mt-3 text-lg font-bold text-[var(--color-primary)]">
                {trade.seasonal.prepTime}
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-action)] bg-[var(--color-action)]/5 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-action)]">
                The play
              </div>
              <p className="mt-3 text-lg font-bold text-[var(--color-primary)]">
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
              Simple monthly retainers. No lock-ins. Performance-guaranteed.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                Starter
              </div>
              <div className="mt-2 text-4xl font-bold text-[var(--color-primary)]">
                $2,000
                <span className="text-base font-normal text-[var(--color-muted-foreground)]">
                  /mo
                </span>
              </div>
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
                $3,000
                <span className="text-base font-normal text-[var(--color-muted-foreground)]">
                  /mo
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted-foreground)]">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  Everything in Starter
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  {trade.recommendedServices[0]?.name}
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  {trade.recommendedServices[1]?.name}
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  10 leads / 60 days guarantee
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                Scale
              </div>
              <div className="mt-2 text-4xl font-bold text-[var(--color-primary)]">
                $4,000+
                <span className="text-base font-normal text-[var(--color-muted-foreground)]">
                  /mo
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted-foreground)]">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  Everything in Growth
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  {trade.recommendedServices[2]?.name}
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
              The questions {trade.plural.toLowerCase()} actually ask us before
              they sign.
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
                    <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                      {r.metaDescription.split(".")[0]}.
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 12. FINAL CTA ────────────────────────────────── */}
      <section
        aria-labelledby="cta-title"
        className="bg-[var(--color-primary)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2
            id="cta-title"
            className="text-3xl font-bold text-[var(--color-on-primary)] md:text-5xl"
          >
            Ready to fill your {trade.singular.toLowerCase()} pipeline?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-on-primary)]/80">
            Book a free 30-minute marketing audit. We'll review your current
            funnel, GBP, ads and website — and tell you exactly where the
            leakage is. No pitch, no pressure.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/audit">
              <Button variant="action" size="lg">
                Book your free audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href={`tel:${siteConfig.contact.phone}`}>
              <Button variant="secondary" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Call {siteConfig.contact.phoneDisplay}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
