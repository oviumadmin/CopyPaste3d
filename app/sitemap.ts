import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
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
}
