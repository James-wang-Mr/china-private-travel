import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, type Locale } from '@/config/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip API routes, static files, etc.
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') ||
    pathname === '/'
  ) {
    return NextResponse.next()
  }

  // Check if pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Detect locale (simplified - in production use proper detection)
  const acceptLanguage = request.headers.get('accept-language') || ''
  let locale: Locale = 'en'

  // Simple detection
  if (acceptLanguage.includes('es')) locale = 'es'
  else if (acceptLanguage.includes('pt')) locale = 'pt'
  else if (acceptLanguage.includes('fr')) locale = 'fr'
  else if (acceptLanguage.includes('de')) locale = 'de'
  else if (acceptLanguage.includes('ar')) locale = 'ar'
  else if (acceptLanguage.includes('ru')) locale = 'ru'

  // Redirect to locale-prefixed path
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
