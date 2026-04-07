export const locales = ['en', 'es', 'pt', 'fr', 'de', 'ar', 'ru'] as const
export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  de: 'Deutsch',
  ar: 'العربية',
  ru: 'Русский',
}

export const rtlLocales: Locale[] = ['ar']

export function isRtlLocale(locale: Locale): boolean {
  return rtlLocales.includes(locale)
}
