import { pl, type Dictionary } from "./dictionaries/pl";
import { en } from "./dictionaries/en";
import { de } from "./dictionaries/de";

export const locales = ["pl", "en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pl";

export const LOCALE_COOKIE = "NEXT_LOCALE";

const dictionaries: Record<Locale, Dictionary> = { pl, en, de };

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
