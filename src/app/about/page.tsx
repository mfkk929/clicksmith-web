import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  HeartHandshake,
  MapPin,
  Phone,
  Sparkles,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About ClickSmith | Marketing Built for Australian Tradies",
  description:
    "We're an Australian marketing team that only works with tradies and home services. Built by people who've seen the missed-call tax up close. Here's why we exist.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About ClickSmith | Marketing Built for Australian Tradies",
    description:
      "An Australian marketing team that only works with tradies. Why we exist, what we believe, who we are.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    type: "website",
  },
};

const beliefs = [
  {
    title: "Tradies hate marketing wank, and they're right to",
    body: "Most agencies pitch ROAS and funnels and synergies. Tradies want to know if the phone's ringing and the calendar's full. We translate marketing into both of those.",
  },
  {
    title: "If we can't measure it, we don't bill for it",
    body: "Every retainer ties back to leads, calls, and quotes. If the dashboard goes flat, we have an uncomfortable conversation — not an excuse.",
  },
  {
    title: "Local always beats national",
    body: "A Wollongong plumber and a Sydney plumber win work in different ways. We don't run one playbook over twelve trades. We run twelve.",
  },
  {
    title: "Honest beats clever",
    body: "We've turned down jobs because the maths didn't work. We've told tradies their existing GBP was fine. The audit was named the audit because that's what it is.",
  },
];

const principles = [
  {
    icon: Target,
    title: "Trade-specific from day one",
    body: "Same playbook for every trade is why most agencies don't last. We start with how your specific trade actually wins work and build the marketing around that.",
  },
  {
    icon: HeartHandshake,
    title: "No lock-in contracts",
    body: "Month-to-month, always. If we're not earning the retainer, you should be free to walk. That's the discipline that keeps us honest.",
  },
  {
    icon: Compass,
    title: "AU team, AU phone numbers, AU hours",
    body: "We don't outsource your account to writers in three time zones. The team that builds your strategy is the team that picks up the phone.",
  },
];

const stats = [
  { value: "12", label: "Trades we specialise in" },
  { value: "100%", label: "AU-based team" },
  { value: "$0", label: "Lock-in contracts" },
];

export default function AboutPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${siteConfig.url}/about`,
      },
    ],
  };

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: "sales",
      areaServed: "AU",
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
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
            <span className="text-[var(--color-primary)]">About</span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
              <Sparkles className="h-4 w-4" />
              About ClickSmith
            </div>
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-[1.05] tracking-tight text-[var(--color-primary)] md:text-5xl lg:text-6xl"
            >
              Marketing built by people who actually understand how tradies win work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted-foreground)] md:text-xl">
              We're a small Australian team. We only work with tradies and
              home services. We exist because the gap between what marketing
              agencies promise and what tradies actually need is enormous —
              and someone needs to fix it.
            </p>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 text-center md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold text-[var(--color-primary)] md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STORY */}
      <section
        aria-labelledby="story-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2
            id="story-title"
            className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
          >
            Why we exist
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--color-muted-foreground)]">
            <p>
              The first time we sat across from a tradie talking about
              marketing, he said two things in 30 seconds. "Last quarter I lost
              forty grand because I missed calls on Saturdays." And: "The last
              agency I hired never called me back after they got the deposit."
            </p>
            <p>
              Both problems were fixable in an afternoon. The missed-call
              recovery alone — an SMS auto-reply plus a 30-minute callback
              window — would have saved most of that forty grand. The agency
              problem was solved by ending the contract.
            </p>
            <p className="text-[var(--color-primary)]">
              We started ClickSmith because that conversation kept happening,
              with different tradies, in different trades, in different
              suburbs. The pain was always the same: <strong>the phone wasn't
              ringing, or it was, and nobody picked up</strong>. Marketing
              agencies were charging $5K a month and not solving either thing.
            </p>
            <p>
              We built a simple model. Trade-specific playbooks. AU-based
              team. Month-to-month retainers — no lock-ins. Honest audits
              first, work second. The retainer earns its keep every month or
              the operator should be free to walk.
            </p>
            <p>
              That's the whole story. We help tradies fill the calendar and
              answer the phone. The rest is just channels and execution.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section
        aria-labelledby="beliefs-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="beliefs-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              Four things we believe
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
              Pick the agency whose worldview matches yours. Here's ours, in
              plain English.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {beliefs.map((b, i) => (
              <div
                key={b.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-8"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-action)]/10 text-sm font-bold text-[var(--color-action)]">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)]">
                  {b.title}
                </h3>
                <p className="mt-3 text-[var(--color-muted-foreground)]">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section
        aria-labelledby="principles-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="principles-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              How we work
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-action)]/10 text-[var(--color-action)]">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-primary)]">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section
        aria-labelledby="who-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <h2
                id="who-title"
                className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
              >
                Who we work with
              </h2>
              <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
                Twelve trades, all home-services adjacent, mostly in NSW with
                clients across AU. We're best fit for operators with crews of
                1-15 — past the side-hustle stage, not yet bringing marketing
                fully in-house.
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
            <ul className="grid grid-cols-2 gap-3">
              {[
                "Builders",
                "Solar Installers",
                "Pool Builders",
                "Renovators",
                "HVAC Contractors",
                "Roofers",
                "Plumbers",
                "Electricians",
                "Landscapers",
                "Concreters",
                "Painters",
                "Pest Control",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm font-semibold text-[var(--color-primary)]"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--color-action)]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section
        aria-labelledby="location-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
            <MapPin className="h-4 w-4" />
            NSW, Australia
          </div>
          <h2
            id="location-title"
            className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
          >
            Built in NSW. Working with tradies across Australia.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-muted-foreground)]">
            Our team is based in NSW. Our clients are in Sydney, Wollongong,
            the Illawarra, the Hunter, the South Coast, and increasingly
            across VIC and QLD. The marketing fundamentals are the same — only
            the local SEO and competitive landscape change.
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
            Want to see what we'd actually do for your business?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-on-primary)]/80">
            Book the free 30-minute audit. We pull up your numbers, tell you
            where the leakage is, hand you a 1-pager. No pitch on the call.
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
