import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMosque, 
  FaBook, 
  FaUsers, 
  FaGlobeAfrica,
  FaHandsHelping,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt
} from 'react-icons/fa';

const DawahPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Friday Khutbah Sessions",
      description: "Weekly Friday sermons focusing on contemporary Islamic issues and guidance for daily life.",
      icon: FaMosque,
      schedule: "Every Friday, 1:00 PM - 2:00 PM",
      location: "Main Mosque Hall",
      participants: "150+ Weekly",
      features: [
        "Contemporary Islamic topics",
        "Arabic and Swahili translations",
        "Q&A sessions after Khutbah",
        "Special guest scholars monthly"
      ]
    },
    {
      id: 2,
      title: "Islamic Study Circles",
      description: "Weekly study groups for Quran, Hadith, and Islamic jurisprudence for different age groups.",
      icon: FaBook,
      schedule: "Saturdays, 2:00 PM - 4:00 PM",
      location: "Community Learning Center",
      participants: "80+ Regular Members",
      features: [
        "Quran Tafseer sessions",
        "Hadith studies",
        "Islamic history lessons",
        "Youth-specific programs"
      ]
    },
    {
      id: 3,
      title: "Community Outreach Program",
      description: "Door-to-door visits and community engagement to spread Islamic values and support.",
      icon: FaUsers,
      schedule: "Weekends, Flexible timing",
      location: "Various neighborhoods",
      participants: "25+ Volunteers",
      features: [
        "Home visits for guidance",
        "New Muslim support",
        "Community problem solving",
        "Interfaith dialogue"
      ]
    },
    {
      id: 4,
      title: "Digital Da'wah Initiative",
      description: "Online Islamic content creation and social media outreach programs.",
      icon: FaGlobeAfrica,
      schedule: "Daily content updates",
      location: "Online platforms",
      participants: "500+ Online followers",
      features: [
        "Daily Islamic reminders",
        "Live Q&A sessions",
        "Educational videos",
        "WhatsApp Islamic groups"
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: "Islamic Youth Conference",
      date: "November 15, 2025",
      time: "9:00 AM - 5:00 PM",
      description: "Annual conference for Muslim youth focusing on career guidance and Islamic values."
    },
    {
      title: "Interfaith Dialogue Session",
      date: "November 28, 2025", 
      time: "3:00 PM - 6:00 PM",
      description: "Community dialogue between different religious leaders for peace and understanding."
    },
    {
      title: "New Muslim Welcome Program",
      date: "December 5, 2025",
      time: "2:00 PM - 4:00 PM",
      description: "Orientation and support program for new converts to Islam."
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              {...fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Da'wah Programs
            </motion.h1>
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Spreading the message of Islam through education, outreach, and community engagement
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-lg"
            >
              <div className="flex items-center">
                <FaUsers className="mr-2" />
                <span>300+ Community Members</span>
              </div>
              <div className="flex items-center">
                <FaMosque className="mr-2" />
                <span>5 Active Programs</span>
              </div>
              <div className="flex items-center">
                <FaGlobeAfrica className="mr-2" />
                <span>Digital Outreach</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Da'wah Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive Islamic programs designed to educate, inspire, and strengthen our community's faith
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {programs.map((program) => (
              <motion.div
                key={program.id}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <program.icon className="text-2xl text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-600">
                      {program.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <FaClock className="mr-2 text-green-600" />
                    <span>{program.schedule}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-green-600" />
                    <span>{program.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaUsers className="mr-2 text-green-600" />
                    <span>{program.participants}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Program Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Join us for these special Da'wah events and programs
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-lg mb-4 inline-block">
                    <FaCalendarAlt className="text-2xl text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <div className="text-green-600 font-semibold mb-2">
                    {event.date}
                  </div>
                  <div className="text-gray-600 mb-4">
                    {event.time}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Da'wah Programs
            </h2>
            <p className="text-xl mb-8">
              Be part of our mission to spread Islamic knowledge and values in our community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Volunteer with Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DawahPrograms;