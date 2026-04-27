import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  Sparkles,
  Download,
  Lock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketing Playbooks for Australian Tradies | ClickSmith",
  description:
    "Step-by-step marketing playbooks built from what works in real Aussie tradie businesses. Lead generation, GBP, Google Ads, AI automation. Pay once, lifetime updates, instant download.",
  alternates: { canonical: `${siteConfig.url}/playbooks` },
  openGraph: {
    title: "Marketing Playbooks for Australian Tradies | ClickSmith",
    description:
      "Step-by-step marketing playbooks for Aussie tradies. Pay once, instant PDF download.",
    url: `${siteConfig.url}/playbooks`,
    siteName: siteConfig.name,
    type: "website",
  },
};

/**
 * Playbook checkout links.
 * Replace each `buyUrl` below with a real Stripe Payment Link from your
 * Stripe dashboard (Products → Payment Links). Stripe will handle checkout
 * and you can configure the success page to deliver the PDF automatically.
 *
 * Until real links are set, you can also drop them into env vars:
 *   NEXT_PUBLIC_BUY_LEAD_ENGINE
 *   NEXT_PUBLIC_BUY_GBP
 *   NEXT_PUBLIC_BUY_ADS
 *   NEXT_PUBLIC_BUY_AI
 */
const playbooks = [
  {
    badge: "Most popular",
    title: "The Tradie's Lead Engine",
    summary:
      "The complete framework: customer avatar, channel mix, GBP optimisation, and the missed-call recovery system. The one to start with.",
    inside: [
      "How tradies actually win work in 2026",
      "Pick your 2 best channels (and ignore the rest)",
      "GBP weekly routine (30 minutes, locked-in compounding)",
      "Missed-call SMS recovery (with copy-paste scripts)",
    ],
    pages: "60+ pages",
    price: "$79",
    buyUrl:
      process.env.NEXT_PUBLIC_BUY_LEAD_ENGINE ??
      "https://buy.stripe.com/REPLACE_LEAD_ENGINE",
  },
  {
    title: "Google Business Profile Domination",
    summary:
      "The single biggest lever in most trades. Categories, photos, posts, Q&A, review velocity — the full GBP optimisation routine.",
    inside: [
      "Top-3 Local Pack ranking factors (in order)",
      "GBP weekly content calendar",
      "Review velocity system (5-10x in 6 months)",
      "Suburb-page strategy that compounds",
    ],
    pages: "32 pages",
    price: "$49",
    buyUrl:
      process.env.NEXT_PUBLIC_BUY_GBP ??
      "https://buy.stripe.com/REPLACE_GBP",
  },
  {
    title: "Google Ads + LSA for Tradies",
    summary:
      "Why Google Ads beats Facebook for emergency trades, how Local Services Ads change the maths, and the bidding mistakes to avoid.",
    inside: [
      "Search-intent vs awareness — when to use what",
      "LSA setup + qualification process",
      "Negative keyword discipline (saves 20-40%)",
      "Call tracking + dayparting fundamentals",
    ],
    pages: "24 pages",
    price: "$49",
    buyUrl:
      process.env.NEXT_PUBLIC_BUY_ADS ??
      "https://buy.stripe.com/REPLACE_ADS",
  },
  {
    title: "AI + Automation for Tradies",
    summary:
      "Missed-call SMS recovery, quote-speed automation, recurring-treatment email engines. The tools that pay for themselves in weeks.",
    inside: [
      "Missed-call SMS auto-reply (full setup guide)",
      "Quote-speed automation (under 5 min response)",
      "Recurring-treatment email engine",
      "AI-assisted review responses",
    ],
    pages: "28 pages",
    price: "$49",
    buyUrl:
      process.env.NEXT_PUBLIC_BUY_AI ??
      "https://buy.stripe.com/REPLACE_AI",
  },
];

export default function PlaybooksPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Playbooks",
        item: `${siteConfig.url}/playbooks`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* HERO — centered */}
      <section
        aria-labelledby="hero-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="mb-8 text-center text-sm text-[var(--color-muted-foreground)]">
            <Link href="/" className="hover:text-[var(--color-action)]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--color-primary)]">Playbooks</span>
          </nav>

          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
              <FileText className="h-4 w-4" />
              Pay once · Lifetime updates
            </div>
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-[1.05] tracking-tight text-[var(--color-primary)] md:text-5xl lg:text-6xl"
            >
              The marketing playbooks tradies actually use to fill the calendar.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-muted-foreground)] md:text-xl">
              Step-by-step PDFs built from what&apos;s working in real Aussie
              tradie businesses. No theory, no fluff — copy-paste scripts,
              checklists, and routines you can run this week.
            </p>

            <ul className="mx-auto mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[var(--color-primary)]">
              {[
                "Instant PDF download",
                "No follow-up sales calls",
                "Real screenshots + scripts",
                "Built for AU trades specifically",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PLAYBOOK CARDS */}
      <section
        aria-labelledby="library-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="library-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              The library
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
              Pick the one that solves the problem you&apos;re losing the most
              money to right now. Then ignore the others until you&apos;ve
              shipped the first one.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {playbooks.map((p) => (
              <article
                key={p.title}
                className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-8"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {p.badge && (
                      <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-action)] px-3 py-1 text-xs font-bold text-[var(--color-on-action)]">
                        <Star className="h-3 w-3" />
                        {p.badge}
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">
                      {p.title}
                    </h3>
                  </div>
                  <span className="flex-shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold text-[var(--color-muted-foreground)]">
                    {p.pages}
                  </span>
                </div>
                <p className="mt-3 text-[var(--color-muted-foreground)]">
                  {p.summary}
                </p>

                <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                    Inside
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--color-primary)]">
                    {p.inside.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price + buy CTA */}
                <div className="mt-6 flex flex-1 flex-col justify-end">
                  <div className="mb-4 flex items-baseline justify-between border-t border-[var(--color-border)] pt-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                      One-time
                    </span>
                    <span className="font-display text-3xl font-bold tabular-nums text-[var(--color-primary)]">
                      {p.price}
                      <span className="ml-1 text-sm font-medium text-[var(--color-muted-foreground)]">
                        AUD
                      </span>
                    </span>
                  </div>
                  <a href={p.buyUrl}>
                    <Button variant="action" size="lg" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Buy now — {p.price}
                    </Button>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-[var(--color-muted-foreground)]">
            <Lock className="mb-0.5 mr-1 inline h-3.5 w-3.5" />
            Secure checkout via Stripe. Instant PDF download after payment.
            Free lifetime updates.
          </p>
        </div>
      </section>

      {/* HOW WE BUILD THESE */}
      <section
        aria-labelledby="how-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2
            id="how-title"
            className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
          >
            How these playbooks are built
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--color-muted-foreground)]">
            <p>
              Every playbook starts with a real client problem. We document
              what we actually did to solve it — including the things that
              didn&apos;t work — and turn it into a step-by-step guide a
              different tradie can follow without us in the room.
            </p>
            <p>
              We update them when something changes. When Google rolls out a
              new GBP feature, we update the GBP playbook. When LSA pricing
              shifts, we update the Ads playbook. Buy once and every future
              version lands in your inbox automatically.
            </p>
            <p className="text-[var(--color-primary)]">
              <strong>Why charge for them?</strong> Free guides get
              skim-read and forgotten. Paying a small amount means you&apos;ll
              actually open the PDF, run the checklist, and get the result —
              and it lets us keep updating them forever instead of writing
              once and walking away.
            </p>
          </div>
        </div>
      </section>

      {/* TRADE-SPECIFIC POINTER */}
      <section
        aria-labelledby="trades-pointer-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2
                id="trades-pointer-title"
                className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
              >
                Want it specific to your trade?
              </h2>
              <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
                Each of our 12 trade pages has a tailored playbook with
                channel mix, seasonal calendar, and 90-day milestones built
                for that trade specifically.
              </p>
              <div className="mt-8">
                <Link href="/trades">
                  <Button variant="action" size="lg">
                    Browse trade playbooks
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-8">
              <div className="flex items-center gap-3 text-[var(--color-action)]">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Bonus
                </span>
              </div>
              <p className="mt-4 text-xl font-bold text-[var(--color-primary)]">
                Book a free audit and get 50% off the playbook tailored to
                your trade.
              </p>
              <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
                You&apos;ll get more from the 30 minutes if you&apos;ve
                already read the fundamentals — so we knock half off when you
                book.
              </p>
            </div>
          </div>
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
            Skip the reading. Get the audit.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-on-primary)]/80">
            Free 30-minute call. We pull up your numbers, tell you
            what&apos;s costing you the most leads, and show you exactly
            which playbook fits your situation. No pitch on the call.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/audit">
              <Button variant="action" size="lg">
                Book my free audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Playbook%20question`}
            >
              <Button variant="secondary" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Email us a question
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
