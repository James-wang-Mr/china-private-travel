'use client'

import { MapPin, Calendar, CreditCard, Compass } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

const icons = [MapPin, Calendar, CreditCard, Compass]

export function HowItWorks() {
  const t = useTranslations()
  const steps = [
    t.home.process.step1,
    t.home.process.step2,
    t.home.process.step3,
    t.home.process.step4,
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">{t.home.process.title}</h2>
          <p className="section-subtitle">{t.home.process.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <div key={index} className="relative text-center group">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-sage to-sunflower" />
                )}

                {/* Number badge */}
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-forest to-sage rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-sunflower text-bark text-sm font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-forest mb-3">{step.title}</h3>
                <p className="text-bark/70 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
