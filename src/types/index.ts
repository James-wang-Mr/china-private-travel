export interface DestinationData {
  id: string
  slug: string
  title: string
  shortDesc: string
  description: string
  highlights: string[]
  included: string[]
  notIncluded: string[]
  images: string[]
  price: number
  duration: number
  featured: boolean
  activities: ActivityData[]
  reviews: ReviewData[]
}

export interface ActivityData {
  id: string
  slug: string
  name: string
  description: string
  price: number
  icon: string
  image?: string
}

export interface ReviewData {
  id: string
  rating: number
  comment: string
  authorName: string
  authorImage?: string
  createdAt: Date
}

export interface CartItem {
  destinationId: string
  destination: DestinationData
  date: Date
  guests: number
  activities: ActivityData[]
  notes?: string
}

export interface OrderData {
  id: string
  orderNumber: string
  destination: DestinationData
  date: Date
  guests: number
  activities: ActivityData[]
  totalAmount: number
  status: 'PENDING' | 'CONFIRMED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
  customerName: string
  customerEmail: string
  createdAt: Date
}
