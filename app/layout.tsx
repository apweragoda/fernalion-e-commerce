import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fernalion - Luxury Fashion Collection',
  description: 'Discover Fernalion\'s exclusive collection of luxury garments, crafted with the finest materials and designed for the modern sophisticate.',
  keywords: 'luxury fashion, designer clothing, premium garments, high-end fashion, Sri Lanka luxury brand',
  authors: [{ name: 'Fernalion Team' }],
  creator: 'Fernalion',
  openGraph: {
    title: 'Fernalion - Luxury Fashion Collection',
    description: 'Where Elegance Meets Innovation',
    url: 'https://fernalion.com',
    siteName: 'Fernalion',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernalion - Luxury Fashion Collection',
    description: 'Where Elegance Meets Innovation',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
