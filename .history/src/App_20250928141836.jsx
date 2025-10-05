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

// About Section Component
const About = () => {
  const aboutCards = [
    {
      icon: "🎯",
      title: "Our Mission",
      description: "To guide our community through comprehensive Islamic education, da'wah activities, charitable works, and community cooperation, fostering spiritual growth and social responsibility."
    },
    {
      icon: "👁️",
      title: "Our Vision", 
      description: "To build a thriving Islamic community that exemplifies the teachings of Islam through education, charity, and mutual support, creating positive impact in society."
    },
    {
      icon: "🧭",
      title: "Our Objectives",
      description: "Provide quality Islamic education, conduct effective da'wah programs, facilitate charitable giving, promote community cooperation, and assist those in need."
    },
    {
      icon: "❤️",
      title: "Our Values",
      description: "Guided by Islamic principles of compassion, integrity, knowledge, unity, and service to Allah and humanity, we strive to create meaningful change in our community."
    }
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>👥</span>
            <span>About Our Organization</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Building a <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">Better Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Show Me The Real Path (CBO) is dedicated to strengthening our Islamic community through 
            education, spiritual guidance, charitable works, and fostering cooperation among community members.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {aboutCards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">Activities</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We focus on four fundamental pillars that strengthen our community and spread Islamic values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🕌", title: "Da'wah", desc: "Spreading Islamic teachings with wisdom" },
              { icon: "📚", title: "Education", desc: "Quality Islamic and secular education" },
              { icon: "🎁", title: "Charity", desc: "Supporting those in need" },
              { icon: "🤝", title: "Cooperation", desc: "Building strong community bonds" }
            ].map((activity, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-green-600 to-green-700 group-hover:from-yellow-500 group-hover:to-yellow-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                  <span className="text-3xl">{activity.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {activity.title}
                </h4>
                <p className="text-gray-600">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white">
            <div className="text-6xl text-yellow-300 mb-4">"</div>
            <blockquote className="text-2xl lg:text-3xl font-medium mb-6">
              And whoever saves a life, it is as if he has saved all of mankind
            </blockquote>
            <cite className="text-yellow-200 text-lg">— Quran 5:32</cite>
          </div>
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
      <About />
    </div>
  )
}

export default App