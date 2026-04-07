'use client'

import Link from 'next/link'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

export function Hero() {
  const t = useTranslations()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white pt-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <MapPin className="w-4 h-4 text-sunflower" />
          <span className="text-sm font-medium">Curated Experiences in China</span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          {t.home.hero.title}
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.home.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/destinations" className="btn-secondary inline-flex items-center justify-center gap-2 text-lg">
            {t.home.hero.cta}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/blog" className="btn-outline border-white text-white hover:bg-white hover:text-forest inline-flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5" />
            Read Travel Tips
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { value: '500+', label: 'Happy Travelers' },
            { value: '6', label: 'Destinations' },
            { value: '100%', label: 'Private Tours' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sunflower">{stat.value}</div>
              <div className="text-sm text-white/80 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
