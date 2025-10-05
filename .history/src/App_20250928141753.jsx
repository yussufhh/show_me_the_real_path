import React from 'react'

// Simple Navbar Component
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-3">
          <div className="bg-green-600 p-2 rounded-lg">
            <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-lg text-green-700">SHOW ME THE REAL PATH</h1>
            <p className="text-xs text-gray-600">Community Based Organization</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</a>
          <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">About</a>
          <a href="#programs" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Programs</a>
          <a href="#charity" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Charity</a>
          <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</a>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  </nav>
)

// Hero Section Component
const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-yellow-300 text-lg mb-2">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <p className="text-gray-200 text-sm italic">In the name of Allah, the Most Gracious, the Most Merciful</p>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          SHOW ME THE{' '}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            REAL PATH
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-4xl mx-auto">
          Guiding Our Community Through Da'wah, Education, Charity, and Cooperation
        </p>
        
        <p className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto">
          Building stronger communities through Islamic values, education, and support for those in need
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-yellow-300 text-2xl">👥</span>
            </div>
            <div className="text-3xl font-bold mb-1">500+</div>
            <div className="text-gray-300 text-sm">Students Reached</div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-yellow-300 text-2xl">🏫</span>
            </div>
            <div className="text-3xl font-bold mb-1">200+</div>
            <div className="text-gray-300 text-sm">Schools Visited</div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-yellow-300 text-2xl">⭐</span>
            </div>
            <div className="text-3xl font-bold mb-1">50+</div>
            <div className="text-gray-300 text-sm">Projects Completed</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Learn About Our Mission →
          </button>
          <button 
            onClick={() => scrollToSection('charity')}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
          >
            ❤️ Support Our Cause
          </button>
        </div>
      </div>
    </section>
  )
}

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App