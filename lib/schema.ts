import { SITE } from "./site";
import type { Dictionary, Locale } from "./i18n";

/**
 * Schema.org JSON-LD builders: LocalBusiness, Service, FAQPage, Breadcrumb.
 * Rendered once per page in app/[locale]/page.tsx.
 */

export function buildJsonLd(dict: Dictionary, locale: Locale) {
  const url = `${SITE.url}/${locale}`;

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    description: dict.meta.description,
    url,
    email: SITE.email,
    ...(SITE.phone ? { telephone: SITE.phone } : {}),
    image: `${SITE.url}/${locale}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      ...(SITE.address.showStreet
        ? { streetAddress: SITE.address.street }
        : {}),
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postalCode,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.address.geo.lat,
      longitude: SITE.address.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Kościan" },
      { "@type": "AdministrativeArea", name: "Wielkopolska" },
      { "@type": "Country", name: "Poland" },
    ],
    openingHoursSpecification: SITE.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: expandDays(h.days),
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: Object.values(SITE.social),
    priceRange: "30 PLN+",
  };

  const services = dict.services.items.map((s) => ({
    "@type": "Service",
    name: s.title,
    description: s.body,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: { "@type": "AdministrativeArea", name: "Wielkopolska" },
  }));

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE.name,
        item: url,
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, ...services, faqPage, breadcrumb],
  };
}

function expandDays(range: string): string[] {
  const map: Record<string, string> = {
    Mo: "Monday",
    Tu: "Tuesday",
    We: "Wednesday",
    Th: "Thursday",
    Fr: "Friday",
    Sa: "Saturday",
    Su: "Sunday",
  };
  if (range.includes("-")) {
    const order = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    const [from, to] = range.split("-");
    const slice = order.slice(order.indexOf(from), order.indexOf(to) + 1);
    return slice.map((d) => map[d]);
  }
  return [map[range]];
}
