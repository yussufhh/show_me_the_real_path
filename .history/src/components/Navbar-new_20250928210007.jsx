import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaMosque, 
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Programs', 
      path: '/programs',
      hasDropdown: true,
      dropdownItems: [
        { name: "Da'wah", path: '/programs/dawah' },
        { name: 'Education', path: '/programs/education' },
        { name: 'Charity', path: '/programs/charity' },
        { name: 'Assistance', path: '/programs/assistance' }
      ]
    },
    { name: 'Charity', path: '/charity' },
    { name: 'Community', path: '/community' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                <FaMosque className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-green-700">
                SHOW ME THE REAL PATH
              </span>
            </NavLink>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="text-gray-700 hover:text-green-700 cursor-pointer font-medium transition duration-300"
                    onMouseEnter={() => setActiveDropdown('programs')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `font-medium transition duration-300 ${
                          isActive ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-700 hover:text-green-700'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                    {activeDropdown === 'programs' && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2">
                        {item.dropdownItems.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `font-medium transition duration-300 ${
                        isActive ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-700 hover:text-green-700'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t py-4"
          >
            {navItems.map((item) => (
              <div key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-3 px-4 transition duration-200 ${
                      isActive ? 'text-green-700 bg-green-50' : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
                {item.hasDropdown && (
                  <div className="pl-8">
                    {item.dropdownItems.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.path}
                        className="block py-2 px-4 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;