'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Users } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'
import { formatPrice } from '@/lib/utils'

// Demo destinations data
const destinations = [
  {
    slug: 'beijing',
    image: 'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?q=80&w=800',
    title: 'Beijing',
    shortDesc: 'Ancient capital with the Great Wall, Forbidden City, and vibrant hutong culture.',
    price: 289900,
    duration: 5,
    featured: true,
  },
  {
    slug: 'chengdu',
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=800',
    title: 'Chengdu',
    shortDesc: 'Home of giant pandas, spicy Sichuan cuisine, and ancient irrigation wonders.',
    price: 259900,
    duration: 4,
    featured: true,
  },
  {
    slug: 'chongqing',
    image: 'https://images.unsplash.com/photo-1585037520695-aa362f7029ba?q=80&w=800',
    title: 'Chongqing',
    shortDesc: 'Mountain city with dramatic skyline, hot springs, and Wulong Karst scenery.',
    price: 249900,
    duration: 4,
    featured: false,
  },
  {
    slug: 'guangxi',
    image: 'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?q=80&w=800',
    title: 'Guangxi',
    shortDesc: 'Breathtaking karst landscapes of Guilin, Li River cruises, and Yangshuo charm.',
    price: 229900,
    duration: 5,
    featured: true,
  },
  {
    slug: 'zhangjiajie',
    image: 'https://images.unsplash.com/photo-1585818772979-6e26827b8c55?q=80&w=800',
    title: 'Zhangjiajie',
    shortDesc: 'Avatar-like sandstone pillars, Glass Bridge, and pristine forests.',
    price: 269900,
    duration: 4,
    featured: true,
  },
  {
    slug: 'guizhou',
    image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?q=80&w=800',
    title: 'Guizhou',
    shortDesc: 'Authentic Miao villages, Huangguoshu Waterfall, and untouched natural beauty.',
    price: 239900,
    duration: 5,
    featured: false,
  },
]

export function FeaturedDestinations() {
  const t = useTranslations()

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t.home.featured.title}</h2>
          <p className="section-subtitle">{t.home.featured.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link 
              key={dest.slug} 
              href={`/destinations/${dest.slug}`}
              className="group card"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {dest.featured && (
                  <span className="absolute top-4 left-4 bg-sunflower text-bark text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl text-forest mb-2 group-hover:text-sage transition-colors">
                  {dest.title}
                </h3>
                <p className="text-bark/70 text-sm mb-4 line-clamp-2">
                  {dest.shortDesc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-bark/10">
                  <div className="flex items-center gap-4 text-sm text-bark/60">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {dest.duration} {t.destinations.days}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      1-6
                    </span>
                  </div>
                  <div className="text-forest font-semibold">
                    {t.destinations.from} {formatPrice(dest.price)}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sage font-medium group-hover:gap-3 transition-all">
                  <span>{t.destinations.bookNow}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/destinations" className="btn-primary inline-flex items-center gap-2">
            View All Destinations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
