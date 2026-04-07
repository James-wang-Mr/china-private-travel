import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/admin/stats - Get admin dashboard stats
export async function GET() {
  try {
    const [
      totalUsers,
      totalOrders,
      totalRevenue,
      recentOrders,
      destinationStats,
      monthlyStats
    ] = await Promise.all([
      // Total users
      prisma.user.count(),
      
      // Total orders
      prisma.order.count(),
      
      // Total revenue (sum of completed orders)
      prisma.order.aggregate({
        _sum: { totalAmount: true },
        where: { status: 'COMPLETED' }
      }),
      
      // Recent orders
      prisma.order.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        include: {
          destination: {
            include: { translations: true }
          }
        }
      }),
      
      // Orders by destination
      prisma.order.groupBy({
        by: ['destinationId'],
        _count: true,
        _sum: { totalAmount: true }
      }),
      
      // Monthly stats for last 6 months
      prisma.order.findMany({
        where: {
          createdAt: {
            gte: new Date(new Date().setMonth(new Date().getMonth() - 6))
          }
        },
        select: {
          createdAt: true,
          totalAmount: true
        }
      })
    ])

    // Get destination names
    const destinations = await prisma.destination.findMany({
      select: { id: true, translations: true }
    })

    const destinationMap = destinations.reduce((acc, d) => {
      const enTranslation = d.translations.find(t => t.locale === 'en')
      acc[d.id] = enTranslation?.title || d.id
      return acc
    }, {} as Record<string, string>)

    const formattedDestinationStats = destinationStats.map(ds => ({
      destination: destinationMap[ds.destinationId] || ds.destinationId,
      count: ds._count,
      revenue: ds._sum.totalAmount || 0
    }))

    // Process monthly stats
    const monthlyMap: Record<string, { revenue: number; orders: number }> = {}
    const now = new Date()
    
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
      const key = date.toLocaleString('en', { month: 'short' })
      monthlyMap[key] = { revenue: 0, orders: 0 }
    }
    
    monthlyStats.forEach(order => {
      const key = order.createdAt.toLocaleString('en', { month: 'short' })
      if (monthlyMap[key]) {
        monthlyMap[key].revenue += order.totalAmount
        monthlyMap[key].orders += 1
      }
    })

    return NextResponse.json({
      totalUsers,
      totalOrders,
      totalRevenue: totalRevenue._sum.totalAmount || 0,
      recentOrders,
      destinationStats: formattedDestinationStats,
      monthlyStats: Object.entries(monthlyMap).map(([month, data]) => ({
        month,
        ...data
      }))
    })
  } catch (error) {
    console.error('Error fetching admin stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}
