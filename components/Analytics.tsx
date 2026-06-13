import Script from "next/script";

/**
 * Pluggable analytics slot. Set exactly one env var (see .env.example):
 *  - NEXT_PUBLIC_PLAUSIBLE_DOMAIN → loads Plausible
 *  - NEXT_PUBLIC_GA_ID            → loads Google Analytics 4
 * With neither set, nothing is loaded.
 */
export function Analytics() {
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (plausible) {
    return (
      <Script
        defer
        data-domain={plausible}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    );
  }

  if (gaId) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
        </Script>
      </>
    );
  }

  return null;
}
