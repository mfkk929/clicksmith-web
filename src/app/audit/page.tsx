import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuditForm } from "@/components/forms/audit-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Marketing Audit for Tradies | ClickSmith",
  description:
    "Book a free 30-minute marketing audit. We'll review your Google Business Profile, ads, and website — and tell you exactly where the leads are leaking. No pitch, no pressure.",
  alternates: { canonical: `${siteConfig.url}/audit` },
  openGraph: {
    title: "Free Marketing Audit for Tradies | ClickSmith",
    description:
      "30 minutes. We tell you where the leakage is. You decide what to do about it.",
    url: `${siteConfig.url}/audit`,
    siteName: siteConfig.name,
    type: "website",
  },
};

const auditCovers = [
  {
    title: "Your Google Business Profile",
    body: "Most tradies miss top-3 GBP placement because of one or two fixable gaps — categories, photos, posts, review velocity. We tell you which.",
  },
  {
    title: "Your Google Ads (if running)",
    body: "Wasted spend on broad keywords, missing negative match lists, no call tracking, no LSA. Common stuff that quietly bleeds 30-50% of budget.",
  },
  {
    title: "Your website conversion",
    body: "Phone number above the fold? Real photos? Clear pricing or 'Get a quote' path? We benchmark yours against what actually wins quotes.",
  },
  {
    title: "Your reviews + reputation",
    body: "Review volume, recency, response rate, and how you stack against the top three competitors in your suburb.",
  },
  {
    title: "Your missed-call leakage",
    body: "How much revenue you lose every month from unanswered calls — and the SMS auto-reply system that recovers 30-50% of them.",
  },
  {
    title: "Your seasonal positioning",
    body: "Which months you should be pushing hard, which ones you should be banking content for, and the gaps in your current calendar.",
  },
];

const auditDelivers = [
  "A 1-page punch list of exactly what to fix, in priority order",
  "Real cost-per-lead and cost-per-job benchmarks for your trade and your suburb",
  "Scripts for the missed-call SMS recovery (yours to keep, no strings)",
  "Honest read on whether you need an agency at all (sometimes you don't)",
];

export default function AuditPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Free audit",
        item: `${siteConfig.url}/audit`,
      },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free Marketing Audit",
    serviceType: "Marketing audit for tradies and home services",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: { "@type": "Country", name: "Australia" },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
    },
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

      {/* HERO + FORM */}
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
            <span className="text-[var(--color-primary)]">Free audit</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
                <Sparkles className="h-4 w-4" />
                Free 30-minute audit · No pitch
              </div>
              <h1
                id="hero-title"
                className="text-4xl font-bold leading-[1.05] tracking-tight text-[var(--color-primary)] md:text-5xl lg:text-6xl"
              >
                Find out where your leads are leaking — in 30 minutes.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[var(--color-muted-foreground)] md:text-xl">
                We review your Google Business Profile, ads, website, and
                reviews against what's actually working in your suburb right
                now. You walk away with a punch list. We don't pitch on the
                call.
              </p>

              <ul className="mt-8 space-y-3 text-[var(--color-primary)]">
                {[
                  "Honest read on what's working and what isn't",
                  "Real cost-per-lead benchmarks for your trade",
                  "1-page action list, yours to keep",
                  "No follow-up sales calls unless you ask",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-action)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[var(--color-muted-foreground)]">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[var(--color-action)]" />
                  Booked within 48 hours
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[var(--color-action)]" />
                  AU-based team
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[var(--color-action)]" />
                  Or call {siteConfig.contact.phoneDisplay}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <AuditForm />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE AUDIT COVERS */}
      <section
        aria-labelledby="covers-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
              <Target className="h-4 w-4" />
              What we look at
            </div>
            <h2
              id="covers-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              Six areas. Six straight answers.
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
              No theory. No marketing-speak. We pull up your actual data and
              compare it to operators who are already winning in your trade.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {auditCovers.map((c, i) => (
              <div
                key={c.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-action)]/10 text-sm font-bold text-[var(--color-action)]">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-primary)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU WALK AWAY WITH */}
      <section
        aria-labelledby="delivers-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2
                id="delivers-title"
                className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
              >
                What you walk away with — even if you don't hire us.
              </h2>
              <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
                The audit is genuinely free, including the deliverables. If we
                think you'd be better off DIY-ing or hiring someone else, we'll
                say so on the call.
              </p>
            </div>
            <ul className="space-y-4">
              {auditDelivers.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
                >
                  <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-action)]" />
                  <span className="text-[var(--color-primary)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        aria-labelledby="how-title"
        className="bg-[var(--color-surface)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="how-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              How the call runs
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "You book a slot",
                body: "Fill in name, phone, trade and suburb. We confirm a 30-minute Zoom or phone call within 48 hours.",
              },
              {
                step: "02",
                title: "We review your numbers",
                body: "Before the call, we pull up your GBP, website, ad accounts (if shared), and competitor positioning. The work happens off the call.",
              },
              {
                step: "03",
                title: "You get a punch list",
                body: "On the call we walk through what we found and email you a 1-pager. No lock-in to anything. No surprise follow-ups.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-8"
              >
                <div className="text-sm font-semibold text-[var(--color-action)]">
                  {s.step}
                </div>
                <h3 className="mt-3 text-xl font-bold text-[var(--color-primary)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[var(--color-muted-foreground)]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-title"
        className="bg-[var(--color-background)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="faq-title"
              className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl"
            >
              Common questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Is it actually free, or is there a catch?",
                a: "Actually free. We don't ask for credit card details, we don't lock you into a follow-up call, and the punch list is yours to keep. The reason it works for us: about 1 in 5 audits ends in a retainer, the other 4 send referrals when they like the call.",
              },
              {
                q: "Do you only work with NSW tradies?",
                a: "We're based in NSW, but we work with tradies across Australia. Marketing for a Sydney plumber and a Melbourne plumber runs on the same fundamentals — only the local SEO and competitive set differ.",
              },
              {
                q: "What if my marketing is already 'fine'?",
                a: "Then we'll tell you, and you'll save yourself a retainer cost. We've ended audits with 'don't change anything yet, here's what to monitor.' That's the honest version of the call.",
              },
              {
                q: "Will you try to sign me up on the call?",
                a: "No. The call is the audit. If you want to talk pricing or services after, we'll book a separate conversation. The audit doesn't end with a quote unless you ask for one.",
              },
              {
                q: "What if I just want to chat about marketing in general?",
                a: "Book the audit and ask. We'd rather have an interesting conversation than a stiff one — and we learn things from every operator we talk to.",
              },
              {
                q: "How quickly do I hear back after submitting?",
                a: "Usually within a few business hours, always within 48. If urgent, ring " + siteConfig.contact.phoneDisplay + " — we pick up.",
              },
            ].map((f, i) => (
              <details
                key={i}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-[var(--color-primary)]">
                  {f.q}
                  <span className="ml-4 text-[var(--color-action)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[var(--color-muted-foreground)]">
                  {f.a}
                </p>
              </details>
            ))}
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
            Still scrolling? Book the audit.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-on-primary)]/80">
            30 minutes. We tell you where the leakage is. You decide what to
            do about it. Worst case, you get a free 1-pager and we never speak
            again.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="#hero-title">
              <Button variant="action" size="lg">
                Book my audit
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
