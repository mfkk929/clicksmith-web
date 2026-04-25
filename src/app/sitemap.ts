import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllTradeSlugs } from "@/lib/trades-data";

/**
 * Sitemap. Add new pages here as they ship.
 * Register with Google Search Console + Bing Webmaster after first deploy.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/trades`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Add as pages ship:
    // { url: `${base}/playbooks`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    // { url: `${base}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    // { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    // { url: `${base}/audit`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  // 12 trade-specific landing pages, generated from trades-data.ts
  const tradeRoutes: MetadataRoute.Sitemap = getAllTradeSlugs().map((slug) => ({
    url: `${base}/trades/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...tradeRoutes];
}
