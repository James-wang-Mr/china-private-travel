import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Noto_Sans_SC } from 'next/font/google'
import { locales, isRtlLocale } from '@/config/i18n'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const notoSansSC = Noto_Sans_SC({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-noto-sc' })

export const metadata: Metadata = {
  title: 'China Private Travel | Custom Tours for Americas',
  description: 'Experience the wonders of China with personalized itineraries, expert guides, and unforgettable memories. Private tours for families and small groups.',
  keywords: 'China private tour, custom China travel, China adventure, Beijing, Chengdu, Zhangjiajie, private guide',
  openGraph: {
    title: 'China Private Travel',
    description: 'Your Private China Adventure Awaits',
    type: 'website',
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  if (!locales.includes(locale as any)) {
    notFound()
  }
  
  const isRTL = isRtlLocale(locale as any)
  
  return (
    <html 
      lang={locale} 
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`${inter.variable} ${playfair.variable} ${notoSansSC.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
