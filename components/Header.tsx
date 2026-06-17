"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Dictionary, Locale } from "@/lib/i18n";
import { LOCALE_COOKIE, locales } from "@/lib/i18n";
import { useScrollToId } from "@/lib/use-scroll-to";
import { Logo } from "./Logo";

// A single-page site stays scannable with a short nav; the drop-zone in the
// hero is the primary action, and "Get a quote" sits beside the nav.
const NAV_IDS = ["services", "portfolio", "estimator", "contact"] as const;

export function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const scrollToId = useScrollToId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile nav: drive the scroll ourselves so it can't race the menu's
  // collapse animation. We close first, then scroll to the section (which
  // honours each section's scroll-mt for the sticky header).
  const goTo = (e: React.MouseEvent, id: string) => {
    // let modifier/middle clicks fall through to the browser
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
      return;
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
    history.replaceState(null, "", `#${id}`);
  };

  const links = NAV_IDS.map((id) => ({
    id,
    label: dict.nav[id as keyof typeof dict.nav] as string,
  }));

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow duration-300 ${
        scrolled ? "glass shadow-[0_1px_0_var(--line)]" : "bg-transparent"
      }`}
    >
      <div className="section-wrap flex h-16 items-center justify-between gap-4">
        <a href={`/${locale}`} aria-label="Copy Paste 3D" className="shrink-0">
          <Logo hideWordmarkOnMobile />
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitch locale={locale} label={dict.nav.languageLabel} />
          <ThemeToggle dict={dict} />
          <a href="#estimator" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            {dict.nav.getQuote}
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass overflow-hidden border-t border-line lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="section-wrap flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => goTo(e, l.id)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-surface-2"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#estimator"
                onClick={(e) => goTo(e, "estimator")}
                className="btn-primary mt-2 w-full"
              >
                {dict.nav.getQuote}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function LocaleSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex h-10 items-center rounded-full border border-line px-2 font-mono text-xs font-medium"
    >
      {locales.map((l, i) => {
        const active = l === locale;
        const target = pathname.replace(`/${locale}`, `/${l}`) || `/${l}`;
        return (
          <span key={l} className="flex items-center">
            {i > 0 && <span className="px-1 text-muted">/</span>}
            {active ? (
              <span className="px-1.5 text-teal" aria-current="true">
                {l.toUpperCase()}
              </span>
            ) : (
              <Link
                href={target}
                hrefLang={l}
                scroll={false}
                aria-label={`${label}: ${l.toUpperCase()}`}
                onClick={() => {
                  document.cookie = `${LOCALE_COOKIE}=${l};path=/;max-age=31536000;samesite=lax`;
                }}
                className="px-1.5 text-muted transition-colors hover:text-teal"
              >
                {l.toUpperCase()}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}

function ThemeToggle({ dict }: { dict: Dictionary }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* private mode */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? dict.nav.switchToLight : dict.nav.switchToDark}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-teal hover:text-teal"
    >
      {dark === null ? (
        <span className="h-5 w-5" />
      ) : dark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
