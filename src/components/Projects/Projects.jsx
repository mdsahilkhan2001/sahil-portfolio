import React, { useState } from "react";
import { projects } from "../../data/siteContent";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Briefcase, ArrowRight } from "lucide-react";

// Dynamically generate filters based on tags
const allTags = new Set(["All", "Django", "Node.js", "React"]);
projects.forEach(p => p.tags?.forEach(tag => allTags.add(tag)));
const filters = Array.from(allTags).slice(0, 6); // Limit to top 6 for clean UI

function Project3DCard({ p, instanceId, onClick }) {
  return (
    <motion.div
      layoutId={`card-${instanceId}`}
      onClick={() => onClick(p, instanceId)}
      initial={{ rotateX: 45, scale: 0.85, y: 80 }}
      animate={{ rotateX: 45, scale: 0.9, y: 0 }}
      exit={{ rotateX: 45, scale: 0.85, y: 80 }}
      whileHover={{ 
        rotateX: 0, 
        scale: 1.05, 
        y: -30,
        zIndex: 50 
      }}
      transition={{ 
        duration: 0.6, 
        type: "spring", 
        stiffness: 200, 
        damping: 20 
      }}
      style={{ 
        transformOrigin: "bottom center", 
        transformStyle: "preserve-3d" 
      }}
      className="group relative h-[450px] w-[400px] shrink-0 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl hover:shadow-[0_40px_80px_rgba(37,99,235,0.4)] transition-shadow duration-500 isolate bg-gray-900"
    >
      {/* Background Image */}
      <motion.img 
        layoutId={`image-${instanceId}`}
        src={p.img} 
        alt={p.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        loading="lazy" 
      />
      
      {/* Extremely Strong Gradient for Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Colored Overlay on Hover */}
      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500" />

      {/* Floating Action Button */}
      <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
      </div>

      {/* Bottom Content Area */}
      <motion.div layoutId={`content-${instanceId}`} className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end z-10 bg-transparent" style={{ transform: "translateZ(40px)" }}>
        
        <motion.div layoutId={`tags-${instanceId}`} className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          {p.tags?.slice(0, 3).map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/30 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>
        
        <motion.h3 layoutId={`title-${instanceId}`} className="text-3xl font-black text-white mb-2 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] transform group-hover:-translate-y-1 transition-transform duration-500">
          {p.title}
        </motion.h3>
        
        <motion.p layoutId={`desc-${instanceId}`} className="text-sm text-gray-200 line-clamp-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-medium transform group-hover:-translate-y-1 transition-transform duration-500 delay-75">
          {p.desc}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

function MarqueeRow({ items, direction = "left", speed = "50s", onSelect, rowIdx }) {
  // We render 8 identical blocks. 
  // By translating exactly -12.5% (1/8th), the 2nd block seamlessly takes the position of the 1st.
  const blocks = Array(8).fill(items);

  return (
    <div className="flex overflow-hidden group w-full relative py-10" style={{ perspective: "2000px" }}>
      <div 
        className={`flex w-max shrink-0 ${direction === 'left' ? 'animate-project-marquee-left' : 'animate-project-marquee-right'}`}
        style={{ animationDuration: speed }}
      >
        {blocks.map((blockItems, blockIdx) => (
          <div key={`block-${blockIdx}`} className="flex gap-8 pr-8 shrink-0">
            {blockItems.map((p, idx) => (
              <Project3DCard 
                key={`${p.id}-${rowIdx}-${blockIdx}-${idx}`} 
                p={p} 
                instanceId={`${p.id}-${rowIdx}-${blockIdx}-${idx}`} 
                onClick={onSelect} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedInstanceId, setSelectedInstanceId] = useState(null);

  const filtered = projects.filter(p => active === "All" || (p.tags || []).includes(active));

  // Split filtered projects into two chunks for different rows. If very few, use the whole array for both to prevent emptiness.
  const row1Items = filtered.length > 2 ? filtered.slice(0, Math.ceil(filtered.length / 2)) : filtered;
  const row2Items = filtered.length > 2 ? filtered.slice(Math.ceil(filtered.length / 2)) : filtered;

  const handleSelect = (project, instanceId) => {
    setSelectedProject(project);
    setSelectedInstanceId(instanceId);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setSelectedInstanceId(null);
  };

  return (
    <section id="projects" className="py-32 relative bg-gray-50 dark:bg-gray-900/20 overflow-hidden min-h-screen">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-blue-500/5 to-transparent blur-3xl pointer-events-none" />
      
      <style>
        {`
          @keyframes pan-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-pan-gradient {
            background-size: 200% auto;
            animation: pan-gradient 4s linear infinite;
          }
          /* Project Marquee Animation - Mathematically Perfect Seamless Loop */
          @keyframes project-marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-12.5%); } /* 1/8th of total width because we use 8 blocks */
          }
          @keyframes project-marquee-right {
            0% { transform: translateX(-12.5%); }
            100% { transform: translateX(0); }
          }
          .animate-project-marquee-left {
            animation: project-marquee-left linear infinite;
          }
          .animate-project-marquee-right {
            animation: project-marquee-right linear infinite;
          }
        `}
      </style>

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Dynamic Header Section */}
        <div className="text-center mb-20 relative flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.8 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Portfolio Showcase</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white tracking-tighter relative"
          >
            <div className="absolute inset-0 blur-[80px] opacity-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse -z-10" />
            Featured <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pan-gradient inline-block">
              Work.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-500 dark:text-gray-400 max-w-2xl text-sm md:text-base font-medium leading-relaxed"
          >
            A curated collection of my top-tier technical builds. From scalable web architectures to immersive frontend interfaces, here is where complex engineering meets premium design.
          </motion.p>
        </div>
      </div>

      {/* Infinite Scrolling 3D Marquee Grid */}
      <div id="projects-grid" className="w-full flex flex-col gap-0" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        {filtered.length > 0 ? (
          <>
            <MarqueeRow items={row1Items} direction="left" speed="60s" onSelect={handleSelect} rowIdx={1} />
            <MarqueeRow items={row2Items} direction="right" speed="70s" onSelect={handleSelect} rowIdx={2} />
          </>
        ) : (
          <div className="text-center py-20 text-gray-500 font-bold">No projects found for this category.</div>
        )}
      </div>

      {/* Expanded Project Card Modal */}
      <AnimatePresence>
        {selectedInstanceId && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-gray-950/80 backdrop-blur-md z-[90]"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[100] p-4 sm:p-6 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedInstanceId}`}
                className="bg-white dark:bg-gray-900 rounded-[32px] max-w-5xl w-full shadow-2xl relative overflow-hidden border border-gray-100 dark:border-gray-800 pointer-events-auto flex flex-col max-h-[90vh]"
              >
                {/* Header Image Area */}
                <motion.div layoutId={`image-container-${selectedInstanceId}`} className="relative h-64 sm:h-80 w-full shrink-0">
                  <motion.img 
                    layoutId={`image-${selectedInstanceId}`}
                    src={selectedProject.img} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                  
                  <button 
                    onClick={handleClose} 
                    className="absolute top-6 right-6 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="absolute bottom-8 left-8 pr-8">
                    {selectedProject.companyProject && (
                      <motion.div layoutId={`badge-${selectedInstanceId}`} className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4 shadow-lg">
                        <CheckCircle2 className="w-3 h-3" /> Company Project
                      </motion.div>
                    )}
                    <motion.h3 layoutId={`title-${selectedInstanceId}`} className="text-4xl sm:text-5xl font-black text-white leading-tight">
                      {selectedProject.title}
                    </motion.h3>
                    {selectedProject.role && <p className="text-blue-400 font-bold mt-2 text-sm uppercase tracking-widest">{selectedProject.role}</p>}
                  </div>
                </motion.div>

                {/* Scrollable Content Area */}
                <motion.div layoutId={`content-${selectedInstanceId}`} className="p-8 sm:p-12 overflow-y-auto custom-scrollbar flex-1">
                  
                  <motion.div layoutId={`tags-${selectedInstanceId}`} className="flex flex-wrap gap-2 mb-8 hidden">
                  </motion.div>

                  <motion.p layoutId={`desc-${selectedInstanceId}`} className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium mb-10 hidden">
                    {selectedProject.desc}
                  </motion.p>

                  {selectedProject.details ? (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800/30">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-800/50 rounded-lg"><Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" /></div>
                            <h4 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest">Project Idea</h4>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedProject.details.idea}</p>
                        </div>

                        <div className="space-y-4 p-6 bg-purple-50 dark:bg-purple-900/10 rounded-2xl border border-purple-100 dark:border-purple-800/30">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-100 dark:bg-purple-800/50 rounded-lg"><Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" /></div>
                            <h4 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest">Summary</h4>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedProject.details.summary}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                          <h4 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-widest border-b border-gray-200 dark:border-gray-800 pb-4">🔥 Key Features</h4>
                          <ul className="space-y-4">
                            {selectedProject.details.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                                </span>
                                <span className="text-base text-gray-700 dark:text-gray-300">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-10">
                          <div className="space-y-4">
                            <h4 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-widest border-b border-gray-200 dark:border-gray-800 pb-4">💻 My Role & Contributions</h4>
                            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800/80">
                              {selectedProject.details.contribution}
                            </p>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-widest border-b border-gray-200 dark:border-gray-800 pb-4">⚙️ Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.details.techStack.split(',').map((tech, i) => (
                                <span key={i} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-300">
                                  {tech.trim()}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{selectedProject.desc}</p>
                  )}

                  {/* Footer Actions */}
                  <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex-1 py-5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-colors">
                        <Github className="w-5 h-5" /> View Source Code
                      </a>
                    )}
                    {selectedProject.live && (
                      <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex-1 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-colors shadow-xl shadow-blue-500/20">
                        <ExternalLink className="w-5 h-5" /> View Live Deployment
                      </a>
                    )}
                  </div>

                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
