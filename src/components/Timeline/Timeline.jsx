import React, { useState, useRef } from "react";
import { timeline } from "../../data/siteContent";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Sparkles, Calendar, ChevronDown, Code2, Database,
  Terminal, Cpu, Blocks, Rocket, Briefcase, GraduationCap, User
} from "lucide-react";

import gayaCollegeLog from "../../assets/gce.jpeg";

const logoMap = {
  "learnsquare": "/icons/ls logo.png",
  "dmx": "/icons/DMX logo.png",
  "evoastra": "/icons/evostra venture.png",
  "freelance": ["/icons/upwaork.png", "/icons/fiverr-icon.png"],
  "education": gayaCollegeLog,
};

const iconMap = {
  "learnsquare": <Briefcase className="w-5 h-5" />,
  "dmx": <Briefcase className="w-5 h-5" />,
  "evoastra": <Cpu className="w-5 h-5" />,
  "freelance": <User className="w-5 h-5" />,
  "education": <GraduationCap className="w-5 h-5" />,
};

const accentGradients = {
  "learnsquare": "from-teal-600 to-emerald-500",
  "dmx": "from-blue-600 to-cyan-500",
  "evoastra": "from-violet-600 to-purple-500",
  "freelance": "from-emerald-600 to-green-500",
  "education": "from-amber-500 to-orange-500",
};

const bgAccents = {
  "learnsquare": "bg-teal-50 dark:bg-teal-900/10 border-teal-100 dark:border-teal-800/30",
  "dmx": "bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800/30",
  "evoastra": "bg-violet-50 dark:bg-violet-900/10 border-violet-100 dark:border-violet-800/30",
  "freelance": "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-800/30",
  "education": "bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-800/30",
};

const nodeColors = {
  "learnsquare": "border-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.7)]",
  "dmx": "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.7)]",
  "evoastra": "border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.7)]",
  "freelance": "border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.7)]",
  "education": "border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.7)]",
};

// Accordion item for each project inside a timeline card
function AccordionProject({ proj, index, accentGrad }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
      open 
        ? "border-blue-500/40 dark:border-blue-500/40 bg-white dark:bg-blue-950/20 shadow-[0_15px_40px_rgba(59,130,246,0.1)] ring-1 ring-blue-500/10" 
        : "border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/60 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-md"
    }`}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-4 p-5 text-left group/acc"
      >
        {/* Step Indicator */}
        <div className="relative shrink-0">
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${accentGrad} flex items-center justify-center transition-all duration-500 ${open ? 'scale-110 rotate-[8deg] shadow-lg shadow-blue-500/30' : 'group-hover/acc:rotate-6'}`}>
            <span className="text-white text-[12px] font-black">{String(index + 1).padStart(2, '0')}</span>
          </div>
          {open && (
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${accentGrad} blur-md opacity-50 animate-pulse`} />
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className={`text-[15px] font-black transition-all duration-300 ${
              open 
                ? "text-blue-600 dark:text-blue-400" 
                : "text-gray-700 dark:text-gray-200 group-hover/acc:text-gray-900 dark:group-hover:text-white"
            }`}>
              {proj.name}
            </span>
            {open && (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="px-2 py-0.5 bg-blue-100 dark:bg-blue-500/20 text-[8px] font-black text-blue-600 dark:text-blue-400 rounded-md uppercase tracking-[0.2em]">
                Live
              </motion.span>
            )}
          </div>
          <div className="flex gap-1.5 mt-2 opacity-30">
             <div className={`h-0.5 rounded-full bg-blue-500 transition-all duration-500 ${open ? 'w-10' : 'w-6'}`} />
             <div className="w-1.5 h-0.5 rounded-full bg-blue-500" />
             <div className="w-1.5 h-0.5 rounded-full bg-blue-500" />
          </div>
        </div>
        
        <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-blue-100 dark:bg-blue-500/20 rotate-180 shadow-inner' : 'bg-gray-100 dark:bg-gray-800'}`}>
          <ChevronDown className={`w-4 h-4 transition-colors ${open ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="acc-content"
            initial={{ height: 0, opacity: 0, scale: 0.98 }}
            animate={{ height: "auto", opacity: 1, scale: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="pl-15 relative">
                <div className="absolute left-0 top-0 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-20" />
                <div className="bg-gray-50/80 dark:bg-white/[0.02] p-6 rounded-2xl border border-gray-100 dark:border-white/5 backdrop-blur-md relative overflow-hidden group/content">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${accentGrad} opacity-[0.04] blur-3xl group-hover/content:opacity-[0.08] transition-opacity duration-700`} />
                  <p className="text-[13px] text-gray-500 dark:text-gray-300 leading-relaxed font-medium relative z-10">
                    {proj.detail}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-500/60">
                    <div className="w-4 h-[1px] bg-blue-500/40" />
                    Project Insight
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TimelineCard({ item, index }) {
  const isEven = index % 2 === 0;
  const accentGrad = accentGradients[item.id] || "from-blue-600 to-violet-600";
  const accentBg = bgAccents[item.id] || "bg-blue-50 dark:bg-blue-900/10 border-blue-100";
  const node = nodeColors[item.id] || "border-blue-500";

  const sideIcons = [
    <Code2 className="w-32 h-32 md:w-52 md:h-52 opacity-10 dark:opacity-[0.07]" strokeWidth={1} />,
    <Database className="w-32 h-32 md:w-52 md:h-52 opacity-10 dark:opacity-[0.07]" strokeWidth={1} />,
    <Terminal className="w-32 h-32 md:w-52 md:h-52 opacity-10 dark:opacity-[0.07]" strokeWidth={1} />,
    <Cpu className="w-32 h-32 md:w-52 md:h-52 opacity-10 dark:opacity-[0.07]" strokeWidth={1} />,
  ];
  const SideIconEl = sideIcons[index % sideIcons.length];

  return (
    <div className={`relative flex items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>

      {/* Decorative side floating icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-[44%] ${isEven ? 'right-0 justify-center' : 'left-0 justify-center'} pointer-events-none items-center z-0 text-blue-500 dark:text-blue-400`}
      >
        <motion.div
          animate={{ y: [0, -20, 0], rotate: isEven ? [0, 8, 0] : [0, -8, 0] }}
          transition={{ duration: 8 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          {SideIconEl}
        </motion.div>
      </motion.div>

      {/* Timeline Node */}
      <div className="absolute left-[39px] md:left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center z-20">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.6, delay: 0.15 }}
          className={`w-4 h-4 bg-white dark:bg-gray-900 border-4 ${node} rounded-full`}
        />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, type: "spring", bounce: 0.3 }}
        className={`w-full md:w-[45%] pl-24 md:pl-0 ${isEven ? 'md:pr-14' : 'md:pl-14'} relative z-10`}
      >
        <div className="relative bg-white dark:bg-gray-900 rounded-[28px] border border-gray-100 dark:border-gray-800 shadow-[0_4px_24px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.15)] overflow-hidden group transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

          {/* Top accent bar */}
          <div className={`h-1 w-full bg-gradient-to-r ${accentGrad}`} />

          <div className="p-7 md:p-9">

            {/* Time Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${accentBg} border text-[10px] font-black uppercase tracking-widest mb-6`}>
              <Calendar className="w-3 h-3" style={{ color: 'inherit' }} />
              <span className="text-gray-700 dark:text-gray-200">{item.timeframe}</span>
            </div>

            {/* Logo + Title */}
            <div className="flex items-start gap-4 mb-5">
              {logoMap[item.id] ? (
                <div className="flex gap-2 shrink-0">
                  {(Array.isArray(logoMap[item.id]) ? logoMap[item.id] : [logoMap[item.id]]).map((logo, idx) => (
                    <div key={idx} className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 p-2 border border-gray-100 dark:border-gray-700 shadow-sm">
                      <img src={logo} alt="Company Logo" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${accentGrad} flex items-center justify-center text-white shadow-lg`}>
                  {iconMap[item.id] || <Rocket className="w-5 h-5" />}
                </div>
              )}

              <div className="pt-1">
                <h3 className="text-xl font-black text-gray-900 dark:text-white leading-tight mb-1">
                  {item.title}
                </h3>
                {item.company && (
                  <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
                    {item.company}
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {item.desc}
            </p>

            {/* Accordion Projects */}
            {item.projects && item.projects.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2">
                  <span className={`inline-block w-4 h-0.5 bg-gradient-to-r ${accentGrad} rounded`} />
                  Key Projects
                  <span className={`inline-block flex-1 h-0.5 bg-gradient-to-r ${accentGrad} rounded opacity-20`} />
                </h4>
                {item.projects.map((proj, i) => (
                  <AccordionProject
                    key={i}
                    proj={proj}
                    index={i}
                    accentGrad={accentGrad}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="timeline" className="py-32 relative bg-gray-50 dark:bg-[#030305] overflow-hidden min-h-screen transition-colors duration-300">

      {/* Background grid */}
      <div className="absolute inset-0 hidden dark:block" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '50px 50px', maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)' }} />
      <div className="absolute inset-0 block dark:hidden" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)', backgroundSize: '50px 50px', maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)' }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/8 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-violet-500/8 dark:bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-28 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/70 text-[10px] font-black uppercase tracking-[0.25em] backdrop-blur-md shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-500 animate-pulse" />
            Career Trajectory
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter"
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Journey.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-sm md:text-base"
          >
            A timeline of professional experience and academic milestones — click
            any project to expand details.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative" ref={containerRef}>

          {/* Scroll-tracking glow line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top rounded-full"
              style={{ scaleY, bottom: 0 }}
            />
          </div>

          <div className="space-y-20">
            {timeline.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}