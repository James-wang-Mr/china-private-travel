'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Check, Mail, Calendar, ArrowRight } from 'lucide-react'

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-sage rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
          <Check className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="font-serif text-3xl text-forest mb-4">Booking Confirmed!</h1>
        
        <p className="text-bark/70 mb-8">
          Thank you for choosing China Private Travel. A confirmation email has been sent with all the details of your upcoming adventure.
        </p>

        <div className="bg-cream rounded-xl p-6 mb-8 text-left space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-sage" />
            <span className="text-bark">Check your email for confirmation</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-sage" />
            <span className="text-bark">Your guide will contact you soon</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-outline inline-flex items-center justify-center gap-2">
            Return Home
          </Link>
          <Link href="/account" className="btn-primary inline-flex items-center justify-center gap-2">
            View My Bookings
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
