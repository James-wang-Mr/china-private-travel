import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/destinations - List all destinations
export async function GET() {
  try {
    const destinations = await prisma.destination.findMany({
      where: { },
      include: {
        translations: true,
        activities: true,
        reviews: {
          include: {
            user: {
              select: { name: true, image: true }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(destinations)
  } catch (error) {
    console.error('Error fetching destinations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch destinations' },
      { status: 500 }
    )
  }
}

// POST /api/destinations - Create a destination (admin only)
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { slug, images, price, duration, maxGuests, featured, translations, activities } = body

    const destination = await prisma.destination.create({
      data: {
        slug,
        images,
        price: Math.round(price * 100), // Convert to cents
        duration,
        maxGuests,
        featured,
        translations: {
          create: translations
        },
        activities: activities ? {
          create: activities.map((a: any) => ({
            slug: a.slug,
            name: a.name,
            description: a.description,
            price: Math.round(a.price * 100),
            icon: a.icon,
            image: a.image,
          }))
        } : undefined
      },
      include: {
        translations: true,
        activities: true
      }
    })

    return NextResponse.json(destination, { status: 201 })
  } catch (error) {
    console.error('Error creating destination:', error)
    return NextResponse.json(
      { error: 'Failed to create destination' },
      { status: 500 }
    )
  }
}
