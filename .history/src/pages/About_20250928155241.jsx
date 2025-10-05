import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaMosque, 
  FaBook, 
  FaHandsHelping, 
  FaUsers,
  FaHeart,
  FaQuoteLeft,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
  FaLeaf,
  FaStar,
  FaAward,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaGlobe,
  FaCalendarAlt,
  FaRocket,
  FaLightbulb,
  FaHandshake
} from 'react-icons/fa';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Counter animation refs
  const schoolsRef = useRef(null);
  const studentsRef = useRef(null);
  const projectsRef = useRef(null);
  const beneficiariesRef = useRef(null);
  
  const schoolsInView = useInView(schoolsRef, { once: true });
  const studentsInView = useInView(studentsRef, { once: true });
  const projectsInView = useInView(projectsRef, { once: true });
  const beneficiariesInView = useInView(beneficiariesRef, { once: true });

  const Counter = ({ target, duration = 2000, ref, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }, [inView, target, duration]);

    return <span ref={ref}>{count}+</span>;
  };

  const timeline = [
    {
      year: "2018",
      title: "Foundation Established",
      description: "Started with a vision to serve the Muslim community in Mandera with just 5 dedicated volunteers.",
      icon: <FaRocket />
    },
    {
      year: "2019",
      title: "First Educational Program",
      description: "Launched our first Quran recitation classes serving 50 children in the community.",
      icon: <FaBook />
    },
    {
      year: "2020",
      title: "Charity Operations Begin",
      description: "Initiated our first charity drive during Ramadan, supporting 200 families in need.",
      icon: <FaHandHoldingHeart />
    },
    {
      year: "2021",
      title: "Community Outreach Expansion",
      description: "Extended our da'wah programs to 10 schools and reached over 1000 students.",
      icon: <FaUsers />
    },
    {
      year: "2022",
      title: "Recognition & Growth",
      description: "Recognized by local authorities and expanded to serve neighboring communities.",
      icon: <FaAward />
    },
    {
      year: "2023",1
      title: "Digital Transformation",
      description: "Launched online programs and digital da'wah initiatives reaching global audiences.",
      icon: <FaGlobe />
    },
    {
      year: "2024",
      title: "Sustainable Development",
      description: "Established permanent programs and partnerships for long-term community impact.",
      icon: <FaLeaf />
    }
  ];

  const focusAreas = [
    {
      icon: <FaMosque className="text-4xl" />,
      title: "Da'wah & Education",
      description: "Spreading Islamic knowledge through comprehensive educational programs, Quran studies, and community outreach initiatives that strengthen faith and understanding.",
      color: "from-green-600 to-green-700"
    },
    {
      icon: <FaHandHoldingHeart className="text-4xl" />,
      title: "Charity & Social Welfare",
      description: "Providing essential support to families in need through sustainable charity programs, emergency relief, and community assistance initiatives.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Community Empowerment",
      description: "Building stronger communities through leadership development, skills training, youth programs, and family support services.",
      color: "from-green-700 to-green-800"
    },
    {
      icon: <FaMosque className="text-4xl" />,
      title: "Cultural Preservation",
      description: "Preserving and promoting Islamic culture, traditions, and values while fostering unity and brotherhood within the community.",
      color: "from-yellow-600 to-yellow-700"
    }
  ];

  const team = [
    {
      name: "Sheikh Ahmed Hassan",
      role: "Founder & Director",
      bio: "A passionate Islamic scholar with over 15 years of experience in community development and da'wah work.",
      image: "👨‍🎓"
    },
    {
      name: "Ustadha Fatima Mohamed",
      role: "Education Coordinator",
      bio: "Dedicated educator specializing in Islamic studies and women's programs with a focus on family development.",
      image: "👩‍🏫"
    },
    {
      name: "Brother Omar Abdullahi",
      role: "Community Outreach Manager",
      bio: "Experienced community organizer committed to building bridges and fostering interfaith dialogue.",
      image: "👨‍💼"
    },
    {
      name: "Sister Aisha Ibrahim",
      role: "Charity Operations Head",
      bio: "Compassionate leader overseeing all charity programs and ensuring efficient distribution of aid.",
      image: "👩‍💻"
    }
  ];

  const partners = [
    { name: "Islamic Society of Kenya", logo: "🕌" },
    { name: "Mandera County Government", logo: "🏛️" },
    { name: "Kenya Red Cross", logo: "❤️" },
    { name: "USAID Kenya", logo: "🤝" },
    { name: "World Vision", logo: "🌍" },
    { name: "Islamic Relief", logo: "🤲" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                <FaMosque className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-green-700">
                SHOW ME THE REAL PATH
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About Us', 'Programs', 'Charity', 'Community', 'Contact'].map((item) => (
                <div key={item} className="relative">
                  {item === 'Programs' ? (
                    <div
                      className="text-gray-700 hover:text-green-700 cursor-pointer font-medium transition duration-300"
                      onMouseEnter={() => setActiveDropdown('programs')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item}
                      {activeDropdown === 'programs' && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2">
                          {['Da'wah', 'Education', 'Charity', 'Assistance'].map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition duration-200"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href="#"
                      className={`font-medium transition duration-300 ${
                        item === 'About Us' 
                          ? 'text-green-700 border-b-2 border-green-700' 
                          : 'text-gray-700 hover:text-green-700'
                      }`}
                    >
                      {item}
                    </a>
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
              {['Home', 'About Us', 'Programs', 'Charity', 'Community', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`block py-3 px-4 transition duration-200 ${
                    item === 'About Us' 
                      ? 'text-green-700 bg-green-50' 
                      : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                  }`}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* 1. Intro Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-green-800 via-green-700 to-green-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="text-yellow-400">Us</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                "Serving humanity through da'wah, education, and compassion."
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Show Me The Real Path (CBO) is a community-based organization dedicated to building stronger 
                Muslim communities through comprehensive Islamic education, charitable assistance, and social 
                empowerment programs that transform lives and strengthen faith.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-8 py-3 rounded-full transition duration-300 transform hover:scale-105">
                  Our Mission
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold px-8 py-3 rounded-full transition duration-300">
                  Get Involved
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <div className="text-center">
                  <div className="text-8xl mb-6">🕌</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Founded in 2018</h3>
                  <p className="text-green-100">
                    Starting from humble beginnings in Mandera, we have grown into a beacon of hope 
                    and positive change for our community.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Our Story / History Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small group of dedicated volunteers to a thriving community organization, 
              our journey has been guided by faith and a commitment to serve.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-green-100 text-green-700 rounded-full mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-700">{item.title}</h3>
                        <span className="text-yellow-600 font-semibold">{item.year}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What We Do / Areas of Focus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">Areas of Focus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses multiple aspects of community development 
              through Islamic principles and modern methodologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-90`}></div>
                <div className="relative p-8 text-white">
                  <div className="mb-6">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                  <p className="text-green-100 leading-relaxed">{area.description}</p>
                  <div className="mt-6">
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm border border-white border-opacity-30 text-white px-6 py-2 rounded-full font-semibold transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Achievements & Milestones */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to serving the community and making a lasting impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { ref: schoolsRef, inView: schoolsInView, target: 200, label: "Schools Visited", icon: <FaBook />, color: "text-green-600" },
              { ref: studentsRef, inView: studentsInView, target: 500, label: "Students Reached", icon: <FaGraduationCap />, color: "text-yellow-600" },
              { ref: projectsRef, inView: projectsInView, target: 50, label: "Projects Completed", icon: <FaHandsHelping />, color: "text-green-700" },
              { ref: beneficiariesRef, inView: beneficiariesInView, target: 1000, label: "Lives Touched", icon: <FaHeart />, color: "text-yellow-700" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className={`mb-4 flex justify-center ${stat.color}`}>
                  <div className="p-4 bg-gradient-to-br from-green-100 to-yellow-100 rounded-full">
                    <div className="text-3xl">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className={`text-5xl font-bold mb-2 ${stat.color}`}>
                  <Counter 
                    target={stat.target} 
                    ref={stat.ref} 
                    inView={stat.inView}
                  />
                </div>
                <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Leadership & Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals who guide our organization with wisdom, 
              compassion, and unwavering commitment to our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden"
              >
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-center">
                  <div className="flex justify-center space-x-4">
                    <FaFacebook className="text-white hover:text-yellow-300 cursor-pointer transition" />
                    <FaTwitter className="text-white hover:text-yellow-300 cursor-pointer transition" />
                    <FaInstagram className="text-white hover:text-yellow-300 cursor-pointer transition" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Partnerships / Collaborations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with respected organizations and institutions to amplify our impact 
              and serve our community more effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition duration-300">
                  {partner.logo}
                </div>
                <h4 className="text-sm font-semibold text-gray-700 group-hover:text-green-700 transition">
                  {partner.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Inspirational Quote / Quranic Verse Callout */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-400 rounded-full opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-yellow-400 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400 rounded-full opacity-10"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-yellow-400 text-6xl mb-8">
              <FaQuoteLeft className="mx-auto" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
              "And whoever does righteous deeds, whether male or female, while being a believer - 
              those will enter Paradise and will not be wronged, [even as much as] the speck on a date seed."
            </blockquote>
            <cite className="text-yellow-300 text-xl font-semibold">
              — Quran 4:124
            </cite>
            <div className="mt-8">
              <p className="text-green-100 text-lg max-w-2xl mx-auto">
                This verse guides our mission to serve all people with righteousness and compassion, 
                believing that our good deeds will be rewarded by Allah.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Location Map (Mandera Town) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">Find Us in Mandera</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Mandera town, our headquarters serves as a hub for 
              community activities and outreach programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-700 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 text-green-700 rounded-full">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">Mandera Central, Near Mandera Mosque<br />P.O. Box 123, Mandera, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 text-green-700 rounded-full">
                      <FaPhone />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+254 700 123 456<br />+254 720 987 654</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 text-green-700 rounded-full">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@smtrp.org<br />programs@smtrp.org</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-600">
                <h4 className="text-lg font-bold text-green-700 mb-3">Office Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Sunday - Thursday:</strong> 8:00 AM - 5:00 PM</p>
                  <p><strong>Friday:</strong> 8:00 AM - 12:00 PM, 2:00 PM - 5:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-500">
                <h4 className="text-lg font-bold text-yellow-700 mb-3">Accessibility</h4>
                <p className="text-gray-600">
                  Our facility is wheelchair accessible and easily reachable by public transport. 
                  We are located just 200 meters from the main Mandera bus station.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Interactive Map Placeholder */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127448.5189888857!2d41.85661544999999!3d3.936467449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041b5e7e5c5e5e5%3A0x5e5e5e5e5e5e5e5e!2sMandera%2C%20Kenya!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="Mandera Location Map"
                ></iframe>
                <div className="absolute inset-0 bg-green-600 bg-opacity-90 flex items-center justify-center rounded-2xl">
                  <div className="text-center text-white">
                    <FaMapMarkerAlt className="text-6xl mb-4 mx-auto text-yellow-400" />
                    <h3 className="text-2xl font-bold mb-2">SMTRP Headquarters</h3>
                    <p className="text-green-100">Mandera Central, Kenya</p>
                    <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-green-900 px-6 py-2 rounded-full font-semibold transition duration-300">
                      View Full Map
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Contact Call-to-Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Us in Making a <span className="text-yellow-400">Difference</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-green-100">
              Together, we can build stronger communities, spread knowledge, and serve those in need. 
              Your support and involvement can transform lives and strengthen our ummah.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-10 py-4 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl"
              >
                <FaHandshake className="inline mr-2" />
                Get Involved
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold px-10 py-4 rounded-full text-lg transition duration-300"
              >
                <FaHeart className="inline mr-2" />
                Donate Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-green-900 font-bold px-10 py-4 rounded-full text-lg transition duration-300"
              >
                <FaPhone className="inline mr-2" />
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <FaMosque className="text-white text-xl" />
                </div>
                <span className="text-xl font-bold">SHOW ME THE REAL PATH</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                A community-based organization dedicated to building stronger Muslim communities 
                through faith, education, and compassionate service.
              </p>
              <div className="flex space-x-4">
                <FaFacebook className="text-2xl hover:text-green-400 cursor-pointer transition" />
                <FaTwitter className="text-2xl hover:text-green-400 cursor-pointer transition" />
                <FaInstagram className="text-2xl hover:text-green-400 cursor-pointer transition" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Programs', 'Charity', 'Community', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-green-400 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p><FaMapMarkerAlt className="inline mr-2" />Mandera, Kenya</p>
                <p><FaPhone className="inline mr-2" />+254 700 123 456</p>
                <p><FaEnvelope className="inline mr-2" />info@smtrp.org</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Show Me The Real Path (CBO). All rights reserved. | Made with ❤️ for the community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;