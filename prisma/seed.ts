import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create destinations
  const destinations = [
    {
      slug: 'beijing',
      images: [
        'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?q=80&w=1200',
        'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=1200',
        'https://images.unsplash.com/photo-1517638851339-a711cfcf3279?q=80&w=1200',
      ],
      price: 289900,
      duration: 5,
      maxGuests: 6,
      featured: true,
      translations: {
        create: [
          {
            locale: 'en',
            title: 'Beijing',
            shortDesc: 'Ancient capital with the Great Wall, Forbidden City, and vibrant hutong culture.',
            description: `Beijing, the capital of China, is a city where ancient history meets modern dynamism. Walk through the majestic Forbidden City, stand atop the Great Wall at sunrise, and explore the winding hutong alleys on a traditional rickshaw. Our private tours ensure you experience the city's rich heritage without the crowds.`,
            highlights: ['Great Wall (Mutianyu Section)', 'Forbidden City', 'Temple of Heaven', 'Hutong Tour', 'Summer Palace'],
            included: ['Private guide & driver', 'All entrance fees', 'Traditional lunch', 'Hotel pickup/dropoff', 'Bottled water'],
            notIncluded: ['Flights', 'Accommodation', 'Personal expenses', 'Tipping'],
          },
          {
            locale: 'es',
            title: 'Pekín',
            shortDesc: 'Capital antigua con la Gran Muralla, Ciudad Prohibida y vibrantes callejones hutong.',
            description: `Pekín, la capital de China, es una ciudad donde la historia antigua se encuentra con la dinámica moderna. Camina por la majestuosa Ciudad Prohibida, párate en la Gran Muralla al amanecer, y explora los serpenteantes callejones hutong en un rickshaw tradicional.`,
            highlights: ['Gran Muralla (Sección Mutianyu)', 'Ciudad Prohibida', 'Templo del Cielo', 'Tour Hutong', 'Palacio de Verano'],
            included: ['Guía privado y conductor', 'Todas las entradas', 'Almuerzo tradicional', 'Recogida en hotel', 'Agua embotellada'],
            notIncluded: ['Vuelos', 'Alojamiento', 'Gastos personales', 'Propinas'],
          },
        ],
      },
    },
    {
      slug: 'chengdu',
      images: [
        'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1200',
        'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1200',
      ],
      price: 259900,
      duration: 4,
      maxGuests: 6,
      featured: true,
      translations: {
        create: [
          {
            locale: 'en',
            title: 'Chengdu',
            shortDesc: 'Home of giant pandas, spicy Sichuan cuisine, and ancient irrigation wonders.',
            description: `Chengdu, the capital of Sichuan province, offers a perfect blend of wildlife encounters and culinary adventures. Visit the Giant Panda Base for up-close encounters with these beloved animals, then explore the historic Dujiangyan irrigation system and enjoy a traditional Sichuan hot pot experience.`,
            highlights: ['Giant Panda Base', 'Dujiangyan Irrigation', 'Jinsha Site Museum', 'Sichuan Opera', 'Hot Pot Experience'],
            included: ['Private guide & driver', 'Panda Base ticket', 'Hot pot dinner', 'Comfortable transport', 'Tea ceremony'],
            notIncluded: ['Flights', 'Accommodation', 'Optional activities'],
          },
        ],
      },
    },
    {
      slug: 'zhangjiajie',
      images: [
        'https://images.unsplash.com/photo-1585818772979-6e26827b8c55?q=80&w=1200',
        'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?q=80&w=1200',
      ],
      price: 269900,
      duration: 4,
      maxGuests: 6,
      featured: true,
      translations: {
        create: [
          {
            locale: 'en',
            title: 'Zhangjiajie',
            shortDesc: 'Avatar-like sandstone pillars, Glass Bridge, and pristine forests.',
            description: `Zhangjiajie is where fantasy becomes reality. The towering sandstone pillars that inspired Avatar's floating mountains rise from misty forests in this UNESCO World Heritage site. Walk the world's longest glass bridge, explore pristine hiking trails, and stay in unique forest lodges.`,
            highlights: ['Wulingyuan Scenic Area', 'Glass Bridge', 'Tianzi Mountain', 'Yellow Dragon Cave', 'Forest Lodge'],
            included: ['Private guide & driver', 'Park entrance fees', 'Glass bridge ticket', 'Forest lodge', 'All transport'],
            notIncluded: ['Flights', 'Meals', 'Optional activities'],
          },
        ],
      },
    },
  ]

  for (const dest of destinations) {
    await prisma.destination.upsert({
      where: { slug: dest.slug },
      update: dest,
      create: dest,
    })
    console.log(`Created/updated destination: ${dest.slug}`)
  }

  // Create sample blog posts
  const blogPosts = [
    {
      slug: 'best-time-to-visit-china',
      image: 'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?q=80&w=1200',
      category: 'Travel Tips',
      readTime: 8,
      published: true,
      translations: {
        create: [
          {
            locale: 'en',
            title: 'Best Time to Visit China: A Complete Guide',
            excerpt: 'Discover the ideal seasons for exploring China based on your interests and preferred activities.',
            content: `China is a vast country with diverse climates, so the "best" time to visit really depends on what you want to experience...

Spring (March-May) is perfect for flower viewing and comfortable temperatures...
Summer (June-August) offers longer days but can be hot and rainy in the south...
Autumn (September-November) is often considered the best overall time to visit...
Winter (December-February) offers unique experiences like winter sports and fewer crowds...`,
          },
        ],
      },
    },
    {
      slug: 'china-private-tour-vs-group',
      image: 'https://images.unsplash.com/photo-1585037520695-aa362f7029ba?q=80&w=1200',
      category: 'Travel Guide',
      readTime: 6,
      published: true,
      translations: {
        create: [
          {
            locale: 'en',
            title: 'Why Private Tours Are Worth It: A Comparison',
            excerpt: 'We break down the benefits of private tours versus group tours for your China adventure.',
            content: `When planning a trip to China, one of the biggest decisions you'll make is whether to join a large group tour or opt for a private experience...

**Flexibility**: With a private tour, your itinerary is designed around you...
**Personal Attention**: Your guide can focus entirely on your group's interests...
**Comfort**: Travel in a private vehicle rather than a crowded bus...
**Authentic Experiences**: Access to locations and experiences not available to large groups...`,
          },
        ],
      },
    },
  ]

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    })
    console.log(`Created/updated blog post: ${post.slug}`)
  }

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
