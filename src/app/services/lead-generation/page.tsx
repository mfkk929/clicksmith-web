import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Phone,
  ShieldCheck,
  Star,
  Sparkles,
  Target,
  Users,
  Gift,
  Megaphone,
  Monitor,
  Bot,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

// =====================================================================
// METADATA — page-level SEO
// Targets: "lead generation for tradies", "tradie lead generation",
// "how to get more tradie leads"
// =====================================================================

export const metadata: Metadata = {
  title:
    "Lead Generation for Tradies — Booked Jobs, Not Wasted Clicks | ClickSmith",
  description:
    "Done-for-you lead generation for Australian tradies. We build the system that fills your calendar — Google, GBP, ads, AI follow-up — and measure cost-per-booked-job, not vanity metrics. No lock-in. Free Diary Audit.",
  alternates: {
    canonical: `${siteConfig.url}/services/lead-generation`,
  },
  openGraph: {
    title: "Lead Generation for Tradies | ClickSmith",
    description:
      "The lead engine for Australian tradies. Booked jobs, not wasted clicks. No lock-in.",
    url: `${siteConfig.url}/services/lead-generation`,
    siteName: siteConfig.name,
    type: "website",
  },
};

// =====================================================================
// CONTENT — copy lives here so devs can edit one block at a time
// =====================================================================

const heroProof = [
  { stat: "+$18,400", label: "Booked in 6 weeks · Sparky, Wollongong" },
  { stat: "11% → 32%", label: "Quote close rate · Plumber, Kiama" },
  { stat: "3 months", label: "Booked ahead · Solar, Shellharbour" },
];

const youveTried = [
  "Boosted a Facebook post. Got likes from your mum. No calls.",
  "Signed up to HiPages. Five other tradies got the same lead.",
  "Built a Wix site. Looks alright. Phone still quiet.",
  "Asked the last agency for results. Got a PDF of impressions.",
];

const pillars = [
  {
    step: "01",
    icon: Users,
    title: "Avatar",
    headline: "Get crystal clear on who actually pays you well.",
    body: "Most tradies say 'anyone with a house'. That's why their marketing converts at 0.5%. We narrow it to the exact customer type — postcode, property age, income bracket, problem urgency — so every dollar spent finds the right phone.",
    deliverables: [
      "1-page customer avatar built from your last 12 months of jobs",
      "Top 3 'won't-buy' avatars to actively filter out",
      "Postcode + suburb priority list for local targeting",
    ],
  },
  {
    step: "02",
    icon: Gift,
    title: "Magnet",
    headline: "Give them a reason to hand over their number.",
    body: "Cold leads don't book. Warm leads book at 8-12x the rate. We design a free download or tool that solves a real homeowner problem — pre-quote checklist, true-cost calculator, fault-finder guide — and use it to capture leads who aren't ready to call yet but will be in 30 days.",
    deliverables: [
      "1 trade-specific lead magnet (PDF or interactive tool)",
      "Landing page with form, copy, and 3 follow-up emails written",
      "Tracking on every step from view → download → enquiry",
    ],
  },
  {
    step: "03",
    icon: Megaphone,
    title: "Reach",
    headline: "Show up where they're already looking.",
    body: "When the aircon dies in a 38°C heatwave, top-of-Google wins. When a young couple is researching a reno, Houzz and Instagram win. We pick the 2-3 channels your trade actually wins on — and ignore the rest. No spray-and-pray. No 'we do everything'.",
    deliverables: [
      "Google Business Profile fully optimised + weekly content posts",
      "Local SEO foundation (suburb pages, citations, schema)",
      "Google Ads + LSA managed week-by-week (where it fits)",
      "Meta or Houzz campaigns where the trade demands it",
    ],
  },
  {
    step: "04",
    icon: Monitor,
    title: "Capture",
    headline: "A website that turns visitors into bookings — not bouncers.",
    body: "Most tradie sites convert at 0.5-1.5%. The good ones do 3-5%. The difference isn't design — it's: phone above the fold, real photos, quote forms that work on a phone, page-speed under 2 seconds. We build it that way or fix it that way.",
    deliverables: [
      "Click-to-call + tap-to-message everywhere",
      "Quote forms that work on a phone, not just desktop",
      "Real job photos (yours), not stock-photo plumbers",
      "Core Web Vitals all green (Google ranks faster sites higher)",
    ],
  },
  {
    step: "05",
    icon: Bot,
    title: "Convert",
    headline: "Catch every lead — even the ones you can't answer.",
    body: "Most tradies lose 30-50% of leads to slow follow-up. Ring goes unanswered while you're under a sink. Quote sits in the inbox until the customer's already booked someone else. We fix this with AI: instant SMS reply to every missed call, 48-hour auto-quote chase, AI chatbot that pre-qualifies before you get involved.",
    deliverables: [
      "Missed-call SMS auto-reply (recovers 30-50% of missed calls)",
      "Quote follow-up sequence at 48hr / 7-day / 14-day",
      "AI chatbot for after-hours enquiry handling",
      "Calendar booking sync — quotes booked while you're on the tools",
    ],
  },
];

const process = [
  {
    step: "1",
    title: "Free Diary Audit",
    desc: "30-minute review. We map exactly where your leads are leaking. No pitch.",
  },
  {
    step: "2",
    title: "Engine Build",
    desc: "We design the right mix for your trade and suburb. You approve before anything goes live.",
  },
  {
    step: "3",
    title: "Launch + Measure",
    desc: "Live within 2-3 weeks. Tracking on every channel from day one.",
  },
  {
    step: "4",
    title: "Scale + Kill",
    desc: "Weekly reviews. Double down on what books jobs. Kill what doesn't in 90 days.",
  },
];

const testimonials = [
  {
    name: "Jake M.",
    trade: "Sparky",
    suburb: "Wollongong NSW",
    quote:
      "Phone hadn't rung properly in months. ClickSmith fixed our GBP, ran one ad campaign, booked 14 jobs in 6 weeks.",
    result: "+$18,400 in 6 weeks",
  },
  {
    name: "Bec H.",
    trade: "Plumber",
    suburb: "Kiama NSW",
    quote:
      "Finally have a system. The AI follow-ups alone have closed quotes I used to lose. Worth every dollar.",
    result: "Close rate 11% → 32%",
  },
  {
    name: "Danny T.",
    trade: "Solar",
    suburb: "Shellharbour NSW",
    quote:
      "Was running my own ads for 2 years and getting nowhere. ClickSmith took over and within 60 days I was booked solid.",
    result: "Booked 3 months ahead",
  },
];

const includedAtAGlance = [
  "Google Business Profile management + weekly posts",
  "Local SEO foundation + suburb pages",
  "Google Ads or LSA management (where it fits your trade)",
  "Meta or Houzz where it earns its place",
  "Conversion-built website (or audit + fix of yours)",
  "Lead magnet design + landing page + email follow-up",
  "Missed-call SMS recovery + AI chatbot",
  "Weekly reporting on cost-per-booked-job",
];

const faqs = [
  {
    q: "How is this different from HiPages, ServiceSeeking or Oneflare?",
    a: "Directories sell the same lead to 5 tradies — you race to the bottom on price. We build YOUR funnel on YOUR website. Once it's running, you don't pay per lead. The leads belong to you.",
  },
  {
    q: "How much does it cost?",
    a: "Most tradies invest $2,000–$4,000/month with us for the full lead engine. That's less than one missed job a month for most trades. We build a custom plan in the free Diary Audit — you'll know the exact number before anything's signed. Prefer DIY? The Tradie Lead Engine playbook is $49.",
  },
  {
    q: "How long until I see leads?",
    a: "Google Ads can bring leads in 48 hours. Local SEO + GBP builds over 3-6 months but pays back for years. We usually run both — fast wins while the long-term plays compound.",
  },
  {
    q: "Am I locked in?",
    a: "No. Month-to-month. If we're not making your phone ring, you leave — and you keep your website, ad accounts, and Google Business Profile. We don't hold your marketing hostage.",
  },
  {
    q: "I tried Facebook ads and lost money. Will this be different?",
    a: "Probably yes — because Facebook isn't the right channel for most tradies. Emergency trades (plumber, sparky, locksmith) win on Google and LSA. Considered-purchase trades (builders, renovators, pool builders) win on Instagram, Houzz, and long-cycle email nurture. We pick the channels that match your trade. You don't run the experiment alone.",
  },
  {
    q: "What if my website is rubbish?",
    a: "We'll tell you in the audit. If it needs rebuilding, we can do that as part of the engine. If it just needs three fixes, we'll list the three fixes and you can hand them to anyone.",
  },
  {
    q: "Do I have to be on the South Coast?",
    a: "No. We're based in Gerringong but work with tradies across NSW and nationally. Local market knowledge isn't required — what matters is whether your trade and suburb have lead-gen potential, which we test in the audit.",
  },
];

export default function LeadGenerationPage() {
  // -------------------------------------------------------------------
  // Schema — Service + BreadcrumbList + FAQPage (AI-citation gold)
  // -------------------------------------------------------------------
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Lead Generation",
        item: `${siteConfig.url}/services/lead-generation`,
      },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Lead Generation for Tradies",
    serviceType: "Lead generation marketing for trade businesses",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
    },
    areaServed: { "@type": "Country", name: "Australia" },
    description:
      "Done-for-you lead generation for Australian tradies. Customer avatar clarity, lead magnets, multi-channel reach (Google, GBP, ads), conversion-built websites, and AI follow-up. Measured on cost-per-booked-job. No lock-in.",
    offers: {
      "@type": "Offer",
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "2000",
        priceCurrency: "AUD",
        unitText: "MONTH",
      },
      availability: "https://schema.org/InStock",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ------------------------------------------------------------ */}
      {/* HERO                                                          */}
      {/* ------------------------------------------------------------ */}
      <section
        aria-labelledby="hero-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 text-sm text-[var(--color-muted-foreground)]"
          >
            <Link href="/" className="hover:text-[var(--color-action)]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/services"
              className="hover:text-[var(--color-action)]"
            >
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--color-primary)]">Lead Generation</span>
          </nav>

          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
            {/* Left — copy */}
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-action)]" />
                Lead generation for tradies
              </p>
              <h1
                id="hero-title"
                className="text-[2.5rem] leading-[1.05] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-[var(--color-primary)]"
              >
                Booked jobs.
                <br />
                <span className="text-[var(--color-action)]">
                  Not wasted clicks.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted-foreground)] md:text-xl">
                We build the lead engine that fills your calendar — Google
                Business Profile, local SEO, ads, conversion-built websites and
                AI follow-up — measured on cost-per-booked-job. Not impressions.
                Not clicks. Booked jobs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/audit">
                  <Button variant="action" size="lg" className="w-full sm:w-auto">
                    Book my Free Diary Audit
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="/playbooks">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Or grab the $49 DIY playbook
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-sm text-[var(--color-muted-foreground)]">
                30-minute audit · No pitch · No lock-in · Built for Australian
                tradies
              </p>
            </div>

            {/* Right — proof bar */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
                <Star className="h-4 w-4 fill-[var(--color-action)] text-[var(--color-action)]" />
                Real numbers from real tradies
              </div>
              <div className="mt-6 grid gap-6">
                {heroProof.map((p) => (
                  <div
                    key={p.label}
                    className="border-b border-[var(--color-border)] pb-5 last:border-0 last:pb-0"
                  >
                    <p className="text-3xl font-bold tabular-nums text-[var(--color-primary)] md:text-4xl">
                      {p.stat}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                      {p.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* PROBLEM AGITATION                                             */}
      {/* ------------------------------------------------------------ */}
      <section
        aria-labelledby="problem-title"
        className="bg-[var(--color-muted)] py-20 md:py-24"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2
            id="problem-title"
            className="text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
          >
            You've already tried this:
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {youveTried.map((point) => (
              <li
                key={point}
                className="flex gap-3 rounded-xl bg-white p-5 text-[var(--color-foreground)]"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-destructive)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-lg text-[var(--color-secondary)]">
            None of those are wrong by themselves. They're wrong because nobody
            joined them up. A boosted post without a landing page leaks. A
            HiPages lead without follow-up dies. A website without a Google
            Business Profile feeding it sits empty. Lead generation isn't a
            channel. It's a system.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* THE 5-PILLAR ENGINE                                           */}
      {/* ------------------------------------------------------------ */}
      <section
        aria-labelledby="engine-title"
        className="bg-[var(--color-background)] py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-action)]">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              The ClickSmith Lead Engine
            </p>
            <h2
              id="engine-title"
              className="text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
            >
              Five pillars. Not five separate tools.
            </h2>
            <p className="mt-5 text-lg text-[var(--color-muted-foreground)]">
              Most tradies bolt one thing onto another and wonder why nothing
              compounds. The engine works because it's joined up — every pillar
              feeds the next.
            </p>
          </div>

          <div className="mt-16 space-y-8 md:space-y-12">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.step}
                  className="grid gap-6 rounded-2xl border border-[var(--color-border)] bg-white p-6 md:grid-cols-[auto_1fr] md:gap-10 md:p-10"
                >
                  {/* Step number + icon */}
                  <div className="flex items-start gap-4 md:flex-col md:items-center md:gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-action)]/10 md:h-20 md:w-20">
                      <Icon
                        className="h-7 w-7 text-[var(--color-action)] md:h-9 md:w-9"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-3xl font-bold tracking-tight text-[var(--color-action)] tabular-nums md:text-5xl">
                      {pillar.step}
                    </p>
                  </div>

                  {/* Body */}
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--color-primary)] md:text-3xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-[var(--color-secondary)]">
                      {pillar.headline}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-foreground)] md:text-lg">
                      {pillar.body}
                    </p>
                    <ul className="mt-6 grid gap-3 md:grid-cols-2">
                      {pillar.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex gap-2 text-sm text-[var(--color-foreground)] md:text-base"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-action)]"
                            aria-hidden="true"
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* PROCESS                                                       */}
      {/* ------------------------------------------------------------ */}
      <section
        aria-labelledby="process-title"
        className="bg-[var(--color-primary)] py-20 md:py-24 text-[var(--color-on-primary)]"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            id="process-title"
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            How we'd start with you
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Four steps from a quiet phone to a calendar that fills itself.
          </p>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {process.map((s) => (
              <li
                key={s.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-3xl font-bold text-[var(--color-action)] tabular-nums">
                  {s.step}
                </p>
                <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Link href="/audit">
              <Button variant="action" size="lg">
                Start with the Free Diary Audit
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* PROOF                                                         */}
      {/* ------------------------------------------------------------ */}
      <section
        aria-labelledby="proof-title"
        className="bg-[var(--color-background)] py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            id="proof-title"
            className="text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
          >
            What it looks like when it works
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8"
              >
                <div className="flex gap-1 text-[var(--color-action)]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-lg text-[var(--color-foreground)]">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-[var(--color-border)] pt-4">
                  <p className="font-semibold text-[var(--color-primary)]">
                    {t.name} · {t.trade}
                  </p>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    {t.suburb}
                  </p>
                  <p className="mt-3 inline-block rounded-full bg-[var(--color-action)]/10 px-3 py-1 text-sm font-semibold text-[var(--color-action-strong)]">
                    {t.result}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* WHAT'S INCLUDED                                               */}
      {/* ------------------------------------------------------------ */}
      <section
        aria-labelledby="included-title"
        className="bg-[var(--color-muted)] py-20 md:py-24"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <h2
                id="included-title"
                className="text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
              >
                What's in the engine
              </h2>
              <p className="mt-5 text-lg text-[var(--color-muted-foreground)]">
                Every pillar above, delivered for you. We never charge for
                channels we wouldn't run on our own marketing.
              </p>
              <div className="mt-8 flex items-center gap-3 rounded-xl bg-white p-4 text-sm">
                <ShieldCheck
                  className="h-6 w-6 shrink-0 text-[var(--color-success)]"
                  aria-hidden="true"
                />
                <span>
                  Month-to-month. Walk away any month — keep your website, ad
                  accounts, GBP, and data.
                </span>
              </div>
            </div>
            <ul className="grid gap-3">
              {includedAtAGlance.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-action)]"
                    aria-hidden="true"
                  />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* FAQ                                                           */}
      {/* ------------------------------------------------------------ */}
      <section
        aria-labelledby="faq-title"
        className="bg-[var(--color-background)] py-20 md:py-24"
      >
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2
            id="faq-title"
            className="text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
          >
            Straight answers
          </h2>
          <div className="mt-10 divide-y divide-[var(--color-border)]">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group py-5"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                  <span className="text-lg font-semibold text-[var(--color-primary)]">
                    {f.q}
                  </span>
                  <ChevronDown
                    className="mt-1 h-5 w-5 shrink-0 text-[var(--color-action)] transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 leading-relaxed text-[var(--color-muted-foreground)]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* FINAL CTA                                                     */}
      {/* ------------------------------------------------------------ */}
      <section
        aria-labelledby="final-cta-title"
        className="bg-[var(--color-primary)] py-20 md:py-28 text-[var(--color-on-primary)]"
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
            <Target className="h-3.5 w-3.5" aria-hidden="true" />
            One step, no commitment
          </p>
          <h2
            id="final-cta-title"
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            30 minutes. We tell you where the leakage is. You decide what to do
            about it.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            That's the Diary Audit. It's free. There's no pitch unless you ask
            for one. If we can't show you at least three fixable leaks, we'll
            stop the call early.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/audit">
              <Button variant="action" size="lg">
                Book my Free Diary Audit
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-2 text-white hover:text-[var(--color-action)]"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Or call {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* RELATED — internal linking for SEO                            */}
      {/* ------------------------------------------------------------ */}
      <section
        aria-labelledby="related-title"
        className="bg-[var(--color-background)] py-12 border-t border-[var(--color-border)]"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            id="related-title"
            className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]"
          >
            Lead generation, by trade
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "plumbers",
              "electricians",
              "builders",
              "painters",
              "landscapers",
              "hvac",
              "roofers",
              "carpenters",
              "tilers",
              "handyman",
            ].map((t) => (
              <Link
                key={t}
                href={`/services/lead-generation/${t}`}
                className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-secondary)] transition-colors hover:border-[var(--color-action)] hover:text-[var(--color-action)]"
              >
                Lead generation for {t}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-[var(--color-muted-foreground)]">
            Trade-specific lead engines coming next phase. Want yours
            prioritised?{" "}
            <Link
              href="/audit"
              className="font-semibold text-[var(--color-action)] hover:underline"
            >
              Book the Diary Audit.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
