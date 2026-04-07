'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

export function CTASection() {
  const t = useTranslations()

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-sage to-moss text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sunflower/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest/20 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-5xl mb-6">{t.home.cta.title}</h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          {t.home.cta.subtitle}
        </p>
        
        <Link 
          href="/destinations" 
          className="inline-flex items-center gap-3 bg-sunflower text-bark px-8 py-4 rounded-full font-semibold text-lg hover:bg-sunflower-dark transition-colors shadow-lg"
        >
          {t.home.cta.button}
          <ArrowRight className="w-5 h-5" />
        </Link>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✈️</span>
            <span>Best Price Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💬</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
