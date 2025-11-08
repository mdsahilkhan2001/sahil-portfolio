 import React, { useState, useRef, useEffect } from "react";
import { about } from "../../data/siteContent";
import { motion, useReducedMotion } from "framer-motion";
import profile from "../../assets/profile.jpg";

// Animation timing constants for maintainability
const ANIMATION_TIMINGS = {
  stagger: 0.2,
  delay: 0.1,
  itemDuration: 0.6,
  imageDuration: 0.8,
  lineDuration: 0.8,
  badgeDelay: 1
};

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Provide fallback data
  const aboutData = {
    summary: about?.summary || "Passionate developer creating innovative solutions.",
    location: about?.location || "Location not specified"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : ANIMATION_TIMINGS.stagger,
        delayChildren: prefersReducedMotion ? 0 : ANIMATION_TIMINGS.delay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : ANIMATION_TIMINGS.itemDuration,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : ANIMATION_TIMINGS.imageDuration,
        ease: "backOut"
      }
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      
      // Safe timeout with cleanup
      scrollTimeoutRef.current = setTimeout(() => {
        const firstInput = contactSection.querySelector('input[name="name"]');
        if (firstInput) firstInput.focus();
      }, 800);
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 dark:from-blue-900/10 dark:to-purple-900/5" aria-hidden="true"></div>
      
      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: prefersReducedMotion ? "4rem" : 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: ANIMATION_TIMINGS.lineDuration, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded-full"
              aria-hidden="true"
            />
            <h2 
              id="about-heading"
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3"
            >
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Discover my journey and passion
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              variants={imageVariants}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative group" style={{ perspective: "1000px" }}>
                {/* Floating background elements */}
                <div 
                  className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  aria-hidden="true"
                ></div>
                <div 
                  className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 animate-pulse"
                  aria-hidden="true"
                ></div>
                
                {/* Image skeleton loader */}
                {!imageLoaded && !imageError && (
                  <div className="w-72 h-80 rounded-2xl bg-gray-300 dark:bg-gray-700 animate-pulse" aria-label="Loading profile image"></div>
                )}
                
                {/* Main image */}
                {!imageError && (
                  <motion.img
                    src={profile}
                    alt="Professional profile photograph showcasing my personality and professional demeanor"
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`relative w-72 h-80 rounded-2xl object-cover shadow-2xl ring-4 ring-white dark:ring-gray-800 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ willChange: 'transform' }}
                    whileHover={prefersReducedMotion ? {} : {
                      scale: 1.05,
                      rotateY: 5,
                      transition: { duration: 0.4 }
                    }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  />
                )}

                {/* Error fallback */}
                {imageError && (
                  <div className="w-72 h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl shadow-2xl ring-4 ring-white dark:ring-gray-800">
                    👤
                  </div>
                )}
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: prefersReducedMotion ? 0 : ANIMATION_TIMINGS.badgeDelay, 
                    duration: 0.5, 
                    type: "spring" 
                  }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg ring-4 ring-white dark:ring-gray-800"
                  role="status"
                  aria-label="Currently available for work"
                >
                  ✨ Available
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 space-y-6"
            >
              {/* Summary */}
              <motion.div
                className="prose prose-lg dark:prose-invert max-w-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.8, delay: 0.3 }}
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {aboutData.summary}
                </p>
              </motion.div>

              {/* Info Cards */}
              <motion.div
                variants={itemVariants}
                className="grid sm:grid-cols-2 gap-4"
              >
                {/* Location Card */}
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                  role="article"
                  aria-label="Location information"
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="text-white text-lg">📍</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {aboutData.location}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Status Card */}
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                  role="article"
                  aria-label="Work availability status"
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="text-white text-lg">💼</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Open to work
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="pt-4"
              >
                <motion.button
                  onClick={handleScrollToContact}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                  className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus-visible:ring-4 focus-visible:ring-purple-500/50"
                  aria-label="Navigate to contact form"
                  type="button"
                >
                  <span className="relative z-10">Let's Connect</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    aria-hidden="true"
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
