'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationLinks = [
    { name: 'Collections', href: '/collections' },
    { name: 'Women', href: '/women' },
    { name: 'Men', href: '/men' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'About', href: '/about' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top announcement bar */}
      <div className="bg-fernalion-900 text-white text-center py-2 text-sm">
        <p>Free shipping on orders over $500 | New Collection Now Available</p>
      </div>

      <div className="luxury-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="bg-gradient-to-r from-fernalion-600 to-fernalion-800 text-white px-4 py-2 rounded-lg transition-transform group-hover:scale-105">
              <h1 className="text-2xl font-bold font-luxury tracking-wider">FERNALION</h1>
              <p className="text-xs opacity-80 tracking-widest font-modern">LUXURY COLLECTION</p>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-fernalion-600 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <button className={`p-2 rounded-full transition-colors hover:bg-gray-100 ${
              isScrolled ? 'text-gray-700' : 'text-white hover:bg-white/20'
            }`}>
              <Search className="w-5 h-5" />
            </button>
            
            <button className={`p-2 rounded-full transition-colors hover:bg-gray-100 ${
              isScrolled ? 'text-gray-700' : 'text-white hover:bg-white/20'
            }`}>
              <User className="w-5 h-5" />
            </button>
            
            <button className={`p-2 rounded-full transition-colors hover:bg-gray-100 ${
              isScrolled ? 'text-gray-700' : 'text-white hover:bg-white/20'
            }`}>
              <Heart className="w-5 h-5" />
            </button>
            
            <button className={`relative p-2 rounded-full transition-colors hover:bg-gray-100 ${
              isScrolled ? 'text-gray-700' : 'text-white hover:bg-white/20'
            }`}>
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-fernalion-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="luxury-container py-6">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 font-medium hover:text-fernalion-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
