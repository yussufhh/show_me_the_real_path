
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Users, 
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Heart,
  MessageCircle,
  Share2,
  Star,
  Quote,
  Award,
  TrendingUp,
  Users2,
  HandHeart,
  Lightbulb,
  Target,
  CheckCircle,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube
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
const CommunityHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white pt-32 pb-20 lg:py-28">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559027615-cfa462a2b8d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-gold-500">Community</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Building stronger bonds, fostering unity, and creating lasting impact together in Mandera and beyond
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold-500 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 transition-colors duration-300 inline-flex items-center"
          >
            Join Our Community
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Community Stats Section
const CommunityStats = () => {
  const stats = [
    {
      icon: Users,
      number: <Counter end={5000} suffix="+" />,
      label: "Community Members",
      description: "Active participants in our programs"
    },
    {
      icon: HandHeart,
      number: <Counter end={500} suffix="+" />,
      label: "Volunteers",
      description: "Dedicated individuals making a difference"
    },
    {
      icon: Award,
      number: <Counter end={50} suffix="+" />,
      label: "Community Events",
      description: "Annual gatherings and activities"
    },
    {
      icon: TrendingUp,
      number: <Counter end={100} suffix="%" />,
      label: "Community Satisfaction",
      description: "Based on member feedback surveys"
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
            Community at a Glance
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A vibrant, growing community united by faith, compassion, and service
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-green-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-green-100"
            >
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="mb-4">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Community Programs Section
const CommunityPrograms = () => {
  const programs = [
    {
      icon: Users2,
      title: "Family Support Network",
      description: "Comprehensive support system for families in need, including counseling and financial assistance",
      participants: "200+ Families",
      schedule: "Weekly meetings"
    },
    {
      icon: Lightbulb,
      title: "Youth Development",
      description: "Mentorship programs, educational support, and leadership training for young community members",
      participants: "150+ Youth",
      schedule: "Monthly workshops"
    },
    {
      icon: HandHeart,
      title: "Elderly Care Program",
      description: "Regular visits, healthcare support, and social activities for our senior community members",
      participants: "75+ Seniors",
      schedule: "Bi-weekly visits"
    },
    {
      icon: Target,
      title: "Skills Development",
      description: "Vocational training and skill-building workshops for economic empowerment",
      participants: "300+ Trained",
      schedule: "Quarterly courses"
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
            Community Programs
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Initiatives designed to strengthen bonds, support growth, and foster unity within our community
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
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mr-6">
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-900 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {program.participants}
                    </span>
                    <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {program.schedule}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-300"
                  >
                    Learn More →
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

// Upcoming Events Section
const UpcomingEvents = () => {
  const events = [
    {
      date: "15 DEC",
      title: "Community Iftar Gathering",
      description: "Monthly community iftar and dinner for Ramadan",
      location: "Main Community Hall",
      time: "6:00 PM - 8:00 PM",
      attendees: "200+ Expected"
    },
    {
      date: "22 DEC",
      title: "Youth Leadership Workshop",
      description: "Developing future leaders through Islamic principles",
      location: "Youth Center",
      time: "10:00 AM - 2:00 PM",
      attendees: "50+ Youth"
    },
    {
      date: "05 JAN",
      title: "Family Fun Day",
      description: "Sports, games, and activities for all ages",
      location: "Community Park",
      time: "9:00 AM - 5:00 PM",
      attendees: "300+ Families"
    },
    {
      date: "12 JAN",
      title: "Educational Seminar",
      description: "Islamic finance and community economics",
      location: "Main Hall",
      time: "3:00 PM - 5:00 PM",
      attendees: "150+ Expected"
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
            Upcoming Events
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join us for community gatherings, educational programs, and social activities
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-green-50 rounded-2xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-green-600 rounded-2xl flex flex-col items-center justify-center text-white">
                    <span className="text-2xl font-bold">{event.date.split(' ')[0]}</span>
                    <span className="text-sm">{event.date.split(' ')[1]}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.attendees}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    Register Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-300"
          >
            View All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Community Stories Section
const CommunityStories = () => {
  const stories = [
    {
      quote: "This community has been like family to me. When I lost my job, they supported my family until I got back on my feet.",
      author: "Ahmed Mohamed",
      role: "Community Member for 5 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "As a volunteer, I've found purpose and meaning. Helping others has enriched my life in ways I never imagined.",
      author: "Fatima Hassan",
      role: "Volunteer & Mentor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "The youth programs have transformed my son. He's more confident, responsible, and connected to his faith.",
      author: "Amina Abdullahi",
      role: "Parent & Community Advocate",
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
            Community Voices
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gold-200 max-w-3xl mx-auto"
          >
            Hear from members whose lives have been transformed through community engagement
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stories.map((story, index) => (
            <motion.div
              key={story.author}
              variants={fadeInUp}
              className="bg-green-800 rounded-2xl p-8 relative"
            >
              <Quote className="h-8 w-8 text-gold-500 mb-4" />
              <p className="text-lg text-white mb-6 leading-relaxed italic">
                "{story.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={story.image} 
                  alt={story.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gold-300">{story.author}</p>
                  <p className="text-green-300 text-sm">{story.role}</p>
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
      title: "Become a Member",
      description: "Join our growing community and participate in regular activities and programs",
      benefits: ["Monthly gatherings", "Educational programs", "Community support", "Networking opportunities"],
      cta: "Join Now"
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Share your time and skills to make a difference in people's lives",
      benefits: ["Flexible scheduling", "Skill development", "Community impact", "Personal growth"],
      cta: "Volunteer Today"
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description: "Help us reach more people by sharing our mission and activities",
      benefits: ["Social media kits", "Event promotion", "Community outreach", "Awareness campaigns"],
      cta: "Share Mission"
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
            There are many ways to become an active part of our vibrant community
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
              className="bg-green-50 rounded-2xl p-8 border border-green-200 text-center"
            >
              <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <opportunity.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                {opportunity.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {opportunity.description}
              </p>
              <div className="space-y-3 mb-6">
                {opportunity.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-800 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
              >
                {opportunity.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact & Connect Section
const ContactConnect = () => {
  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      handle: "@ShowMeTheRealPath",
      followers: "2.5K+ Followers"
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@realpath_cbo",
      followers: "1.8K+ Followers"
    },
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@RealPathCBO",
      followers: "1.2K+ Followers"
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "Show Me The Real Path",
      followers: "800+ Subscribers"
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
            Stay Connected
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Follow us on social media and join our community conversations
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-green-900 mb-8">Follow Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialMedia.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                      <platform.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-900">{platform.name}</p>
                      <p className="text-gray-600 text-sm">{platform.handle}</p>
                    </div>
                  </div>
                  <p className="text-green-700 text-sm font-semibold">{platform.followers}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-green-900 mb-6">Contact Community Team</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <p className="font-semibold text-green-900">Community Hotline</p>
                  <p className="text-gray-700">+254 712 345 678</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <p className="font-semibold text-green-900">Email</p>
                  <p className="text-gray-700">community@showmetherealpath.org</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <p className="font-semibold text-green-900">Office Location</p>
                  <p className="text-gray-700">Mandera Town, Near Main Market</p>
                  <p className="text-gray-700">Mandera County, Kenya</p>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const CommunityCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Join Our Growing Community Today
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Become part of a supportive network that grows together in faith, service, and community building
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 transition-colors duration-300"
            >
              Become a Member
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition-colors duration-300"
            >
              Attend an Event
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Community Component
const Community = () => {
  return (
    <div className="min-h-screen bg-white">
      <CommunityHero />
      <CommunityStats />
      <CommunityPrograms />
      <UpcomingEvents />
      <CommunityStories />
      <GetInvolved />
      <ContactConnect />
      <CommunityCTA />
    </div>
  );
};

export default Community;