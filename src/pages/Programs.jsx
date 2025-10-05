import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  BookOpen, 
  GraduationCap, 
  Heart, 
  Users, 
  Shield,
  ArrowRight,
  Clock,
  Target,
  DollarSign,
  CheckCircle,
  Star,
  Quote,
  Calendar,
  MapPin,
  Users2,
  BookText,
  Droplets,
  Stethoscope,
  Shirt,
  Home,
  School,
  Utensils,
  HeartHandshake,
  TrendingUp,
  Award,
  Lightbulb,
  HandHeart
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
const ProgramsHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1543332164-6e82f355badc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our Programs & <span className="text-gold-500">Initiatives</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming lives through comprehensive Da'wah, Education, Charity, and Community Support programs
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold-500 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 transition-colors duration-300 inline-flex items-center"
          >
            Get Involved Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Da'wah Section
const DawahSection = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Qur'an Teaching",
      description: "Comprehensive Quran memorization and tajweed classes for all ages",
      stats: "500+ Students",
      color: "green"
    },
    {
      icon: Users,
      title: "Islamic Lectures",
      description: "Weekly educational seminars and public talks on Islamic topics",
      stats: "50+ Events Monthly",
      color: "emerald"
    },
    {
      icon: School,
      title: "Friday Khutbah",
      description: "Community outreach through Jumu'ah prayers and sermons",
      stats: "100+ Mosques",
      color: "teal"
    },
    {
      icon: BookText,
      title: "Islamic Literature",
      description: "Distribution of authentic Islamic books and educational materials",
      stats: "10,000+ Books",
      color: "lime"
    }
  ];

  return (
    <section id="dawah" className="py-20 bg-white">
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
            Da'wah Programs
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Spreading the message of Islam through education, outreach, and community engagement
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-${program.color}-100 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <program.icon className={`h-8 w-8 text-${program.color}-600`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4 text-center leading-relaxed">
                {program.description}
              </p>
              <div className="text-center">
                <span className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {program.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Education Section
const EducationSection = () => {
  const initiatives = [
    {
      icon: GraduationCap,
      title: "Madrasa Programs",
      description: "Islamic education for children with modern curriculum integration",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Lightbulb,
      title: "Youth Mentorship",
      description: "Guidance programs for young Muslims to excel in deen and dunya",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: School,
      title: "School Outreach",
      description: "Partnerships with educational institutions for Islamic awareness",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="education" className="py-20 bg-green-50">
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
            Education Initiatives
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Empowering minds through Islamic and secular education for a brighter future
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={initiative.image} 
                  alt={initiative.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <initiative.icon className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Counter */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg">
            <Counter end={200} suffix="+" />
            <p className="text-gray-600 mt-2 font-semibold">Schools Visited</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg">
            <Counter end={1000} suffix="+" />
            <p className="text-gray-600 mt-2 font-semibold">Students Impacted</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg">
            <Counter end={50} suffix="+" />
            <p className="text-gray-600 mt-2 font-semibold">Qualified Teachers</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-lg">
            <Counter end={25} suffix="+" />
            <p className="text-gray-600 mt-2 font-semibold">Educational Programs</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Charity Section
const CharitySection = () => {
  const programs = [
    {
      icon: HeartHandshake,
      title: "Zakat Distribution",
      description: "Systematic distribution of Zakat to eligible recipients",
      impact: "Helping 500+ families annually"
    },
    {
      icon: Utensils,
      title: "Feeding Programs",
      description: "Daily iftar during Ramadan and regular food distribution",
      impact: "Serving 10,000+ meals monthly"
    },
    {
      icon: Stethoscope,
      title: "Medical Aid",
      description: "Healthcare support and medical assistance for the needy",
      impact: "Supporting 200+ patients yearly"
    },
    {
      icon: Droplets,
      title: "Water Wells",
      description: "Building sustainable water sources in needy communities",
      impact: "50+ wells constructed"
    }
  ];

  return (
    <section id="charity" className="py-20 bg-gradient-to-br from-gold-500 to-yellow-400">
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
            Charity Programs
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-green-800 max-w-3xl mx-auto"
          >
            Extending compassion and support to those in need through sustainable charity initiatives
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="bg-white rounded-2xl shadow-2xl p-8 text-center group cursor-pointer"
            >
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-green-200 transition-colors duration-300">
                <program.icon className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                {program.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {program.description}
              </p>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-green-700 font-semibold text-sm">
                  {program.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors duration-300"
          >
            Support Our Charity Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Assistance Section
const AssistanceSection = () => {
  const services = [
    {
      icon: Home,
      title: "Family Support",
      description: "Comprehensive assistance for vulnerable families",
      beneficiaries: "500+ Families"
    },
    {
      icon: Users2,
      title: "Orphan Care",
      description: "Sponsorship and care programs for orphaned children",
      beneficiaries: "200+ Orphans"
    },
    {
      icon: Shirt,
      title: "Clothing Drive",
      description: "Regular distribution of clothing to those in need",
      beneficiaries: "5,000+ Items"
    },
    {
      icon: HandHeart,
      title: "Widow Support",
      description: "Monthly assistance and emotional support for widows",
      beneficiaries: "150+ Widows"
    }
  ];

  return (
    <section id="assistance" className="py-20 bg-white">
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
            Community Assistance
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Supporting our community's most vulnerable members with dignity and compassion
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4 text-center leading-relaxed">
                {service.description}
              </p>
              <div className="text-center">
                <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.beneficiaries}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Impact Section
const ImpactSection = () => {
  const testimonials = [
    {
      quote: "The Qur'an program transformed my children's connection with Allah. They now pray regularly with understanding.",
      author: "Amina Hassan",
      role: "Parent"
    },
    {
      quote: "The food assistance during Ramadan saved our family. We are forever grateful for this organization's support.",
      author: "Omar Abdullah",
      role: "Beneficiary"
    },
    {
      quote: "As a volunteer, I've witnessed firsthand the positive impact on our community. This work is truly blessed.",
      author: "Fatima Ali",
      role: "Volunteer"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-green-900 text-white">
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
            Our Impact & Achievements
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
            <Counter end={500} suffix="+" />
            <p className="text-gold-200 mt-2 font-semibold">Families Supported</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <Counter end={200} suffix="+" />
            <p className="text-gold-200 mt-2 font-semibold">Schools Visited</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <Counter end={1200} suffix="+" />
            <p className="text-gold-200 mt-2 font-semibold">Qur'an Distributed</p>
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
              <div>
                <p className="font-semibold text-gold-300">{testimonial.author}</p>
                <p className="text-green-300 text-sm">{testimonial.role}</p>
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

// Timeline Section
const TimelineSection = () => {
  const steps = [
    {
      icon: Target,
      title: "Identify Needs",
      description: "Community assessment and need identification",
      duration: "1-2 weeks"
    },
    {
      icon: Calendar,
      title: "Plan & Organize",
      description: "Program design and resource allocation",
      duration: "2-3 weeks"
    },
    {
      icon: DollarSign,
      title: "Secure Funding",
      description: "Fundraising and budget finalization",
      duration: "3-4 weeks"
    },
    {
      icon: Users,
      title: "Implement Program",
      description: "Execution with volunteer teams",
      duration: "Ongoing"
    },
    {
      icon: TrendingUp,
      title: "Measure Impact",
      description: "Monitoring and evaluation",
      duration: "Continuous"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-white">
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
            Our Process
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            How we transform ideas into impactful community programs
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-green-50 rounded-2xl p-8 shadow-lg border border-green-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-900">{step.title}</h3>
                        <span className="text-green-600 text-sm font-semibold">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="lg:absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Spacer for alternating sides */}
                <div className="lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section id="cta" className="py-20 bg-green-700 text-white">
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
            Join Us in Making a Difference
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Your support can help us reach more lives and create lasting impact in our community. Whether through volunteering, donations, or spreading awareness, every contribution matters.
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
              Volunteer With Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition-colors duration-300"
            >
              Make a Donation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Programs Component
const Programs = () => {
  return (
    <div className="min-h-screen bg-white">
      <ProgramsHero />
      <DawahSection />
      <EducationSection />
      <CharitySection />
      <AssistanceSection />
      <ImpactSection />
      <TimelineSection />
      <CTASection />
    </div>
  );
};

export default Programs;