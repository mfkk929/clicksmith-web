import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuditForm } from "@/components/forms/audit-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact ClickSmith | AU-Based Marketing for Tradies",
  description:
    "Get in touch with ClickSmith. AU-based team. Phone, email, or book a free 30-minute audit. We respond within a few hours during business days.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Contact ClickSmith",
    description:
      "AU-based marketing team for tradies. Phone, email, or free audit.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function ContactPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${siteConfig.url}/contact`,
      },
    ],
  };

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: "sales",
      areaServed: "AU",
      availableLanguage: ["English"],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />

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
            <span className="text-[var(--color-primary)]">Contact</span>
          </nav>

          <div className="max-w-4xl">
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-[1.05] tracking-tight text-[var(--color-primary)] md:text-5xl lg:text-6xl"
            >
              Talk to a real human at ClickSmith.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted-foreground)] md:text-xl">
              Phone, email, or book the free 30-minute audit. AU business
              hours, AU phone number, AU team. No call centres, no automated
              chatbots, no five-day reply windows.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            {/* CONTACT METHODS */}
            <div className="space-y-6">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="block rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition hover:border-[var(--color-action)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-action)]/10 text-[var(--color-action)]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                      Phone
                    </div>
                    <div className="mt-1 text-xl font-bold text-[var(--color-primary)]">
                      {siteConfig.contact.phoneDisplay}
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                      Pick up, leave a message, or we'll call you back same
                      day.
                    </p>
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition hover:border-[var(--color-action)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-action)]/10 text-[var(--color-action)]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                      Email
                    </div>
                    <div className="mt-1 text-xl font-bold text-[var(--color-primary)]">
                      {siteConfig.contact.email}
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                      Usually replied within a few business hours, always
                      within 24.
                    </p>
                  </div>
                </div>
              </a>

              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-action)]/10 text-[var(--color-action)]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                      Location
                    </div>
                    <div className="mt-1 text-xl font-bold text-[var(--color-primary)]">
                      NSW, Australia
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                      Working with tradies across NSW, VIC, QLD, and the rest
                      of AU.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-action)]/10 text-[var(--color-action)]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                      Hours
                    </div>
                    <div className="mt-1 text-xl font-bold text-[var(--color-primary)]">
                      Mon–Fri · 8:30am – 6pm AEST
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                      Weekend emails picked up Monday morning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AUDIT FORM */}
            <div className="lg:sticky lg:top-24">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-action)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-action)]">
                Or skip the back-and-forth
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] md:text-3xl">
                Book a free 30-minute audit
              </h2>
              <p className="mt-2 text-[var(--color-muted-foreground)]">
                Same form on the audit page. Fill it in, we confirm a slot
                within 48 hours.
              </p>
              <div className="mt-6">
                <AuditForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY CTA */}
      <section
        aria-labelledby="cta-title"
        className="bg-[var(--color-primary)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2
            id="cta-title"
            className="text-3xl font-bold text-[var(--color-on-primary)] md:text-5xl"
          >
            Or browse first, talk later.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-on-primary)]/80">
            Trade-specific playbooks, our services, the case for hiring an
            agency at all — read first if you'd rather.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/trades">
              <Button variant="action" size="lg">
                See trade playbooks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg">
                Browse services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
