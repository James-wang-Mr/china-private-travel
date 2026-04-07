import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Noto_Sans_SC } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const notoSansSC = Noto_Sans_SC({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-noto-sc' })

export const metadata: Metadata = {
  title: 'China Private Travel | Custom Tours for Americas',
  description: 'Experience the wonders of China with personalized itineraries, expert guides, and unforgettable memories.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${notoSansSC.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
