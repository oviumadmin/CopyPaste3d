import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, locales } from "@/lib/i18n";

/**
 * Locale routing: every page lives under /pl or /en.
 * Bare paths redirect to the visitor's preferred locale
 * (cookie first, then Accept-Language, then Polish).
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  let locale = isLocale(cookie) ? cookie : undefined;

  if (!locale) {
    const accept = request.headers.get("accept-language") ?? "";
    const first = accept.split(",")[0]?.trim().toLowerCase() ?? "";
    locale = first.startsWith("en") ? "en" : defaultLocale;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip static files, metadata routes and Next internals.
  matcher: ["/((?!_next|api|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)"],
};
