import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  Phone,
  Sparkles,
  Download,
  Lock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Marketing Playbooks for Australian Tradies | ClickSmith",
  description:
    "Step-by-step marketing playbooks built from what works in real Aussie tradie businesses. Lead generation, GBP, Google Ads, AI automation. Free download, no credit card.",
  alternates: { canonical: `${siteConfig.url}/playbooks` },
  openGraph: {
    title: "Free Marketing Playbooks for Australian Tradies | ClickSmith",
    description:
      "Step-by-step marketing playbooks for Aussie tradies. Free download.",
    url: `${siteConfig.url}/playbooks`,
    siteName: siteConfig.name,
    type: "website",
  },
};

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
    href: `mailto:${siteConfig.contact.email}?subject=Send%20me%20The%20Tradie%27s%20Lead%20Engine%20playbook`,
    cta: "Email me the playbook",
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
    href: `mailto:${siteConfig.contact.email}?subject=Send%20me%20the%20GBP%20Domination%20playbook`,
    cta: "Email me the playbook",
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
    href: `mailto:${siteConfig.contact.email}?subject=Send%20me%20the%20Google%20Ads%20%2B%20LSA%20playbook`,
    cta: "Email me the playbook",
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
    href: `mailto:${siteConfig.contact.email}?subject=Send%20me%20the%20AI%20%2B%20Automation%20playbook`,
    cta: "Email me the playbook",
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
            <span className="text-[var(--color-primary)]">Playbooks</span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
              <FileText className="h-4 w-4" />
              Free playbooks · No card required
            </div>
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-[1.05] tracking-tight text-[var(--color-primary)] md:text-5xl lg:text-6xl"
            >
              The marketing playbooks tradies actually use to fill the calendar.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted-foreground)] md:text-xl">
              Step-by-step PDFs built from what's working in real Aussie
              tradie businesses. No theory, no fluff — copy-paste scripts,
              checklists, and routines you can run this week.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--color-primary)]">
              {[
                "No credit card",
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
              Pick the one that solves the problem you're losing the most
              money to right now. Then ignore the others until you've shipped
              the first one.
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

                <a href={p.href} className="mt-6">
                  <Button variant="action" size="lg" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    {p.cta}
                  </Button>
                </a>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-[var(--color-muted-foreground)]">
            <Lock className="mb-0.5 mr-1 inline h-3.5 w-3.5" />
            We email the PDF directly. We don't share your email. Unsubscribe
            anytime.
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
              didn't work — and turn it into a step-by-step guide a different
              tradie can follow without us in the room.
            </p>
            <p>
              We update them when something changes. When Google rolls out a
              new GBP feature, we update the GBP playbook. When LSA pricing
              shifts, we update the Ads playbook. The PDF you download today
              is the same one we hand new clients on day one.
            </p>
            <p className="text-[var(--color-primary)]">
              <strong>Why give them away?</strong> The best clients are the
              ones who've already tried to do it themselves and run into the
              ceiling. The playbooks help good operators get further alone —
              and when they hit the ceiling, they know who to call.
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
                Mention "playbook" on your free audit call and we'll send the
                playbook tailored to your trade before the call.
              </p>
              <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
                You'll get more from the 30 minutes if you've already read the
                fundamentals.
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
            Free 30-minute call. We pull up your numbers, tell you what's
            costing you the most leads, and email you the playbook tailored
            to your trade. No pitch on the call.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/audit">
              <Button variant="action" size="lg">
                Book my free audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href={`mailto:${siteConfig.contact.email}?subject=Playbook%20question`}>
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
