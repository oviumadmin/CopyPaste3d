import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${SITE.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "pl" ? 1 : 0.8,
    alternates: {
      languages: {
        pl: `${SITE.url}/pl`,
        en: `${SITE.url}/en`,
      },
    },
  }));

  const privacy: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${SITE.url}/${locale}/privacy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
    alternates: {
      languages: {
        pl: `${SITE.url}/pl/privacy`,
        en: `${SITE.url}/en/privacy`,
      },
    },
  }));

  return [...home, ...privacy];
}
