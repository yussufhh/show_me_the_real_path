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
  FaInstagram
} from 'react-icons/fa';

const Home = () => {
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

  const programs = [
    {
      icon: <FaMosque className="text-3xl" />,
      title: "Da'wah Programs",
      description: "Spreading the message of Islam through educational outreach and community engagement."
    },
    {
      icon: <FaBook className="text-3xl" />,
      title: "Islamic Education",
      description: "Comprehensive educational programs for all ages, from Quran studies to modern Islamic sciences."
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Charity & Assistance",
      description: "Providing essential support to families in need through sustainable charity programs."
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Community Support",
      description: "Building strong Muslim communities through social programs and family support services."
    }
  ];

  const testimonials = [
    {
      quote: "This organization transformed my understanding of Islam and helped me find peace in my heart.",
      author: "Aisha Mohamed",
      role: "Community Member"
    },
    {
      quote: "The educational programs have been life-changing for my children and our entire family.",
      author: "Omar Hassan",
      role: "Parent & Volunteer"
    },
    {
      quote: "Through their charity work, we received support when we needed it most. May Allah reward them.",
      author: "Fatima Abdullahi",
      role: "Beneficiary"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-135deg from-green-800 to-green-600">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Guiding Hearts to the <span className="text-yellow-400">Right Path</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Building a stronger Muslim community through faith, education, and compassionate service
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-8 py-4 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Join Our Mission
          </motion.button>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-16"
          >
            Our Impact in Numbers
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { ref: schoolsRef, inView: schoolsInView, target: 200, label: "Schools Visited", icon: <FaBook /> },
              { ref: studentsRef, inView: studentsInView, target: 500, label: "Students Reached", icon: <FaUsers /> },
              { ref: projectsRef, inView: projectsInView, target: 50, label: "Community Projects", icon: <FaHandsHelping /> },
              { ref: beneficiariesRef, inView: beneficiariesInView, target: 1000, label: "Beneficiaries Supported", icon: <FaHeart /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300"
              >
                <div className="text-green-700 mb-4 flex justify-center">
                  <div className="p-3 bg-green-100 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-green-700 mb-2">
                  <Counter 
                    target={stat.target} 
                    ref={stat.ref} 
                    inView={stat.inView} 
                  />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-16"
          >
            Our Guiding Principles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Our Mission",
                description: "To guide people towards the straight path through authentic Islamic education and compassionate community service.",
                icon: <FaMosque />
              },
              {
                title: "Our Vision",
                description: "A world where every Muslim lives by the teachings of Quran and Sunnah in peace and prosperity.",
                icon: <FaBook />
              },
              {
                title: "Our Objectives",
                description: "Empower communities through education, provide charitable support, and strengthen Islamic values in society.",
                icon: <FaHandsHelping />
              },
              {
                title: "Core Values",
                description: "Faith, Compassion, Integrity, Excellence, and Community Service guided by Islamic principles.",
                icon: <FaHeart />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-green-100"
              >
                <div className="text-green-700 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-16"
          >
            Our Programs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 group"
              >
                <div className="text-green-700 mb-4 group-hover:scale-110 transition duration-300">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-4">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charity Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Support Our Charity Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Your donations help us continue our mission of serving the community and spreading Islamic knowledge
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white text-green-700 p-8 rounded-xl shadow-lg max-w-md mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">Donate via M-Pesa</h3>
            <div className="text-3xl font-bold mb-4">123456</div>
            <p className="text-gray-600 mb-6">Till Number: 123456</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-8 py-3 rounded-full transition duration-300">
              Make a Donation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-16"
          >
            Community Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg border border-green-100"
              >
                <FaQuoteLeft className="text-green-700 text-2xl mb-4" />
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-green-700">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-green-700 mb-6"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Ready to join our mission or learn more about our programs? We'd love to hear from you.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaMosque className="text-2xl" />
                <span className="text-xl font-bold">SHOW ME THE REAL PATH</span>
              </div>
              <p className="text-green-200">
                Guiding hearts to the straight path through faith, education, and community service.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Programs', 'Charity', 'Community', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-green-200 hover:text-white transition duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2 text-green-200">
                <div className="flex items-center space-x-2">
                  <FaPhone />
                  <span>+254 700 000000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope />
                  <span>info@realfpath.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[FaFacebook, FaTwitter, FaInstagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition duration-200"
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 SHOW ME THE REAL PATH (CBO). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;