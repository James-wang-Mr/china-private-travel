/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
  i18n: {
    locales: ['en', 'es', 'pt', 'fr', 'de', 'ar', 'ru'],
    defaultLocale: 'en',
    localeDetection: false,
  },
}

module.exports = nextConfig
