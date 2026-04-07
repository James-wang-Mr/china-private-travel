'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Globe, User, ShoppingCart } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations()
  
  const navLinks = [
    { href: '/', label: t.common.home },
    { href: '/destinations', label: t.common.destinations },
    { href: '/blog', label: t.common.blog },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-forest to-sage rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🦞</span>
            </div>
            <span className="font-serif text-xl text-forest hidden sm:block">
              {t.common.appName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-bark hover:text-forest transition-colors font-medium ${
                  pathname === link.href ? 'text-forest' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            <Link href="/account" className="p-2 text-bark hover:text-forest transition-colors">
              <User className="w-5 h-5" />
            </Link>
            
            <Link href="/cart" className="p-2 text-bark hover:text-forest transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-sunflower text-bark text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-bark"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-bark hover:text-forest transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
