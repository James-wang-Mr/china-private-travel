'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Globe, Check } from 'lucide-react'
import { locales, localeNames, type Locale } from '@/config/i18n'

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const currentLocale = pathname.split('/')[1] || 'en'

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 p-2 text-bark hover:text-forest transition-colors"
        aria-label="Switch language"
      >
        <Globe className="w-5 h-5" />
      </button>

      {open && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50 py-2">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                className={`w-full px-4 py-2 text-left flex items-center justify-between hover:bg-cream transition-colors ${
                  currentLocale === locale ? 'text-forest font-medium' : 'text-bark'
                }`}
              >
                <span>{localeNames[locale]}</span>
                {currentLocale === locale && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
