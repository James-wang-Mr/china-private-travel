import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AccountContent } from '@/components/account/AccountContent'

export default function AccountPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="section-title mb-8">My Account</h1>
          <AccountContent />
        </div>
      </main>
      <Footer />
    </>
  )
}
