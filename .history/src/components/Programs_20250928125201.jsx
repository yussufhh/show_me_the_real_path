import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiBookOpen, 
  FiUsers, 
  FiHeart, 
  FiStar,
  FiMapPin,
  FiCalendar,
  FiArrowRight
} from 'react-icons/fi'
import { BiMosque, BiBook, BiDonateHeart, BiGroup } from 'react-icons/bi'

const Programs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const programs = [
    {
      icon: <BiMosque className="text-4xl" />,
      title: "Da'wah Programs",
      description: "Spreading the message of Islam through organized outreach programs, community talks, and educational seminars.",
      features: [
        "Weekly community talks",
        "Islamic seminars and workshops",
        "Youth engagement programs",
        "Interfaith dialogue sessions"
      ],
      gradient: "from-green-600 to-green-700",
      stats: { number: "150+", label: "Sessions Conducted" }
    },
    {
      icon: <BiBook className="text-4xl" />,
      title: "Educational Initiatives",
      description: "Providing comprehensive Islamic education alongside academic support for students of all ages.",
      features: [
        "Quran memorization classes",
        "Arabic language courses",
        "Islamic studies curriculum",
        "Academic tutoring support"
      ],
      gradient: "from-yellow-500 to-yellow-600",
      stats: { number: "500+", label: "Students Taught" }
    },
    {
      icon: <BiDonateHeart className="text-4xl" />,
      title: "Charity Operations",
      description: "Coordinating charitable activities to support the less fortunate and build a caring community.",
      features: [
        "Food distribution programs",
        "School supplies for needy students",
        "Medical assistance fund",
        "Emergency relief support"
      ],
      gradient: "from-green-700 to-green-800",
      stats: { number: "1000+", label: "Families Helped" }
    },
    {
      icon: <BiGroup className="text-4xl" />,
      title: "Community Cooperation",
      description: "Building stronger bonds within our community through collaborative projects and mutual support.",
      features: [
        "Community development projects",
        "Skill-building workshops",
        "Volunteer coordination",
        "Social support networks"
      ],
      gradient: "from-yellow-600 to-yellow-700",
      stats: { number: "50+", label: "Projects Completed" }
    }
  ]

  const upcomingEvents = [
    {
      date: "Oct 15",
      title: "Community Iftar Program",
      location: "Community Center",
      type: "Community"
    },
    {
      date: "Oct 22",
      title: "Islamic Studies Workshop",
      location: "Main Hall",
      type: "Education"
    },
    {
      date: "Oct 29",
      title: "Charity Drive Launch",
      location: "Multiple Locations",
      type: "Charity"
    }
  ]

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

  return (
    <section id="programs" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="programs-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <polygon points="10,2 18,10 10,18 2,10" fill="currentColor" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#programs-pattern)" />
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
            <FiStar className="text-lg" />
            <span>Our Programs</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500">Community Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse range of programs addresses the spiritual, educational, and social needs of our community
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${program.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="80" cy="20" r="20" fill="currentColor"/>
                    <circle cx="20" cy="80" r="15" fill="currentColor"/>
                  </svg>
                </div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{program.title}</h3>
                      <div className="flex items-center space-x-2 text-white/80">
                        <span className="text-2xl font-bold">{program.stats.number}</span>
                        <span className="text-sm">{program.stats.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  {program.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${program.gradient} rounded-full`} />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 bg-gradient-to-r ${program.gradient} hover:shadow-lg text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group`}
                >
                  <span>Learn More</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500">Events</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us in our upcoming community programs and make a difference together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{event.date.split(' ')[1]}</div>
                    <div className="text-sm text-gray-500">{event.date.split(' ')[0]}</div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                  {event.title}
                </h4>
                
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <FiMapPin className="text-green-600" />
                  <span className="text-sm">{event.location}</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                  <FiCalendar />
                  <span>Register Now</span>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="5" fill="currentColor"/>
                <circle cx="90" cy="10" r="3" fill="currentColor"/>
                <circle cx="10" cy="90" r="4" fill="currentColor"/>
                <circle cx="90" cy="90" r="6" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Join Our Mission?
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Become part of our community and help us create positive change through Islamic values and community service
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Get Involved Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Programs