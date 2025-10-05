import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHandsHelping, 
  FaUsers, 
  FaTools, 
  FaGraduationCap,
  FaHeart,
  FaBuilding,
  FaLeaf,
  FaWater
} from 'react-icons/fa';

const AssistancePrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Emergency Assistance Fund",
      description: "Rapid response financial assistance for community members facing unexpected crises and emergencies.",
      icon: FaHeart,
      eligibility: "Community members in crisis",
      responseTime: "24-48 hours",
      coverage: "Up to KES 50,000",
      features: [
        "Medical emergency support",
        "Funeral assistance",
        "Natural disaster relief",
        "Fire and accident support",
        "Family crisis intervention"
      ]
    },
    {
      id: 2,
      title: "Skills Development & Employment",
      description: "Vocational training and job placement assistance to help community members achieve economic independence.",
      icon: FaTools,
      eligibility: "Youth and adults 16+",
      responseTime: "Monthly intake",
      coverage: "Full training costs",
      features: [
        "Technical skills training",
        "Business development support",
        "Job placement assistance",
        "Entrepreneurship mentoring",
        "Microfinance connections"
      ]
    },
    {
      id: 3,
      title: "Healthcare Access Program",
      description: "Ensuring community members have access to quality healthcare through partnerships and direct support.",
      icon: FaHeart,
      eligibility: "All community members",
      responseTime: "Immediate for emergencies",
      coverage: "Varies by need",
      features: [
        "Medical bill assistance",
        "Health insurance support",
        "Prescription medication help",
        "Specialist referrals",
        "Preventive healthcare programs"
      ]
    },
    {
      id: 4,
      title: "Housing & Shelter Support",
      description: "Helping families secure safe, decent housing through various assistance programs and partnerships.",
      icon: FaBuilding,
      eligibility: "Families in need",
      responseTime: "2-4 weeks assessment",
      coverage: "Up to KES 100,000",
      features: [
        "Rent assistance programs",
        "Home repair support",
        "Emergency shelter provision",
        "Housing upgrade assistance",
        "Land acquisition support"
      ]
    }
  ];

  const supportServices = [
    {
      title: "Legal Aid Services",
      description: "Free legal consultation and representation for community members",
      icon: FaGraduationCap,
      beneficiaries: "200+ Cases Handled"
    },
    {
      title: "Counseling & Mental Health",
      description: "Professional counseling and mental health support services",
      icon: FaUsers,
      beneficiaries: "150+ Individuals Helped"
    },
    {
      title: "Environmental Conservation",
      description: "Community-led environmental protection and sustainability programs",
      icon: FaLeaf,
      beneficiaries: "5 Projects Completed"
    },
    {
      title: "Water & Sanitation",
      description: "Clean water access and sanitation facility development",
      icon: FaWater,
      beneficiaries: "1,000+ People Served"
    }
  ];

  const assistanceStats = [
    {
      number: "1,200+",
      label: "Families Assisted",
      description: "Total families who received assistance in the past year"
    },
    {
      number: "KES 8M+",
      label: "Aid Distributed",
      description: "Total value of assistance provided to community"
    },
    {
      number: "24/7",
      label: "Emergency Response",
      description: "Round-the-clock availability for emergency situations"
    },
    {
      number: "95%",
      label: "Success Rate", 
      description: "Percentage of cases successfully resolved"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Submit Application",
      description: "Fill out our assistance request form with required documentation"
    },
    {
      step: 2,
      title: "Assessment",
      description: "Our team reviews your case and conducts a needs assessment"
    },
    {
      step: 3,
      title: "Approval",
      description: "Committee reviews and approves assistance based on criteria"
    },
    {
      step: 4,
      title: "Implementation",
      description: "Assistance is provided according to the approved plan"
    },
    {
      step: 5,
      title: "Follow-up",
      description: "We monitor progress and provide additional support as needed"
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-purple-800 to-purple-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              {...fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Assistance Programs
            </motion.h1>
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Comprehensive support services helping community members overcome challenges and achieve self-sufficiency
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-lg"
            >
              <div className="flex items-center">
                <FaUsers className="mr-2" />
                <span>1,200+ Families Helped</span>
              </div>
              <div className="flex items-center">
                <FaHandsHelping className="mr-2" />
                <span>24/7 Emergency Support</span>
              </div>
              <div className="flex items-center">
                <FaHeart className="mr-2" />
                <span>95% Success Rate</span>
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
              Our Assistance Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Targeted support programs designed to address various challenges facing our community members
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
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <program.icon className="text-2xl text-purple-600" />
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
                    <div className="font-semibold text-purple-600 text-sm">Eligibility</div>
                    <div className="text-gray-700 text-xs">{program.eligibility}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-purple-600 text-sm">Response Time</div>
                    <div className="text-gray-700 text-xs">{program.responseTime}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-purple-600 text-sm">Coverage</div>
                    <div className="text-gray-700 text-xs">{program.coverage}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">What We Cover:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
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

      {/* Additional Support Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Additional Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Specialized services addressing specific community needs
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {supportServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-purple-100 p-4 rounded-lg mb-4 inline-block">
                  <service.icon className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>
                <div className="text-purple-600 font-semibold text-sm">
                  {service.beneficiaries}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
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
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {assistanceStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How to Apply for Assistance
            </h2>
            <p className="text-lg text-gray-600">
              Our streamlined process ensures quick and fair assistance to those in need
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-5 gap-6"
          >
            {applicationProcess.map((process) => (
              <motion.div
                key={process.step}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Assistance? We're Here to Help
            </h2>
            <p className="text-xl mb-8">
              Don't face your challenges alone. Our community assistance programs are designed to help you overcome difficulties and achieve stability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Apply for Assistance
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-800 transition-colors duration-300"
              >
                Emergency Hotline: +254 XXX XXX XXX
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AssistancePrograms;