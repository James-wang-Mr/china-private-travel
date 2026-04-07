'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Clock, Users, Check, X, ArrowLeft, Calendar, Mountain, 
  Compass, Star, ChevronLeft, ChevronRight 
} from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { useTranslations } from '@/hooks/useTranslations'

interface Destination {
  slug: string
  title: string
  shortDesc: string
  description: string
  highlights: string[]
  included: string[]
  notIncluded: string[]
  price: number
  duration: number
  images: string[]
  featured: boolean
}

interface Activity {
  id: string
  name: string
  description: string
  price: number
  icon: string
}

const activities: Activity[] = [
  {
    id: 'hiking',
    name: 'Outdoor Hiking',
    description: 'Explore hidden trails through stunning landscapes with experienced local guides. Suitable for moderate fitness levels.',
    price: 9900,
    icon: 'Mountain',
  },
  {
    id: 'climbing',
    name: 'Rock Climbing',
    description: 'Challenge yourself with guided rock climbing experiences suitable for all skill levels. All equipment provided.',
    price: 14900,
    icon: 'Mountain',
  },
  {
    id: 'cave',
    name: 'Cave Exploration',
    description: 'Discover underground wonders with safe, guided cave and spelunking adventures. Helmets and lights included.',
    price: 12900,
    icon: 'Compass',
  },
]

const iconMap: Record<string, any> = {
  Mountain,
  Compass,
}

export function DestinationDetail({ destination }: { destination: Destination }) {
  const [selectedDate, setSelectedDate] = useState('')
  const [guests, setGuests] = useState(2)
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [notes, setNotes] = useState('')
  const t = useTranslations()

  const toggleActivity = (id: string) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    )
  }

  const activitiesTotal = selectedActivities.reduce((sum, id) => {
    const activity = activities.find((a) => a.id === id)
    return sum + (activity?.price || 0)
  }, 0)

  const totalPrice = destination.price * guests + activitiesTotal

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === destination.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? destination.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="bg-cream">
      {/* Hero Gallery */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <Image
          src={destination.images[currentImageIndex]}
          alt={destination.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/30 to-transparent" />

        {/* Navigation */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Thumbnail strip */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {destination.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentImageIndex ? 'bg-sunflower w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Back button & Title */}
        <div className="absolute top-4 left-4 right-4">
          <Link 
            href="/destinations" 
            className="inline-flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/40 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Destinations
          </Link>
        </div>

        <div className="absolute bottom-8 left-4 right-4 md:left-8 md:right-8">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            {destination.title}
          </h1>
          <div className="flex items-center gap-6 text-white/90">
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-sunflower" />
              {destination.duration} Days
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-5 h-5 text-sunflower" />
              1-6 Guests
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-5 h-5 text-sunflower fill-sunflower" />
              4.9 (128 reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="section-title">About This Tour</h2>
              <p className="text-bark/80 leading-relaxed whitespace-pre-line">
                {destination.description}
              </p>
            </section>

            {/* Highlights */}
            <section>
              <h3 className="font-serif text-2xl text-forest mb-4">Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-sage rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-bark">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* What's Included */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-serif text-xl text-forest mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-sage" />
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {destination.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-bark/80">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-serif text-xl text-bark mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-400" />
                  Not Included
                </h3>
                <ul className="space-y-3">
                  {destination.notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-bark/60">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Optional Activities */}
            <section>
              <h3 className="font-serif text-2xl text-forest mb-4">Optional Activities</h3>
              <p className="text-bark/70 mb-6">Enhance your journey with exciting add-on experiences.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activities.map((activity) => {
                  const Icon = iconMap[activity.icon] || Mountain
                  const isSelected = selectedActivities.includes(activity.id)
                  
                  return (
                    <button
                      key={activity.id}
                      onClick={() => toggleActivity(activity.id)}
                      className={`text-left p-4 rounded-xl border-2 transition-all ${
                        isSelected
                          ? 'border-sunflower bg-sunflower/10'
                          : 'border-bark/20 bg-white hover:border-sage'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-forest" />
                        </div>
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          isSelected ? 'bg-sunflower border-sunflower' : 'border-bark/30'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 text-bark" />}
                        </div>
                      </div>
                      <h4 className="font-medium text-forest mb-1">{activity.name}</h4>
                      <p className="text-sm text-bark/60 mb-2">{activity.description}</p>
                      <span className="text-sage font-semibold">+{formatPrice(activity.price)}/person</span>
                    </button>
                  )
                })}
              </div>
            </section>

            {/* Reviews placeholder */}
            <section>
              <h3 className="font-serif text-2xl text-forest mb-6">Traveler Reviews</h3>
              <div className="space-y-4">
                {[
                  { name: 'Sarah M.', rating: 5, text: 'Absolutely incredible experience! The guide was knowledgeable and the private arrangement made everything perfect.', date: 'March 2024' },
                  { name: 'Carlos R.', rating: 5, text: 'Best decision to go private. No crowds, personalized attention, unforgettable memories.', date: 'February 2024' },
                ].map((review, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center text-forest font-semibold">
                          {review.name[0]}
                        </div>
                        <div>
                          <div className="font-medium text-forest">{review.name}</div>
                          <div className="text-sm text-bark/60">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-sunflower fill-sunflower" />
                        ))}
                      </div>
                    </div>
                    <p className="text-bark/80">{review.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                {/* Price */}
                <div className="mb-6">
                  <span className="text-bark/60">From </span>
                  <span className="text-forest text-3xl font-bold">{formatPrice(destination.price)}</span>
                  <span className="text-bark/60"> /person</span>
                </div>

                {/* Date Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-bark mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Select Travel Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50"
                  />
                </div>

                {/* Guest Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-bark mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Number of Guests
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 bg-bark/10 rounded-lg flex items-center justify-center text-bark hover:bg-bark/20 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold text-forest w-8 text-center">{guests}</span>
                    <button
                      onClick={() => setGuests(Math.min(6, guests + 1))}
                      className="w-10 h-10 bg-bark/10 rounded-lg flex items-center justify-center text-bark hover:bg-bark/20 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xs text-bark/60 mt-1">Maximum 6 guests per booking</p>
                </div>

                {/* Selected Activities */}
                {selectedActivities.length > 0 && (
                  <div className="mb-4 p-4 bg-sunflower/10 rounded-lg">
                    <div className="text-sm font-medium text-bark mb-2">Selected Activities:</div>
                    {selectedActivities.map((id) => {
                      const activity = activities.find((a) => a.id === id)
                      return activity && (
                        <div key={id} className="flex justify-between text-sm text-bark/80 mb-1">
                          <span>{activity.name}</span>
                          <span>+{formatPrice(activity.price)}</span>
                        </div>
                      )
                    })}
                  </div>
                )}

                {/* Special Notes */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-bark mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Dietary restrictions, accessibility needs, special occasions..."
                    rows={3}
                    className="w-full px-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50 resize-none"
                  />
                </div>

                {/* Total */}
                <div className="border-t border-bark/10 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-bark">Total Price:</span>
                    <span className="text-forest text-2xl font-bold">{formatPrice(totalPrice)}</span>
                  </div>
                  <p className="text-xs text-bark/60 mt-1">Includes private guide, driver, and all activities</p>
                </div>

                {/* CTA */}
                <button 
                  onClick={() => window.location.href = `/checkout?destination=${destination.slug}&date=${selectedDate}&guests=${guests}&activities=${selectedActivities.join(',')}`}
                  className="w-full btn-primary text-lg py-4"
                >
                  Book This Tour
                </button>

                <p className="text-center text-xs text-bark/60 mt-4">
                  Free cancellation up to 30 days before departure
                </p>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-bark/70">
                  <span className="text-xl">🔒</span>
                  <span>Secure payment via Stripe</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-bark/70">
                  <span className="text-xl">✓</span>
                  <span>Best price guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-bark/70">
                  <span className="text-xl">💬</span>
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
