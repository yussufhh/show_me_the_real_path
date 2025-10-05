import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { BiMosque } from 'react-icons/bi'

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

  const programs = [
    { name: 'Da\'wah', href: '#programs' },
    { name: 'Education', href: '#programs' },
    { name: 'Charity', href: '#charity' },
    { name: 'Community Assistance', href: '#community' }
  ]

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs', hasDropdown: true },
    { name: 'Charity', href: '#charity' },
    { name: 'Community', href: '#community' },
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-2 rounded-lg">
              <BiMosque className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className={`font-bold text-lg transition-colors duration-300 ${
                scrolled ? 'text-green-700' : 'text-white'
              }`}>
                SHOW ME THE REAL PATH
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                scrolled ? 'text-gray-600' : 'text-gray-200'
              }`}>
                Community Based Organization
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setProgramsOpen(true)}
                    onMouseLeave={() => setProgramsOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md font-medium transition-all duration-200 hover:bg-green-600 hover:text-white ${
                        scrolled ? 'text-gray-700' : 'text-white'
                      }`}
                    >
                      <span>{item.name}</span>
                      <FiChevronDown className={`transform transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {programsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                        >
                          {programs.map((program) => (
                            <button
                              key={program.name}
                              onClick={() => scrollToSection(program.href)}
                              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                            >
                              {program.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`px-3 py-2 rounded-md font-medium transition-all duration-200 hover:bg-green-600 hover:text-white ${
                      scrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#charity')}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Donate Now
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setProgramsOpen(!programsOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
                      >
                        <span className="font-medium">{item.name}</span>
                        <FiChevronDown className={`transform transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {programsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-1"
                          >
                            {programs.map((program) => (
                              <button
                                key={program.name}
                                onClick={() => scrollToSection(program.href)}
                                className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors"
                              >
                                {program.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md font-medium transition-colors"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#charity')}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg mt-4"
              >
                Donate Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar