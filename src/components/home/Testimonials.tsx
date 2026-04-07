'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

const reviews = [
  {
    name: 'Sarah Mitchell',
    location: 'Los Angeles, USA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100',
    rating: 5,
    text: 'Our private tour of Zhangjiajie was absolutely magical. The guide was knowledgeable and the driver was professional. Highly recommend for families!',
    destination: 'Zhangjiajie',
  },
  {
    name: 'Carlos Rodriguez',
    location: 'Mexico City, Mexico',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100',
    rating: 5,
    text: 'The Great Wall at sunrise was a dream come true. No crowds, just us and our amazing guide. Best way to experience Beijing!',
    destination: 'Beijing',
  },
  {
    name: 'Emma Thompson',
    location: 'Toronto, Canada',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100',
    rating: 5,
    text: 'The panda sanctuary in Chengdu was incredible. We even got to feed them! The food tour afterward was the perfect addition.',
    destination: 'Chengdu',
  },
]

export function Testimonials() {
  const t = useTranslations()

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t.home.reviews.title}</h2>
          <p className="section-subtitle">{t.home.reviews.subtitle}</p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-sunflower fill-sunflower" />
                ))}
              </div>

              {/* Text */}
              <p className="text-bark/80 mb-6 leading-relaxed">"{review.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-forest">{review.name}</div>
                  <div className="text-sm text-bark/60">{review.location}</div>
                </div>
                <div className="ml-auto text-xs bg-forest/10 text-forest px-3 py-1 rounded-full">
                  {review.destination}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
