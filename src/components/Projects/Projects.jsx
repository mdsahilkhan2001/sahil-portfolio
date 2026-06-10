import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../../data/siteContent";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, Github, Sparkles, CheckCircle2,
  Briefcase, ArrowUpRight, Layers
} from "lucide-react";

// Dynamically generate filters
const allTags = new Set(["All", "React", "Node.js", "Django"]);
projects.forEach(p => p.tags?.forEach(tag => allTags.add(tag)));
const filters = Array.from(allTags).slice(0, 7);

// Badge color map
const tagColors = {
  "React": "border-cyan-500/50 text-cyan-400 bg-cyan-500/5",
  "Node.js": "border-emerald-500/50 text-emerald-400 bg-emerald-500/5",
  "Django": "border-green-500/50 text-green-400 bg-green-500/5",
  "MongoDB": "border-lime-500/50 text-lime-400 bg-lime-500/5",
  "PostgreSQL": "border-indigo-500/50 text-indigo-400 bg-indigo-500/5",
  "Redis": "border-rose-500/50 text-rose-400 bg-rose-500/5",
  "AI": "border-purple-500/50 text-purple-400 bg-purple-500/5",
  "WebSocket": "border-blue-500/50 text-blue-400 bg-blue-500/5",
  "default": "border-violet-500/50 text-violet-400 bg-violet-500/5",
};

function getTagColor(tag) {
  return tagColors[tag] || tagColors["default"];
}

const cardAccents = [
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-purple-500",
  "from-emerald-500 to-green-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-sky-500 to-indigo-500",
];

// Projects with dedicated detail pages
const DETAIL_PAGES = ["prime-apparel", "erp-lms", "community-platform", "ai-interview", "f1", "movie", "SkinCare", "covid-detection", "hospital-analytics"];

function ProjectCard({ p, index, onModalOpen }) {
  const navigate = useNavigate();
  const accent = cardAccents[index % cardAccents.length];
  const hasDetailPage = DETAIL_PAGES.includes(p.id);

  const handleClick = () => {
    if (hasDetailPage) {
      navigate(`/project/${p.id}`);
    } else {
      onModalOpen(p);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
      onClick={handleClick}
      className="group relative bg-[#0F172A] border border-white/5 rounded-[32px] overflow-hidden cursor-pointer flex flex-col transition-all duration-500 hover:shadow-[0_32px_80px_-20px_rgba(0,0,0,0.8)]"
      style={{ willChange: "transform" }}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 left-0 z-10`} />

      <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

        {p.isLive && (
          <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-emerald-500 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.4)] z-20">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-[11px] font-[900] uppercase tracking-widest text-white">Live Production</span>
          </div>
        )}

        {!p.isLive && p.companyProject && (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg border border-white/40">
            <CheckCircle2 className="w-3 h-3 text-blue-600" />
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-800 dark:text-white">Company</span>
          </div>
        )}

      </div>

      <div className="p-7 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags?.slice(0, 4).map(tag => (
            <span key={tag} className={`px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] rounded-full border ${getTagColor(tag)}`}>
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-[800] tracking-tight text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
          {p.title}
        </h3>

        <p className="text-[15px] text-gray-400 leading-relaxed line-clamp-2 mb-8 flex-1 font-medium">
          {p.desc}
        </p>

        <div className="flex items-center justify-between pt-5 border-t border-gray-100 dark:border-gray-800">
          {p.role ? (
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
              <Briefcase className="w-3 h-3" /> {p.role.split(" ").slice(0, 3).join(" ")}
            </span>
          ) : (
            <div className="flex gap-2">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
                  className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors">
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {p.live && p.live !== "#" && (
                <a href={p.live} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
                  className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}
          <button className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            {hasDetailPage ? "Case Study" : "Explore"} <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Simple quick-view modal for non-dedicated projects
function QuickModal({ project, onClose }) {
  if (!project) return null;
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div key="bd" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="fixed inset-0 bg-gray-950/75 backdrop-blur-md z-[90]" />
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div key="md" initial={{ opacity: 0, scale: 0.94, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }} transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="bg-white dark:bg-gray-900 rounded-[32px] max-w-2xl w-full shadow-2xl border border-gray-100 dark:border-gray-800 pointer-events-auto overflow-hidden max-h-[85vh] flex flex-col">
              <div className="relative h-56 shrink-0 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
                <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white border border-white/20 transition-all text-sm font-bold px-4">✕</button>
                <div className="absolute bottom-6 left-7">
                  <h3 className="text-2xl font-black text-white">{project.title}</h3>
                  {project.role && <p className="text-xs font-black uppercase tracking-widest text-blue-300 mt-1">{project.role}</p>}
                </div>
              </div>
              <div className="p-8 overflow-y-auto">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{project.desc}</p>
                <div className="flex gap-3 mt-6">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2"><Github className="w-4 h-4"/>GitHub</a>}
                  {project.live && project.live !== "#" && <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2"><ExternalLink className="w-4 h-4"/>Live Demo</a>}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const [quickView, setQuickView] = useState(null);

  const filtered = projects.filter(
    p => active === "All" || (p.tags || []).includes(active)
  );

  return (
    <section id="projects" className="py-32 relative bg-gray-50 dark:bg-[#030305] overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 hidden dark:block" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)' }} />
      <div className="absolute inset-0 block dark:hidden" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)' }} />
      <div className="absolute top-20 left-1/4 w-[600px] h-[400px] bg-blue-500/8 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[300px] bg-violet-500/8 dark:bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: -16, scale: 0.85 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.25em] text-[10px] backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />Portfolio Showcase
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }}
            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter">
            Featured{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500">Work.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
            className="mt-5 text-gray-500 dark:text-gray-400 max-w-xl text-sm md:text-base leading-relaxed">
            A curated collection of my top-tier technical builds — from scalable ERP systems to immersive frontend interfaces.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-14">
          <div className="flex flex-wrap justify-center gap-2 p-2 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 shadow-sm backdrop-blur-md">
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)}
                className={`relative px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${active === f ? "text-white shadow-lg" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}>
                {active === f && (
                  <motion.div layoutId="project-filter-pill" className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl -z-10" transition={{ type: "spring", stiffness: 350, damping: 30 }} />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400 dark:text-gray-600 font-bold">No projects found for this filter.</div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} p={p} index={i} onModalOpen={setQuickView} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          {[
            { value: "6+", label: "Projects Built" },
            { value: "3+", label: "Years Experience" },
            { value: "5+", label: "Happy Clients" },
          ].map((stat, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <QuickModal project={quickView} onClose={() => setQuickView(null)} />
    </section>
  );
}
