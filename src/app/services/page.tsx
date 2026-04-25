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
  Database,
  Zap,
  TrendingUp,
  Target,
  Monitor,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

// =====================================================================
// METADATA — page-level SEO
// =====================================================================

export const metadata: Metadata = {
  title: "Marketing Services for Tradies — Local SEO, Google Ads, Websites & AI",
  description:
    "Done-for-you marketing services for Australian tradies. Local SEO, Google Ads, lead-generating websites, and AI follow-up. Book more jobs — without word of mouth.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Marketing Services for Tradies | ClickSmith",
    description:
      "Local SEO, Google Ads, lead-generating websites, and AI follow-up for Aussie tradies. Book more jobs — without word of mouth.",
    url: `${siteConfig.url}/services`,
    type: "website",
  },
};

// =====================================================================
// CONTENT
// =====================================================================

const painPoints = [
  "Phone's been quiet for weeks and you don't know why",
  "Posting job photos but nobody is calling",
  "Tried Facebook ads, burned the cash, never again",
  "Watched the competition get booked while you sat waiting",
];

const services = [
  {
    slug: "seo",
    icon: TrendingUp,
    title: "Local SEO for Tradies",
    benefit:
      "Rank #1 in Google Maps when locals search your trade. Map pack in 90 days.",
    outcomes: [
      "Show up in the map pack for '[trade] near me'",
      "Optimised Google Business Profile + reviews engine",
      "Local citations + NAP consistency across the web",
      "Suburb-level service pages for every area you cover",
    ],
    forWho: "Best for tradies whose customers Google their trade.",
  },
  {
    slug: "google-ads",
    icon: Target,
    title: "Google Ads That Pay Back",
    benefit:
      "Get leads in 48 hours. Scale what works. Kill what doesn't. No wasted clicks.",
    outcomes: [
      "Call-only campaigns for emergency trades",
      "Service-area + suburb targeting",
      "Negative keywords list specific to tradies",
      "Weekly review: cost-per-job, not cost-per-click",
    ],
    forWho: "Best for emergency trades + anyone who needs leads this week.",
  },
  {
    slug: "websites",
    icon: Monitor,
    title: "Tradie Websites That Convert",
    benefit:
      "Fast, mobile-first, built to turn visitors into booked jobs — not just look pretty.",
    outcomes: [
      "Loads in under 2 seconds (Core Web Vitals all green)",
      "Click-to-call + tap-to-message everywhere",
      "Quote forms that actually work on a phone",
      "Designed for the AI search era — schema, FAQs, structured content",
    ],
    forWho: "Best for tradies whose website is over 3 years old or built in WordPress.",
  },
  {
    slug: "ai-automation",
    icon: Bot,
    title: "AI Lead Follow-Up",
    benefit:
      "Never miss a lead again. AI qualifies and books them while you're on the tools.",
    outcomes: [
      "Instant SMS response to every form fill",
      "AI chatbot pre-qualifies before you get involved",
      "Auto-quote follow-ups at 48 hrs, 7 days, 14 days",
      "Syncs to your calendar — booked while you're on a job",
    ],
    forWho: "Best for tradies losing 30%+ of leads to slow follow-up.",
  },
];

const differentiators = [
  {
    icon: Sparkles,
    title: "Built for the AI era",
    body: "Most agencies are still selling 2018 playbooks. We use 2026 tools — AI follow-ups, AI chatbots, AI-drafted content. The work gets done faster, cheaper, better.",
  },
  {
    icon: Zap,
    title: "Productized + done-for-you",
    body: "Buy a $49 playbook and run it yourself. Or hand it to us. Same systems, three ways to engage. No high-pressure consult call required.",
  },
  {
    icon: Database,
    title: "Data-first decisions",
    body: "Every channel measured, every dollar tracked. If a channel isn't producing in 90 days, we kill it. No vanity metrics. One number we care about: booked jobs.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Free Diary Audit",
    desc: "30-min review of your current marketing. We find what's leaking.",
  },
  {
    step: "2",
    title: "Strategy",
    desc: "Custom plan based on your trade, location, and where leads come from now.",
  },
  {
    step: "3",
    title: "Build + Launch",
    desc: "We set up the AI stack, launch campaigns, automate the boring stuff.",
  },
  {
    step: "4",
    title: "Measure + Scale",
    desc: "Weekly reviews. Monthly optimisation. Compounding results, not promises.",
  },
];

const testimonials = [
  {
    name: "Jake M.",
    trade: "Sparky",
    suburb: "Wollongong NSW",
    quote:
      "Phone hadn't rung properly in months. ClickSmith fixed our GBP, ran one ad campaign, and we booked 14 jobs in 6 weeks.",
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

const faqs = [
  {
    q: "What's actually included in your services?",
    a: "Local SEO + Google Business Profile, Google Ads management, lead-generating websites, and AI follow-up automation. Most tradies use a combination — we recommend the right mix based on your trade and goals during the free audit.",
  },
  {
    q: "How much does it cost?",
    a: "Most tradies invest $2–4k/month with us for done-for-you marketing. That's less than one missed job for most trades. We build a custom plan in the free audit — you'll know the exact number before anything's signed. Prefer DIY? Playbooks start at $49.",
  },
  {
    q: "Am I locked in?",
    a: "No. Month-to-month. If we're not making your phone ring, you leave — and you keep your website, ad accounts, and Google Business Profile. We don't hold your marketing hostage.",
  },
  {
    q: "How long until I see leads?",
    a: "Google Ads can bring leads in 48 hours. Local SEO builds over 3–6 months but pays back for years. We usually run both — fast wins while the long-term plays compound.",
  },
  {
    q: "How is this different from hipages, Airtasker, or ServiceSeeking?",
    a: "Directories sell the same lead to 5 tradies — you race to the bottom on price. We build YOUR marketing on YOUR website, bringing YOU exclusive leads. Once it's running, you don't pay per lead.",
  },
  {
    q: "What trades do you work with?",
    a: "If your customers search Google to find someone like you — yes. Plumbers, sparkies, builders, painters, landscapers, HVAC, carpenters, tilers, roofers, handymen, solar installers, concreters, glaziers. 30+ trades and counting.",
  },
];

// =====================================================================
// JSON-LD
// =====================================================================

function ServicesJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteConfig.url}/services#service`,
      name: "Marketing Services for Tradies",
      provider: { "@id": `${siteConfig.url}/#business` },
      serviceType: "Marketing Service",
      areaServed: { "@type": "Country", name: "Australia" },
      description:
        "Done-for-you marketing services for Australian tradies — local SEO, Google Ads, lead-generating websites, and AI follow-up automation.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "AUD",
        lowPrice: "2000",
        highPrice: "4000",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteConfig.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteConfig.url}/services`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// =====================================================================
// PAGE
// =====================================================================

export default function ServicesPage() {
  return (
    <main id="main" className="flex-1">
      <ServicesJsonLd />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-[var(--color-background)] pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-action)]" />
              Marketing services for tradies
            </p>
            <h1 className="text-[2.5rem] leading-[1.05] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-[var(--color-primary)]">
              Marketing for tradies —{" "}
              <span className="text-[var(--color-action)]">
                run by AI, backed by data
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted-foreground)] md:text-xl">
              Done-for-you Local SEO, Google Ads, lead-generating websites, and
              AI follow-up. Book more jobs — without relying on word of mouth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/audit">
                <Button variant="action" size="lg">
                  Book free audit
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/playbooks">
                <Button variant="secondary" size="lg">
                  Or grab a playbook first
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section
        aria-label="Trust signals"
        className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-6"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-[var(--color-secondary)]">
            <div className="flex items-center gap-2">
              <Star
                className="h-4 w-4 fill-[var(--color-action)] text-[var(--color-action)]"
                aria-hidden="true"
              />
              <span className="font-semibold">5.0 Google rating</span>
            </div>
            <span className="text-[var(--color-border)]">•</span>
            <span>
              <strong className="text-[var(--color-primary)]">120+</strong>{" "}
              Australian tradies
            </span>
            <span className="text-[var(--color-border)]">•</span>
            <span>
              <strong className="text-[var(--color-primary)]">$2.4M+</strong> in
              jobs booked
            </span>
            <span className="text-[var(--color-border)]">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck
                className="h-4 w-4 text-[var(--color-action)]"
                aria-hidden="true"
              />
              <span className="font-semibold">10 leads in 60 days, guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PAIN */}
      <section
        aria-labelledby="pain-heading"
        className="bg-[var(--color-background)] py-20 md:py-24"
      >
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
            Sound familiar
          </p>
          <h2
            id="pain-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
          >
            If any of these land — you&apos;re in the right place.
          </h2>
          <ul className="mt-10 space-y-3 text-left">
            {painPoints.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-lg border border-[var(--color-border)] bg-white p-4 text-base text-[var(--color-primary)]"
              >
                <CheckCircle2
                  className="h-5 w-5 shrink-0 text-[var(--color-action)] mt-0.5"
                  aria-hidden="true"
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[var(--color-muted-foreground)]">
            You&apos;re not the problem. The system you&apos;re running is.{" "}
            <Link
              href="/playbooks"
              className="font-semibold text-[var(--color-primary)] underline-offset-2 hover:text-[var(--color-action)] hover:underline"
            >
              See how plumbers fix this →
            </Link>
          </p>
        </div>
      </section>

      {/* 4. THE 4 SERVICES */}
      <section
        aria-labelledby="services-heading"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
              What we build for you
            </p>
            <h2
              id="services-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
            >
              Four services. One AI-driven system.
            </h2>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              Each one stands alone. Together, they fill your diary on
              autopilot. Most tradies start with two and add the rest as they
              scale.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.slug}
                className="rounded-2xl border border-[var(--color-border)] bg-white p-7 transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-muted)] text-[var(--color-action)]">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[var(--color-primary)]">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                      {service.forWho}
                    </p>
                  </div>
                </div>

                <p className="mb-5 leading-relaxed text-[var(--color-secondary)]">
                  {service.benefit}
                </p>

                <ul className="mb-6 space-y-2">
                  {service.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-2 text-sm text-[var(--color-secondary)]"
                    >
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-[var(--color-action)] mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-action)]"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/audit">
              <Button variant="action" size="lg">
                Book your free audit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. THE WEDGE */}
      <section
        aria-labelledby="wedge-heading"
        className="bg-[var(--color-primary)] py-20 text-[var(--color-on-primary)] md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
              The difference
            </p>
            <h2
              id="wedge-heading"
              className="mt-3 text-3xl font-bold tracking-tight md:text-4xl"
            >
              What makes ClickSmith different.
            </h2>
            <p className="mt-4 text-white/70">
              Three things 14 other Aussie tradie agencies aren&apos;t doing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-action)]/15 text-[var(--color-action)]">
                  <d.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">{d.title}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section
        aria-labelledby="process-heading"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
              Our process
            </p>
            <h2
              id="process-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
            >
              How we work with tradies.
            </h2>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              Simple. Transparent. Focused on results. No long contracts.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {processSteps.map((s) => (
              <li
                key={s.step}
                className="rounded-2xl border border-[var(--color-border)] bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-bold text-[var(--color-on-primary)]">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold tracking-tight text-[var(--color-primary)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. PRICING */}
      <section
        aria-labelledby="pricing-heading"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
            Honest pricing
          </p>
          <h2
            id="pricing-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
          >
            $2,000 – $4,000 per month. No surprises.
          </h2>
          <p className="mt-4 text-[var(--color-muted-foreground)]">
            That&apos;s less than one missed job for most trades. Final number
            depends on which services you run, your service area, and ad spend.
            We build the exact plan in the free audit.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
                Done-for-you
              </p>
              <p className="mt-2 text-2xl font-bold text-[var(--color-primary)]">
                $2k–$4k <span className="text-base font-normal text-[var(--color-muted-foreground)]">/month</span>
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                We run the whole thing — campaigns, automation, content, reporting.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-action)] bg-white p-6 text-left ring-2 ring-[var(--color-action)]/20">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
                Most popular
              </p>
              <p className="mt-2 text-2xl font-bold text-[var(--color-primary)]">
                Free Audit <span className="text-base font-normal text-[var(--color-muted-foreground)]">first</span>
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                30 minutes. We tell you exactly what to fix and what it&apos;ll cost. No pitch.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
                DIY
              </p>
              <p className="mt-2 text-2xl font-bold text-[var(--color-primary)]">
                from $49
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                Buy a playbook. Same systems, written step-by-step, run it yourself.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/audit">
              <Button variant="action" size="lg">
                Book my free audit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. GUARANTEE BANNER */}
      <section
        aria-label="Performance guarantee"
        className="bg-[var(--color-action)] py-12 text-[var(--color-on-action)]"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-4">
            <ShieldCheck className="h-12 w-12 shrink-0" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-bold tracking-tight">
                10 qualified leads in 60 days. Or we work for free.
              </h3>
              <p className="mt-1 text-sm text-white/90">
                No fine print. No 90-minute exit calls. We only succeed when you do.
              </p>
            </div>
          </div>
          <Link href="/audit">
            <Button variant="secondary" size="lg" className="!border-white !text-white !bg-transparent hover:!bg-white hover:!text-[var(--color-action)]">
              Book my audit
            </Button>
          </Link>
        </div>
      </section>

      {/* 9. SOCIAL PROOF */}
      <section
        aria-labelledby="proof-heading"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
              What tradies say
            </p>
            <h2
              id="proof-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
            >
              Real tradies. Real numbers.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-[var(--color-border)] bg-white p-6"
              >
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[var(--color-action)] text-[var(--color-action)]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-[var(--color-primary)] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-[var(--color-border)] pt-4">
                  <div className="font-semibold text-[var(--color-primary)]">
                    {t.name}
                  </div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">
                    {t.trade} · {t.suburb}
                  </div>
                  <div className="mt-2 inline-block rounded-full bg-[var(--color-action)]/10 px-3 py-1 text-xs font-bold text-[var(--color-action-strong)]">
                    {t.result}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section
        aria-labelledby="services-faq-heading"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
              Common questions
            </p>
            <h2
              id="services-faq-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
            >
              Tradie marketing services FAQ.
            </h2>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              Got more? Book a free audit and ask us directly.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-[var(--color-border)] bg-white shadow-sm transition-shadow open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[var(--color-primary)] [&::-webkit-details-marker]:hidden">
                  <span className="flex-1">{item.q}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-[var(--color-muted-foreground)] transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-6 pb-5 text-[var(--color-muted-foreground)] leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section
        aria-labelledby="final-cta-heading"
        className="bg-[var(--color-primary)] py-20 text-[var(--color-on-primary)] md:py-28"
      >
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2
            id="final-cta-heading"
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            Ready to fill the diary?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
            Book a free 30-minute Diary Audit. We review your current marketing,
            find what&apos;s leaking, tell you exactly what to do next.{" "}
            <span className="text-white/60">
              No pitch. No 90-minute webinar. No sales team.
            </span>
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/audit">
              <Button variant="action" size="lg">
                Book my free audit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/playbooks">
              <Button variant="secondary" size="lg" className="!border-white !text-white !bg-transparent hover:!bg-white hover:!text-[var(--color-primary)]">
                Grab a playbook
              </Button>
            </Link>
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-white/60">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Or call us:{" "}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="font-semibold text-[var(--color-action)] hover:underline"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
