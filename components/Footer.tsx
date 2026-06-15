"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Youtube } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { isLocale } from "@/lib/i18n";
import { SITE, isFormBackendConfigured } from "@/lib/site";
import { Logo } from "./Logo";

const NAV_IDS = [
  "services",
  "portfolio",
  "materials",
  "estimator",
  "faq",
  "contact",
] as const;

export function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear().toString();
  const hasSocial = Object.values(SITE.social).some(Boolean);
  const pathname = usePathname();
  const seg = pathname.split("/")[1];
  const locale = isLocale(seg) ? seg : "pl";

  return (
    <footer className="border-t border-line bg-navy text-mist">
      <div className="section-wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        {/* Brand */}
        <div>
          <div className="dark">
            <Logo />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist/70">
            {dict.footer.tagline}
          </p>
          {hasSocial && (
            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist/50">
                {dict.footer.socialLabel}
              </p>
              <div className="mt-3 flex gap-3">
                {SITE.social.tiktok && (
                  <SocialLink href={SITE.social.tiktok} label="TikTok">
                    <TikTokIcon />
                  </SocialLink>
                )}
                {SITE.social.instagram && (
                  <SocialLink href={SITE.social.instagram} label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </SocialLink>
                )}
                {SITE.social.youtube && (
                  <SocialLink href={SITE.social.youtube} label="YouTube">
                    <Youtube className="h-4 w-4" />
                  </SocialLink>
                )}
                {SITE.social.x && (
                  <SocialLink href={SITE.social.x} label="X (Twitter)">
                    <XIcon />
                  </SocialLink>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav aria-label={dict.footer.navTitle}>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-mist/60">
            {dict.footer.navTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm text-mist/80 transition-colors hover:text-teal"
                >
                  {dict.nav[id as keyof typeof dict.nav] as string}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-mist/60">
            {dict.footer.servicesTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {dict.footer.servicesLinks.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-sm text-mist/80 transition-colors hover:text-teal"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter + payments */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-mist/60">
            {dict.footer.newsletterTitle}
          </h3>
          <p className="mt-4 text-sm text-mist/70">{dict.footer.newsletterLead}</p>
          <NewsletterForm dict={dict} />
          <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-wider text-mist/60">
            {dict.footer.paymentsTitle}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {["BLIK", "Przelewy24", "VISA", "Mastercard"].map((p) => (
              <span
                key={p}
                className="rounded-md border border-mist/15 bg-navy-2 px-2.5 py-1 font-mono text-[10px] font-medium tracking-wide text-mist/70"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-mist/10">
        <div className="section-wrap flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[11px] text-mist/50">
            {[
              "Copy Paste 3D",
              SITE.nip && `NIP ${SITE.nip}`,
              SITE.regon && `REGON ${SITE.regon}`,
            ]
              .filter(Boolean)
              .join(" · ")}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/privacy`}
              className="font-mono text-[11px] text-mist/50 transition-colors hover:text-teal"
            >
              {dict.footer.privacy}
            </Link>
            <p className="font-mono text-[11px] text-mist/50">
              {dict.footer.copyright.replace("{year}", year)}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm({ dict }: { dict: Dictionary }) {
  const [done, setDone] = useState(false);

  return done ? (
    <p className="mt-4 text-sm text-teal" role="status">
      {dict.footer.newsletterSuccess}
    </p>
  ) : (
    <form
      className="mt-4 flex gap-2"
      onSubmit={async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        data.append("form", "newsletter");
        if (isFormBackendConfigured()) {
          try {
            await fetch(SITE.formspreeEndpoint, {
              method: "POST",
              body: data,
              headers: { Accept: "application/json" },
            });
          } catch {
            /* newsletter signup is best-effort */
          }
        }
        setDone(true);
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">
        {dict.footer.newsletterPlaceholder}
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder={dict.footer.newsletterPlaceholder}
        className="h-11 w-full min-w-0 rounded-full border border-mist/20 bg-navy-2 px-4 text-sm text-mist placeholder:text-mist/40 focus:border-teal"
      />
      <button type="submit" className="btn-teal shrink-0 !px-5 !py-0">
        {dict.footer.newsletterCta}
      </button>
    </form>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-mist/15 text-mist/70 transition-colors hover:border-teal hover:text-teal"
    >
      {children}
    </a>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .58.05.85.13V9.4a6.33 6.33 0 0 0-.85-.05A6.34 6.34 0 0 0 9.48 22a6.34 6.34 0 0 0 6.34-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.79c-.34 0-.67-.03-1-.1Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" />
    </svg>
  );
}
