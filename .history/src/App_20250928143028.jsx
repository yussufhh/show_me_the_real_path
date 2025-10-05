import React, { useState, useEffect } from 'react'

// Professional Navbar Component with Advanced Features
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { 
      name: 'Programs', 
      href: '#programs',
      hasDropdown: true,
      dropdownItems: [
        { name: "Da'wah Programs", href: '#programs' },
        { name: 'Educational Initiatives', href: '#programs' },
        { name: 'Charity Operations', href: '#charity' },
        { name: 'Community Cooperation', href: '#community' }
      ]
    },
    { name: 'Community', href: '#community' },
    { name: 'Charity', href: '#charity' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
    setProgramsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Professional Logo */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => scrollToSection('#home')}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-green-600 to-green-800 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.8l6 5.4V19h-2v-6h-8v6H6v-7.8l6-5.4z"/>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className={`font-bold text-xl transition-colors duration-300 ${
                scrolled ? 'text-green-700' : 'text-white'
              }`}>
                SHOW ME THE REAL PATH
              </h1>
              <p className={`text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-gray-600' : 'text-green-200'
              }`}>
                Community Based Organization
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => setProgramsOpen(true)}
                    onMouseLeave={() => setProgramsOpen(false)}
                  >
                    <button className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                      scrolled 
                        ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                        : 'text-white hover:text-yellow-300 hover:bg-white/10'
                    }`}>
                      <span>{item.name}</span>
                      <svg className={`w-4 h-4 transition-transform ${programsOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    {programsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 transform opacity-100 scale-100 transition-all duration-200">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <button
                            key={dropdownItem.name}
                            onClick={() => scrollToSection(dropdownItem.href)}
                            className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium"
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                      scrolled 
                        ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                        : 'text-white hover:text-yellow-300 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            
            {/* Professional Donate Button */}
            <button
              onClick={() => scrollToSection('#charity')}
              className="relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>Donate Now</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100">
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setProgramsOpen(!programsOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors font-semibold"
                    >
                      <span>{item.name}</span>
                      <svg className={`w-5 h-5 transition-transform ${programsOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {programsOpen && (
                      <div className="ml-6 mt-2 space-y-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <button
                            key={dropdownItem.name}
                            onClick={() => scrollToSection(dropdownItem.href)}
                            className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg font-semibold transition-colors"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            
            <button
              onClick={() => scrollToSection('#charity')}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 px-6 py-4 rounded-full font-bold transition-all duration-300 shadow-lg mt-4"
            >
              💝 Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

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