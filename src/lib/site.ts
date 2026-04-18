/**
 * ClickSmith site configuration.
 * Central source of truth for branding, URLs, and contact details.
 * Keep this in sync with design-system/MASTER.md.
 */

export const siteConfig = {
  name: "ClickSmith",
  tagline: "More tradie jobs on the calendar. Less time chasing them.",
  description:
    "ClickSmith builds lead-generating websites, local SEO, and Google Ads for tradespeople across NSW — so you stop relying on word of mouth.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clicksmith.com.au",
  locale: "en_AU",
  contact: {
    phone: "+61400000000", // TODO: set real number
    phoneDisplay: "0400 000 000",
    email: "hello@clicksmith.com.au",
  },
  social: {
    instagram: "https://instagram.com/clicksmith.au",
    linkedin: "https://linkedin.com/company/clicksmith-au",
  },
  ogImage: "/og-default.png", // TODO: generate 1200x630
} as const;

export type SiteConfig = typeof siteConfig;
