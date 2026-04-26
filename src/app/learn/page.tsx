import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Mail,
  Search,
  Megaphone,
  Globe,
  Bot,
  Calendar,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learning Hub | Marketing Articles & Guides for Australian Tradies | ClickSmith",
  description:
    "Articles, how-tos, and field-tested guides on marketing for Australian tradies. Local SEO, Google Ads, websites, AI automation, seasonal calendars, and cost-per-lead benchmarks.",
  alternates: { canonical: `${siteConfig.url}/learn` },
  openGraph: {
    title: "Learning Hub | Marketing Articles for Australian Tradies | ClickSmith",
    description:
      "Articles and guides on marketing for Australian tradies. New content monthly.",
    url: `${siteConfig.url}/learn`,
    siteName: siteConfig.name,
    type: "website",
  },
};

type Category = {
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  blurb: string;
  topics: string[];
  count: number; // number of articles published in this category
};

const categories: Category[] = [
  {
    slug: "local-seo",
    icon: Search,
    title: "Local SEO & Google Business Profile",
    blurb:
      "How AU tradies rank in the Local Pack. Categories, photos, posts, reviews, suburb pages, and the weekly GBP routine that compounds month over month.",
    topics: ["GBP optimisation", "Suburb pages", "Review velocity", "NAP citations", "Schema markup"],
    count: 0,
  },
  {
    slug: "google-ads",
    icon: Megaphone,
    title: "Google Ads & Local Services Ads",
    blurb:
      "Search-intent campaigns that pay for themselves. Bidding mistakes that bleed budget, when to add LSA on top, and the negative-keyword discipline most tradies skip.",
    topics: ["Search vs awareness", "LSA setup", "Negative keywords", "Call tracking", "Dayparting"],
    count: 0,
  },
  {
    slug: "websites",
    icon: Globe,
    title: "Tradie websites that convert",
    blurb:
      "What separates a 1% website from a 3-5% website. Phone above the fold, real photos, one CTA per page, page-speed fundamentals, and trust signals that close the gap.",
    topics: ["Conversion fundamentals", "Page speed", "Trust signals", "Mobile-first design", "Forms"],
    count: 0,
  },
  {
    slug: "ai-automation",
    icon: Bot,
    title: "AI & automation for tradies",
    blurb:
      "Missed-call SMS recovery, quote-speed automation, recurring-treatment email engines, and AI-assisted review responses. Tools that pay for themselves in weeks.",
    topics: ["Missed-call SMS", "Quote-speed automation", "Email engines", "AI review responses", "CRM basics"],
    count: 0,
  },
  {
    slug: "seasonal",
    icon: Calendar,
    title: "Seasonal marketing calendars",
    blurb:
      "Every trade has peak/trough cycles — pre-summer, pre-winter, storm seasons, school holidays. When to push, when to prep, when to bank content for the next wave.",
    topics: ["Peak/trough cycles", "Pre-season campaigns", "Off-season content", "Storm response", "EOFY plays"],
    count: 0,
  },
  {
    slug: "benchmarks",
    icon: TrendingUp,
    title: "Cost-per-lead benchmarks",
    blurb:
      "Real AU numbers, by trade and channel. What you should be paying for plumbing leads, solar quotes, electrician calls — and how to know if you're being overcharged.",
    topics: ["CPL by trade", "CPC ranges", "Conversion rates", "ROAS targets", "Industry reports"],
    count: 0,
  },
];

const totalArticles = categories.reduce((sum, c) => sum + c.count, 0);

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

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ClickSmith Learning Hub",
    description: "Articles, how-tos, and guides on marketing for Australian tradies.",
    url: `${siteConfig.url}/learn`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }}
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
              The ClickSmith Learning Hub
            </div>
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-[1.05] tracking-tight text-[var(--color-primary)] md:text-5xl lg:text-6xl"
            >
              Marketing articles for Australian tradies. Plain English, real numbers.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted-foreground)] md:text-xl">
              Field-tested guides covering everything from the basics — Local
              SEO and Google Ads — to the advanced plays most tradies haven't
              picked up yet. Browse the categories below or jump into the
              latest articles.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[var(--color-muted-foreground)]">
              <span>{categories.length} categories</span>
              <span>·</span>
              <span>{totalArticles} articles</span>
              <span>·</span>
              <span>New content monthly</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        aria-labelledby="categories-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2
              id="categories-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              Browse by category
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
              Six topic areas covering most of what moves the needle for
              Australian tradies in 2026. Each category links to its archive
              once articles publish.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const Icon = c.icon;
              const hasArticles = c.count > 0;

              const Card = (
                <article className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 transition hover:border-[var(--color-action)]">
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-action)]/10 text-[var(--color-action)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold text-[var(--color-muted-foreground)]">
                      {hasArticles ? `${c.count} articles` : "Coming soon"}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[var(--color-primary)]">
                    {c.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-[var(--color-muted-foreground)]">
                    {c.blurb}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.topics.slice(0, 4).map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-xs text-[var(--color-muted-foreground)]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  {hasArticles ? (
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-action)]">
                      Read articles
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="mt-6 text-sm font-medium text-[var(--color-muted-foreground)]">
                      Articles publishing soon
                    </span>
                  )}
                </article>
              );

              return hasArticles ? (
                <Link key={c.slug} href={`/learn/${c.slug}`} className="block">
                  {Card}
                </Link>
              ) : (
                <div key={c.slug}>{Card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section
        aria-labelledby="latest-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2
            id="latest-title"
            className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
          >
            Latest articles
          </h2>

          {totalArticles === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-center">
              <BookOpen className="mx-auto h-8 w-8 text-[var(--color-muted-foreground)]" />
              <h3 className="mt-4 text-lg font-bold text-[var(--color-primary)]">
                Articles publishing soon
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-[var(--color-muted-foreground)]">
                The first articles are in editing. We publish when the piece
                is genuinely useful — not on a content calendar. Drop your
                email below to get the first ones in your inbox.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        aria-labelledby="newsletter-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Mail className="mx-auto h-10 w-10 text-[var(--color-action)]" />
          <h2
            id="newsletter-title"
            className="mt-6 text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
          >
            Get new articles in your inbox
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
            One email per article. No promos, no upsells, no auto-newsletters
            full of filler.
          </p>
          <p className="mt-6 text-base text-[var(--color-muted-foreground)]">
            Email{" "}
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Subscribe%20to%20Learning%20Hub&body=Add%20me%20to%20the%20articles%20list.`}
              className="font-semibold text-[var(--color-action)] hover:text-[var(--color-action-strong)]"
            >
              {siteConfig.contact.email}
            </a>{" "}
            with the subject "subscribe" and we'll add you to the list.
          </p>
        </div>
      </section>
    </>
  );
}
