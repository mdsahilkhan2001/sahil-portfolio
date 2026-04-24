import React, { useRef } from "react";
import { timeline } from "../../data/siteContent";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Calendar, ArrowRight, Code2, Database, Terminal, Cpu, Blocks, Rocket } from "lucide-react";

import gayaCollegeLog from "../../assets/gce.jpeg";

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Grow the line based on scroll
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const logoMap = {
    "dmx": "/icons/DMX logo.png",
    "evoastra": "/icons/evostra venture.png",
    "freelance": ["/icons/upwaork.png", "/icons/fiverr-icon.png"],
    "education": gayaCollegeLog,
  };

  // Generate random airstrike/drone shooting stars across the FULL section (Optimized for CPU)
  const airstrikes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 200}%`, // Start wider to cover diagonal movement
    top: `${-10 + Math.random() * 110}%`, // Distribute vertically across the entire section
    delay: Math.random() * 5,
    duration: Math.random() * 2 + 1.5, // Slightly slower to reduce CPU load
    length: Math.random() * 100 + 50, // Shorter trail
  }));

  return (
    <section id="timeline" className="py-32 relative bg-gray-50 dark:bg-[#030305] overflow-hidden min-h-screen transition-colors duration-500">
      
      {/* Background Grids & Glows */}
      <div className="absolute inset-0 hidden dark:block" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)' }} />
      <div className="absolute inset-0 block dark:hidden" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)' }} />
      
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Airstrike / Drone Shooting Stars Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {airstrikes.map((strike) => (
          <motion.div
            key={strike.id}
            className="absolute"
            style={{
              top: strike.top,
              left: strike.left,
              rotate: '45deg', // Diagonal fall
            }}
            animate={{
              x: ['0vw', '-80vw'],
              y: ['0vh', '80vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: strike.duration,
              repeat: Infinity,
              delay: strike.delay,
              ease: "linear",
            }}
          >
            <div 
               className="h-[2px] bg-gradient-to-l from-transparent via-blue-500/80 to-white/80 dark:via-blue-400/80 rounded-full"
               style={{ width: `${strike.length}px`, willChange: "transform" }}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Dynamic Header */}
        <div className="text-center mb-32 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/70 text-xs font-black uppercase tracking-[0.3em] backdrop-blur-md shadow-sm dark:shadow-none"
          >
            <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
            Career Trajectory
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">Journey.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-4 text-base md:text-lg"
          >
            A timeline of my professional experience and academic milestones.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative" ref={containerRef}>
          
          {/* Scroll-Tracking Glow Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2 rounded-full overflow-hidden">
             <motion.div 
                className="absolute top-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top rounded-full"
                style={{ scaleY, bottom: 0 }}
             />
          </div>

          <div className="space-y-24">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              
              const sideIcons = [
                <Code2 className="w-32 h-32 md:w-64 md:h-64 text-blue-500/20 dark:text-blue-400/10" strokeWidth={1} />,
                <Database className="w-32 h-32 md:w-64 md:h-64 text-purple-500/20 dark:text-purple-400/10" strokeWidth={1} />,
                <Terminal className="w-32 h-32 md:w-64 md:h-64 text-pink-500/20 dark:text-pink-400/10" strokeWidth={1} />,
                <Cpu className="w-32 h-32 md:w-64 md:h-64 text-indigo-500/20 dark:text-indigo-400/10" strokeWidth={1} />,
                <Blocks className="w-32 h-32 md:w-64 md:h-64 text-cyan-500/20 dark:text-cyan-400/10" strokeWidth={1} />,
                <Rocket className="w-32 h-32 md:w-64 md:h-64 text-teal-500/20 dark:text-teal-400/10" strokeWidth={1} />
              ];
              const SideIcon = sideIcons[index % sideIcons.length];

              return (
                <div key={item.id} className={`relative flex items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Opposite Side Decoration (Floating Graphic) */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-[45%] ${isEven ? 'right-0 justify-center' : 'left-0 justify-center'} pointer-events-none items-center z-0`}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -30, 0], 
                        rotate: isEven ? [0, 15, 0] : [0, -15, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 8 + (index % 3), 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="drop-shadow-2xl mix-blend-multiply dark:mix-blend-screen"
                    >
                      {SideIcon}
                    </motion.div>
                  </motion.div>

                  {/* Timeline Node */}
                  <div className="absolute left-[39px] md:left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center z-20">
                     <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                        className="w-4 h-4 bg-white dark:bg-gray-900 border-4 border-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                     />
                  </div>

                  {/* Content Card Entrance */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className={`w-full md:w-[45%] pl-24 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}
                  >
                    {/* Continuous Smooth Floating Animation */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 6 + (index % 3), // Offset durations so they don't sync perfectly
                        ease: "easeInOut" 
                      }}
                      className="relative group cursor-pointer"
                    >
                      
                      {/* Premium Glass Card Background */}
                      <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/40 backdrop-blur-xl rounded-[2.5rem] border border-gray-100 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 group-hover:bg-white dark:group-hover:bg-gray-800/60 group-hover:shadow-[0_30px_60px_rgba(59,130,246,0.15)] group-hover:scale-[1.02]" />
                      
                      {/* Animated Glow Behind Card on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10" />

                      <div className="relative p-8 md:p-10 z-10 transition-transform duration-500 group-hover:scale-[1.01]">
                        
                        {/* Time Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-8 shadow-sm">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.timeframe}
                        </div>

                        {/* Title and Logo */}
                        <div className="flex items-start gap-5 mb-6">
                           {logoMap[item.id] ? (
                             <div className="flex gap-3">
                               {(Array.isArray(logoMap[item.id]) ? logoMap[item.id] : [logoMap[item.id]]).map((logo, idx) => (
                                 <motion.div 
                                   key={idx} 
                                   whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.1 }}
                                   transition={{ duration: 0.5 }}
                                   className="w-16 h-16 shrink-0 rounded-2xl bg-white dark:bg-gray-900 p-2.5 border border-gray-100 dark:border-gray-800 shadow-lg"
                                 >
                                   <img src={logo} alt="Logo" className="w-full h-full object-contain rounded-lg" />
                                 </motion.div>
                               ))}
                             </div>
                           ) : (
                             <motion.div 
                               whileHover={{ rotate: 180, scale: 1.1 }}
                               transition={{ duration: 0.5 }}
                               className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl shadow-lg border border-white/20"
                             >
                               🚀
                             </motion.div>
                           )}
                           
                           <div className="pt-1">
                             <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                               {item.title}
                             </h3>
                             {item.company && (
                               <p className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">
                                 {item.company}
                               </p>
                             )}
                           </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300/80 leading-relaxed text-sm font-medium mb-4">
                          {item.desc}
                        </p>

                        {/* Rendering Projects if they exist */}
                        {item.projects && (
                          <div className="mt-6 space-y-3">
                            <h4 className="text-xs font-black uppercase tracking-widest text-purple-500 mb-3">Key Projects Delivered</h4>
                            {item.projects.map((proj, idx) => (
                              <div key={idx} className="group/proj relative p-3 rounded-2xl bg-gray-50/50 hover:bg-white dark:bg-gray-800/30 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700/50 transition-all duration-300">
                                <div className="flex items-start gap-3">
                                  <div className="mt-1 shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover/proj:scale-150 group-hover/proj:bg-purple-500 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                  </div>
                                  <div>
                                    <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{proj.name}</h5>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{proj.detail}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}