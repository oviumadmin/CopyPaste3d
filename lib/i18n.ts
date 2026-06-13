import { pl, type Dictionary } from "./dictionaries/pl";
import { en } from "./dictionaries/en";

export const locales = ["pl", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pl";

export const LOCALE_COOKIE = "NEXT_LOCALE";

const dictionaries: Record<Locale, Dictionary> = { pl, en };

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
