import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiTarget, 
  FiEye, 
  FiCompass, 
  FiHeart,
  FiUsers,
  FiBookOpen,
  FiGift,
  FiHandHeart 
} from 'react-icons/fi'
import { BiMosque } from 'react-icons/bi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  }

  const aboutCards = [
    {
      icon: <FiTarget className="text-3xl" />,
      title: "Our Mission",
      description: "To guide our community through comprehensive Islamic education, da'wah activities, charitable works, and community cooperation, fostering spiritual growth and social responsibility.",
      gradient: "from-green-600 to-green-700"
    },
    {
      icon: <FiEye className="text-3xl" />,
      title: "Our Vision",
      description: "To build a thriving Islamic community that exemplifies the teachings of Islam through education, charity, and mutual support, creating positive impact in society.",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <FiCompass className="text-3xl" />,
      title: "Our Objectives",
      description: "Provide quality Islamic education, conduct effective da'wah programs, facilitate charitable giving, promote community cooperation, and assist those in need within our society.",
      gradient: "from-green-700 to-green-800"
    },
    {
      icon: <FiHeart className="text-3xl" />,
      title: "Our Values",
      description: "Guided by Islamic principles of compassion, integrity, knowledge, unity, and service to Allah and humanity, we strive to create meaningful change in our community.",
      gradient: "from-yellow-600 to-yellow-700"
    }
  ]

  const activities = [
    {
      icon: <BiMosque className="text-2xl" />,
      title: "Da'wah",
      description: "Spreading Islamic teachings with wisdom and compassion"
    },
    {
      icon: <FiBookOpen className="text-2xl" />,
      title: "Education",
      description: "Providing quality Islamic and secular education"
    },
    {
      icon: <FiGift className="text-2xl" />,
      title: "Charity",
      description: "Supporting those in need through organized giving"
    },
    {
      icon: <FiHandHeart className="text-2xl" />,
      title: "Cooperation",
      description: "Building strong community bonds and partnerships"
    }
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-pattern)" />
        </svg>
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
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FiUsers className="text-lg" />
            <span>About Our Organization</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500">Better Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Show Me The Real Path (CBO) is dedicated to strengthening our Islamic community through 
            education, spiritual guidance, charitable works, and fostering cooperation among community members.
          </p>
        </motion.div>

        {/* Main Cards Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Card background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="p-8 relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${card.gradient} text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {card.description}
                </p>
                
                {/* Decorative element */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500">Activities</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We focus on four fundamental pillars that strengthen our community and spread Islamic values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-green-600 to-green-700 group-hover:from-yellow-500 group-hover:to-yellow-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className="text-white">
                    {activity.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                  {activity.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="2" fill="currentColor"/>
                <circle cx="80" cy="20" r="2" fill="currentColor"/>
                <circle cx="20" cy="80" r="2" fill="currentColor"/>
                <circle cx="80" cy="80" r="2" fill="currentColor"/>
                <circle cx="50" cy="50" r="3" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="text-6xl text-yellow-300 mb-4 font-serif">"</div>
              <blockquote className="text-2xl lg:text-3xl font-medium mb-6 leading-relaxed">
                And whoever saves a life, it is as if he has saved all of mankind
              </blockquote>
              <cite className="text-yellow-200 text-lg">— Quran 5:32</cite>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About