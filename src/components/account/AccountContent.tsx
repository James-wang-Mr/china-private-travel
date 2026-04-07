'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, User, CreditCard, Settings } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

const tabs = [
  { id: 'orders', label: 'My Bookings', icon: Calendar },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'settings', label: 'Settings', icon: Settings },
]

const orders = [
  {
    id: 'CPT-XYZ789',
    destination: 'Beijing',
    image: 'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?q=80&w=400',
    date: '2024-05-15',
    duration: 5,
    guests: 2,
    amount: 579800,
    status: 'Confirmed',
  },
  {
    id: 'CPT-ABC123',
    destination: 'Zhangjiajie',
    image: 'https://images.unsplash.com/photo-1585818772979-6e26827b8c55?q=80&w=400',
    date: '2024-06-20',
    duration: 4,
    guests: 3,
    amount: 809700,
    status: 'Pending',
  },
]

export function AccountContent() {
  const [activeTab, setActiveTab] = useState('orders')

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-bark/10">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-forest border-b-2 border-forest'
                  : 'text-bark/60 hover:text-bark'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-12 h-12 text-bark/20 mx-auto mb-4" />
                <p className="text-bark/60">No bookings yet</p>
                <a href="/destinations" className="text-sage hover:text-forest mt-2 inline-block">
                  Browse destinations →
                </a>
              </div>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="border border-bark/10 rounded-xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-32 md:h-auto relative">
                      <img
                        src={order.image}
                        alt={order.destination}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4 md:p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-serif text-xl text-forest">{order.destination}</h3>
                          <p className="text-sm text-bark/60 font-mono">{order.id}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                          order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-bark/70">
                          <Calendar className="w-4 h-4 text-sage" />
                          <span>{new Date(order.date).toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-bark/70">
                          <Clock className="w-4 h-4 text-sage" />
                          <span>{order.duration} days</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-bark/70">
                          <MapPin className="w-4 h-4 text-sage" />
                          <span>{order.guests} guests</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-forest">
                          <CreditCard className="w-4 h-4" />
                          <span>{formatPrice(order.amount)}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="btn-primary text-sm py-2 px-4">
                          View Details
                        </button>
                        <button className="btn-outline text-sm py-2 px-4">
                          Contact Guide
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="max-w-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center text-forest text-2xl font-serif">
                JD
              </div>
              <div>
                <h3 className="font-serif text-xl text-forest">John Doe</h3>
                <p className="text-bark/60">Member since 2024</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-bark mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full px-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-bark mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="w-full px-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-bark mb-2">Phone</label>
                <input
                  type="tel"
                  defaultValue="+1 555 123 4567"
                  className="w-full px-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50"
                />
              </div>
              <button className="btn-primary">Save Changes</button>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-lg space-y-6">
            <div>
              <h4 className="font-medium text-forest mb-4">Notifications</h4>
              <div className="space-y-3">
                {[
                  { label: 'Email notifications for new messages', checked: true },
                  { label: 'Booking confirmations', checked: true },
                  { label: 'Travel reminders', checked: true },
                  { label: 'Marketing emails', checked: false },
                ].map((item) => (
                  <label key={item.label} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={item.checked}
                      className="w-5 h-5 rounded border-bark/30 text-forest focus:ring-forest"
                    />
                    <span className="text-bark">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-bark/10">
              <h4 className="font-medium text-forest mb-4">Language</h4>
              <select className="w-full px-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="pt">Português</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="ar">العربية</option>
                <option value="ru">Русский</option>
              </select>
            </div>

            <button className="btn-primary">Save Settings</button>
          </div>
        )}
      </div>
    </div>
  )
}
