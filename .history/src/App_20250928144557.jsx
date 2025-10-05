import React, { useState, useEffect } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'

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
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Programs', 
      path: '/programs',
      hasDropdown: true,
      dropdownItems: [
        { name: "Da'wah Programs", path: '/programs/dawah' },
        { name: 'Educational Initiatives', path: '/programs/education' },
        { name: 'Charity Operations', path: '/programs/charity' },
        { name: 'Community Cooperation', path: '/programs/cooperation' }
      ]
    },
    { name: 'Community', path: '/community' },
    { name: 'Charity', path: '/charity' },
    { name: 'Contact', path: '/contact' }
  ]

  const handleNavClick = () => {
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
          <NavLink to="/" className="flex items-center space-x-4 cursor-pointer group">
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
          </NavLink>

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

// Professional Hero Section with Advanced Features
const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0)
  
  const stats = [
    { number: "500+", label: "Students Reached", icon: "👥", description: "Through our educational programs" },
    { number: "200+", label: "Schools Visited", icon: "🏫", description: "For da'wah and outreach" },
    { number: "50+", label: "Projects Completed", icon: "⭐", description: "Community development initiatives" },
    { number: "1000+", label: "Families Helped", icon: "🤲", description: "Through charity programs" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background with Islamic Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <polygon points="10,1 4,7 4,13 10,19 16,13 16,7" fill="currentColor" opacity="0.3"/>
                <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-pattern)" className="text-white"/>
          </svg>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-1/3 left-20 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center text-white max-w-7xl mx-auto">
          {/* Islamic Greeting */}
          <div className="mb-8 animate-fade-in">
            <p className="text-yellow-300 text-xl md:text-2xl font-arabic mb-3">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            <p className="text-green-200 text-base md:text-lg italic font-light">In the name of Allah, the Most Gracious, the Most Merciful</p>
          </div>
          
          {/* Main Title with Advanced Typography */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
              <span className="block text-white drop-shadow-2xl">SHOW ME THE</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                REAL PATH
              </span>
            </h1>
            
            <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-8"></div>
          </div>
          
          {/* Professional Subtitle */}
          <div className="mb-12 max-w-5xl mx-auto">
            <p className="text-2xl md:text-3xl mb-6 text-green-100 font-light leading-relaxed">
              Guiding Our Community Through Da'wah, Education, Charity, and Cooperation
            </p>
            <p className="text-lg md:text-xl text-green-200 font-light leading-relaxed max-w-4xl mx-auto">
              Building stronger communities through Islamic values, comprehensive education, charitable works, 
              and fostering genuine cooperation among community members across Kenya and beyond.
            </p>
          </div>

          {/* Advanced Statistics Display */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center transition-all duration-500 transform ${
                    currentStat === index ? 'scale-110' : 'scale-100 opacity-75'
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer">
                    <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-yellow-300">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base font-semibold mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-green-200 opacity-80">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Live Counter Effect */}
            <div className="text-center">
              <p className="text-green-200 text-sm mb-2">Impact Growing Daily</p>
              <div className="flex justify-center items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <span className="text-green-300 text-sm font-medium">Live Updates</span>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Professional Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('about')}
              className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-400 text-gray-900 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Discover Our Mission</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('charity')}
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-yellow-400/50 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-red-400 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>Support Our Cause</span>
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-white/70 text-xs mt-2">Scroll Down</p>
          </div>
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

// Professional Programs Section
const Programs = () => {
  const programs = [
    {
      icon: "🕌",
      title: "Da'wah Programs",
      description: "Comprehensive Islamic outreach and education programs designed to spread the beautiful message of Islam with wisdom and compassion.",
      features: [
        "Weekly community lectures and seminars",
        "Islamic workshops for youth and adults",
        "Interfaith dialogue and community engagement",
        "Online da'wah through digital platforms"
      ],
      stats: { sessions: "150+", participants: "2000+" },
      color: "from-green-600 to-green-700"
    },
    {
      icon: "📚",
      title: "Educational Initiatives",
      description: "Providing comprehensive Islamic and secular education to strengthen both spiritual and academic growth in our community.",
      features: [
        "Quran memorization and recitation classes",
        "Arabic language learning programs",
        "Islamic studies curriculum for all ages",
        "Academic tutoring and scholarship programs"
      ],
      stats: { students: "500+", schools: "25+" },
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: "🤲",
      title: "Charity Operations",
      description: "Organized charitable activities and relief programs to support the less fortunate and build a caring, compassionate community.",
      features: [
        "Monthly food distribution programs",
        "Emergency relief and disaster response",
        "Medical assistance and healthcare support",
        "Educational scholarships for needy students"
      ],
      stats: { families: "1000+", donations: "KSh 2M+" },
      color: "from-green-700 to-green-800"
    },
    {
      icon: "🤝",
      title: "Community Cooperation",
      description: "Building stronger bonds within our community through collaborative projects, mutual support, and collective development initiatives.",
      features: [
        "Community development projects",
        "Skills training and capacity building",
        "Youth mentorship programs",
        "Women empowerment initiatives"
      ],
      stats: { projects: "50+", volunteers: "200+" },
      color: "from-yellow-600 to-yellow-700"
    }
  ]

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <span>⭐</span>
            <span>Our Comprehensive Programs</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transforming Lives Through{' '}
            <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              Purposeful Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our diverse range of programs addresses the spiritual, educational, and social needs of our community, 
            creating lasting positive impact through Islamic values and community cooperation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {programs.map((program, index) => (
            <div key={index} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${program.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-8">
                  <div className="w-full h-full bg-white/10 rounded-full"></div>
                </div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{program.title}</h3>
                  <div className="flex space-x-6">
                    {Object.entries(program.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold">{value}</div>
                        <div className="text-sm opacity-90 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {program.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  <h4 className="font-bold text-gray-900 text-lg">Key Features:</h4>
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full bg-gradient-to-r ${program.color} text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105`}>
                  Learn More & Join Program
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Professional Charity Section with M-Pesa Integration
const Charity = () => {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [copied, setCopied] = useState(false)

  const donationCategories = [
    {
      title: "General Charity Fund",
      description: "Support our overall charitable activities and community assistance programs",
      goal: 100000,
      raised: 65000,
      donors: 234,
      color: "from-green-600 to-green-700"
    },
    {
      title: "Education Support",
      description: "Provide school supplies, books, and educational scholarships for needy students",
      goal: 80000,
      raised: 48000,
      donors: 156,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Emergency Relief",
      description: "Immediate assistance for families facing urgent financial difficulties and crises",
      goal: 50000,
      raised: 35000,
      donors: 98,
      color: "from-green-700 to-green-800"
    }
  ]

  const predefinedAmounts = [100, 500, 1000, 2000, 5000, 10000]
  const mpesaPaybill = "522522"
  const accountNumber = "SMTRP2024"

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="charity" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <span>❤️</span>
            <span>Charity & Donations</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Make a <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">Lasting Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your generous donations enable us to continue our mission of serving the community, 
            supporting those in need, and spreading Islamic values through our various programs.
          </p>
        </div>

        {/* Donation Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {donationCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm opacity-90">{category.description}</p>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-green-600 font-bold">{Math.round((category.raised / category.goal) * 100)}%</span>
                </div>
                
                <div className="bg-gray-200 rounded-full h-3 mb-4">
                  <div 
                    className={`bg-gradient-to-r ${category.color} h-3 rounded-full transition-all duration-1000`}
                    style={{ width: `${(category.raised / category.goal) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>Raised: <strong>KSh {category.raised.toLocaleString()}</strong></span>
                  <span>Goal: <strong>KSh {category.goal.toLocaleString()}</strong></span>
                </div>
                
                <div className="text-center">
                  <span className="text-sm text-gray-500">{category.donors} donors</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* M-Pesa Donation Interface */}
        <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-3xl shadow-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="bg-green-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="text-white text-4xl">📱</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Donate via <span className="text-green-600">M-Pesa</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Make your donation securely and conveniently using Kenya's trusted M-Pesa mobile money platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* M-Pesa Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">💳</span>
                    <span className="font-bold text-gray-900 text-lg">Paybill Number</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(mpesaPaybill)}
                    className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {copied ? "✓" : "📋"}
                  </button>
                </div>
                <div className="text-4xl font-bold text-green-700 mb-2">{mpesaPaybill}</div>
                <p className="text-gray-600">Enter this as your Paybill Number</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-yellow-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">🏢</span>
                    <span className="font-bold text-gray-900 text-lg">Account Number</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(accountNumber)}
                    className="p-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    {copied ? "✓" : "📋"}
                  </button>
                </div>
                <div className="text-4xl font-bold text-yellow-700 mb-2">{accountNumber}</div>
                <p className="text-gray-600">Enter this as your Account Number</p>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Donation Amount</h4>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount('')
                    }}
                    className={`py-4 px-4 rounded-xl font-bold transition-all duration-200 ${
                      selectedAmount === amount
                        ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg scale-105'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    KSh {amount.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="max-w-md mx-auto">
                <input
                  type="number"
                  placeholder="Enter custom amount (KSh)"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  className="w-full py-4 px-6 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-green-500 text-center text-lg font-semibold"
                />
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">📱</span>
                How to Donate via M-Pesa
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">1.</span>
                    <span>Go to M-Pesa menu on your phone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">2.</span>
                    <span>Select "Lipa na M-Pesa" then "Pay Bill"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">3.</span>
                    <span>Enter Business Number: <strong className="text-green-600">{mpesaPaybill}</strong></span>
                  </li>
                </ol>
                <ol className="list-decimal list-inside space-y-3 text-gray-700" start="4">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">4.</span>
                    <span>Enter Account Number: <strong className="text-yellow-600">{accountNumber}</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">5.</span>
                    <span>Enter Amount: KSh {selectedAmount || customAmount || '___'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">6.</span>
                    <span>Enter your M-Pesa PIN and confirm</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Community Section with Testimonials
const Community = () => {
  const testimonials = [
    {
      name: "Amina Hassan",
      role: "Parent & Community Member",
      image: "👩‍🎓",
      quote: "Show Me The Real Path has been instrumental in my children's Islamic education. The programs are well-structured and the teachers are passionate about nurturing both spiritual and academic growth.",
      rating: 5
    },
    {
      name: "Ahmed Ibrahim", 
      role: "Local Business Owner",
      image: "👨‍💼",
      quote: "Through their charity programs, my family received support during our most difficult time. The organization truly embodies the spirit of Islamic brotherhood and community care.",
      rating: 5
    },
    {
      name: "Fatima Mohammed",
      role: "Youth Program Participant", 
      image: "👩‍🎤",
      quote: "The da'wah programs opened my eyes to the beauty of Islam. I've grown spiritually and found a sense of purpose in serving my community alongside other passionate youth.",
      rating: 5
    }
  ]

  return (
    <section id="community" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <span>👥</span>
            <span>Community Voices</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Building Stronger <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">Communities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Hear from our community members about how our programs have positively impacted their lives and strengthened their faith
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <div className="text-6xl mb-4">"</div>
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                {testimonial.quote}
              </blockquote>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <span>📞</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">Our Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl shadow-xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <input
                type="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              
              <select
                required
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Subject *</option>
                <option value="general">General Inquiry</option>
                <option value="programs">Program Information</option>
                <option value="donation">Donation & Charity</option>
                <option value="volunteer">Volunteer Opportunities</option>
                <option value="other">Other</option>
              </select>
              
              <textarea
                placeholder="Your Message *"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message 📧
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl shadow-xl p-8 lg:p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Address</h4>
                    <p className="text-green-100">123 Community Street<br />Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-green-100">+254 700 123 456<br />+254 720 987 654</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-green-100">info@smtrp.org<br />programs@smtrp.org</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office Hours</h4>
                    <p className="text-green-100">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Emergency Contact */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-2xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">🚨 Emergency Contact</h4>
              <p className="text-gray-700 mb-4">
                For urgent matters or emergency assistance, please call our 24/7 helpline:
              </p>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-yellow-600">+254 700 HELP (4357)</div>
                <div className="text-gray-600 text-sm">Available 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Professional Footer
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-3 rounded-xl">
                <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.8l6 5.4V19h-2v-6h-8v6H6v-7.8l6-5.4z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">SHOW ME THE REAL PATH</h3>
                <p className="text-gray-400">Community Based Organization</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Guiding our community through Da'wah, education, charity, and cooperation. 
              Building stronger communities through Islamic values and community service.
            </p>

            <div className="flex space-x-4">
              {['📘', '🐦', '📷', '🔗'].map((icon, index) => (
                <button key={index} className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors">
                  <span className="text-xl">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Programs', 'Community', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-300 hover:text-green-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {["Da'wah Programs", "Education", "Charity", "Community Support"].map((program) => (
                <li key={program}>
                  <a href="#programs" className="text-gray-300 hover:text-green-400 transition-colors">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Show Me The Real Path (CBO). Made with ❤️ for the community.
          </p>
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Islamic Quote */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-4xl text-yellow-300 mb-2">"</div>
          <blockquote className="text-lg font-medium text-white mb-2">
            And whoever does righteous deeds, whether male or female, while being a believer - 
            those will enter Paradise and will not be wronged.
          </blockquote>
          <cite className="text-yellow-200">— Quran 4:124</cite>
        </div>
      </div>
    </footer>
  )
}

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Charity />
      <Community />
      <Contact />
      <Footer />
    </div>
  )
}

export default App