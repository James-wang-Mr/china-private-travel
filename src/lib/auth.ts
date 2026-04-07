import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from 'next-auth/providers/credentials'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        // In production, verify against database
        // For demo, allow any valid email format
        const email = credentials.email as string
        if (email.includes('@')) {
          return {
            id: 'demo-user',
            email,
            name: email.split('@')[0],
            role: 'USER',
          }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    session: async ({ session, token }: any) => {
      if (session?.user && token) {
        session.user.id = token.sub || 'demo-user'
        session.user.role = token.role || 'USER'
      }
      return session
    },
    jwt: async ({ token, user }: any) => {
      if (user) {
        token.role = user.role
        token.sub = user.id
      }
      return token
    },
  },
})
