import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiHeart, 
  FiDollarSign, 
  FiUsers, 
  FiGift,
  FiSmartphone,
  FiCreditCard,
  FiCheck,
  FiCopy
} from 'react-icons/fi'
import { BiMoney, BiHeart, BiGift, BiGroup } from 'react-icons/bi'

const Charity = () => {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [copied, setCopied] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const donationCategories = [
    {
      icon: <BiHeart className="text-3xl" />,
      title: "General Charity",
      description: "Support our overall charitable activities and community assistance programs",
      color: "from-green-600 to-green-700",
      goal: "KSh 100,000",
      raised: "KSh 65,000",
      percentage: 65
    },
    {
      icon: <BiGift className="text-3xl" />,
      title: "Education Fund",
      description: "Provide school supplies, books, and educational support for needy students",
      color: "from-yellow-500 to-yellow-600",
      goal: "KSh 80,000",
      raised: "KSh 48,000",
      percentage: 60
    },
    {
      icon: <BiMoney className="text-3xl" />,
      title: "Emergency Relief",
      description: "Immediate assistance for families facing urgent financial difficulties",
      color: "from-green-700 to-green-800",
      goal: "KSh 50,000",
      raised: "KSh 35,000",
      percentage: 70
    },
    {
      icon: <BiGroup className="text-3xl" />,
      title: "Community Development",
      description: "Infrastructure and development projects for community improvement",
      color: "from-yellow-600 to-yellow-700",
      goal: "KSh 120,000",
      raised: "KSh 42,000",
      percentage: 35
    }
  ]

  const predefinedAmounts = [100, 500, 1000, 2000, 5000, 10000]

  const mpesaPaybill = "522522"
  const accountNumber = "SMTRP2024"

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
    <section id="charity" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="charity-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M12.5,5 L20,12.5 L12.5,20 L5,12.5 Z" fill="currentColor" opacity="0.3"/>
              <circle cx="12.5" cy="12.5" r="2" fill="currentColor" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#charity-pattern)" />
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
            <FiHeart className="text-lg" />
            <span>Charity & Donations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500">Lasting Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your generous donations help us continue our mission of serving the community and supporting those in need
          </p>
        </motion.div>

        {/* Donation Categories */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {donationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Progress Section */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-green-600 font-semibold">{category.percentage}%</span>
                </div>
                
                <div className="bg-gray-200 rounded-full h-3 mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`bg-gradient-to-r ${category.color} h-3 rounded-full`}
                  />
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Raised: <span className="font-semibold text-gray-900">{category.raised}</span></span>
                  <span className="text-gray-600">Goal: <span className="font-semibold text-gray-900">{category.goal}</span></span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 bg-gradient-to-r ${category.color} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg`}
                >
                  Donate Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* M-Pesa Donation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <div className="bg-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FiSmartphone className="text-white text-3xl" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Donate via <span className="text-green-600">M-Pesa</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Make your donation securely and conveniently using M-Pesa mobile money
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* M-Pesa Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <FiCreditCard className="text-green-600 text-2xl" />
                    <span className="font-semibold text-gray-900">Paybill Number</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => copyToClipboard(mpesaPaybill)}
                    className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {copied ? <FiCheck /> : <FiCopy />}
                  </motion.button>
                </div>
                <div className="text-3xl font-bold text-green-700">{mpesaPaybill}</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <FiUsers className="text-yellow-600 text-2xl" />
                    <span className="font-semibold text-gray-900">Account Number</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => copyToClipboard(accountNumber)}
                    className="p-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    {copied ? <FiCheck /> : <FiCopy />}
                  </motion.button>
                </div>
                <div className="text-3xl font-bold text-yellow-700">{accountNumber}</div>
              </div>
            </div>

            {/* Donation Amount Selection */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Choose Your Donation Amount</h4>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                {predefinedAmounts.map((amount) => (
                  <motion.button
                    key={amount}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount('')
                    }}
                    className={`py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                      selectedAmount === amount
                        ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    KSh {amount.toLocaleString()}
                  </motion.button>
                ))}
              </div>

              <div className="max-w-md mx-auto">
                <input
                  type="number"
                  placeholder="Enter custom amount (KSh)"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  className="w-full py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-center text-lg"
                />
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FiSmartphone className="mr-2 text-green-600" />
                How to Donate via M-Pesa
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Go to M-Pesa menu on your phone</li>
                <li>Select "Lipa na M-Pesa" then "Pay Bill"</li>
                <li>Enter Business Number: <span className="font-semibold text-green-600">{mpesaPaybill}</span></li>
                <li>Enter Account Number: <span className="font-semibold text-yellow-600">{accountNumber}</span></li>
                <li>Enter Amount: KSh {selectedAmount || customAmount || '___'}</li>
                <li>Enter your M-Pesa PIN and confirm</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="15" fill="currentColor"/>
                <circle cx="80" cy="20" r="10" fill="currentColor"/>
                <circle cx="20" cy="80" r="12" fill="currentColor"/>
                <circle cx="80" cy="80" r="18" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <FiHeart className="text-6xl text-yellow-300 mx-auto mb-6" />
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Every Donation Makes a Difference
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Your contribution helps us continue our mission of spreading Islamic values, 
                educating our community, and supporting those in need. Together, we can build a stronger, 
                more compassionate society.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">KSh 100</div>
                  <div className="text-gray-300">Feeds a family for a day</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">KSh 500</div>
                  <div className="text-gray-300">School supplies for a student</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">KSh 1000</div>
                  <div className="text-gray-300">Educational materials for a class</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Charity