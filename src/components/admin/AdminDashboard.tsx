'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  LayoutDashboard, Package, ShoppingCart, Users, 
  Settings, LogOut, TrendingUp, DollarSign, ShoppingBag, User
} from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

// Mock data for dashboard
const revenueData = [
  { month: 'Jan', revenue: 4200, orders: 12 },
  { month: 'Feb', revenue: 3800, orders: 10 },
  { month: 'Mar', revenue: 5500, orders: 15 },
  { month: 'Apr', revenue: 4800, orders: 13 },
  { month: 'May', revenue: 6200, orders: 17 },
  { month: 'Jun', revenue: 7100, orders: 19 },
]

const destinationData = [
  { name: 'Beijing', bookings: 24 },
  { name: 'Chengdu', bookings: 18 },
  { name: 'Zhangjiajie', bookings: 15 },
  { name: 'Guangxi', bookings: 12 },
  { name: 'Guizhou', bookings: 10 },
  { name: 'Chongqing', bookings: 8 },
]

const recentOrders = [
  { id: 'CPT-ABC123', customer: 'Sarah Mitchell', destination: 'Beijing', amount: 5798, status: 'Confirmed' },
  { id: 'CPT-DEF456', customer: 'Carlos Rodriguez', destination: 'Zhangjiajie', amount: 5398, status: 'Pending' },
  { id: 'CPT-GHI789', customer: 'Emma Thompson', destination: 'Chengdu', amount: 5198, status: 'Confirmed' },
  { id: 'CPT-JKL012', customer: 'Michael Chen', destination: 'Guangxi', amount: 4598, status: 'Completed' },
]

const sidebarLinks = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard', active: true },
  { href: '/admin/orders', icon: ShoppingCart, label: 'Orders' },
  { href: '/admin/products', icon: Package, label: 'Products' },
  { href: '/admin/users', icon: Users, label: 'Users' },
  { href: '/admin/settings', icon: Settings, label: 'Settings' },
]

export function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-forest text-white transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 border-b border-forest-600">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sunflower rounded-lg flex items-center justify-center">
              <span className="text-forest text-xl">🦞</span>
            </div>
            {sidebarOpen && (
              <div>
                <div className="font-serif text-lg">Admin</div>
                <div className="text-xs text-forest-200">China Private Travel</div>
              </div>
            )}
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 py-4">
          {sidebarLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                  link.active 
                    ? 'bg-forest-600 text-sunflower' 
                    : 'text-forest-200 hover:bg-forest-600 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span>{link.label}</span>}
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-forest-600">
          <button className="flex items-center gap-3 text-forest-200 hover:text-white transition-colors w-full">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-bark hover:text-forest"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-4">
              <span className="text-sm text-bark/60">Welcome, Admin</span>
              <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-forest" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          <h1 className="text-2xl font-serif text-forest mb-6">Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Revenue', value: '$35,698', change: '+12.5%', icon: DollarSign, color: 'sage' },
              { label: 'Total Orders', value: '87', change: '+8.2%', icon: ShoppingBag, color: 'sunflower' },
              { label: 'Total Users', value: '156', change: '+15.3%', icon: Users, color: 'moss' },
              { label: 'Conversion Rate', value: '3.2%', change: '+0.4%', icon: TrendingUp, color: 'forest' },
            ].map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-${stat.color}/10 rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${stat.color}`} />
                    </div>
                    <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                  </div>
                  <div className="text-2xl font-bold text-forest mb-1">{stat.value}</div>
                  <div className="text-sm text-bark/60">{stat.label}</div>
                </div>
              )
            })}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Chart */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-serif text-lg text-forest mb-4">Revenue Overview</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4A7C59" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#4A7C59" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                    <YAxis stroke="#6B7280" fontSize={12} tickFormatter={(value) => `$${value}`} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                      formatter={(value: any) => [`$${value}`, 'Revenue']}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#4A7C59" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bookings by Destination */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-serif text-lg text-forest mb-4">Bookings by Destination</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={destinationData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis type="number" stroke="#6B7280" fontSize={12} />
                    <YAxis dataKey="name" type="category" stroke="#6B7280" fontSize={12} width={80} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                      formatter={(value: any) => [value, 'Bookings']}
                    />
                    <Bar dataKey="bookings" fill="#F4C430" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg text-forest">Recent Orders</h3>
              <Link href="/admin/orders" className="text-sm text-sage hover:text-forest transition-colors">
                View All →
              </Link>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-bark/60 border-b">
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Destination</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-bark/5 hover:bg-cream/50 transition-colors">
                    <td className="py-4 font-mono text-sm text-forest">{order.id}</td>
                    <td className="py-4">{order.customer}</td>
                    <td className="py-4">{order.destination}</td>
                    <td className="py-4 font-semibold text-forest">${order.amount.toLocaleString()}</td>
                    <td className="py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
