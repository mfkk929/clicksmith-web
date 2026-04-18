import { siteConfig } from "@/lib/site";

/**
 * LocalBusiness + WebSite JSON-LD. Sitewide — rendered in root layout.
 * Kept separate from FAQ/Review schemas which live on their page.
 */
export function SiteJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
      },
      areaServed: [
        { "@type": "State", name: "New South Wales" },
        { "@type": "City", name: "Sydney" },
        { "@type": "City", name: "Wollongong" },
        { "@type": "City", name: "Newcastle" },
      ],
      sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
      description: siteConfig.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.url}/#business` },
      inLanguage: "en-AU",
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
