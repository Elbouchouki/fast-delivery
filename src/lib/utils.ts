import { Locale } from "@/i18n.config"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getPathLocale(path: string) {
  const [, locale] = path.split('/')
  return locale
}


export const SARCurrency = (lang: Locale) => new Intl.NumberFormat(lang, {
  style: "currency",
  currency: "SAR",
})


export const ARNumber = (lang: Locale, useGrouping: boolean = true) => new Intl.NumberFormat(
  lang,
  // "en",
  {
    style: "decimal",
    useGrouping
  })