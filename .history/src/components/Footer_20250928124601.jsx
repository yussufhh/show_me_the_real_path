import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiHeart,
  FiArrowUp
} from 'react-icons/fi'
import { 
  BiMosque, 
  BiLogoFacebook, 
  BiLogoTwitter, 
  BiLogoInstagram, 
  BiLogoYoutube,
  BiLogoWhatsapp,
  BiLogoTelegram
} from 'react-icons/bi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Programs', href: '#programs' },
    { name: 'Donate Now', href: '#charity' },
    { name: 'Community', href: '#community' },
    { name: 'Contact Us', href: '#contact' }
  ]

  const programs = [
    { name: 'Da\'wah Programs', href: '#programs' },
    { name: 'Educational Initiatives', href: '#programs' },
    { name: 'Charity Operations', href: '#charity' },
    { name: 'Community Cooperation', href: '#community' },
    { name: 'Youth Programs', href: '#programs' }
  ]

  const supportLinks = [
    { name: 'Volunteer', href: '#community' },
    { name: 'Partnerships', href: '#contact' },
    { name: 'Become a Member', href: '#community' },
    { name: 'Emergency Help', href: '#contact' },
    { name: 'FAQ', href: '#contact' }
  ]

  const socialLinks = [
    { icon: <BiLogoFacebook />, name: 'Facebook', href: '#', color: 'hover:text-blue-500' },
    { icon: <BiLogoTwitter />, name: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: <BiLogoInstagram />, name: 'Instagram', href: '#', color: 'hover:text-pink-500' },
    { icon: <BiLogoYoutube />, name: 'YouTube', href: '#', color: 'hover:text-red-500' },
    { icon: <BiLogoWhatsapp />, name: 'WhatsApp', href: '#', color: 'hover:text-green-500' },
    { icon: <BiLogoTelegram />, name: 'Telegram', href: '#', color: 'hover:text-blue-600' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <polygon points="10,1 4,7 4,13 10,19 16,13 16,7" fill="currentColor" opacity="0.3"/>
              <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Organization Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 p-3 rounded-xl">
                    <BiMosque className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">SHOW ME THE REAL PATH</h3>
                    <p className="text-gray-400 text-sm">Community Based Organization</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                  Guiding our community through Da'wah, education, charity, and cooperation. 
                  Building stronger communities through Islamic values and community service.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <FiMapPin className="text-green-400 flex-shrink-0" />
                    <span className="text-sm">123 Community Street, Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <FiPhone className="text-green-400 flex-shrink-0" />
                    <span className="text-sm">+254 700 123 456</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <FiMail className="text-green-400 flex-shrink-0" />
                    <span className="text-sm">info@smtrp.org</span>
                  </div>
                </div>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`bg-gray-800 hover:bg-gray-700 p-3 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg`}
                      aria-label={social.name}
                    >
                      <div className="text-xl">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Our Programs</h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <button
                      onClick={() => scrollToSection(program.href)}
                      className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {program.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-700"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-2xl font-bold text-white mb-4">Stay Connected</h4>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter to receive updates about our programs, events, and community initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm mb-4 md:mb-0"
              >
                <p className="flex items-center">
                  © {currentYear} Show Me The Real Path (CBO). Made with{' '}
                  <FiHeart className="text-red-500 mx-1 animate-pulse" />
                  for the community.
                </p>
              </motion.div>

              <div className="flex items-center space-x-6">
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200"
                >
                  Terms of Service
                </button>
                
                {/* Scroll to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-green-600 hover:bg-green-500 p-2 rounded-lg text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Scroll to top"
                >
                  <FiArrowUp className="text-lg" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Islamic Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-700 py-6"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-4xl text-yellow-300 mb-2 font-serif">"</div>
            <blockquote className="text-lg font-medium text-white mb-2">
              And whoever does righteous deeds, whether male or female, while being a believer - 
              those will enter Paradise and will not be wronged, [even as much as] the speck on a date seed.
            </blockquote>
            <cite className="text-yellow-200 text-sm">— Quran 4:124</cite>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer