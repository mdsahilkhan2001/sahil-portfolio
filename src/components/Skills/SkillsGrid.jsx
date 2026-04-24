 import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "React", icon: "/icons/react.png", color: "#61DAFB", level: 90 },
  { name: "Node.js", icon: "/icons/node.png", color: "#339933", level: 85 },
  { name: "Next.js", icon: "/icons/nextjs.jpeg", color: "#FFFFFF", level: 88 },
  { name: "Tailwind CSS", icon: "/icons/tailwind.jpeg", color: "#06B6D4", level: 92 },
  { name: "DSA", icon: "/icons/Dsa.png", color: "#8B5CF6", level: 90 },
  { name: "Python", icon: "/icons/python.png", color: "#3776AB", level: 80 },
  { name: "MongoDB", icon: "/icons/mongodb.png", color: "#47A248", level: 85 },
  { name: "SQL", icon: "/icons/sql.png", color: "#4479A1", level: 78 },
  { name: "Express", icon: "/icons/express.png", color: "#FFFFFF", level: 82 },
  { name: "JavaScript", icon: "/icons/js.jpeg", color: "#F7DF1E", level: 88 },
  { name: "TypeScript", icon: "/icons/ts.png", color: "#3178C6", level: 82 },
  { name: "HTML", icon: "/icons/html.jpeg", color: "#E34F26", level: 95 },
  { name: "CSS", icon: "/icons/css.png", color: "#1572B6", level: 90 },
  { name: "Power BI", icon: "/icons/powerbi.jpeg", color: "#F2C811", level: 75 },
  { name: "Tableau", icon: "/icons/tableou.png", color: "#E97627", level: 78 },
  { name: "Excel", icon: "/icons/excel.jpeg", color: "#217346", level: 85 },
  { name: "Machine Learning", icon: "/icons/ml.png", color: "#FF6F00", level: 70 },
  { name: "Canva", icon: "/icons/canva.png", color: "#00C4CC", level: 88 },
  { name: "Photoshop", icon: "/icons/photoshop.png", color: "#31A8FF", level: 82 },
  { name: "Illustrator", icon: "/icons/illustrator.png", color: "#FF9A00", level: 80 },
  { name: "Docker", icon: "/icons/docker.png", color: "#2496ED", level: 80 }
];

const filters = ["ALL", "DJANGO", "NODE.JS", "REACT", "MONGODB", "EXPRESS"];

// Sleek Capsule Card Design (Light and Dark Mode Supported)
function CapsuleCard({ skill }) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex items-center gap-4 p-2 pr-8 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-full hover:bg-white dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all cursor-pointer shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="w-16 h-16 rounded-full bg-gray-50 dark:bg-black/40 flex items-center justify-center p-3 border border-gray-100 dark:border-white/5 transition-transform duration-500 shadow-inner"
        style={{ 
          boxShadow: isHovered ? `inset 0 0 20px ${skill.color}30` : undefined,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
      >
        {!imageError && skill.icon ? (
          <img 
            src={skill.icon} 
            alt={skill.name} 
            className="w-full h-full object-contain transition-all duration-500"
            style={{
              filter: isHovered 
                ? `drop-shadow(0 0 12px ${skill.color}80)` 
                : 'drop-shadow(0 0 4px rgba(0,0,0,0.1))'
            }}
            onError={() => setImageError(true)} 
          />
        ) : (
          <span className="text-xl font-black text-gray-800 dark:text-white">{skill.name.charAt(0)}</span>
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h3 
          className="text-xl font-bold transition-colors duration-300 tracking-wide"
          style={{ color: isHovered ? skill.color : undefined }}
        >
          <span className={isHovered ? '' : 'text-gray-900 dark:text-white'}>{skill.name}</span>
        </h3>
        <p className="text-[10px] font-black tracking-[0.2em] uppercase mt-0.5 transition-colors duration-300">
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
  // We duplicate the items array so the marquee loops seamlessly
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

  // Split skills into 3 rows for multiple marquees
  const row1 = skills.slice(0, 7);
  const row2 = skills.slice(7, 14);
  const row3 = skills.slice(14, 21);

  return (
    <section id="skills" className="py-32 relative bg-gray-50 dark:bg-[#030305] overflow-hidden min-h-screen font-sans flex flex-col justify-center transition-colors duration-300">
      
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
          /* Pause animation when hovering anywhere in the skills section */
          #skills:hover .animate-marquee-left,
          #skills:hover .animate-marquee-right {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Grid Backgrounds for Dark and Light Mode */}
      <div className="absolute inset-0 hidden dark:block" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)' }} />
      <div className="absolute inset-0 block dark:hidden" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)' }} />
      
      {/* Neon Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-24 space-y-4 px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/70 text-xs font-black uppercase tracking-[0.3em] backdrop-blur-md shadow-sm dark:shadow-none">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Tech Arsenal
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter">
            Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">Master.</span>
          </motion.h2>
        </div>

        {/* Premium Segmented Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-2 mb-16 p-2 rounded-3xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 backdrop-blur-xl w-fit mx-auto shadow-sm">
          {filters.map(f => (
            <button 
              key={f} 
              onClick={() => setActive(f)} 
              className={`relative px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-colors duration-300 ${
                active === f ? 'text-white' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              {active === f && (
                <motion.div 
                  layoutId="active-skill-filter" 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg -z-10" 
                  transition={{ type: "spring", stiffness: 400, damping: 30 }} 
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </motion.div>

        {/* The Marquees */}
        <div className="flex flex-col gap-6 md:gap-10 w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <MarqueeRow items={row1} direction="left" speed="35s" />
          <MarqueeRow items={row2} direction="right" speed="45s" />
          <MarqueeRow items={row3} direction="left" speed="40s" />
        </div>
        
      </div>
    </section>
  );
}
