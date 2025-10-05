
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle,
  User,
  Building,
  Calendar,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  WhatsApp
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

// Contact Hero Section
const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white pt-32 pb-20 lg:py-28">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get In <span className="text-gold-500">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold-500 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 transition-colors duration-300 inline-flex items-center"
            onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
          >
            Send us a Message
            <Send className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Information Section
const ContactInfo = () => {
  const contactMethods = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Mandera Town, Near Main Market", "Mandera County, Kenya"],
      description: "Come visit us at our main office for in-person assistance",
      action: "Get Directions",
      color: "green"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 712 345 678", "+254 734 567 890"],
      description: "Available Sunday to Thursday, 8:00 AM - 6:00 PM",
      action: "Call Now",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@showmetherealpath.org", "support@showmetherealpath.org"],
      description: "Send us an email and we'll respond within 24 hours",
      action: "Send Email",
      color: "red"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sunday - Thursday: 8:00 AM - 6:00 PM", "Friday: 2:00 PM - 6:00 PM", "Saturday: Closed"],
      description: "Our dedicated team is available to assist you",
      action: "View Schedule",
      color: "purple"
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
            How to Reach Us
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Multiple ways to connect with our team. We're always happy to help.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-green-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-green-100"
            >
              <div className={`w-16 h-16 bg-${method.color}-600 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <method.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">
                {method.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {method.description}
              </p>
              <div className="space-y-2 mb-6">
                {method.details.map((detail, idx) => (
                  <p key={idx} className="text-green-800 font-semibold">
                    {detail}
                  </p>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`bg-${method.color}-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-${method.color}-700 transition-colors duration-300 w-full`}
              >
                {method.action}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Contact Form Section
const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    purpose: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        purpose: ''
      });
    }, 5000);
  };

  const purposeOptions = [
    "General Inquiry",
    "Volunteer Opportunity",
    "Donation Question",
    "Program Information",
    "Partnership Proposal",
    "Event Collaboration",
    "Media Inquiry",
    "Other"
  ];

  return (
    <section id="contact-form" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-green-900 mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Purpose of Contact *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <select
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 appearance-none"
                      >
                        <option value="">Select a purpose</option>
                        {purposeOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-green-600 hover:bg-green-700'
                  } text-white flex items-center justify-center`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Office Location */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Our Office Location</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-green-900">Main Office</p>
                    <p className="text-gray-700">Mandera Town, Near Main Market</p>
                    <p className="text-gray-700">Mandera County, Kenya</p>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
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
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-green-600 text-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
              <p className="mb-4">For urgent matters outside office hours</p>
              <div className="flex items-center mb-2">
                <Phone className="h-6 w-6 mr-3" />
                <span className="text-xl font-bold">+254 711 234 567</span>
              </div>
              <p className="text-green-200 text-sm">Available 24/7 for emergencies</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What are your office hours?",
      answer: "Our office is open Sunday through Thursday from 8:00 AM to 6:00 PM, and on Fridays from 2:00 PM to 6:00 PM. We are closed on Saturdays."
    },
    {
      question: "How can I volunteer with your organization?",
      answer: "You can apply to volunteer by filling out our volunteer form on the website, visiting our office, or calling our volunteer coordinator. We have opportunities in various programs."
    },
    {
      question: "What types of donations do you accept?",
      answer: "We accept monetary donations through M-Pesa, bank transfers, and in-person. We also accept in-kind donations like food, clothing, and educational materials. Please contact us for specific needs."
    },
    {
      question: "How can I get updates about your programs?",
      answer: "You can follow us on social media, subscribe to our newsletter, or regularly check our website for updates on programs and events."
    },
    {
      question: "Do you provide emergency assistance?",
      answer: "Yes, we have an emergency assistance program. Please call our emergency hotline for urgent needs, and visit our office during working hours for non-emergency assistance."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Quick answers to common questions about our organization and services
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-green-50 rounded-2xl border border-green-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-green-100 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-green-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-green-600"
                >
                  ▼
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFAQ === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Social Media & Newsletter
const SocialNewsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Simulate subscription
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const socialPlatforms = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "#",
      followers: "2.5K+ Followers"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "#",
      followers: "1.8K+ Followers"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "#",
      followers: "1.2K+ Followers"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "#",
      followers: "800+ Subscribers"
    },
    {
      icon: WhatsApp,
      name: "WhatsApp",
      url: "#",
      followers: "Join our Group"
    }
  ];

  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gold-500 mb-8">Follow Us</h3>
            <p className="text-green-200 mb-8 text-lg">
              Stay connected with our latest updates, events, and community activities through social media.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialPlatforms.map((platform, index) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-800 rounded-2xl p-6 hover:bg-green-700 transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <platform.icon className="h-8 w-8 text-gold-500 mr-4" />
                    <div>
                      <p className="font-semibold text-white">{platform.name}</p>
                      <p className="text-green-300 text-sm">{platform.followers}</p>
                    </div>
                  </div>
                  <p className="text-green-200 text-sm">Click to follow</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-green-800 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-gold-500 mb-4">Stay Updated</h3>
            <p className="text-green-200 mb-6">
              Subscribe to our newsletter for monthly updates on our programs, events, and community impact.
            </p>
            
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Successfully Subscribed!</h4>
                <p className="text-green-200">Thank you for joining our newsletter.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg bg-green-700 border border-green-600 text-white placeholder-green-300 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition duration-200"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  className="w-full bg-gold-500 text-green-900 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-300"
                >
                  Subscribe to Newsletter
                </motion.button>
                <p className="text-green-300 text-sm text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const ContactCTA = () => {
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
            Ready to Make a Difference Together?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you want to volunteer, partner with us, or support our mission, we'd love to hear from you.
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
              Become a Volunteer
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition-colors duration-300"
            >
              Schedule a Visit
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Contact Component
const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <FAQSection />
      <SocialNewsletter />
      <ContactCTA />
    </div>
  );
};

export default Contact;