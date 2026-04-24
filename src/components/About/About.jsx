import React, { useState } from "react";
import { about } from "../../data/siteContent";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Briefcase, Sparkles, Send, Globe, Code } from "lucide-react";
const profile = about.photo;

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white dark:bg-gray-950">
      {/* Background Architectural Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-600/5 rounded-full blur-[100px]" />
      
      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Side: Artistic Profile Frame */}
            <motion.div className="lg:col-span-5 relative group">
              {/* Massive Ghosted Text */}
              <div className="absolute -top-10 -left-10 select-none pointer-events-none">
                <span className="text-[120px] font-black text-gray-100 dark:text-gray-900 leading-none">ABOUT</span>
              </div>

              <motion.div 
                className="relative z-10 p-4 bg-gray-50 dark:bg-gray-900 shadow-2xl"
                style={{ borderRadius: "100px 30px 120px 40px" }}
                whileHover={{ rotate: -2, scale: 1.02 }}
              >
                <div 
                  className="w-full aspect-[4/5] overflow-hidden border-4 border-white dark:border-gray-800"
                  style={{ borderRadius: "inherit" }}
                >
                  <img
                    src={profile}
                    alt="Sahil Khan"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'scale-100' : 'scale-110 blur-xl'}`}
                  />
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Status Tag */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="absolute -bottom-6 -right-6 px-6 py-3 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3"
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-300">Live & Ready</span>
                </motion.div>
              </motion.div>

              {/* Decorative Shards */}
              <div className="absolute -top-12 -right-6 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full animate-pulse" />
            </motion.div>

            {/* Right Side: Content & Meta Cards */}
            <div className="lg:col-span-7 space-y-10 pt-10">
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.3em] text-xs">
                  <Sparkles className="w-4 h-4" />
                  <span>The Vision</span>
                </div>
                <h2 className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter leading-[1.1]">
                  Solving Complex Problems with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 italic">Elegant Code.</span>
                </h2>
              </motion.div>

              <motion.div variants={itemVariants} className="max-w-2xl">
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  {about.summary}
                </p>
              </motion.div>

              {/* Meta Grid */}
              <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
                {[
                  { 
                    label: "Current Base", 
                    value: about.location, 
                    icon: <MapPin className="w-6 h-6" />,
                    gradient: "from-blue-500/10 to-indigo-500/10",
                    border: "border-blue-200/50 dark:border-blue-800/30"
                  },
                  { 
                    label: "Availability", 
                    value: "Full-Time / Freelance", 
                    icon: <Briefcase className="w-6 h-6" />,
                    gradient: "from-purple-500/10 to-pink-500/10",
                    border: "border-purple-200/50 dark:border-purple-800/30"
                  }
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className={`p-6 bg-gradient-to-br ${card.gradient} backdrop-blur-xl border ${card.border} rounded-[32px] group transition-all`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                        {card.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{card.label}</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{card.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
                <motion.button
                  onClick={handleScrollToContact}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 shadow-2xl"
                >
                  Let's Connect <Send className="w-4 h-4" />
                </motion.button>
                <div className="flex gap-4 items-center px-4">
                   <div className="flex -space-x-2">
                     {[Globe, Code, Globe].map((Icon, i) => (
                       <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-950 bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-400">
                         <Icon className="w-4 h-4" />
                       </div>
                     ))}
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Global Mindset</span>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
