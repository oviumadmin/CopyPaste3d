import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  // hreflang alternates for a given path suffix, across every locale.
  const languagesFor = (suffix: string) =>
    Object.fromEntries(
      locales.map((l) => [l, `${SITE.url}/${l}${suffix}`])
    );

  const home: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${SITE.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "pl" ? 1 : 0.8,
    alternates: { languages: languagesFor("") },
  }));

  const privacy: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${SITE.url}/${locale}/privacy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
    alternates: { languages: languagesFor("/privacy") },
  }));

  return [...home, ...privacy];
}
