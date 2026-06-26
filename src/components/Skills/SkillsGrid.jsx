import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  { name: "React", icon: "/icons/react.png", color: "#61DAFB", level: 90, category: "FRONTEND" },
  { name: "Node.js", icon: "/icons/node.png", color: "#339933", level: 85, category: "BACKEND" },
  { name: "Next.js", icon: "/icons/nextjs.jpeg", color: "#000000", level: 88, category: "FRONTEND" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.jpeg", color: "#06B6D4", level: 92, category: "FRONTEND" },
  { name: "DSA", icon: "/icons/Dsa.png", color: "#8B5CF6", level: 90, category: "TOOLS" },
  { name: "Python", icon: "/icons/python.png", color: "#3776AB", level: 80, category: "BACKEND" },
  { name: "MongoDB", icon: "/icons/mongodb.png", color: "#47A248", level: 85, category: "BACKEND" },
  { name: "SQL", icon: "/icons/sql.png", color: "#4479A1", level: 78, category: "BACKEND" },
  { name: "Express", icon: "/icons/express.png", color: "#333333", level: 82, category: "BACKEND" },
  { name: "JavaScript", icon: "/icons/js.jpeg", color: "#F7DF1E", level: 88, category: "FRONTEND" },
  { name: "TypeScript", icon: "/icons/ts.png", color: "#3178C6", level: 82, category: "FRONTEND" },
  { name: "HTML", icon: "/icons/html.jpeg", color: "#E34F26", level: 95, category: "FRONTEND" },
  { name: "CSS", icon: "/icons/css.png", color: "#1572B6", level: 90, category: "FRONTEND" },
  { name: "Power BI", icon: "/icons/powerbi.jpeg", color: "#F2C811", level: 75, category: "DATA & AI" },
  { name: "Tableau", icon: "/icons/tableou.png", color: "#E97627", level: 78, category: "DATA & AI" },
  { name: "Excel", icon: "/icons/excel.jpeg", color: "#217346", level: 85, category: "DATA & AI" },
  { name: "Machine Learning", icon: "/icons/ml.png", color: "#FF6F00", level: 70, category: "DATA & AI" },
  { name: "Photoshop", icon: "/icons/ps.jpeg", color: "#31A8FF", level: 82, category: "TOOLS" },
  { name: "Illustrator", icon: "/icons/il.png", color: "#FF9A00", level: 80, category: "TOOLS" }
];

const filters = ["ALL", "FRONTEND", "BACKEND", "DATA & AI", "TOOLS"];

// Premium Capsule Card Design
function CapsuleCard({ skill }) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex items-center gap-4 p-2 pr-8 bg-white/70 dark:bg-white/[0.03] backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 rounded-[2rem] hover:bg-white dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer shrink-0 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="w-16 h-16 rounded-full bg-gray-50/80 dark:bg-black/50 flex items-center justify-center p-3.5 border border-gray-200/50 dark:border-white/10 transition-all duration-500 shadow-inner overflow-hidden"
        style={{ 
          boxShadow: isHovered ? `inset 0 0 25px ${skill.color}40, 0 0 15px ${skill.color}40` : undefined,
          borderColor: isHovered ? `${skill.color}50` : undefined,
          transform: isHovered ? 'scale(1.05) rotate(-5deg)' : 'scale(1) rotate(0deg)'
        }}
      >
        {!imageError && skill.icon ? (
          <img 
            src={skill.icon} 
            alt={skill.name} 
            className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 mix-blend-multiply dark:mix-blend-normal rounded-sm"
            style={{
              filter: isHovered 
                ? `drop-shadow(0 0 8px ${skill.color}90)` 
                : 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
            }}
            onError={() => setImageError(true)} 
          />
        ) : (
          <span className="text-xl font-black text-gray-800 dark:text-white">{skill.name.charAt(0)}</span>
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h3 
          className="text-[17px] font-black transition-colors duration-300 tracking-wide"
          style={{ color: isHovered ? skill.color : undefined }}
        >
          <span className={isHovered ? '' : 'text-gray-800 dark:text-white'}>{skill.name}</span>
        </h3>
        <p className="text-[10px] font-black tracking-[0.25em] uppercase mt-1 transition-colors duration-300">
          <span className={isHovered ? 'text-gray-600 dark:text-white/70' : 'text-gray-400 dark:text-white/40'}>
            {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}
          </span>
        </p>
      </div>
    </div>
  );
}

// Marquee Row Component
function MarqueeRow({ items, direction = "left", speed = "40s" }) {
  const doubledItems = [...items, ...items];

  return (
    <div className="flex overflow-hidden group w-full relative">
      <div 
        className={`flex gap-6 w-max shrink-0 px-3 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ animationDuration: speed }}
      >
        {doubledItems.map((skill, idx) => (
          <CapsuleCard key={`${skill.name}-${idx}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsCarousel() {
  const [active, setActive] = useState("ALL");

  // Divide into 3 rows for ALL marquee view
  const row1 = skills.slice(0, 7);
  const row2 = skills.slice(7, 14);
  const row3 = skills.slice(14, 21);

  // Filtered view logic
  const filteredSkills = active === "ALL" ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="py-32 relative bg-gray-50/50 dark:bg-[#030305] overflow-hidden min-h-screen font-sans flex flex-col justify-center transition-colors duration-300">
      
      {/* Required CSS for the Marquee Animation */}
      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 0.75rem)); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(calc(-50% - 0.75rem)); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            animation: marquee-left linear infinite;
          }
          .animate-marquee-right {
            animation: marquee-right linear infinite;
          }
          #skills:hover .animate-marquee-left,
          #skills:hover .animate-marquee-right {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Grid Backgrounds */}
      <div className="absolute inset-0 hidden dark:block" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)' }} />
      <div className="absolute inset-0 block dark:hidden" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)' }} />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4 px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white/80 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Tech Arsenal
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter">
            Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">Master.</span>
          </motion.h2>
        </div>

        {/* Dynamic Category Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-2 mb-16 p-2.5 rounded-full bg-white/60 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-2xl w-fit mx-auto shadow-sm">
          {filters.map(f => (
            <button 
              key={f} 
              onClick={() => setActive(f)} 
              className={`relative px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-colors duration-300 ${
                active === f ? 'text-white' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              {active === f && (
                <motion.div 
                  layoutId="active-skill-filter" 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-[0_4px_20px_rgba(37,99,235,0.4)] -z-10" 
                  transition={{ type: "spring", stiffness: 400, damping: 30 }} 
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </motion.div>

        {/* Render Logic: Marquee for ALL, Grid for Specific Category */}
        <div className="w-full overflow-hidden px-4" style={{ 
          maskImage: active === "ALL" ? 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' : 'none', 
          WebkitMaskImage: active === "ALL" ? 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' : 'none' 
        }}>
          
          <AnimatePresence mode="wait">
            {active === "ALL" ? (
              <motion.div 
                key="marquee-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-6 md:gap-8"
              >
                <MarqueeRow items={row1} direction="left" speed="40s" />
                <MarqueeRow items={row2} direction="right" speed="45s" />
                {row3.length > 0 && <MarqueeRow items={row3} direction="left" speed="35s" />}
              </motion.div>
            ) : (
              <motion.div 
                key="grid-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto min-h-[400px] content-start"
              >
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05, type: "spring", bounce: 0.4 }}
                  >
                    <CapsuleCard skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
