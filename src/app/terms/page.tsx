import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | ClickSmith",
  description:
    "Terms governing the use of clicksmith.com.au and ClickSmith's marketing services for Australian tradies.",
  alternates: { canonical: `${siteConfig.url}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <section
      aria-labelledby="terms-title"
      className="bg-[var(--color-background)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <nav className="mb-8 text-sm text-[var(--color-muted-foreground)]">
          <Link href="/" className="hover:text-[var(--color-action)]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-primary)]">Terms</span>
        </nav>

        <h1
          id="terms-title"
          className="text-4xl font-bold tracking-tight text-[var(--color-primary)] md:text-5xl"
        >
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
          Last updated: April 2026
        </p>

        <div className="mt-12 space-y-6 text-[var(--color-muted-foreground)]">
          <p>
            These terms govern your use of clicksmith.com.au and any
            engagement with ClickSmith ("we", "us"). By using the website or
            booking a service, you agree to these terms.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            1. Use of the website
          </h2>
          <p>
            You agree to use this website for lawful purposes only and not to
            misuse, disrupt, or attempt to gain unauthorised access to it. The
            site, its content, branding, and code are owned by ClickSmith
            unless otherwise stated. You may share links to public pages
            freely; you may not republish substantial content without written
            permission.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            2. The free audit
          </h2>
          <p>
            Our free 30-minute marketing audit is genuinely free. There's no
            credit card, no follow-up sales obligation, and the deliverable
            (a 1-page action list) is yours to keep. The audit is provided as
            general information only and does not constitute formal advice
            tailored to every aspect of your business.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            3. Marketing services
          </h2>
          <p>
            If you engage ClickSmith for paid services (retainers, projects,
            or playbook downloads), the specific terms for that engagement
            will be set out in a separate proposal or service agreement. The
            published pricing on this website is indicative; final pricing
            and scope are confirmed in writing before any work begins.
          </p>
          <p>
            All retainers are month-to-month with no lock-in unless explicitly
            agreed. Either party may end the engagement with 30 days' written
            notice.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            4. Performance and outcomes
          </h2>
          <p>
            Marketing outcomes depend on factors outside our control —
            including market conditions, your operational capacity, ad
            platform changes, and seasonality. We share industry-typical
            benchmarks and our methodology in good faith but do not guarantee
            specific lead volumes, ROAS, or revenue outcomes unless explicitly
            stated in a written service agreement.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            5. Third-party platforms
          </h2>
          <p>
            Our services involve third-party platforms (Google, Meta,
            Hostinger, Vercel, etc.) governed by their own terms. We're not
            responsible for outages, policy changes, or account suspensions
            on those platforms. We act as your technical partner and operator
            on those systems; account ownership remains with you.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            6. Liability
          </h2>
          <p>
            To the maximum extent permitted by Australian law, our liability
            for any claim arising out of or in connection with our services
            is limited to the fees paid to us in the 3 months prior to the
            claim. Nothing in these terms limits any rights you have under
            the Australian Consumer Law.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            7. Confidentiality
          </h2>
          <p>
            Information you share with us during an audit or engagement is
            confidential. We don't share client account data, ad performance,
            or strategic plans with anyone outside the immediate working
            team. We may reference high-level outcomes (e.g. anonymised case
            studies) only with your prior consent.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            8. Privacy
          </h2>
          <p>
            Our handling of your personal information is set out in our{" "}
            <Link
              href="/privacy"
              className="font-semibold text-[var(--color-action)] hover:text-[var(--color-action-strong)]"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            9. Governing law
          </h2>
          <p>
            These terms are governed by the laws of New South Wales,
            Australia. Any dispute will be resolved in the courts of NSW.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            10. Changes
          </h2>
          <p>
            We may update these terms from time to time. The "last updated"
            date at the top reflects the most recent revision. Continuing to
            use the site after changes are posted means you accept the
            updated terms.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[var(--color-primary)]">
            Contact
          </h2>
          <p>
            Questions about these terms?{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-semibold text-[var(--color-action)] hover:text-[var(--color-action-strong)]"
            >
              {siteConfig.contact.email}
            </a>{" "}
            or{" "}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="font-semibold text-[var(--color-action)] hover:text-[var(--color-action-strong)]"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
