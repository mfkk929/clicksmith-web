import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Playbooks for Australian Tradies | ClickSmith",
  description:
    "Step-by-step playbooks for marketing, AI lead follow-up, customer retention and admin — built for Australian tradies. Free while we're early. No email-wall, no upsell.",
  alternates: { canonical: siteConfig.url + "/playbooks" },
  openGraph: {
    title: "Free Playbooks for Australian Tradies | ClickSmith",
    description:
      "Step-by-step playbooks for tradies — marketing, AI follow-up, retention and admin. Free while we're early.",
    url: siteConfig.url + "/playbooks",
    siteName: siteConfig.name,
    type: "website",
  },
};

const playbooks = [
  {
    badge: "Start here",
    title: "The Whole-Loop Playbook",
    summary:
      "The master one. How tradies actually win in 2026 — bring the right work in, win the lead, keep the customer, get referred. Channel mix, follow-up cadence, and the missed-call recovery system.",
    inside: [
      "How tradies actually win work in 2026",
      "Picking your 2 best channels (and ignoring the rest)",
      "The 60-second lead reply system",
      "Missed-call SMS recovery (with copy-paste scripts)",
    ],
    pages: "60+ pages",
  },
  {
    title: "Google Business Profile Domination",
    summary:
      "The single biggest free lever in most trades. Categories, photos, posts, Q&A, review velocity — the full GBP routine. 30 minutes a week, compounds for years.",
    inside: [
      "Top-3 Local Pack ranking factors (in order)",
      "GBP weekly content calendar",
      "Review velocity system (5–10× in 6 months)",
      "Suburb-page strategy that compounds",
    ],
    pages: "32 pages",
  },
  {
    title: "Win Every Lead — AI Follow-Up",
    summary:
      "Stop losing leads to slow follow-up. The exact AI replies, quote drafts and chase cadence we install for paying clients — explained step-by-step, no tech background needed.",
    inside: [
      "60-second auto-reply (template + scripts)",
      "Same-day quote drafting workflow",
      "48hr / 7-day / 14-day chase cadence",
      "Booking sync without the back-and-forth",
    ],
    pages: "28 pages",
  },
  {
    title: "Keep Every Customer — Retention & Referrals",
    summary:
      "Most tradies do the job and never speak to that customer again. That's where the money goes. Reviews, repeat work, seasonal nudges, referral loops — the back half of the funnel nobody talks about.",
    inside: [
      "Auto Google review request after every job",
      "Maintenance reminders that bring repeat work",
      "Seasonal campaigns to your customer list",
      "Referral loops that bring their mates in",
    ],
    pages: "24 pages",
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
        item: siteConfig.url + "/playbooks",
      },
    ],
  };

  const requestUrl = (title: string) =>
    "mailto:" + siteConfig.contact.email + "?subject=" + encodeURIComponent("Free playbook request: " + title) + "&body=" + encodeURIComponent("Hi Furqan,\n\nCan you send me the \"" + title + "\" playbook?\n\nName:\nTrade:\nSuburb:\n\nThanks.");

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
              Free while we&apos;re early · No email-wall
            </div>
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-[1.05] tracking-tight text-[var(--color-primary)] md:text-5xl lg:text-6xl"
            >
              The playbooks tradies actually use to fill the calendar — free.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-muted-foreground)] md:text-xl">
              Step-by-step PDFs built from what&apos;s working in real Aussie
              tradie businesses. Marketing, AI follow-up, customer retention,
              admin — the whole loop. No theory, no fluff, no upsell. Free
              while we&apos;re building the brand.
            </p>

            <ul className="mx-auto mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[var(--color-primary)]">
              {[
                "Free PDF — no card needed",
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
              Start with the master playbook, then grab whichever one solves
              the problem you&apos;re losing the most money to right now.
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

                <div className="mt-6 flex flex-1 flex-col justify-end">
                  <div className="mb-4 flex items-baseline justify-between border-t border-[var(--color-border)] pt-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                      Cost
                    </span>
                    <span className="font-display text-3xl font-bold tabular-nums text-[var(--color-primary)]">
                      Free
                    </span>
                  </div>
                  <a href={requestUrl(p.title)}>
                    <Button variant="action" size="lg" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Email me this playbook
                    </Button>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-[var(--color-muted-foreground)]">
            Email goes straight to Furqan. He sends the PDF back within a day.
            No newsletter sign-up, no auto-drip sequence, no sales call.
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
              new GBP feature, we update the GBP playbook. When AI tools
              improve, we update the follow-up playbook. Grab one now and the
              future versions land in your inbox automatically.
            </p>
            <p className="text-[var(--color-primary)]">
              <strong>Why free?</strong> We&apos;re early. Building a brand
              beats charging $49 right now. If the playbook helps and you want
              it done for you, we&apos;re here. If you&apos;d rather run it
              yourself — that&apos;s genuinely fine.
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
                Each of our 12 trade pages has a tailored version with channel
                mix, seasonal calendar, and 90-day milestones built for that
                trade specifically.
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
                Book a free audit and we&apos;ll send the trade-specific
                playbook with it.
              </p>
              <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
                You&apos;ll get more from the 30 minutes if you&apos;ve
                already read the fundamentals — so we send the trade-tailored
                playbook ahead of the call.
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
            what&apos;s leaking, and show you exactly which playbook fits
            your situation. No pitch on the call.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/audit">
              <Button variant="action" size="lg">
                Book my free audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a
              href={"mailto:" + siteConfig.contact.email + "?subject=Playbook%20question"}
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
