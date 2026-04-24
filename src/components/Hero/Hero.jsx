import React, { useState, useEffect, useRef } from "react";
import TypedText from "./TypedText";
import { siteMeta } from "../../data/siteContent";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Download, ArrowRight, CheckCircle2, Zap, Globe } from 'lucide-react';

const profileImages = [
  "/icons/photo my .png",
  "/icons/photo my2.png"
];

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  // Magnetic Parallax Logic
  const profileRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const cardRotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const cardRotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  
  const cardX = useTransform(mouseX, [-0.5, 0.5], [-25, 25]);
  const cardY = useTransform(mouseY, [-0.5, 0.5], [-25, 25]);

  const textX = useTransform(mouseX, [-0.5, 0.5], [50, -50]);
  const textY = useTransform(mouseY, [-0.5, 0.5], [50, -50]);

  const orbX = useTransform(mouseX, [-0.5, 0.5], [-120, 120]);
  const orbY = useTransform(mouseY, [-0.5, 0.5], [-120, 120]);

  const handleMouseMove = (e) => {
    if (!profileRef.current) return;
    const rect = profileRef.current.getBoundingClientRect();
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    x.set(mouseXPos / rect.width - 0.5);
    y.set(mouseYPos / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Auto-cycle carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 100 },
    },
  };

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="min-h-[100svh] flex items-center pt-28 lg:pt-24 relative overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* ─── Modern Minimal Background ─── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150 pointer-events-none"></div>
      </div>

      <div className="container relative z-10 py-12 lg:py-0 mt-8 lg:mt-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center"
        >
          {/* ─── Left Content ─── */}
          <div className="space-y-10">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Open for opportunities
              </motion.div>

              <h1 className="text-6xl lg:text-8xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.05]">
                Hello, I'm <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                  {siteMeta.name.split(' ').slice(-2).join(' ')}
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-xl space-y-6">
              <p className="text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                {siteMeta.tagline}
              </p>
              <div className="text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-gray-100 min-h-[4rem] flex items-center">
                <TypedText strings={siteMeta.roleTypes} />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-5 pt-4">
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 rounded-2xl font-bold text-lg flex items-center gap-3 transition-all hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => window.open("https://sgscodeworks.in", "_blank")}
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold text-lg flex items-center gap-3 hover:shadow-[0_10px_30px_rgba(16,185,129,0.3)] transition-all"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                My Tech Agency
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => setShowModal(true)}
                className="group px-8 py-4 bg-white dark:bg-transparent border-2 border-gray-200 dark:border-gray-800 rounded-2xl font-bold text-lg text-gray-700 dark:text-gray-300 flex items-center gap-3 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get My Resume
                <Download className="w-5 h-5 group-hover:animate-bounce" />
              </motion.button>
            </motion.div>

            {/* Modern Social Links */}
            <motion.div variants={itemVariants} className="flex gap-6 items-center">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Connect</span>
              <div className="h-[1px] w-12 bg-gray-200 dark:bg-gray-800"></div>
              <div className="flex gap-4">
                {[
                  { icon: <Github className="w-5 h-5" />, url: siteMeta.github, hover: "hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white" },
                  { icon: <Linkedin className="w-5 h-5" />, url: siteMeta.linkedin, hover: "hover:text-blue-600 hover:border-blue-600" },
                  { icon: <Globe className="w-5 h-5" />, url: "https://sgscodeworks.in", hover: "hover:text-emerald-500 hover:border-emerald-500" },
                  { icon: <Mail className="w-5 h-5" />, action: () => scrollToSection("contact"), hover: "hover:text-red-500 hover:border-red-500" },
                ].map((social, i) => (
                  <motion.button
                    key={i}
                    onClick={social.action || (() => window.open(social.url, "_blank"))}
                    className={`p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl text-gray-500 border border-transparent transition-all ${social.hover}`}
                    whileHover={{ scale: 1.15, y: -2 }}
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ─── Right Profile Section (Cyber-Organic 3D Parallax) ─── */}
          <motion.div 
            ref={profileRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            variants={itemVariants} 
            className="relative hidden lg:flex items-center justify-center min-h-[700px] w-full perspective-2000"
          >
             {/* Layer 1: Massive Background Holographic Text (Deep Parallax) */}
             <motion.div 
               style={{ x: textX, y: textY, translateZ: -100 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0"
             >
               <motion.h2 
                 animate={{ opacity: [0.03, 0.06, 0.03] }}
                 transition={{ duration: 8, repeat: Infinity }}
                 className="text-[250px] font-black text-blue-600 dark:text-blue-400 uppercase leading-none blur-sm"
               >
                 SAHIL
               </motion.h2>
             </motion.div>

             {/* Layer 2: Dynamic Glowing Halos & Cursor Orb */}
             <motion.div 
               style={{ x: orbX, y: orbY }}
               className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none z-10"
             />
             
             {/* Layer 3: The 3D Floating Block (Magnetic Follow) */}
             <motion.div 
               className="relative z-20 cursor-pointer group"
               style={{ 
                 transformStyle: "preserve-3d",
                 rotateX: cardRotateX,
                 rotateY: cardRotateY,
                 x: cardX,
                 y: cardY
               }}
               animate={{ 
                 rotateY: isRotating ? 360 : undefined,
               }}
               transition={{ 
                 rotateY: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
               }}
               onClick={() => {
                 setIsRotating(true);
                 setTimeout(() => {
                   setIsRotating(false);
                   setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
                 }, 1200);
               }}
             >
                {/* Faceted Crystal Frame */}
                <div 
                  className="relative w-[420px] aspect-[4/5.5] bg-white/10 dark:bg-gray-900/40 backdrop-blur-3xl border border-white/30 dark:border-white/10 overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.5)] transition-shadow group-hover:shadow-blue-500/20"
                  style={{ 
                    clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                    transform: "translateZ(50px)"
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentImageIndex}
                      src={profileImages[currentImageIndex]} 
                      alt="Sahil Khan" 
                      initial={{ opacity: 0, scale: 1.2 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover" 
                    />
                  </AnimatePresence>
                  
                  {/* Glass Shine Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent"></div>
                </div>

                {/* Front Label Layer (Extreme Parallax) */}
                <motion.div 
                  className="absolute -bottom-10 -right-16 w-[280px] p-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-3xl rounded-[40px] border border-white dark:border-gray-800 shadow-2xl z-30"
                  style={{ transform: "translateZ(120px)" }}
                >
                   <div className="space-y-6">
                      <div className="flex items-center justify-between">
                         <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Core Stack</p>
                            <h4 className="text-xl font-black dark:text-white uppercase italic tracking-tighter">Full Stack + AI</h4>
                         </div>
                         <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/40 rotate-12">
                           <Zap className="w-6 h-6 fill-current" />
                         </div>
                      </div>
                      <div className="flex gap-3">
                        {["REACT", "NODE", "PYTHON"].map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-[9px] font-black text-gray-400 border border-gray-200 dark:border-gray-700">{tech}</span>
                        ))}
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setShowModal(true); }}
                        className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black text-xs uppercase tracking-widest"
                      >
                        Access Resume
                      </button>
                   </div>
                </motion.div>

                {/* Floating Shard (Deep Front) */}
                <motion.div 
                  className="absolute -top-12 -left-12 w-24 h-24 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl z-40"
                  style={{ 
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    transform: "translateZ(180px)" 
                  }}
                  animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
             </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* CV Modal - Refined for Connection */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 bg-gray-950/90 backdrop-blur-xl flex items-center justify-center z-[100] p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-[40px] p-10 max-w-lg w-full shadow-2xl relative overflow-hidden border border-white/20 dark:border-gray-800"
            >
              <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-500/10 blur-[80px] rounded-full" />
              
              <div className="absolute top-6 right-6">
                <button 
                  onClick={() => setShowModal(false)} 
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <Mail className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="space-y-8 text-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto text-white shadow-xl shadow-blue-500/20">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tight">Let's Connect! 🤝</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    I'd love to share my detailed experience and technical portfolio with you directly.
                  </p>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 py-2 px-4 rounded-full inline-block">
                    Resume available upon request
                  </p>
                </div>

                <div className="grid gap-4">
                  <motion.button 
                    onClick={() => {
                      window.open(siteMeta.linkedin, '_blank');
                      setShowModal(false);
                    }}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-blue-500/25"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Connect on LinkedIn <Linkedin className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button 
                    onClick={() => {
                      scrollToSection("contact");
                      setShowModal(false);
                    }}
                    className="w-full px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold transition-all hover:bg-gray-800 dark:hover:bg-gray-100 shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send a Direct Message
                  </motion.button>
                </div>

                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-sm font-bold transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
