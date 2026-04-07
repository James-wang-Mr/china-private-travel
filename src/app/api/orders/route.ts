import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateOrderNumber } from '@/lib/utils'

// GET /api/orders - List orders (admin or own orders)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const status = searchParams.get('status')

    const where: any = {}
    if (userId) where.userId = userId
    if (status) where.status = status

    const orders = await prisma.order.findMany({
      where,
      include: {
        destination: {
          include: { translations: true }
        },
        items: true,
        user: {
          select: { name: true, email: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(orders)
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}

// POST /api/orders - Create a new order
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { 
      destinationId, 
      date, 
      guests, 
      activities = [], 
      notes,
      customerName,
      customerEmail,
      customerPhone,
      userId 
    } = body

    // Get destination price
    const destination = await prisma.destination.findUnique({
      where: { id: destinationId },
      include: { activities: true }
    })

    if (!destination) {
      return NextResponse.json(
        { error: 'Destination not found' },
        { status: 404 }
      )
    }

    // Calculate total
    let totalAmount = destination.price * guests
    const orderItems = []

    // Add activities
    for (const activityId of activities) {
      const activity = destination.activities.find(a => a.id === activityId)
      if (activity) {
        totalAmount += activity.price * guests
        orderItems.push({
          activityId: activity.id,
          activityName: activity.name,
          price: activity.price * guests
        })
      }
    }

    const order = await prisma.order.create({
      data: {
        orderNumber: generateOrderNumber(),
        userId,
        destinationId,
        date: new Date(date),
        guests,
        totalAmount,
        notes,
        customerName,
        customerEmail,
        customerPhone,
        items: {
          create: orderItems
        }
      },
      include: {
        destination: true,
        items: true
      }
    })

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
