'use client'

import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations'

export function Footer() {
  const t = useTranslations()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-sunflower rounded-lg flex items-center justify-center">
                <span className="text-forest text-xl">🦞</span>
              </div>
              <span className="font-serif text-xl">{t.common.appName}</span>
            </div>
            <p className="text-forest-200 max-w-md">
              Experience the authentic China with personalized private tours designed for 
              small groups, families, and couples seeking unforgettable adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/destinations" className="text-forest-200 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/blog" className="text-forest-200 hover:text-white transition-colors">Travel Blog</Link></li>
              <li><Link href="/contact" className="text-forest-200 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-forest-200 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-forest-200">
              <li>📧 hello@chinaprivate.travel</li>
              <li>📱 +1 (555) 123-4567</li>
              <li>📍 San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-forest-200 text-sm">
            © {currentYear} {t.common.appName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-forest-200">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
