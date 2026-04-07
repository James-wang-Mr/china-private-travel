import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { AdminDashboard } from '@/components/admin/AdminDashboard'

export default async function AdminPage() {
  // Simple auth check - in production, use proper auth
  const headersList = await headers()
  // For demo, we'll just show the dashboard
  // TODO: Add proper admin authentication
  
  return <AdminDashboard />
}
