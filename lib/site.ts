/**
 * Single source of truth for business data.
 * Anything wrapped in << >> is a PLACEHOLDER — replace before going live.
 */

export const SITE = {
  name: "Copy Paste 3D",
  /** Used for canonical URLs, sitemap, OG and JSON-LD. Override via env. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://copypaste3d.pl",
  email: "kontakt@copypaste3d.pl",
  phone: "+48 734 984 760" as string, // leave empty to hide the phone row

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

  // Leave empty to hide the NIP/REGON legal line until you have the numbers.
  nip: "" as string,
  regon: "" as string,

  /**
   * Social profiles. No accounts exist yet — leave empty to hide the social
   * row and omit them from structured data. Add the full profile URL here as
   * each account goes live and it appears automatically.
   */
  social: {
    tiktok: "",
    instagram: "",
    youtube: "",
    x: "",
  },

  /**
   * Form backend. Create a free form at https://formspree.io, then set
   * NEXT_PUBLIC_FORMSPREE_ENDPOINT (or replace the fallback below).
   * While the placeholder is in place the form runs in demo mode:
   * it validates and shows success, but nothing is sent.
   */
  formspreeEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
    "https://formspree.io/f/meewnzpb",

  openingHours: [
    { days: "Mo-Fr", opens: "09:00", closes: "18:00" },
    { days: "Sa", opens: "10:00", closes: "14:00" },
  ],
} as const;

export const isFormBackendConfigured = () =>
  !SITE.formspreeEndpoint.includes("<<");
