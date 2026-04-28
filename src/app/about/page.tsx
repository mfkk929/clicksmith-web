import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  title: "About ClickSmith | Marketing & AI Systems for Australian Tradies",
  description:
    "ClickSmith is an Australian startup helping tradies win in the AI era. Marketing wired into lead follow-up, customer retention and smooth admin — built by an operator, not a media buyer.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About ClickSmith | Marketing & AI Systems for Australian Tradies",
    description:
      "An Aussie startup helping tradies win in the AI era. Marketing, follow-up, retention and admin — wired together.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    type: "website",
  },
};

const beliefs = [
  {
    title: "Marketing alone doesn't move the needle",
    body: "Most agencies dump leads on you and walk off. If those leads die in your inbox or the customer never comes back, the marketing was a waste. We wire the marketing into your follow-up, your retention, your admin. The whole machine — or nothing.",
  },
  {
    title: "AI does the boring stuff. You do the trade.",
    body: "You shouldn't need to learn a single new app. We install the AI inside the tools you already use — your inbox, your quoting tool, your Xero. Then it runs in the background while you're up the ladder.",
  },
  {
    title: "Honest beats clever",
    body: "No fake \"5.0 Google ratings.\" No \"200+ tradies served.\" We're a startup and we say so. We earn the work month-to-month. If we're not paying for ourselves, you walk and keep everything we built.",
  },
  {
    title: "Each trade wins differently",
    body: "A plumber's customer journey isn't a pool builder's. A roofer's seasonal play isn't a renovator's. We tune the whole system — marketing, follow-up, retention — to how your trade actually wins, wins again, and gets referred.",
  },
];

const principles = [
  {
    icon: Target,
    title: "Built by an operator, not a media buyer",
    body: "I came up in business coaching for tradies — pricing, hiring, systems, profit. ClickSmith looks at the whole business, not just the ad spend. That's the difference.",
  },
  {
    icon: HeartHandshake,
    title: "No lock-in contracts",
    body: "Month-to-month, always. You own your website, your ad accounts, your Google profile, every workflow we build. If we're not earning the retainer, you walk and keep the lot.",
  },
  {
    icon: Compass,
    title: "AU team, AU tools, AU hours",
    body: "We don't outsource your account to writers in three time zones. The team that builds your system is the team that picks up the phone.",
  },
];

const stats = [
  { value: "1", label: "Founder, hands-on" },
  { value: "100%", label: "Built in Australia" },
  { value: "$0", label: "Lock-in contracts" },
];

const tradesList = [
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
    founder: {
      "@type": "Person",
      name: "Furqan Kabir",
      jobTitle: "Founder",
      worksFor: { "@type": "Organization", name: siteConfig.name },
      image: `${siteConfig.url}/team/furqan-about.jpg`,
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
              Built by an operator. For Australian tradies in the AI era.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted-foreground)] md:text-xl">
              I&apos;m Furqan — immigrant founder, ex-business coach for
              tradies. ClickSmith is what I wish those owners had: marketing
              wired into the rest of their business, with AI handling the
              boring stuff. So you book more work, keep more customers, and
              stop running the whole show on your own.
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

      {/* THE STORY + FOUNDER PORTRAIT */}
      <section
        aria-labelledby="story-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-start">
            <div>
              <h2
                id="story-title"
                className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
              >
                Why ClickSmith exists
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--color-muted-foreground)]">
                <p>
                  I came up in business coaching for Australian tradies. The
                  good ones, the burnt-out ones, the ones quietly going broke
                  while their phones rang off the hook.
                </p>
                <p>
                  The pattern was always the same. The owner was the
                  bottleneck. Admin was killing them. Quoting from the kitchen
                  table at 10pm. Customers from last year, never followed up.
                  Leads from this morning, missed because they were on a job.
                  And the agency they&apos;d hired six months ago — gone quiet
                  the day after the deposit cleared.
                </p>
                <p className="text-[var(--color-primary)]">
                  ClickSmith is what I wish those owners had:{" "}
                  <strong>
                    marketing, AI follow-up, customer retention and smooth
                    admin — wired together as one running machine
                  </strong>
                  . Most agencies sell you the front of the funnel and walk
                  off. We do the whole loop, or we don&apos;t take the work.
                </p>
                <p>
                  I&apos;m an immigrant. I built this in Australia, for
                  Australian tradies. There&apos;s me and a small team of
                  trusted hands — not a 200-person agency machine. We&apos;re
                  picking our first wave of clients carefully. We&apos;d
                  rather have one happy plumber than ten so-so ones.
                  We&apos;re new. We say so. We earn the work month-to-month,
                  no lock-ins, no fine print.
                </p>
                <p>
                  That&apos;s the whole story. We help tradies fill the
                  calendar, win the work, keep the customers, and get their
                  evenings back. The rest is execution.
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24">
              <figure className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <Image
                  src="/team/furqan-about.jpg"
                  alt="Furqan Kabir, founder of ClickSmith"
                  width={1170}
                  height={1184}
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="h-auto w-full object-cover"
                  priority={false}
                />
                <figcaption className="border-t border-[var(--color-border)] bg-[var(--color-background)] p-5">
                  <div className="font-display text-base font-bold text-[var(--color-primary)]">
                    Furqan Kabir
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                    Founder · ClickSmith
                  </div>
                </figcaption>
              </figure>
            </aside>
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
              Pick the team whose worldview matches yours. Here&apos;s ours, in
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
                clients across Australia. Best fit for owner-operators with
                crews of 1–15 — past the side-hustle stage, not yet bringing
                marketing fully in-house.
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
              {tradesList.map((t) => (
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
            Based in NSW. Working with tradies in Sydney, Wollongong, the
            Illawarra, the Hunter, the South Coast, and increasingly across
            VIC and QLD. The fundamentals are the same — only the local SEO
            and competitive landscape change.
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
            Want to see what the whole machine looks like for your business?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-on-primary)]/80">
            Book a free 30-min audit. We pull up your numbers, show you where
            leads, customers and hours are leaking — and exactly what
            it&apos;d take to plug each one. No pitch.
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
