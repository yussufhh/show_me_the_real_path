import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHandsHelping, 
  FaGift, 
  FaWater, 
  FaBreadSlice,
  FaHeart,
  FaUsers,
  FaMobile,
  FaChartLine
} from 'react-icons/fa';

const CharityPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Emergency Food Relief",
      description: "Providing essential food packages to families in crisis situations and during drought periods.",
      icon: FaBreadSlice,
      impact: "500+ Families Served",
      frequency: "Weekly distributions",
      budget: "KES 200,000/month",
      features: [
        "Rice, beans, and cooking oil packages",
        "Fresh vegetables when available",
        "Special meals during Ramadan",
        "Emergency food for disasters",
        "Nutrition support for children"
      ]
    },
    {
      id: 2,
      title: "Clean Water Initiative", 
      description: "Installing boreholes and water systems to provide clean, safe drinking water to underserved communities.",
      icon: FaWater,
      impact: "12 Boreholes Completed",
      frequency: "Ongoing projects",
      budget: "KES 800,000/project",
      features: [
        "Solar-powered water pumps",
        "Community water taps",
        "Water storage tanks",
        "Maintenance training",
        "Water quality testing"
      ]
    },
    {
      id: 3,
      title: "Orphan Sponsorship Program",
      description: "Comprehensive support for orphaned children including education, healthcare, and basic necessities.",
      icon: FaHeart,
      impact: "85 Orphans Supported",
      frequency: "Monthly support",
      budget: "KES 5,000/child/month",
      features: [
        "School fees and supplies",
        "Healthcare coverage",
        "Clothing and shoes",
        "Mentorship programs",
        "Life skills training"
      ]
    },
    {
      id: 4,
      title: "Widow Support Program",
      description: "Economic empowerment and social support for widowed women in the community.",
      icon: FaUsers,
      impact: "120+ Widows Assisted",
      frequency: "Bi-monthly programs",
      budget: "KES 150,000/month",
      features: [
        "Small business loans",
        "Skills training workshops",
        "Monthly food assistance",
        "Healthcare support",
        "Legal assistance"
      ]
    }
  ];

  const donationMethods = [
    {
      title: "M-Pesa Donation",
      description: "Quick and secure mobile money donations",
      icon: FaMobile,
      steps: [
        "Go to M-Pesa menu",
        "Select Pay Bill",
        "Enter Business Number: 247247",
        "Account: CHARITY2025",
        "Enter amount and PIN"
      ]
    },
    {
      title: "Bank Transfer",
      description: "Direct bank deposits for larger donations",
      icon: FaChartLine,
      steps: [
        "Bank: KCB Bank",
        "Account: Show Me The Real Path",
        "Number: 1234567890",
        "Branch: Mandera",
        "SWIFT: KCBLKENX"
      ]
    }
  ];

  const impactStats = [
    {
      number: "2,500+",
      label: "Lives Transformed",
      icon: FaUsers,
      color: "text-red-600"
    },
    {
      number: "KES 5M+",
      label: "Funds Distributed",
      icon: FaGift,
      color: "text-green-600"
    },
    {
      number: "15",
      label: "Villages Reached",
      icon: FaHandsHelping,
      color: "text-blue-600"
    },
    {
      number: "95%",
      label: "Transparency Rate",
      icon: FaChartLine,
      color: "text-purple-600"
    }
  ];

  const recentProjects = [
    {
      title: "Ramadan Food Distribution 2025",
      description: "Distributed 800 food packages during the holy month of Ramadan",
      amount: "KES 400,000",
      beneficiaries: "800 families",
      date: "March 2025"
    },
    {
      title: "Borehole Project - Fino Village",
      description: "Completed installation of solar-powered borehole serving 300 families",
      amount: "KES 750,000",
      beneficiaries: "300 families",
      date: "February 2025"
    },
    {
      title: "School Fees Support Drive",
      description: "Paid school fees for 150 orphaned children for the 2025 academic year",
      amount: "KES 600,000",
      beneficiaries: "150 children",
      date: "January 2025"
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
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-red-800 to-red-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              {...fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Charity Programs
            </motion.h1>
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Transforming lives through compassionate giving and sustainable community support
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-lg"
            >
              <div className="flex items-center">
                <FaUsers className="mr-2" />
                <span>2,500+ Lives Touched</span>
              </div>
              <div className="flex items-center">
                <FaHandsHelping className="mr-2" />
                <span>15 Active Programs</span>
              </div>
              <div className="flex items-center">
                <FaHeart className="mr-2" />
                <span>100% Transparency</span>
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
              Our Charity Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive assistance programs addressing the most pressing needs of our community
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
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <program.icon className="text-2xl text-red-600" />
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
                    <div className="font-semibold text-red-600 text-sm">Impact</div>
                    <div className="text-gray-700 text-sm">{program.impact}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-red-600 text-sm">Frequency</div>
                    <div className="text-gray-700 text-sm">{program.frequency}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-red-600 text-sm">Budget</div>
                    <div className="text-gray-700 text-sm">{program.budget}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">What We Provide:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
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

      {/* Impact Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Charity Impact
            </h2>
            <p className="text-lg text-gray-600">
              Measuring our success through the lives we've transformed
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className={`bg-gray-100 p-4 rounded-lg mb-4 inline-block`}>
                    <stat.icon className={`text-3xl ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How to Donate
            </h2>
            <p className="text-lg text-gray-600">
              Multiple secure ways to support our charity programs
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {donationMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <div className="bg-green-100 p-4 rounded-lg mb-4 inline-block">
                    <method.icon className="text-3xl text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600">
                    {method.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {method.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-semibold mr-3">
                        {stepIndex + 1}
                      </div>
                      {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-600">
              See how your donations have made a real difference
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {recentProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Amount:</span>
                      <span className="font-semibold text-green-600">{project.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Beneficiaries:</span>
                      <span className="font-semibold">{project.beneficiaries}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Completed:</span>
                      <span className="font-semibold">{project.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Make a Difference Today
            </h2>
            <p className="text-xl mb-8">
              Your donation, no matter the size, can transform lives and strengthen our community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Donate Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition-colors duration-300"
              >
                Become a Partner
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CharityPrograms;