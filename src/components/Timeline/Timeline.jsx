 import React from "react";
import { timeline } from "../../data/siteContent";
import { motion } from "framer-motion";

// Import your logos here
import gayaCollegeLog from "../../assets/gce.jpeg"
import dmxTechLogo from "../../assets/dmx logo.png"
import fyndeLogo from "../../assets/fynde.png"
import evostrarLogo from "../../assets/evostra.png"

export default function Timeline() {
  // Logo mapping - replace with your actual imported logos
  const logoMap = {
    "collage": gayaCollegeLog, // gayaCollegeLog,
    11: dmxTechLogo, // dmxTechLogo,
    1: fyndeLogo, // fyndeLogo,
    2: evostrarLogo, // evostrarLogo,
  };

  // Dynamic icons for different types
  const getTypeIcon = (item) => {
    if (item.id === "collage") return "🎓";
    if (item.title.includes("Training") || item.title.includes("Course")) return "📚";
    if (item.title.includes("Intern")) return "💼";
    return "🚀";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-gray-900/50 dark:via-gray-900 dark:to-gray-900/50"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded-full"
          />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
            My Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Experience & Education Timeline</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            {/* Animated Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-0.5">
              <motion.div
                variants={lineVariants}
                className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.3 + index * 0.1, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-20 ring-4 ring-white dark:ring-gray-900"
                  >
                    {/* Pulsing effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-ping opacity-20"></div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="group relative">
                      {/* Card Background with Glassmorphism */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/60 dark:from-gray-800/90 dark:to-gray-900/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-xl"></div>
                      
                      <div className="relative p-6 z-10">
                        {/* Header with Logo and Icon */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            {/* Company/College Logo */}
                            {logoMap[item.id] ? (
                              <motion.img
                                src={logoMap[item.id]}
                                alt={`${item.company || item.title} logo`}
                                className="w-12 h-12 rounded-lg object-cover border-2 border-gray-200 dark:border-gray-600"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.2 }}
                              />
                            ) : (
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 15 }}
                                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg"
                              >
                                {getTypeIcon(item)}
                              </motion.div>
                            )}
                            
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {item.title}
                              </h3>
                              {item.company && (
                                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                                  {item.company}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Time Badge */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex-shrink-0 px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full border border-blue-200 dark:border-blue-700"
                          >
                            {item.timeframe}
                          </motion.div>
                        </div>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="text-gray-600 dark:text-gray-300 leading-relaxed"
                        >
                          {item.desc}
                        </motion.p>

                        {/* Bottom accent line */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                          className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 opacity-60"
                        />
                      </div>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <span>Want to be part of my journey?</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}