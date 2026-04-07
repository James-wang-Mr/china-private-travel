import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const posts = [
  {
    slug: 'best-time-to-visit-china',
    image: 'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?q=80&w=800',
    category: 'Travel Tips',
    readTime: 8,
    date: 'March 15, 2024',
    title: 'Best Time to Visit China: A Complete Guide',
    excerpt: 'Discover the ideal seasons for exploring China based on your interests and preferred activities.',
  },
  {
    slug: 'china-private-tour-vs-group',
    image: 'https://images.unsplash.com/photo-1585037520695-aa362f7029ba?q=80&w=800',
    category: 'Travel Guide',
    readTime: 6,
    date: 'March 10, 2024',
    title: 'Why Private Tours Are Worth It: A Comparison',
    excerpt: 'We break down the benefits of private tours versus group tours for your China adventure.',
  },
  {
    slug: 'must-try-chinese-dishes',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=800',
    category: 'Food & Culture',
    readTime: 5,
    date: 'March 5, 2024',
    title: 'Must-Try Dishes: A Food Lover\'s Guide to China',
    excerpt: 'From Peking duck to Sichuan hot pot, explore the culinary delights that await you.',
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        {/* Hero */}
        <section className="bg-forest text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Travel Blog</h1>
            <p className="text-forest-200 text-lg">
              Tips, stories, and inspiration for your China adventure
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group card overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 bg-sunflower text-bark text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-bark/60 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min read
                    </span>
                  </div>
                  <h2 className="font-serif text-xl text-forest mb-3 group-hover:text-sage transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-bark/70 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="flex items-center gap-2 text-sage font-medium group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
