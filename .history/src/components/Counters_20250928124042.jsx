import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiUsers, 
  FiBookOpen, 
  FiHeart, 
  FiAward,
  FiHome,
  FiGift
} from 'react-icons/fi'
import { BiMosque, BiGroup } from 'react-icons/bi'

const AnimatedCounter = ({ end, duration = 2000, inView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      let startTime
      let animationFrame

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / duration

        if (progress < 1) {
          setCount(Math.floor(end * progress))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, inView])

  return count
}

const Counters = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  const stats = [
    {
      icon: <FiUsers className="text-4xl" />,
      number: 500,
      suffix: '+',
      label: 'Students Reached',
      description: 'Through our educational programs',
      gradient: 'from-green-600 to-green-700'
    },
    {
      icon: <BiMosque className="text-4xl" />,
      number: 200,
      suffix: '+',
      label: 'Schools Visited',
      description: 'For da\'wah and educational outreach',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <FiHeart className="text-4xl" />,
      number: 1000,
      suffix: '+',
      label: 'Families Helped',
      description: 'Through our charity programs',
      gradient: 'from-green-700 to-green-800'
    },
    {
      icon: <FiAward className="text-4xl" />,
      number: 50,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Community development initiatives',
      gradient: 'from-yellow-600 to-yellow-700'
    },
    {
      icon: <FiGift className="text-4xl" />,
      number: 25000,
      suffix: '+',
      label: 'Meals Distributed',
      description: 'To families in need',
      gradient: 'from-green-600 to-yellow-600'
    },
    {
      icon: <BiGroup className="text-4xl" />,
      number: 150,
      suffix: '+',
      label: 'Active Volunteers',
      description: 'Dedicated community members',
      gradient: 'from-yellow-500 to-green-600'
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="counter-pattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="7.5" cy="7.5" r="1" fill="currentColor"/>
              <circle cx="3" cy="3" r="0.5" fill="currentColor"/>
              <circle cx="12" cy="3" r="0.5" fill="currentColor"/>
              <circle cx="3" cy="12" r="0.5" fill="currentColor"/>
              <circle cx="12" cy="12" r="0.5" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#counter-pattern)" />
        </svg>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/4 w-20 h-20 bg-yellow-400/10 rounded-full blur-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-yellow-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FiAward className="text-lg" />
            <span>Our Impact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Making a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">Real Difference</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Numbers that reflect our commitment to serving the community and spreading Islamic values
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-yellow-300 group-hover:bg-white/30 transition-all duration-300"
              >
                {stat.icon}
              </motion.div>

              {/* Counter */}
              <div className="mb-4">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2 leading-none">
                  <AnimatedCounter end={stat.number} inView={inView} />
                  <span className="text-yellow-300">{stat.suffix}</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-200 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Decorative border */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r ${stat.gradient} rounded-full group-hover:w-24 transition-all duration-300`} />
              
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom section with quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="text-6xl text-yellow-300 mb-4 font-serif">"</div>
            <blockquote className="text-2xl lg:text-3xl font-medium text-white mb-6 leading-relaxed">
              The best of people are those who benefit others
            </blockquote>
            <cite className="text-yellow-200 text-lg">— Prophet Muhammad (PBUH)</cite>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Join Our Community Impact
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Counters