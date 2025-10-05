import React, { useState, useEffect } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

// Professional Navbar - Amoud Foundation Style
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Causes', path: '/programs' },
    { name: 'Ways to Help', path: '/charity' },
    { name: 'News & Events', path: '/community' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">SHOW ME THE REAL PATH</h1>
              <p className="text-xs text-gray-600">Relief & Development</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </NavLink>
            ))}
            
            {/* Quick Donate Button */}
            <NavLink
              to="/charity"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition-colors"
            >
              DONATE NOW
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold"
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/charity"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-4 bg-blue-600 text-white px-6 py-2 rounded text-center font-semibold"
            >
              DONATE NOW
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section - Clean Professional Style
const Hero = () => {
  return (
    <section className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Building Communities Through <span className="text-blue-600">Islamic Values</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Show Me The Real Path impacts local and global communities by helping people help themselves 
            through sustainable humanitarian projects while maintaining trusting relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/charity"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded font-bold text-lg transition-colors"
            >
              DONATE NOW
            </NavLink>
            <NavLink
              to="/about"
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded font-bold text-lg transition-colors"
            >
              LEARN MORE
            </NavLink>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "500+", label: "Students Reached" },
            { number: "200+", label: "Schools Visited" },
            { number: "50+", label: "Projects Completed" },
            { number: "1000+", label: "Families Helped" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-700 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Our Causes Section - Card Based Design
const OurCauses = () => {
  const causes = [
    {
      title: "Da'wah Programs",
      description: "Comprehensive Islamic outreach and education programs designed to spread the beautiful message of Islam with wisdom and compassion.",
      image: "🕌",
      link: "/programs/dawah"
    },
    {
      title: "Education Support",
      description: "Providing comprehensive Islamic and secular education to strengthen both spiritual and academic growth in our community.",
      image: "📚",
      link: "/programs/education"
    },
    {
      title: "Emergency Relief",
      description: "Immediate assistance for families facing urgent financial difficulties and crises in our community.",
      image: "🤲",
      link: "/programs/charity"
    },
    {
      title: "Community Development",
      description: "Building stronger bonds within our community through collaborative projects and mutual support initiatives.",
      image: "🤝",
      link: "/programs/cooperation"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR CAUSES</h2>
          <p className="text-xl text-gray-600">Support The Needy By Your Donations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {causes.map((cause, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 text-center">
                <div className="text-5xl mb-4">{cause.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cause.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{cause.description}</p>
                <div className="space-y-2">
                  <NavLink
                    to={cause.link}
                    className="block bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded text-sm font-semibold transition-colors"
                  >
                    READ MORE
                  </NavLink>
                  <NavLink
                    to="/charity"
                    className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm font-semibold transition-colors"
                  >
                    DONATE NOW
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section - Clean Layout
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">SMTRP APPEALS</h2>
            <p className="text-lg text-gray-600 mb-6">
              Show Me The Real Path impacts the local and global communities by helping people help themselves 
              through sustainable humanitarian projects while maintaining trusting relationships.
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                Beginning with a vision to serve the community, our dedicated volunteers help propel 
                a small education and development organization into a comprehensive community-based organization 
                that today serves several areas across Kenya and beyond.
              </p>
              <p>
                We also work on the home-front including helping with community development and disaster recovery. 
                An active and dedicated volunteer team keeps administrative costs at a minimum.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="text-6xl text-blue-600 mb-4 text-center">🏠</div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">OUR FOUNDATION</h3>
            <p className="text-gray-700 text-center">
              Thank you for helping Show Me The Real Path provide support to thousands of community members!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Ways to Help Section
const WaysToHelp = () => {
  const helpOptions = [
    {
      icon: "💳",
      title: "Monthly Donations",
      description: "Set up recurring monthly donations to provide consistent support for our programs.",
      link: "/charity"
    },
    {
      icon: "🎁",
      title: "One-Time Gifts",
      description: "Make a one-time donation to support specific causes or general operations.",
      link: "/charity"
    },
    {
      icon: "👥",
      title: "Become a Volunteer",
      description: "Join our volunteer team to help people through sustainable humanitarian projects.",
      link: "/contact"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">WAYS TO HELP</h2>
          <p className="text-xl text-gray-600">Multiple ways to support our mission</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {helpOptions.map((option, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <NavLink
                to={option.link}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition-colors"
              >
                {option.title.includes('Volunteer') ? 'JOIN NOW' : 'DONATE NOW'}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Zakat Calculator Section
const ZakatCalculator = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">CALCULATE YOUR ZAKAT</h2>
        <p className="text-xl text-blue-100 mb-4">
          Offering Zakat is one of five pillars of Islam. However, the amount of Zakat owed is often the subject of great discussion.
        </p>
        <p className="text-lg text-blue-100 mb-8">
          So we have put together a very handy Zakat Calculator that will enable you to calculate your Zakat correctly.
        </p>
        <NavLink
          to="/charity"
          className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded font-bold text-lg transition-colors"
        >
          CALCULATE NOW
        </NavLink>
      </div>
    </section>
  )
}

// News & Events Section
const NewsEvents = () => {
  const news = [
    {
      title: "COMMUNITY FOOD SECURITY UPDATE, DECEMBER 2024",
      date: "December 15, 2024",
      excerpt: "Education is the foundation for any community to survive and succeed! Our latest food security programs have reached over 1000 families this month."
    },
    {
      title: "NEW EDUCATIONAL PROGRAMS LAUNCHED",
      date: "November 20, 2024",
      excerpt: "We are excited to announce the launch of new educational initiatives that will benefit students across our community."
    },
    {
      title: "SHOW ME THE REAL PATH ANNUAL REPORT 2024",
      date: "October 30, 2024",
      excerpt: "Review our comprehensive annual report highlighting our achievements and impact in the community throughout 2024."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">NEWS & EVENTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                {item.title}
              </h3>
              <p className="text-sm text-blue-600 mb-3">{item.date}</p>
              <p className="text-gray-600 text-sm">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Professional Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">SHOW ME THE REAL PATH</h3>
                <p className="text-gray-400 text-sm">Relief & Development</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              SMTRP is a registered community-based organization. All donations are used for charitable purposes.
            </p>
            <p className="text-gray-400 text-sm">
              📞 +254 700 123 456<br/>
              ✉️ info@smtrp.org<br/>
              📍 Nairobi, Kenya
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/charity" className="text-gray-300 hover:text-white">Ways to Help</NavLink></li>
              <li><NavLink to="/programs" className="text-gray-300 hover:text-white">Our Causes</NavLink></li>
              <li><NavLink to="/community" className="text-gray-300 hover:text-white">News & Events</NavLink></li>
              <li><NavLink to="/about" className="text-gray-300 hover:text-white">About Us</NavLink></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/contact" className="text-gray-300 hover:text-white">Privacy Policy</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-300 hover:text-white">Donation Policy</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-300 hover:text-white">Join as Volunteer</NavLink></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">Sign up now to get latest news & updates from us</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r text-sm font-semibold">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © Copyright 2025 by Show Me The Real Path | Community Based Organization
          </p>
          <div className="flex space-x-4">
            <button className="text-gray-400 hover:text-white">📘</button>
            <button className="text-gray-400 hover:text-white">🐦</button>
            <button className="text-gray-400 hover:text-white">📷</button>
            <button className="text-gray-400 hover:text-white">📺</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Page Components
const HomePage = () => (
  <div className="min-h-screen">
    <Hero />
    <About />
    <OurCauses />
    <WaysToHelp />
    <ZakatCalculator />
    <NewsEvents />
  </div>
)

const AboutPage = () => (
  <div className="min-h-screen pt-16">
    <About />
  </div>
)

const ProgramsPage = () => (
  <div className="min-h-screen pt-16">
    <OurCauses />
  </div>
)

const CharityPage = () => (
  <div className="min-h-screen pt-16">
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">WAYS TO HELP</h1>
        <p className="text-xl text-gray-600 mb-12">Your generous donations enable us to continue our mission</p>
        
        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Donate</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {[100, 500, 1000, 2000, 5000, 10000].map((amount) => (
              <button key={amount} className="bg-white hover:bg-blue-600 hover:text-white border-2 border-blue-600 text-blue-600 py-3 px-4 rounded font-bold transition-colors">
                KSh {amount}
              </button>
            ))}
          </div>
          <div className="mb-6">
            <input
              type="number"
              placeholder="Enter custom amount (KSh)"
              className="w-full max-w-md px-4 py-3 border-2 border-blue-600 rounded text-center font-semibold"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-bold text-lg">
            DONATE NOW
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-blue-600 rounded-lg p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">M-Pesa Payment</h4>
            <div className="space-y-2 text-left">
              <p><strong>Paybill:</strong> 522522</p>
              <p><strong>Account:</strong> SMTRP2024</p>
              <p className="text-sm text-gray-600">Enter amount and complete payment via M-Pesa</p>
            </div>
          </div>
          <div className="bg-white border-2 border-blue-600 rounded-lg p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Bank Transfer</h4>
            <div className="space-y-2 text-left">
              <p><strong>Bank:</strong> KCB Bank</p>
              <p><strong>Account:</strong> 1234567890</p>
              <p className="text-sm text-gray-600">Direct bank transfer for larger donations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

const CommunityPage = () => (
  <div className="min-h-screen pt-16">
    <NewsEvents />
  </div>
)

const ContactPage = () => (
  <div className="min-h-screen pt-16">
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CONTACT US</h1>
          <p className="text-xl text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600" />
              <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600">
                <option value="">Select Subject</option>
                <option value="general">General Inquiry</option>
                <option value="programs">Program Information</option>
                <option value="donation">Donation & Charity</option>
                <option value="volunteer">Volunteer Opportunities</option>
              </select>
              <textarea placeholder="Your Message" rows={6} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 resize-none" />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold">
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p>123 Community Street<br />Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p>+254 700 123 456</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p>info@smtrp.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/*" element={<ProgramsPage />} />
        <Route path="/charity" element={<CharityPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App