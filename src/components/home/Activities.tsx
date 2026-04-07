'use client'

import Image from 'next/image'
import { Mountain, Compass } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

const activities = [
  {
    icon: 'Mountain',
    name: 'Outdoor Hiking',
    desc: 'Explore hidden trails through stunning landscapes with experienced local guides.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600',
    price: 99,
  },
  {
    icon: 'Mountain',
    name: 'Rock Climbing',
    desc: 'Challenge yourself with guided rock climbing experiences suitable for all skill levels.',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=600',
    price: 149,
  },
  {
    icon: 'Compass',
    name: 'Cave Exploration',
    desc: 'Discover underground wonders with safe, guided cave and spelunking adventures.',
    image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=600',
    price: 129,
  },
]

const iconMap: Record<string, any> = {
  Mountain,
  Compass,
}

export function Activities() {
  const t = useTranslations()

  return (
    <section className="py-20 md:py-28 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t.home.activities.title}</h2>
          <p className="text-forest-200 max-w-2xl mx-auto">{t.home.activities.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity) => {
            const Icon = iconMap[activity.icon] || Mountain
            return (
              <div 
                key={activity.name}
                className="group relative overflow-hidden rounded-2xl"
              >
                {/* Image */}
                <div className="relative h-72">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bark/90 via-bark/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-sunflower rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-bark" />
                    </div>
                    <h3 className="font-serif text-xl">{activity.name}</h3>
                  </div>
                  <p className="text-white/80 text-sm mb-4">{activity.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sunflower font-semibold">+${activity.price}/person</span>
                    <span className="text-sm text-forest-200 group-hover:text-white transition-colors">
                      Add to booking →
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
