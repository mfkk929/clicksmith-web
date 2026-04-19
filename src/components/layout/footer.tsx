import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "./logo";
import { siteConfig } from "@/lib/site";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" fill="currentColor" />
    </svg>
  );
}

const footerNav = {
  services: {
    title: "Services",
    links: [
      { href: "/services/seo", label: "Local SEO" },
      { href: "/services/google-ads", label: "Google Ads" },
      { href: "/services/websites", label: "Tradie Websites" },
      { href: "/services/ai-automation", label: "AI Automation" },
    ],
  },
  trades: {
    title: "Top Trades",
    links: [
      { href: "/trades/plumbers", label: "Plumbers" },
      { href: "/trades/electricians", label: "Electricians" },
      { href: "/trades/solar", label: "Solar Installers" },
      { href: "/trades/builders", label: "Builders" },
      { href: "/trades", label: "All trades →" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/learn", label: "Learning hub" },
      { href: "/playbooks", label: "Playbooks" },
      { href: "/contact", label: "Contact" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="mt-auto bg-[var(--color-primary)] text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Marketing that brings Australian tradies more jobs — without
              relying on word of mouth.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span className="tabular-nums">{siteConfig.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <ul className="mt-6 flex items-center gap-3">
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ClickSmith on Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-[var(--color-action)] hover:text-[var(--color-action)]"
                >
                  <InstagramIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ClickSmith on LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-[var(--color-action)] hover:text-[var(--color-action)]"
                >
                  <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {Object.entries(footerNav).map(([key, section]) => (
            <nav key={key} aria-label={section.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Built in NSW, Australia.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="hover:text-white">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
