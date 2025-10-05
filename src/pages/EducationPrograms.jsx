import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBook, 
  FaGraduationCap, 
  FaUsers, 
  FaChild,
  FaLanguage,
  FaDesktop,
  FaCertificate,
  FaChalkboardTeacher
} from 'react-icons/fa';

const EducationPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Islamic Studies Curriculum",
      description: "Comprehensive Islamic education covering Quran, Hadith, Fiqh, and Islamic history for all age groups.",
      icon: FaBook,
      ageGroup: "Ages 5-Adult",
      duration: "Year-round program",
      students: "120+ Students",
      features: [
        "Quran memorization (Hifz)",
        "Arabic language basics",
        "Islamic jurisprudence (Fiqh)",
        "Prophet's biography (Seerah)",
        "Islamic morals and ethics"
      ]
    },
    {
      id: 2,
      title: "Adult Literacy Program", 
      description: "Basic literacy and numeracy skills for adults in the community, taught in Swahili and Somali.",
      icon: FaGraduationCap,
      ageGroup: "Adults 18+",
      duration: "6-month cycles",
      students: "45+ Learners",
      features: [
        "Reading and writing in Swahili",
        "Basic mathematics",
        "Somali language literacy",
        "Life skills education",
        "Certificate upon completion"
      ]
    },
    {
      id: 3,
      title: "Youth Skills Development",
      description: "Practical skills training for youth including computer literacy, entrepreneurship, and vocational skills.",
      icon: FaDesktop,
      ageGroup: "Ages 16-25",
      duration: "3-6 month courses",
      students: "60+ Youth",
      features: [
        "Computer basics and MS Office",
        "Digital marketing skills",
        "Small business management",
        "Technical vocational training",
        "Job placement assistance"
      ]
    },
    {
      id: 4,
      title: "Children's Islamic School",
      description: "Weekend Islamic education program for children focusing on Quran, Islamic values, and character building.",
      icon: FaChild,
      ageGroup: "Ages 5-15",
      duration: "Weekend classes",
      students: "80+ Children",
      features: [
        "Quran recitation with Tajweed",
        "Islamic stories and lessons",
        "Arabic alphabet and basics",
        "Islamic character development",
        "Fun learning activities"
      ]
    }
  ];

  const achievements = [
    {
      number: "150+",
      label: "Certificates Awarded",
      icon: FaCertificate
    },
    {
      number: "25+",
      label: "Qualified Teachers",
      icon: FaChalkboardTeacher
    },
    {
      number: "8",
      label: "Years of Excellence",
      icon: FaGraduationCap
    },
    {
      number: "300+",
      label: "Lives Transformed",
      icon: FaUsers
    }
  ];

  const testimonials = [
    {
      name: "Amina Hassan",
      role: "Adult Literacy Graduate",
      quote: "The literacy program changed my life. I can now help my children with homework and manage my small business better.",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Ahmed Omar",
      role: "Youth Skills Program Graduate", 
      quote: "The computer skills I learned here helped me get my first job. Now I'm supporting my family and continuing my education.",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Fatuma Ali",
      role: "Parent",
      quote: "My children love the weekend Islamic classes. They're learning so much about their faith while having fun.",
      image: "/api/placeholder/100/100"
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              {...fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Education Programs
            </motion.h1>
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Empowering our community through Islamic education, literacy, and practical skills development
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-lg"
            >
              <div className="flex items-center">
                <FaUsers className="mr-2" />
                <span>300+ Students</span>
              </div>
              <div className="flex items-center">
                <FaBook className="mr-2" />
                <span>Multiple Programs</span>
              </div>
              <div className="flex items-center">
                <FaCertificate className="mr-2" />
                <span>Certified Courses</span>
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
              Our Education Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive educational opportunities for all ages, combining Islamic knowledge with practical skills
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
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <program.icon className="text-2xl text-blue-600" />
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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-blue-600 text-sm">Age Group</div>
                    <div className="text-gray-700 text-sm">{program.ageGroup}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-blue-600 text-sm">Duration</div>
                    <div className="text-gray-700 text-sm">{program.duration}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-blue-600 text-sm">Students</div>
                    <div className="text-gray-700 text-sm">{program.students}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
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

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600">
              Measuring success through the lives we've transformed
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-blue-100 p-4 rounded-lg mb-4 inline-block">
                    <achievement.icon className="text-3xl text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600">
                    {achievement.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our students and their transformative experiences
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FaUsers className="text-2xl text-gray-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {testimonial.name}
                  </h3>
                  <div className="text-blue-600 text-sm mb-4">
                    {testimonial.role}
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-xl mb-8">
              Join our education programs and unlock your potential through knowledge and skills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Enroll Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EducationPrograms;