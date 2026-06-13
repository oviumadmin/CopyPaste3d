/**
 * Single source of truth for business data.
 * Anything wrapped in << >> is a PLACEHOLDER — replace before going live.
 */

export const SITE = {
  name: "Copy Paste 3D",
  /** Used for canonical URLs, sitemap, OG and JSON-LD. Override via env. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://copypaste3d.pl", // <<DOMAIN>>
  email: "hello@copypaste3d.com", // <<EMAIL>>
  phone: "<<PHONE>>", // e.g. +48 600 000 000

  /**
   * Service-area business: the street address can stay hidden.
   * Set `showStreet: true` and fill `street` to display it.
   */
  address: {
    showStreet: false,
    street: "<<ADDRESS>>",
    city: "Kościan",
    postalCode: "64-000",
    region: "Wielkopolska",
    country: "PL",
    /** Kościan town centre — used in LocalBusiness JSON-LD geo. */
    geo: { lat: 52.0866, lng: 16.6452 },
  },

  nip: "<<NIP>>",
  regon: "<<REGON>>",

  social: {
    tiktok: "https://www.tiktok.com/@copypaste3d",
    instagram: "https://www.instagram.com/copypaste3d", // <<verify handle>>
    youtube: "https://www.youtube.com/@copypaste3d", // <<verify handle>>
    x: "https://x.com/copypaste3d", // <<verify handle>>
  },

  /**
   * Form backend. Create a free form at https://formspree.io, then set
   * NEXT_PUBLIC_FORMSPREE_ENDPOINT (or replace the fallback below).
   * While the placeholder is in place the form runs in demo mode:
   * it validates and shows success, but nothing is sent.
   */
  formspreeEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "<<FORMSPREE_ENDPOINT>>",

  openingHours: [
    { days: "Mo-Fr", opens: "09:00", closes: "18:00" },
    { days: "Sa", opens: "10:00", closes: "14:00" },
  ],
} as const;

export const isFormBackendConfigured = () =>
  !SITE.formspreeEndpoint.includes("<<");
