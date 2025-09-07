'use client'

import React, { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { ShoppingBag, Star, Heart, ArrowRight, Play, Sparkles } from 'lucide-react'

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: "Cashmere Elegance Coat",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=600&fit=crop&auto=format",
      category: "outerwear",
      rating: 4.8,
      isNew: true,
      description: "Luxurious cashmere blend with silk lining"
    },
    {
      id: 2,
      name: "Silk Heritage Blouse",
      price: 459,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop&auto=format",
      category: "tops",
      rating: 4.9,
      isBestseller: true,
      description: "Hand-crafted silk with mother-of-pearl buttons"
    },
    {
      id: 3,
      name: "Tailored Prestige Trousers",
      price: 389,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=600&fit=crop&auto=format",
      category: "bottoms",
      rating: 4.7,
      description: "Italian wool blend with perfect tailoring"
    },
    {
      id: 4,
      name: "Midnight Luxury Dress",
      price: 899,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop&auto=format",
      category: "dresses",
      rating: 4.9,
      isNew: true,
      description: "Exclusive evening wear with hand-sewn details"
    },
    {
      id: 5,
      name: "Executive Blazer Collection",
      price: 729,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop&auto=format",
      category: "outerwear",
      rating: 4.8,
      description: "Contemporary fit with premium construction"
    },
    {
      id: 6,
      name: "Artisan Silk Scarf",
      price: 189,
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=600&fit=crop&auto=format",
      category: "accessories",
      rating: 4.6,
      isBestseller: true,
      description: "Hand-painted design on pure silk"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Collections', count: products.length },
    { id: 'outerwear', name: 'Outerwear', count: products.filter(p => p.category === 'outerwear').length },
    { id: 'tops', name: 'Tops', count: products.filter(p => p.category === 'tops').length },
    { id: 'dresses', name: 'Dresses', count: products.filter(p => p.category === 'dresses').length },
    { id: 'bottoms', name: 'Bottoms', count: products.filter(p => p.category === 'bottoms').length },
    { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const heroFeatures = [
    { icon: Sparkles, text: "Handcrafted Excellence" },
    { icon: Star, text: "Premium Materials" },
    { icon: Heart, text: "Timeless Design" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fernalion-900 via-fernalion-800 to-gray-900">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center text-white luxury-container">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-luxury font-bold mb-6 tracking-wider">
              FERNALION
            </h1>
            <p className="text-xl md:text-3xl mb-4 opacity-90 font-light tracking-wide">
              Where Elegance Meets Innovation
            </p>
            <p className="text-lg mb-12 opacity-80 max-w-3xl mx-auto leading-relaxed">
              Discover our exclusive collection of luxury garments, meticulously crafted with 
              the world's finest materials and designed for the modern sophisticate.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {heroFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-center space-x-2 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                    <IconComponent className="w-6 h-6 text-luxury-gold" />
                    <span className="text-lg font-medium">{feature.text}</span>
                  </div>
                )
              })}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <button className="bg-white text-fernalion-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                Explore Collection
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-fernalion-900 transition-all flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-12 shadow-sm">
        <div className="luxury-container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-luxury font-bold text-gray-900 mb-4">Curated Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each piece represents the pinnacle of luxury fashion, combining heritage craftsmanship with contemporary sophistication.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-fernalion-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                <span>{category.name}</span>
                <span className="ml-2 text-sm opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="card-luxury group cursor-pointer animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                        NEW
                      </span>
                    )}
                    {product.isBestseller && (
                      <span className="bg-fernalion-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                        BESTSELLER
                      </span>
                    )}
                    {product.originalPrice && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                        SALE
                      </span>
                    )}
                  </div>

                  <button className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all transform hover:scale-110">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                  </button>

                  <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2 font-medium">({product.rating})</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-fernalion-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <button className="bg-fernalion-600 text-white p-3 rounded-lg hover:bg-fernalion-700 transition-all transform hover:scale-105 shadow-md">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="btn-primary inline-flex items-center gap-2 shadow-lg">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fernalion-900/50 to-transparent"></div>
        <div className="luxury-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">The Fernalion Legacy</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Born from a vision to redefine luxury fashion, Fernalion represents the perfect 
                fusion of traditional craftsmanship and contemporary design. Our master artisans work 
                with the world's finest materials to create pieces that transcend trends.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Each garment tells a story of excellence, from the initial sketch to the final stitch. 
                We believe that true luxury lies not just in the fabric, but in the passion and 
                precision that goes into every creation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900">
                  Discover Our Heritage
                </button>
                <button className="text-white hover:text-luxury-gold transition-colors inline-flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Documentary
                </button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-t from-fernalion-600/20 to-transparent rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&auto=format" 
                alt="Fernalion Atelier"
                className="rounded-xl shadow-2xl w-full"
              />
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <p className="text-gray-900 font-semibold text-sm">Est. 2024</p>
                <p className="text-gray-600 text-xs">Katunayake, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-luxury font-bold text-gray-900 mb-4">The Fernalion Promise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence extends beyond just creating beautiful garments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Materials",
                description: "Sourced from the world's finest mills and suppliers, ensuring uncompromising quality.",
                icon: "🧵"
              },
              {
                title: "Expert Craftsmanship",
                description: "Every piece is meticulously crafted by master artisans with decades of experience.",
                icon: "✂️"
              },
              {
                title: "Timeless Design",
                description: "Classic silhouettes reimagined for the modern wardrobe, designed to last for generations.",
                icon: "👗"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-luxury font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
