export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  category: ProductCategory
  subcategory?: string
  sizes: Size[]
  colors: Color[]
  materials: string[]
  rating: number
  reviewCount: number
  isNew?: boolean
  isBestseller?: boolean
  isOnSale?: boolean
  stock: number
  sku: string
  createdAt: string
  updatedAt: string
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
  parentId?: string
}

export interface Size {
  id: string
  name: string
  value: string
  available: boolean
}

export interface Color {
  id: string
  name: string
  hex: string
  available: boolean
}

export interface CartItem {
  id: string
  productId: string
  product: Product
  quantity: number
  size: Size
  color: Color
  addedAt: string
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  dateOfBirth?: string
  phone?: string
  createdAt: string
  updatedAt: string
}

export interface Address {
  id: string
  userId: string
  type: 'shipping' | 'billing'
  firstName: string
  lastName: string
  company?: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault: boolean
}

export interface Order {
  id: string
  userId: string
  orderNumber: string
  status: OrderStatus
  items: OrderItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: PaymentMethod
  createdAt: string
  updatedAt: string
  shippedAt?: string
  deliveredAt?: string
}

export interface OrderItem {
  id: string
  orderId: string
  productId: string
  product: Product
  quantity: number
  size: Size
  color: Color
  price: number
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export interface PaymentMethod {
  id: string
  type: 'card' | 'paypal' | 'bank_transfer'
  last4?: string
  brand?: string
  expiryMonth?: number
  expiryYear?: number
}

export interface Review {
  id: string
  productId: string
  userId: string
  user: Pick<User, 'firstName' | 'lastName' | 'avatar'>
  rating: number
  title: string
  comment: string
  images?: string[]
  verified: boolean
  helpful: number
  createdAt: string
}

export interface WishlistItem {
  id: string
  userId: string
  productId: string
  product: Product
  addedAt: string
}

export interface Newsletter {
  id: string
  email: string
  subscribedAt: string
  isActive: boolean
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  author: string
  tags: string[]
  publishedAt: string
  createdAt: string
  updatedAt: string
}

export interface Collection {
  id: string
  name: string
  slug: string
  description: string
  image: string
  products: Product[]
  isActive: boolean
  createdAt: string
}
