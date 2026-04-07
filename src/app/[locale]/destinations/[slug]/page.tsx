import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { DestinationDetail } from '@/components/destinations/DestinationDetail'
import { destinationData } from '@/data/destinations'

export async function generateStaticParams() {
  return destinationData.map((dest) => ({
    slug: dest.slug,
  }))
}

export default async function DestinationPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const destination = destinationData.find((d) => d.slug === slug)
  
  if (!destination) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <DestinationDetail destination={destination} />
      </main>
      <Footer />
    </>
  )
}
