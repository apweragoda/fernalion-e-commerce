import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const footerSections = {
    shop: [
      { name: "Women's Collection", href: "/women" },
      { name: "Men's Collection", href: "/men" },
      { name: "Accessories", href: "/accessories" },
      { name: "New Arrivals", href: "/new-arrivals" },
      { name: "Sale", href: "/sale" },
    ],
    support: [
      { name: "Size Guide", href: "/size-guide" },
      { name: "Shipping & Returns", href: "/shipping-returns" },
      { name: "Care Instructions", href: "/care-instructions" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact Us", href: "/contact" },
    ],
    company: [
      { name: "About Fernalion", href: "/about" },
      { name: "Our Story", href: "/story" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Accessibility", href: "/accessibility" },
    ],
  }

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/fernalion' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/fernalion' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/fernalion' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-fernalion-900 py-16">
        <div className="luxury-container text-center">
          <h2 className="text-3xl font-luxury font-bold mb-4">Stay in Style</h2>
          <p className="text-fernalion-100 mb-8 max-w-2xl mx-auto">
            Be the first to know about new collections, exclusive events, and styling tips 
            from our fashion experts.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="btn-primary bg-white text-fernalion-900 hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-fernalion-600 to-fernalion-800 text-white px-4 py-2 rounded-lg inline-block mb-6">
              <h3 className="text-xl font-bold font-luxury tracking-wider">FERNALION</h3>
              <p className="text-xs opacity-80 tracking-widest">LUXURY COLLECTION</p>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Redefining luxury fashion with exceptional craftsmanship and timeless elegance. 
              Each piece in our collection represents the pinnacle of modern sophistication.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>123 Fashion Street, Katunayake, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+94 77 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@fernalion.lk</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="bg-gray-800 p-2 rounded-lg hover:bg-fernalion-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold font-luxury text-lg mb-6">Shop</h4>
            <ul className="space-y-3">
              {footerSections.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold font-luxury text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {footerSections.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold font-luxury text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerSections.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="luxury-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Fernalion. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {footerSections.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
