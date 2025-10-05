
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Heart, 
  ArrowRight,
  Users,
  Utensils,
  Stethoscope,
  Droplets,
  BookOpen,
  Home,
  Shield,
  CheckCircle,
  Star,
  Quote,
  MapPin,
  Phone,
  Building,
  Share2,
  Calendar,
  Target,
  TrendingUp,
  Award,
  Lightbulb,
  HandHeart,
  Clock,
  DollarSign
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Counter Component
const Counter = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-green-800">
      {count}{suffix}
    </span>
  );
};

// Hero Section
const CharityHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Support Our <span className="text-gold-500">Mission of Compassion</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            "The believer's shade on the Day of Resurrection will be his charity." - Prophet Muhammad (ﷺ)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Why Charity Matters Section
const WhyCharityMatters = () => {
  const pillars = [
    {
      icon: Utensils,
      title: "Feeding the Hungry",
      description: "Providing nutritious meals to families in need, especially during Ramadan and throughout the year",
      verse: "“He who feeds a hungry person will be fed by Allah from the fruits of Paradise.”"
    },
    {
      icon: BookOpen,
      title: "Educational Support",
      description: "Ensuring every child has access to quality education and Islamic knowledge",
      verse: "“The best charity is to satisfy a hungry person.”"
    },
    {
      icon: Stethoscope,
      title: "Medical Assistance",
      description: "Offering healthcare support and medical aid to those who cannot afford treatment",
      verse: "“Save yourself from hellfire by giving even half a date in charity.”"
    },
    {
      icon: Home,
      title: "Shelter & Clothing",
      description: "Providing safe shelter and essential clothing to vulnerable families and individuals",
      verse: "“Charity does not decrease wealth.”"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-green-900 mb-4"
          >
            The Spirit of Giving in Islam
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Charity (Sadaqah) and obligatory giving (Zakat) are fundamental pillars of Islam that purify wealth and strengthen community bonds
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-green-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-green-100"
            >
              <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <pillar.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {pillar.description}
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-gold-500">
                <p className="text-green-800 text-sm italic">
                  {pillar.verse}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Donation Methods Section
const DonationMethods = () => {
  const methods = [
    {
      icon: Phone,
      title: "M-Pesa Mobile Money",
      details: "Paybill: 247247\nAccount: SHOWPATH",
      description: "Quick and secure mobile payments",
      type: "mobile"
    },
    {
      icon: Building,
      title: "Bank Transfer",
      details: "Bank: Kenya Commercial Bank\nAccount: 1234567890\nBranch: Mandera",
      description: "Direct bank transfers",
      type: "bank"
    },
    {
      icon: HandHeart,
      title: "In-Person Donation",
      details: "Visit our office in Mandera Town\nOpen: Mon-Sun, 8AM-6PM",
      description: "Personal delivery and consultation",
      type: "office"
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-green-900 mb-4"
          >
            Ways to Donate
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choose the most convenient method to support our charitable work. Every contribution makes a difference.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <method.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {method.description}
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <pre className="text-green-800 font-semibold whitespace-pre-wrap">
                  {method.details}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-green-200"
        >
          <div className="text-center">
            <h4 className="text-2xl font-bold text-green-900 mb-4">
              💫 100% Donation Policy
            </h4>
            <p className="text-gray-700 text-lg">
              Every single donation goes directly to those in need. Administrative costs are covered separately.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Charity Programs Section
const CharityPrograms = () => {
  const programs = [
    {
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Food Distribution",
      description: "Regular food packages and iftar meals for needy families during Ramadan and throughout the year",
      impact: "20,000+ meals served monthly",
      icon: Utensils
    },
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Medical Camps",
      description: "Free medical checkups, treatments, and health awareness programs in underserved communities",
      impact: "5,000+ patients treated",
      icon: Stethoscope
    },
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Educational Sponsorships",
      description: "Full scholarships and educational support for orphaned and underprivileged children",
      impact: "120+ students sponsored",
      icon: BookOpen
    },
    {
      image: "https://images.unsplash.com/photo-1548013141-67b67baed64f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Water Wells & Sanitation",
      description: "Construction of clean water wells and sanitation facilities in water-scarce communities",
      impact: "50+ wells constructed",
      icon: Droplets
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-green-900 mb-4"
          >
            Our Charity Programs
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Targeted initiatives designed to address the most pressing needs in our community
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <program.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {program.impact}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-300"
                  >
                    Support This Program →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Impact & Success Stories
const ImpactStories = () => {
  const testimonials = [
    {
      quote: "The food assistance during Ramadan saved our family when we had nothing. May Allah reward the donors abundantly.",
      author: "Aisha Mohamed",
      role: "Beneficiary, Mandera",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "My children can now go to school because of the educational sponsorship. This organization is changing lives.",
      author: "Omar Abdullahi",
      role: "Parent & Beneficiary",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "As a volunteer, I've seen firsthand how every donation directly helps those in need. Transparency is their priority.",
      author: "Fatima Hassan",
      role: "Volunteer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gold-500 mb-4"
          >
            Our Impact & Stories
          </motion.h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <Counter end={20000} suffix="+" />
            <p className="text-gold-200 mt-2 font-semibold">Meals Served</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <Counter end={500} suffix="+" />
            <p className="text-gold-200 mt-2 font-semibold">Families Supported</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <Counter end={120} suffix="+" />
            <p className="text-gold-200 mt-2 font-semibold">Students Sponsored</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <Counter end={50} suffix="+" />
            <p className="text-gold-200 mt-2 font-semibold">Wells Constructed</p>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={fadeInUp}
              className="bg-green-800 rounded-2xl p-8 relative"
            >
              <Quote className="h-8 w-8 text-gold-500 mb-4" />
              <p className="text-lg text-white mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gold-300">{testimonial.author}</p>
                  <p className="text-green-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <Star className="h-5 w-5 text-gold-500 fill-current" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Get Involved Section
const GetInvolved = () => {
  const opportunities = [
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team on the ground and make a direct impact in your community",
      steps: ["Register as volunteer", "Attend orientation", "Choose program", "Start helping"]
    },
    {
      icon: Share2,
      title: "Spread Awareness",
      description: "Become an ambassador and help us reach more potential supporters",
      steps: ["Share on social media", "Organize awareness events", "Tell friends & family"]
    },
    {
      icon: Target,
      title: "Fundraise",
      description: "Start your own fundraising campaign for specific programs",
      steps: ["Choose a cause", "Set up campaign", "Share with network", "Track progress"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-green-900 mb-4"
          >
            Get Involved
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Your time and effort can create ripples of positive change in our community
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-green-50 rounded-2xl p-8 border border-green-200"
            >
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <opportunity.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                {opportunity.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {opportunity.description}
              </p>
              <div className="space-y-3">
                {opportunity.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-green-800">{step}</span>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  const images = [
    {
      icon: "🍽️",
      title: "Food Distribution Program",
      caption: "Providing nutritious meals to 500+ families monthly",
      stats: "2,000+ meals served",
      color: "bg-gradient-to-br from-orange-400 to-red-500"
    },
    {
      icon: "🏥",
      title: "Medical Camp in Rural Area",
      caption: "Free healthcare services in remote villages",
      stats: "300+ patients treated",
      color: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      icon: "📚",
      title: "Educational Support Initiative",
      caption: "School fees and supplies for orphaned children",
      stats: "150+ students supported",
      color: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      icon: "💧",
      title: "Water Well Construction",
      caption: "Clean water access for underserved communities",
      stats: "12 wells completed",
      color: "bg-gradient-to-br from-cyan-400 to-blue-500"
    },
    {
      icon: "🤝",
      title: "Community Outreach",
      caption: "Da'wah and social support programs",
      stats: "1,000+ people reached",
      color: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      icon: "🌙",
      title: "Ramadan Iftar Program",
      caption: "Free iftar meals during the holy month",
      stats: "5,000+ iftar meals",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-green-900 mb-4"
          >
            Charity in Action
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Witness the real impact of your generosity through our community programs
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="group cursor-pointer"
            >
              <div className={`${program.color} rounded-2xl p-8 text-white h-80 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300`}>
                {/* Icon and Title */}
                <div className="text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {program.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="text-center">
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {program.caption}
                  </p>
                  
                  {/* Stats Badge */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                    <span className="text-sm font-semibold">
                      {program.stats}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="text-gold-500 text-6xl mb-6"
          >
            ❝
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            "The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes; in each spike is a hundred grains."
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl mb-8 text-gold-200 italic"
          >
            - Qur'an 2:261
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 transition-colors duration-300"
            >
              Donate Today, Change a Life
            </motion.button>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
              >
                <span className="text-white font-semibold">f</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
              >
                <span className="text-white font-semibold">t</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
              >
                <span className="text-white font-semibold">in</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Location Map Section
const LocationMap = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-green-900 mb-4"
          >
            Find Us in Mandera
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Visit our office to learn more about our work or make in-person donations
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-green-900 mb-6">Our Location</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <p className="font-semibold text-green-900">Main Office</p>
                  <p className="text-gray-700">Mandera Town, Near Main Market</p>
                  <p className="text-gray-700">Mandera County, Kenya</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <p className="font-semibold text-green-900">Contact</p>
                  <p className="text-gray-700">+254 712 345 678</p>
                  <p className="text-gray-700">info@showmetherealpath.org</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <p className="font-semibold text-green-900">Office Hours</p>
                  <p className="text-gray-700">Monday - Sunday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <p className="text-gray-600 font-semibold">Interactive Map</p>
              <p className="text-gray-500">Mandera Town, Kenya</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                View on Google Maps
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Sticky Donation CTA
const StickyDonationCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-gold-500 text-green-900 px-6 py-3 rounded-full shadow-2xl font-semibold hover:bg-gold-400 transition-colors duration-300 flex items-center"
      >
        <Heart className="h-5 w-5 mr-2" />
        Donate Now
      </motion.button>
    </motion.div>
  );
};

// Main Charity Component
const Charity = () => {
  return (
    <div className="min-h-screen bg-white">
      <CharityHero />
      <WhyCharityMatters />
      <DonationMethods />
      <CharityPrograms />
      <ImpactStories />
      <GetInvolved />
      <GallerySection />
      <FinalCTA />
      <LocationMap />
      <StickyDonationCTA />
    </div>
  );
};

export default Charity;