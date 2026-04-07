'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Check, CreditCard, Lock, Clock, Users } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { useTranslations } from '@/hooks/useTranslations'

const destinations = {
  beijing: {
    title: 'Beijing',
    image: 'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?q=80&w=400',
    price: 289900,
    duration: 5,
  },
  chengdu: {
    title: 'Chengdu',
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=400',
    price: 259900,
    duration: 4,
  },
  chongqing: {
    title: 'Chongqing',
    image: 'https://images.unsplash.com/photo-1585037520695-aa362f7029ba?q=80&w=400',
    price: 249900,
    duration: 4,
  },
  guangxi: {
    title: 'Guangxi',
    image: 'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?q=80&w=400',
    price: 229900,
    duration: 5,
  },
  zhangjiajie: {
    title: 'Zhangjiajie',
    image: 'https://images.unsplash.com/photo-1585818772979-6e26827b8c55?q=80&w=400',
    price: 269900,
    duration: 4,
  },
  guizhou: {
    title: 'Guizhou',
    image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?q=80&w=400',
    price: 239900,
    duration: 5,
  },
}

const activities: Record<string, { name: string; price: number }> = {
  hiking: { name: 'Outdoor Hiking', price: 9900 },
  climbing: { name: 'Rock Climbing', price: 14900 },
  cave: { name: 'Cave Exploration', price: 12900 },
}

function CheckoutForm() {
  const searchParams = useSearchParams()
  const t = useTranslations()
  
  const destinationSlug = searchParams.get('destination') || 'beijing'
  const date = searchParams.get('date') || ''
  const guests = parseInt(searchParams.get('guests') || '2')
  const selectedActivities = (searchParams.get('activities') || '').split(',').filter(Boolean)

  const destination = destinations[destinationSlug as keyof typeof destinations] || destinations.beijing
  
  const activitiesCost = selectedActivities.reduce((sum, id) => {
    return sum + (activities[id]?.price || 0)
  }, 0)

  const totalPrice = destination.price * guests + activitiesCost

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsComplete(true)
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-sage rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-serif text-3xl text-forest mb-4">Booking Confirmed!</h1>
          <p className="text-bark/70 mb-6">
            Thank you for choosing China Private Travel. Your confirmation details have been sent to {formData.email}.
          </p>
          <div className="bg-cream rounded-xl p-4 mb-6 text-left">
            <div className="text-sm text-bark/60 mb-1">Order Number</div>
            <div className="font-mono text-forest font-semibold">CPT-{Date.now().toString(36).toUpperCase()}</div>
          </div>
          <Link href="/account" className="btn-primary inline-block">
            View My Bookings
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <Link href="/destinations" className="inline-flex items-center gap-2 text-bark hover:text-forest mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Destinations
        </Link>

        <h1 className="font-serif text-3xl text-forest mb-8">{t.checkout.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="font-serif text-xl text-forest mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-forest text-white rounded-full flex items-center justify-center text-sm">1</span>
                  {t.checkout.contactInfo}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-bark mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bark mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-bark mb-2">Phone (with country code)</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50"
                      placeholder="+1 555 123 4567"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="font-serif text-xl text-forest mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-forest text-white rounded-full flex items-center justify-center text-sm">2</span>
                  {t.checkout.specialRequests}
                </h2>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50 resize-none"
                  placeholder="Dietary restrictions, accessibility needs, special occasions, questions..."
                />
              </div>

              {/* Payment */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="font-serif text-xl text-forest mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-forest text-white rounded-full flex items-center justify-center text-sm">3</span>
                  {t.checkout.payment}
                </h2>
                
                <div className="bg-cream rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-5 h-5 text-sage" />
                    <span className="text-sm text-bark/70">Your payment is secured with SSL encryption</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-bark mb-2">Card Number</label>
                      <input
                        type="text"
                        required
                        placeholder="4242 4242 4242 4242"
                        className="w-full px-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-bark mb-2">Expiry</label>
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-bark mb-2">CVC</label>
                        <input
                          type="text"
                          required
                          placeholder="123"
                          className="w-full px-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      {t.checkout.completeBooking} - {formatPrice(totalPrice)}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-serif text-xl text-forest mb-4">Order Summary</h3>
              
              <div className="flex gap-4 mb-6 pb-6 border-b border-bark/10">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-forest">{destination.title}</h4>
                  <div className="flex items-center gap-3 text-sm text-bark/60 mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {destination.duration} days
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {guests}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-bark/70">Base price</span>
                  <span className="text-bark">{formatPrice(destination.price)} × {guests}</span>
                </div>
                {selectedActivities.map((id) => {
                  const activity = activities[id]
                  return activity && (
                    <div key={id} className="flex justify-between text-sm">
                      <span className="text-bark/70">{activity.name}</span>
                      <span className="text-bark">+{formatPrice(activity.price)} × {guests}</span>
                    </div>
                  )
                })}
              </div>

              {date && (
                <div className="text-sm text-bark/60 mb-4">
                  Travel date: {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              )}

              <div className="border-t border-bark/10 pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-forest">Total</span>
                  <span className="font-bold text-forest text-xl">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-sm text-bark/60">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage" />
                  <span>Private guide & driver</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage" />
                  <span>All entrance fees included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage" />
                  <span>Free cancellation (30 days)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-forest/30 border-t-forest rounded-full animate-spin" />
      </div>
    }>
      <CheckoutForm />
    </Suspense>
  )
}
