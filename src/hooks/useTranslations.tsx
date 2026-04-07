'use client'

import { createContext, useContext, ReactNode } from 'react'
import { locales, type Locale } from '@/config/i18n'
import { getTranslations } from '@/lib/i18n'

interface TranslationContextType {
  locale: Locale
  t: ReturnType<typeof getTranslations>
}

const TranslationContext = createContext<TranslationContextType | null>(null)

export function TranslationProvider({ 
  children, 
  locale 
}: { 
  children: ReactNode
  locale: string 
}) {
  const translations = getTranslations(locale as Locale)
  
  return (
    <TranslationContext.Provider value={{ locale: locale as Locale, t: translations }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslations() {
  const context = useContext(TranslationContext)
  if (!context) {
    // Return default translations if not in provider
    return getTranslations('en')
  }
  return context.t
}
