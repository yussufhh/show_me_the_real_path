import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiUsers, 
  FiStar, 
  FiHeart, 
  FiMapPin,
  FiCalendar,
  FiAward,
  FiTrendingUp
} from 'react-icons/fi'
import { BiGroup, BiHappy, BiLike, BiTrophy } from 'react-icons/bi'

const Community = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      name: "Amina Hassan",
      role: "Parent & Community Member",
      image: "https://images.unsplash.com/photo-1494790108755-2616b25aa89c?w=150&h=150&fit=crop&crop=face",
      quote: "Show Me The Real Path has been instrumental in my children's Islamic education. The programs are well-structured and the teachers are passionate about nurturing both spiritual and academic growth.",
      rating: 5,
      category: "Education"
    },
    {
      name: "Ahmed Ibrahim",
      role: "Local Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "Through their charity programs, my family received support during our most difficult time. The organization truly embodies the spirit of Islamic brotherhood and community care.",
      rating: 5,
      category: "Charity"
    },
    {
      name: "Fatima Mohammed",
      role: "Youth Program Participant",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The da'wah programs opened my eyes to the beauty of Islam. I've grown spiritually and found a sense of purpose in serving my community alongside other passionate youth.",
      rating: 5,
      category: "Da'wah"
    },
    {
      name: "Omar Ali",
      role: "Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "Volunteering with SMTRP has been incredibly rewarding. The organization's approach to community cooperation creates lasting bonds and meaningful impact in people's lives.",
      rating: 5,
      category: "Cooperation"
    }
  ]

  const communityStats = [
    {
      icon: <BiGroup className="text-3xl" />,
      title: "Active Members",
      number: "800+",
      description: "Engaged community members participating in our programs",
      color: "from-green-600 to-green-700"
    },
    {
      icon: <BiHappy className="text-3xl" />,
      title: "Satisfaction Rate",
      number: "98%",
      description: "Community members satisfied with our services and programs",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <BiLike className="text-3xl" />,
      title: "Success Stories",
      number: "200+",
      description: "Lives positively impacted through our various initiatives",
      color: "from-green-700 to-green-800"
    },
    {
      icon: <BiTrophy className="text-3xl" />,
      title: "Recognition",
      number: "15+",
      description: "Awards and recognitions for community service excellence",
      color: "from-yellow-600 to-yellow-700"
    }
  ]

  const recentActivities = [
    {
      title: "Community Iftar Program",
      date: "March 25, 2024",
      participants: "150+ families",
      location: "Central Mosque",
      type: "Community Event"
    },
    {
      title: "Educational Workshop Series",
      date: "March 20, 2024",
      participants: "80 students",
      location: "Community Center",
      type: "Education"
    },
    {
      title: "Charity Food Distribution",
      date: "March 15, 2024",
      participants: "200+ beneficiaries",
      location: "Various Locations",
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
    <section id="community" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="community-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="3" fill="currentColor" opacity="0.3"/>
              <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.2"/>
              <circle cx="25" cy="5" r="1" fill="currentColor" opacity="0.2"/>
              <circle cx="5" cy="25" r="1" fill="currentColor" opacity="0.2"/>
              <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#community-pattern)" />
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
            <span>Community Impact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Building Stronger <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500">Communities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how our community members have benefited from our programs and initiatives
          </p>
        </motion.div>

        {/* Community Stats */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center group"
            >
              <div className={`bg-gradient-to-br ${stat.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500">Community Says</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real people whose lives have been touched by our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Quote mark */}
                <div className="text-6xl text-green-200 font-serif absolute top-4 left-6">"</div>
                
                {/* Category badge */}
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {testimonial.category}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed relative z-10">
                  {testimonial.quote}
                </blockquote>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500">Activities</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest community programs and initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {activity.type}
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {activity.title}
                </h4>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FiCalendar className="text-green-600" />
                    <span className="text-sm">{activity.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FiUsers className="text-green-600" />
                    <span className="text-sm">{activity.participants}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FiMapPin className="text-green-600" />
                    <span className="text-sm">{activity.location}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-medium text-sm">View Details</span>
                    <FiTrendingUp className="text-green-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="10" fill="currentColor"/>
                <circle cx="80" cy="20" r="15" fill="currentColor"/>
                <circle cx="20" cy="80" r="8" fill="currentColor"/>
                <circle cx="80" cy="80" r="12" fill="currentColor"/>
                <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.3"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <FiHeart className="text-6xl text-yellow-300 mx-auto mb-6" />
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Join Our Growing Community
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Be part of a community that values Islamic principles, education, charity, and cooperation. 
                Together, we can make a lasting positive impact in our society.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  Become a Member
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  Volunteer With Us
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Community