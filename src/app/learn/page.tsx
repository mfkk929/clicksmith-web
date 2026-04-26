import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Mail,
  Phone,
  Sparkles,
  Wrench,
  Search,
  Megaphone,
  Globe,
  Bot,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learn | Marketing Guides for Australian Tradies | ClickSmith",
  description:
    "Free marketing guides, playbooks, and how-tos for Australian tradies. Real strategies, no fluff. Pick a topic and start with what's costing you the most leads right now.",
  alternates: { canonical: `${siteConfig.url}/learn` },
  openGraph: {
    title: "Learn | Marketing Guides for Australian Tradies | ClickSmith",
    description:
      "Free marketing guides for Australian tradies. Real strategies, no fluff.",
    url: `${siteConfig.url}/learn`,
    siteName: siteConfig.name,
    type: "website",
  },
};

const topics = [
  {
    icon: Search,
    title: "Local SEO + Google Business Profile",
    body: "Top-3 GBP rankings are the single biggest lever in most trades. Categories, photos, posts, review velocity — fix the gaps that quietly cost you calls.",
    href: "/services#seo",
    cta: "Read the SEO basics",
  },
  {
    icon: Megaphone,
    title: "Google Ads + Local Services Ads",
    body: "Why Google Ads beats Facebook for emergency trades, how LSA changes the maths, and the bidding mistakes that bleed budget.",
    href: "/services#paid-ads",
    cta: "Open the ads guide",
  },
  {
    icon: Globe,
    title: "Tradie websites that convert",
    body: "Phone above the fold. Real photos. One CTA per page. The five fixes that turn a 1% website into a 3-5% website.",
    href: "/services#websites",
    cta: "See the website checklist",
  },
  {
    icon: Bot,
    title: "AI + automation for tradies",
    body: "Missed-call SMS recovery, quote-speed automation, recurring-treatment email engines. The tools that pay for themselves in weeks.",
    href: "/services#automation",
    cta: "Explore automation",
  },
  {
    icon: Calendar,
    title: "Seasonal marketing calendars",
    body: "Every trade has peak/trough cycles. Pre-summer, pre-winter, storm season, school holidays — when to push, when to prep, when to bank content.",
    href: "/trades",
    cta: "View by trade",
  },
  {
    icon: TrendingUp,
    title: "Cost-per-lead benchmarks",
    body: "Real AU numbers, by trade. What you should be paying for plumbing leads, solar leads, electrician leads — and how to know if you're being overcharged.",
    href: "/trades",
    cta: "See the benchmarks",
  },
];

const playbookHighlights = [
  "How tradies actually win work in 2026",
  "The missed-call recovery system (with SMS scripts)",
  "GBP optimisation: the 30-minute weekly routine",
  "Quote-speed automation: from 4 hours to 4 minutes",
];

export default function LearnPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Learn",
        item: `${siteConfig.url}/learn`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* HERO */}
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
            <span className="text-[var(--color-primary)]">Learn</span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
              <BookOpen className="h-4 w-4" />
              The ClickSmith learning hub
            </div>
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-[1.05] tracking-tight text-[var(--color-primary)] md:text-5xl lg:text-6xl"
            >
              Marketing guides for tradies. No fluff. No funnels-and-synergies talk.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted-foreground)] md:text-xl">
              Pick the topic that's costing you the most leads right now. Most
              tradies fix one or two things and unlock 30-50% more booked
              jobs. We'll show you which two.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/playbooks">
                <Button variant="action" size="lg">
                  Get the playbooks
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/audit">
                <Button variant="secondary" size="lg">
                  Skip ahead — book a free audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TOPIC GRID */}
      <section
        aria-labelledby="topics-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="topics-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              Start with what's broken
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
              Six topics that cover most of what moves the needle for
              Australian tradies in 2026. Each one links to a deeper guide or
              the relevant section of our services.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 transition hover:border-[var(--color-action)]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-action)]/10 text-[var(--color-action)]">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-action)]">
                  {t.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-[var(--color-muted-foreground)]">
                  {t.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-action)]">
                  {t.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PLAYBOOK HIGHLIGHT */}
      <section
        aria-labelledby="playbook-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
                <Sparkles className="h-4 w-4" />
                Free playbooks
              </div>
              <h2
                id="playbook-title"
                className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
              >
                The ClickSmith playbooks
              </h2>
              <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
                Step-by-step guides built from what's working in real Aussie
                tradie businesses. Yours to download — no card, no follow-up
                sales call, just the playbook in your inbox.
              </p>
              <div className="mt-8">
                <Link href="/playbooks">
                  <Button variant="action" size="lg">
                    Browse all playbooks
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <ul className="space-y-3">
              {playbookHighlights.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                >
                  <Wrench className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  <span className="text-sm text-[var(--color-primary)]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TRADE-SPECIFIC */}
      <section
        aria-labelledby="trades-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <h2
            id="trades-title"
            className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
          >
            Want it specific to your trade?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-muted-foreground)]">
            12 trade-specific playbooks — channel mix, seasonal play, real
            cost-per-lead benchmarks, and what good looks like at 90 days.
          </p>
          <div className="mt-10">
            <Link href="/trades">
              <Button variant="action" size="lg">
                See trade playbooks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        aria-labelledby="newsletter-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Mail className="mx-auto h-10 w-10 text-[var(--color-action)]" />
          <h2
            id="newsletter-title"
            className="mt-6 text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
          >
            New guides land monthly
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
            Email{" "}
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Subscribe%20to%20ClickSmith%20updates`}
              className="font-semibold text-[var(--color-action)] hover:text-[var(--color-action-strong)]"
            >
              {siteConfig.contact.email}
            </a>{" "}
            with the subject "subscribe" and we'll add you to the list. No
            spam, no auto-newsletters, just new playbooks when they're ready.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        aria-labelledby="cta-title"
        className="bg-[var(--color-primary)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2
            id="cta-title"
            className="text-3xl font-bold text-[var(--color-on-primary)] md:text-5xl"
          >
            Reading is fine. Doing is better.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-on-primary)]/80">
            Book the free 30-minute audit and we'll skip the reading list —
            we'll just show you what's broken and what to fix this week.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/audit">
              <Button variant="action" size="lg">
                Book my free audit
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
