'use client'

import { useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { Mail, Lock, Facebook } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      
      if (result?.error) {
        setError('Invalid email or password')
      } else {
        window.location.href = '/account'
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    }
    
    setIsLoading(false)
  }

  const handleFacebookLogin = () => {
    signIn('facebook', { callbackUrl: '/account' })
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-forest to-sage rounded-xl flex items-center justify-center">
            <span className="text-white text-2xl">🦞</span>
          </div>
          <span className="font-serif text-2xl text-forest">China Private Travel</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="font-serif text-2xl text-forest text-center mb-6">Welcome Back</h1>

          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          {/* Facebook Login */}
          <button
            onClick={handleFacebookLogin}
            className="w-full flex items-center justify-center gap-3 bg-[#1877F2] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#166FE5] transition-colors mb-6"
          >
            <Facebook className="w-5 h-5" />
            Continue with Facebook
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-bark/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-bark/50">or continue with email</span>
            </div>
          </div>

          {/* Email Login */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-bark mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-bark/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-bark mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-bark/40" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-bark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/50"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-bark/30 text-forest focus:ring-forest" />
                <span className="text-bark/70">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sage hover:text-forest transition-colors">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <p className="text-center text-sm text-bark/60 mt-6">
            Don't have an account?{' '}
            <Link href="/register" className="text-sage hover:text-forest font-medium transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
