import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <FaExclamationTriangle className="text-8xl text-yellow-500 mx-auto mb-6" />
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">404</h1>
        </motion.div>

        <motion.div {...fadeInUp} className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're sorry, but the page you're looking for doesn't exist. It may have been moved, deleted, or you entered the wrong URL.
          </p>
        </motion.div>

        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            <FaHome className="mr-2" />
            Back to Home
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-300"
          >
            <FaSearch className="mr-2" />
            Browse Programs
          </Link>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-gray-500"
        >
          <p className="mb-2">Need help? Contact us:</p>
          <p>Email: info@showmetherealpath.org</p>
          <p>Phone: +254 XXX XXX XXX</p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;