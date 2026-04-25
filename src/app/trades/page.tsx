import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
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
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trades } from "@/lib/trades-data";
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

export const metadata: Metadata = {
  title: "Marketing for Every Trade in Australia | ClickSmith",
  description:
    "12 trades. 12 unique marketing playbooks. Built for how each trade actually wins work. AI-driven lead generation for builders, sparkies, plumbers, roofers and more.",
  alternates: { canonical: `${siteConfig.url}/trades` },
  openGraph: {
    title: "Marketing for Every Trade in Australia | ClickSmith",
    description:
      "12 trades. 12 unique marketing playbooks. Built for how each trade actually wins work.",
    url: `${siteConfig.url}/trades`,
    siteName: siteConfig.name,
    type: "website",
  },
};

const tradeFAQs = [
  {
    q: "Why does each trade need a different marketing approach?",
    a: "Because the buyer journey is different. A plumber wins on emergency Google rankings (5-minute decisions). A pool builder wins on Instagram drone reels (6-month dreams). A solar installer wins on 6-month nurture emails. One marketing playbook can't cover all three — and we don't try.",
  },
  {
    q: "Do you only work with trades?",
    a: "Trades and home services are our specialty. We've worked with adjacent industries (real estate, construction supply) but our deepest expertise is in the 12 trades listed on this page.",
  },
  {
    q: "Can you tailor your approach if my trade isn't on this list?",
    a: "Yes — book a free audit. We've quietly worked with carpenters, tilers, glaziers and more. The 12 listed are our deepest playbooks, but the methodology adapts.",
  },
  {
    q: "How long until I see results?",
    a: "Most clients see first qualified leads within 30 days. Our 60-day guarantee (10 leads or you don't pay the next month) is the floor, not the ceiling.",
  },
  {
    q: "What's the typical investment?",
    a: "Retainers run $2K–$4K/month depending on service area size and competitive intensity. No lock-ins, performance-guaranteed.",
  },
  {
    q: "Are you Australian-based?",
    a: "Yes — Australian team, Australian market knowledge. We don't outsource to overseas writers who don't understand Aussie buyer behaviour.",
  },
];

export default function TradesHubPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Trades",
        item: `${siteConfig.url}/trades`,
      },
    ],
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: trades.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteConfig.url}/trades/${t.slug}`,
      name: `Marketing for ${t.plural}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tradeFAQs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
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
            <span className="text-[var(--color-primary)]">Trades</span>
          </nav>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
            <Sparkles className="h-4 w-4" />
            12 Trade Playbooks
          </div>

          <h1
            id="hero-title"
            className="max-w-4xl text-4xl font-bold leading-tight text-[var(--color-primary)] md:text-6xl"
          >
            Marketing for every trade. Built for how each one wins work.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-[var(--color-muted-foreground)] md:text-xl">
            A plumber's customer journey isn't a pool builder's. A roofer's
            seasonal play isn't a renovator's. We don't run one playbook across
            12 trades — we run 12 different ones. Pick yours below.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/audit">
              <Button variant="action" size="lg">
                Book a free marketing audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg">
                Browse all services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 12 TRADES GRID ───────────────────────────────── */}
      <section
        aria-labelledby="trades-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="trades-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              Pick your trade
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
              Each playbook is tuned to the seasonal patterns, channel mix,
              buyer journey and revenue dynamics of that specific trade.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trades.map((t) => {
              const Icon = ICONS[t.icon] ?? Hammer;
              return (
                <Link
                  key={t.slug}
                  href={`/trades/${t.slug}`}
                  className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-8 transition hover:border-[var(--color-action)] hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-action)]/10 text-[var(--color-action)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-action)]">
                    {t.plural}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-[var(--color-muted-foreground)]">
                    {t.hero.h1}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-action)] group-hover:text-[var(--color-action-strong)]">
                    View the playbook
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="faq-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              Common questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {tradeFAQs.map((f, i) => (
              <details
                key={i}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
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

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section
        aria-labelledby="cta-title"
        className="bg-[var(--color-primary)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2
            id="cta-title"
            className="text-3xl font-bold text-[var(--color-on-primary)] md:text-5xl"
          >
            Not sure which playbook fits you?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-on-primary)]/80">
            Book a free 30-minute audit. We'll listen, look at your numbers,
            and tell you which trade playbook fits — or build a custom one
            from scratch.
          </p>
          <div className="mt-10">
            <Link href="/audit">
              <Button variant="action" size="lg">
                Book your free audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
