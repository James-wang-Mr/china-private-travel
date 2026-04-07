import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { DestinationsGrid } from '@/components/destinations/DestinationsGrid'

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="section-title">Choose Your Destination</h1>
            <p className="section-subtitle">
              Explore our handpicked destinations across China. Each journey is crafted 
              for small groups seeking authentic experiences.
            </p>
          </div>
          
          <DestinationsGrid />
        </div>
      </main>
      <Footer />
    </>
  )
}
