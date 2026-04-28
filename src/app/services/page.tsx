import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Phone,
  ShieldCheck,
  Sparkles,
  Database,
  Zap,
  Megaphone,
  Repeat,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

// =====================================================================
// METADATA
// =====================================================================

export const metadata: Metadata = {
  title: "Marketing & AI Systems for Australian Tradies | ClickSmith",
  description:
    "ClickSmith brings the work in, wins the lead, keeps the customer and runs the admin behind it. Marketing, AI follow-up, customer retention and ops — wired together for Australian tradies.",
  alternates: {
    canonical: siteConfig.url + "/services",
  },
  openGraph: {
    title: "Marketing & AI Systems for Australian Tradies | ClickSmith",
    description:
      "Marketing wired into AI follow-up, customer retention and smooth admin. The whole loop, built for Aussie tradies.",
    url: siteConfig.url + "/services",
    type: "website",
  },
};

// =====================================================================
// CONTENT
// =====================================================================

const painPoints = [
  "Phone's been quiet for weeks and you don't know why",
  "Phone rings, but it's all price-shoppers and tyre-kickers",
  "Leads landed in your inbox last week and you never got back to them",
  "Customers from last year? Gone. Never followed up.",
  "Quoting from the kitchen table at 10pm, again",
];

const services = [
  {
    icon: Megaphone,
    title: "Bring the right work in",
    benefit:
      "Local SEO, Google Ads and a website built to convert — tuned to attract the kind of jobs you actually want.",
    outcomes: [
      "Rank in the Google map pack for 'near me' searches",
      "Ads that pay back from week one (no wasted clicks)",
      "A site loaded fast, mobile-first, built to book jobs not just look pretty",
      "Suburb-level service pages for every patch you cover",
    ],
    forWho: "If your phone's quiet — or it's loud with the wrong jobs.",
  },
  {
    icon: Zap,
    title: "Win every lead",
    benefit:
      "AI replies in 60 seconds, qualifies the job, drafts the quote and chases until they say yes or no.",
    outcomes: [
      "Replies day or night, in your voice, from your inbox",
      "Same-day quotes — no more 10pm kitchen-table sessions",
      "Auto follow-up at 48 hrs / 7 days / 14 days",
      "Booked jobs straight to your calendar",
    ],
    forWho: "If you're losing leads to slow follow-up — or just losing track.",
  },
  {
    icon: Repeat,
    title: "Keep customers coming back",
    benefit:
      "Review chases, follow-ups and seasonal nudges so the customer you won today rings you again next year.",
    outcomes: [
      "Auto Google review request after every job",
      "Maintenance reminders that bring repeat work",
      "Seasonal campaigns to past customers (gutters before storm season, AC before summer)",
      "Referral loops that bring their mates in",
    ],
    forWho: "If you do the job and never speak to the customer again.",
  },
  {
    icon: Workflow,
    title: "Smooth out the admin",
    benefit:
      "Quotes, invoices, scheduling and follow-ups handled in the background while you're on the tools.",
    outcomes: [
      "Invoices chased automatically until paid",
      "Bookings without the back-and-forth",
      "One simple dashboard for jobs, leads and cash",
      "8–10 hours a week back, on average",
    ],
    forWho: "If admin is eating your evenings and weekends.",
  },
];

const differentiators = [
  {
    icon: Sparkles,
    title: "Built for the AI era",
    body: "Most agencies are still selling 2018 playbooks. We use 2026 tools — AI follow-ups, AI-drafted quotes, AI review chases. So the work gets done while you're up the ladder.",
  },
  {
    icon: Zap,
    title: "Whole machine, not just one part",
    body: "Marketing alone won't fix it if leads die in your inbox or customers vanish after one job. We bring the work, win it, keep it, and run the ops behind it. The whole loop, or nothing.",
  },
  {
    icon: Database,
    title: "Honest from minute one",
    body: "No fake \"5.0 ratings.\" No \"200+ tradies served.\" We're a startup. We say so. We earn the work month-to-month. If we're not paying for ourselves, you walk and keep the lot.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Free 30-min audit",
    desc: "We look at your marketing, your follow-up and your admin. Tell you exactly what's leaking.",
  },
  {
    step: "2",
    title: "Map the gaps",
    desc: "1-page plan. What's working, what's broken, what to fix first. Yours to keep, even if you don't hire us.",
  },
  {
    step: "3",
    title: "Install the system",
    desc: "Pick what you need — one part or the whole loop. We wire it into the tools you already use.",
  },
  {
    step: "4",
    title: "Earn it monthly",
    desc: "Weekly check-ins. Monthly reviews. Month-to-month, no lock-in. We keep the work by being worth it.",
  },
];

const faqs = [
  {
    q: "What's actually included?",
    a: "Marketing (Local SEO, Google Ads, website) — bringing the work in. AI lead follow-up — replies, quotes, chasing, booking. Customer retention — reviews, repeat work, referrals. Admin automation — invoices, scheduling, dashboards. Pick one or take the lot.",
  },
  {
    q: "Do I have to take everything?",
    a: "No. Pick what's broken. If your marketing's fine but leads die in your inbox, we just install the follow-up. If the work's flowing but admin is killing you, we just do that. We won't push you to buy bits you don't need.",
  },
  {
    q: "How much does it cost?",
    a: "Done-for-you setups generally sit between $2–4k/month depending on what you take. We work out the exact number in the free audit so you'll know before signing anything. Prefer to do it yourself? The playbooks are free while we're early.",
  },
  {
    q: "Am I locked in?",
    a: "No. Month-to-month. You own your website, ad accounts, Google Business Profile and every workflow we build. If we're not earning the retainer, you walk and keep the lot.",
  },
  {
    q: "What's the AI part — is it complicated?",
    a: "You don't use it. We install it, train it on your voice and your prices, and it runs inside the tools you already have (Gmail, ServiceM8, Tradify, Xero). Most clients never touch a new app — their week just gets quieter.",
  },
  {
    q: "How long until I see results?",
    a: "Google Ads can bring leads in 48 hours. SEO builds over 3–6 months but pays back for years. Admin/follow-up automation pays back the first week — most owners get 8–10 hours a week back inside the first month.",
  },
  {
    q: "How is this different from hipages, Airtasker, or ServiceSeeking?",
    a: "Directories sell the same lead to 5 tradies — you race to the bottom on price. We build YOUR marketing on YOUR website, bringing YOU exclusive leads. Once it's running, you don't pay per lead.",
  },
  {
    q: "What trades do you work with?",
    a: "If your customers Google to find someone like you — yes. Plumbers, sparkies, builders, painters, landscapers, HVAC, roofers, solar, concreters, pest control, and more. Each trade gets the system tuned to how its customers actually search and decide.",
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
      "@id": siteConfig.url + "/services#service",
      name: "Marketing & AI Systems for Tradies",
      provider: { "@id": siteConfig.url + "/#business" },
      serviceType: "Marketing & Business Automation",
      areaServed: { "@type": "Country", name: "Australia" },
      description:
        "Done-for-you marketing, AI lead follow-up, customer retention and admin automation for Australian tradies — the whole loop, wired together.",
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
          item: siteConfig.url + "/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: siteConfig.url + "/services",
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
              Marketing & AI systems for Australian tradies
            </p>
            <h1 className="text-[2.5rem] leading-[1.05] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-[var(--color-primary)]">
              We don&apos;t just bring leads.{" "}
              <span className="text-[var(--color-action)]">
                We win them, keep them, and run the ops behind it all.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted-foreground)] md:text-xl">
              Marketing, AI follow-up, customer retention and smooth admin —
              wired together as one running machine. So you book more jobs,
              keep more customers, and stay on top of what you actually want
              to be doing.
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
                  Or grab a free playbook
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
            <span className="font-semibold">Australian team</span>
            <span className="text-[var(--color-border)]">•</span>
            <span className="font-semibold">Immigrant founder</span>
            <span className="text-[var(--color-border)]">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck
                className="h-4 w-4 text-[var(--color-action)]"
                aria-hidden="true"
              />
              <span className="font-semibold">No lock-in contracts</span>
            </div>
            <span className="text-[var(--color-border)]">•</span>
            <span className="font-semibold">You own everything we build</span>
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
              href="/audit"
              className="font-semibold text-[var(--color-primary)] underline-offset-2 hover:text-[var(--color-action)] hover:underline"
            >
              Book a free audit and we&apos;ll show you what&apos;s leaking →
            </Link>
          </p>
        </div>
      </section>

      {/* 4. THE 4 PARTS */}
      <section
        aria-labelledby="services-heading"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
              The whole system
            </p>
            <h2
              id="services-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
            >
              Four parts. One running business.
            </h2>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              Each part stands alone. Wired together, they fill your diary,
              keep customers loyal and stop your evenings disappearing. Take
              all four, or just the bit that&apos;s broken.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
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

                <ul className="space-y-2">
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
              Three things every other agency you&apos;ve been pitched by
              isn&apos;t doing.
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
              How we work
            </p>
            <h2
              id="process-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
            >
              Four steps. No fluff.
            </h2>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              No 90-minute pitch calls. No 80-page strategy decks. No
              lock-ins.
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
            depends on which parts you take, your service area, and ad spend.
            We work out the exact plan in the free audit.
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
                We run the whole loop — marketing, follow-up, retention, admin. Or just the part you need.
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
                Free
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                Take the playbooks, run them yourself. Free while we&apos;re early.
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

      {/* 8. HONEST EARLY-DAYS BANNER */}
      <section
        aria-label="Honest early-days commitment"
        className="bg-[var(--color-action)] py-12 text-[var(--color-on-action)]"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-4">
            <ShieldCheck className="h-12 w-12 shrink-0" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-bold tracking-tight">
                Month-to-month. You own everything.
              </h3>
              <p className="mt-1 text-sm text-white/90">
                If we&apos;re not earning the retainer, you walk and keep
                every site, account, workflow and asset we built.
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

      {/* 9. EARLY-DAYS NOTE */}
      <section
        aria-labelledby="proof-heading"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action)]">
            Real numbers, no fluff
          </p>
          <h2
            id="proof-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl"
          >
            We&apos;re early. Here&apos;s the work so far.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
            We&apos;d rather show you one real result than ten dressed-up
            ones. Our first wave of clients are just starting to hit their
            stride — see the home page for the case study so far, and the
            next ones are coming as they&apos;re earned.
          </p>
          <div className="mt-8">
            <Link href="/#case-studies">
              <Button variant="secondary" size="lg">
                See the case study
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
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
              Tradie services FAQ.
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
            Ready to stop running the whole show on your own?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
            Book a free 30-minute audit. We pull up your numbers, show you
            where leads, customers and hours are leaking, and tell you
            exactly what it&apos;d take to plug each one.{" "}
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
                Grab a free playbook
              </Button>
            </Link>
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-white/60">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Or call us:{" "}
            <a
              href={"tel:" + siteConfig.contact.phone}
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
