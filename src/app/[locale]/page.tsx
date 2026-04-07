import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { FeaturedDestinations } from '@/components/home/FeaturedDestinations'
import { HowItWorks } from '@/components/home/HowItWorks'
import { Activities } from '@/components/home/Activities'
import { Testimonials } from '@/components/home/Testimonials'
import { CTASection } from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedDestinations />
        <HowItWorks />
        <Activities />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
