'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Users } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { useTranslations } from '@/hooks/useTranslations'
import { destinationData } from '@/data/destinations'

export function DestinationsGrid() {
  const t = useTranslations()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {destinationData.map((dest) => (
        <Link 
          key={dest.slug} 
          href={`/destinations/${dest.slug}`}
          className="group card overflow-hidden"
        >
          {/* Large Image */}
          <div className="relative h-72 overflow-hidden">
            <Image
              src={dest.image}
              alt={dest.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-transparent to-transparent" />
            
            {/* Badge */}
            {dest.featured && (
              <span className="absolute top-4 left-4 bg-sunflower text-bark text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-3xl text-white mb-2">{dest.title}</h3>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {dest.duration} days
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  1-6 guests
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-bark/70 mb-4">{dest.shortDesc}</p>

            {/* Included highlights */}
            <div className="flex flex-wrap gap-2 mb-4">
              {dest.highlights.slice(0, 3).map((h) => (
                <span key={h} className="text-xs bg-forest/10 text-forest px-2 py-1 rounded-full">
                  {h}
                </span>
              ))}
              {dest.highlights.length > 3 && (
                <span className="text-xs text-bark/50">+{dest.highlights.length - 3} more</span>
              )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-bark/10">
              <div>
                <span className="text-bark/60 text-sm">{t.destinations.from} </span>
                <span className="text-forest text-2xl font-bold">{formatPrice(dest.price)}</span>
                <span className="text-bark/60 text-sm"> /{t.destinations.perPerson.replace('/', '')}</span>
              </div>
              <span className="flex items-center gap-2 text-sage font-medium group-hover:gap-3 transition-all">
                View Details
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export { destinationData as destinations }
