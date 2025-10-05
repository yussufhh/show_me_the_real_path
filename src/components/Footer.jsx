import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaMosque, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Charity', path: '/charity' },
    { name: 'Community', path: '/community' },
    { name: 'Contact', path: '/contact' }
  ];

  const programLinks = [
    { name: "Da'wah Programs", path: '/programs/dawah' },
    { name: 'Education Programs', path: '/programs/education' },
    { name: 'Charity Programs', path: '/programs/charity' },
    { name: 'Assistance Programs', path: '/programs/assistance' }
  ];

  const socialLinks = [
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaYoutube, url: '#', label: 'YouTube' },
    { icon: FaWhatsapp, url: '#', label: 'WhatsApp' }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="bg-green-800 text-white">
      {/* Newsletter Section */}
      <motion.div 
        {...fadeInUp}
        className="bg-green-900 py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected with Our Community</h3>
            <p className="text-green-200 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates on our programs, events, and community activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Organization Info */}
            <motion.div {...fadeInUp}>
              <div className="flex items-center space-x-2 mb-4">
                <FaMosque className="text-2xl text-yellow-400" />
                <span className="text-xl font-bold">SHOW ME THE REAL PATH</span>
              </div>
              <p className="text-green-200 mb-4">
                A Community-Based Organization dedicated to guiding hearts to the straight path through 
                Islamic education, da'wah, charity, and community service in Mandera, Kenya.
              </p>
              <div className="text-sm text-green-300">
                <p className="mb-1">Est. 2016 | CBO Registration: XXX/2016</p>
                <p>Serving the Islamic community with dedication</p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-green-200 hover:text-yellow-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-200"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Program Links */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="font-bold text-lg mb-4">Our Programs</h3>
              <ul className="space-y-2">
                {programLinks.map((program) => (
                  <li key={program.name}>
                    <Link 
                      to={program.path} 
                      className="text-green-200 hover:text-yellow-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-200"></span>
                      {program.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info & Social Media */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
              <div className="space-y-3 text-green-200 mb-6">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-yellow-400" />
                  <span>+254 700 000000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-yellow-400" />
                  <span>info@showmetherealpath.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-yellow-400" />
                  <span>Mandera, Kenya</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      className="bg-green-700 hover:bg-yellow-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <social.icon className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 py-6 bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-green-200 text-sm mb-4 sm:mb-0">
              <p className="flex items-center">
                &copy; {currentYear} Show Me The Real Path (CBO). Made with 
                <FaHeart className="text-red-500 mx-1" /> 
                for the community.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy" className="text-green-200 hover:text-yellow-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-green-200 hover:text-yellow-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-green-200 hover:text-yellow-400 transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;