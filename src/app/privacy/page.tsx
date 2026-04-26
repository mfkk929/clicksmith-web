import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | ClickSmith",
  description:
    "How ClickSmith collects, uses, and protects your information. Compliant with the Australian Privacy Principles.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section
      aria-labelledby="privacy-title"
      className="bg-[var(--color-background)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <nav className="mb-8 text-sm text-[var(--color-muted-foreground)]">
          <Link href="/" className="hover:text-[var(--color-action)]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-primary)]">Privacy</span>
        </nav>

        <h1
          id="privacy-title"
          className="text-4xl font-bold tracking-tight text-[var(--color-primary)] md:text-5xl"
        >
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
          Last updated: April 2026
        </p>

        <div className="prose mt-12 max-w-none space-y-6 text-[var(--color-muted-foreground)]">
          <p>
            ClickSmith ("we", "us", "our") respects your privacy and is
            committed to handling your personal information in accordance with
            the Australian Privacy Principles (APPs) under the Privacy Act
            1988 (Cth). This policy explains what we collect, how we use it,
            and your rights.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            What we collect
          </h2>
          <p>
            When you fill out a form on this site (audit booking, contact,
            playbook download), we collect:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Mobile phone number</li>
            <li>Trade type and service suburb</li>
            <li>Anything else you choose to write in a free-text field</li>
          </ul>
          <p>
            We also collect basic analytics — pages visited, browser type,
            referrer — via standard tools (e.g. Google Analytics). This is
            anonymised at the IP level where the platform supports it.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            How we use it
          </h2>
          <ul className="ml-6 list-disc space-y-2">
            <li>To respond to your enquiry or audit booking</li>
            <li>To send the playbook(s) you requested</li>
            <li>
              To follow up about your enquiry (you can ask us to stop at any
              time)
            </li>
            <li>To improve our website and services</li>
          </ul>
          <p>
            We <strong>do not</strong> sell your information to third parties.
            We <strong>do not</strong> share your information with marketing
            partners. We <strong>do not</strong> add you to a generic
            newsletter without explicit opt-in.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            Where it's stored
          </h2>
          <p>
            Form submissions are processed via our website (hosted in
            Australia or a nearby data region) and emailed to our team
            mailbox. We use reputable Australian and international service
            providers (e.g. Vercel for hosting, Hostinger for email). Where
            data leaves Australia, we take reasonable steps to ensure the
            recipient handles it consistent with the APPs.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            Cookies
          </h2>
          <p>
            We use minimal cookies for analytics and basic site functionality.
            You can disable cookies in your browser settings — the site will
            still work, you'll just be slightly less identifiable to our
            analytics.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            Your rights
          </h2>
          <p>You can ask us to:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              Provide a copy of the personal information we hold about you
            </li>
            <li>Correct anything that's inaccurate</li>
            <li>Delete your information from our systems</li>
            <li>Stop contacting you</li>
          </ul>
          <p>
            Email{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-semibold text-[var(--color-action)] hover:text-[var(--color-action-strong)]"
            >
              {siteConfig.contact.email}
            </a>{" "}
            with the subject "privacy" and we'll action your request within 30
            days.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            Complaints
          </h2>
          <p>
            If you believe we've mishandled your personal information, contact
            us first at{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-semibold text-[var(--color-action)] hover:text-[var(--color-action-strong)]"
            >
              {siteConfig.contact.email}
            </a>
            . If you're not satisfied with our response, you can lodge a
            complaint with the Office of the Australian Information
            Commissioner (OAIC) at{" "}
            <a
              href="https://www.oaic.gov.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--color-action)] hover:text-[var(--color-action-strong)]"
            >
              oaic.gov.au
            </a>
            .
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            Changes to this policy
          </h2>
          <p>
            We may update this policy from time to time. The "last updated"
            date at the top reflects the most recent revision. Material
            changes will be flagged on the homepage for at least 30 days.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            Contact
          </h2>
          <p>
            ClickSmith
            <br />
            NSW, Australia
            <br />
            Email:{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-semibold text-[var(--color-action)] hover:text-[var(--color-action-strong)]"
            >
              {siteConfig.contact.email}
            </a>
            <br />
            Phone:{" "}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="font-semibold text-[var(--color-action)] hover:text-[var(--color-action-strong)]"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
