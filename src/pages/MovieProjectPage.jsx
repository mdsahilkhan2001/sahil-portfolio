import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Globe, ShieldCheck, Heart, Sparkles, Zap, Terminal, Code2, Palette, Layout, Database, Activity,
  Play, Plus, GitBranch, Cpu, ArrowRight, Film, Search
} from "lucide-react";
import { movieData as d } from "../data/movieExplorerData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
});

const IconMap = {
  Code2, Palette, Zap, Layout, Terminal, Database, Activity, Globe, ShieldCheck, Heart, Sparkles, Search
};

export default function MovieProjectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] dark:bg-[#050505] text-gray-900 dark:text-white font-sans selection:bg-red-600/30 overflow-x-hidden transition-colors duration-500">
      
      {/* ─── Cinematic Hero Backdrop ─── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/50 via-[#F8F9FA]/80 to-[#F8F9FA] dark:from-[#141414]/10 dark:via-[#050505]/80 dark:to-[#050505] transition-colors duration-500"></div>
        <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-red-500/20 dark:bg-red-600/10 rounded-full blur-[150px] dark:blur-[200px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
        <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/20 dark:bg-purple-600/10 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
      </div>

      {/* ─── HEADER AREA ─── */}
      <div className="relative z-10 pt-28 md:pt-32 pb-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2.5 px-6 py-2.5 bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-sm hover:bg-white dark:hover:bg-white/10 hover:border-red-500/50 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-red-600 dark:text-red-500" /> Back
          </motion.button>
        </div>
      </div>

      {/* ─── HERO SECTION (Netflix / Streaming Aesthetic) ─── */}
      <section className="relative z-10 pt-16 pb-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          
          <motion.div 
            {...fadeUp()}
            className="inline-flex items-center gap-2 px-5 py-2 bg-red-100 dark:bg-red-600/20 text-red-600 dark:text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10 rounded-full border border-red-200 dark:border-red-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(220,38,38,0.1)] dark:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
          >
            <Film className="w-4 h-4" /> Intelligence Platform
          </motion.div>
          
          <motion.h1 
            {...fadeUp(0.1)}
            className="text-5xl md:text-7xl lg:text-8xl font-[900] tracking-tighter mb-8 leading-[1.1] text-gray-900 dark:text-white drop-shadow-sm dark:drop-shadow-2xl"
          >
            Discover Cinema <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600 dark:from-white dark:to-gray-500">Beyond the Ordinary.</span>
          </motion.h1>

          <motion.p 
            {...fadeUp(0.2)}
            className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-medium max-w-4xl mx-auto leading-relaxed mb-16"
          >
            {d.heroDescription}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-6 mb-32">
            <a 
              href={d.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-10 py-5 bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-sm rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-xl hover:scale-105"
            >
              <Play className="w-5 h-5 fill-current" /> Explore Project
            </a>
            <button className="flex items-center gap-3 px-10 py-5 bg-white dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white font-black uppercase tracking-widest text-sm rounded-md hover:bg-gray-50 dark:hover:bg-white/20 dark:hover:border-white/40 transition-all shadow-sm hover:scale-105">
              <Plus className="w-5 h-5" /> View MyList
            </button>
          </motion.div>

          {/* Hero Mockup Focus */}
          <motion.div 
            {...fadeUp(0.4)}
            className="relative w-full max-w-6xl mx-auto rounded-2xl bg-white dark:bg-black p-2 border border-gray-200 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_0_100px_rgba(220,38,38,0.15)] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-black via-transparent to-transparent z-10 opacity-60"></div>
            <img 
              src={d.img} 
              alt="Movie Explorer UI" 
              className="w-full h-auto rounded-xl object-cover transform group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "/project section img/f1.png"; 
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECT OVERVIEW ─── */}
      <section className="relative z-10 py-32 bg-white dark:bg-[#111] border-y border-gray-200 dark:border-white/5 transition-colors">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8">Modern Movie Discovery Experience</h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium max-w-5xl mx-auto">
            {d.overview}
          </p>
        </div>
      </section>

      {/* ─── CORE FEATURES ─── */}
      <section className="relative z-10 py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Cinematic Features</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">Built for immersive exploration.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.features.map((f, i) => {
              const Icon = IconMap[f.icon] || Sparkles;
              return (
                <motion.div 
                  key={i} 
                  {...fadeUp(i * 0.1)} 
                  className="group relative p-8 bg-white dark:bg-[#141414] rounded-2xl border border-gray-200 dark:border-white/5 hover:border-red-500/50 dark:hover:border-red-500/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-red-500/10"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="w-14 h-14 bg-gray-50 dark:bg-white/5 group-hover:bg-red-50 dark:group-hover:bg-red-500/10 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors rounded-full flex items-center justify-center mb-8 border border-gray-100 dark:border-white/5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{f.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── API ARCHITECTURE ─── */}
      <section className="relative z-10 py-32 bg-gray-50 dark:bg-black overflow-hidden border-y border-gray-200 dark:border-transparent transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1)_0%,transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">Data Architecture</h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl font-medium">Resilient TMDB API integration with intelligent filtering logic.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 flex flex-col items-center">
              {['Frontend UI (React + Vite)', 'TMDB API Requests', 'Movie Data Rendering', 'Advanced Filtering', 'MyList localStorage System'].map((layer, i) => (
                <React.Fragment key={layer}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="w-full max-w-lg p-6 bg-white dark:bg-[#141414] border border-gray-200 dark:border-white/10 rounded-xl text-center shadow-md dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] group hover:border-purple-500/50 transition-colors relative"
                  >
                    <span className="text-lg font-bold tracking-wide text-gray-900 dark:text-white">{layer}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  </motion.div>
                  {i !== 4 && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: 40, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.1 }}
                      className="w-0.5 bg-gradient-to-b from-purple-500 to-red-500 my-2"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="relative z-10 py-32 bg-white dark:bg-[#111] transition-colors">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black tracking-tight mb-4 text-gray-900 dark:text-white">Technology Stack</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">Powered by modern frontend tooling.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(d.techStack).map(([category, techs], i) => {
              const catStyles = {
                frontend: {
                  bg: "bg-gray-50 dark:bg-[#141414]",
                  border: "border-gray-200 dark:border-white/5",
                  hover: "hover:border-red-500/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)] dark:hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] hover:-translate-y-1",
                  iconBg: "bg-red-100 dark:bg-red-500/10",
                  iconColor: "text-red-600 dark:text-red-500"
                },
                api: {
                  bg: "bg-gray-50 dark:bg-[#141414]",
                  border: "border-gray-200 dark:border-white/5",
                  hover: "hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(147,51,234,0.1)] dark:hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] hover:-translate-y-1",
                  iconBg: "bg-purple-100 dark:bg-purple-500/10",
                  iconColor: "text-purple-600 dark:text-purple-500"
                },
                storage: {
                  bg: "bg-gray-50 dark:bg-[#141414]",
                  border: "border-gray-200 dark:border-white/5",
                  hover: "hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1",
                  iconBg: "bg-blue-100 dark:bg-blue-500/10",
                  iconColor: "text-blue-600 dark:text-blue-500"
                },
                features: {
                  bg: "bg-gray-50 dark:bg-[#141414]",
                  border: "border-gray-200 dark:border-white/5",
                  hover: "hover:border-emerald-500/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-1",
                  iconBg: "bg-emerald-100 dark:bg-emerald-500/10",
                  iconColor: "text-emerald-600 dark:text-emerald-500"
                }
              }[category] || {
                bg: "bg-gray-50 dark:bg-[#141414]",
                border: "border-gray-200 dark:border-white/5",
                hover: "hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-lg hover:-translate-y-1",
                iconBg: "bg-gray-200 dark:bg-gray-800",
                iconColor: "text-gray-600 dark:text-gray-400"
              };

              return (
                <motion.div key={category} {...fadeUp(i * 0.1)} className={`p-8 rounded-2xl border transition-all duration-500 ${catStyles.bg} ${catStyles.border} ${catStyles.hover}`}>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-8 border-b border-gray-200 dark:border-white/5 pb-4">{category}</h4>
                  <div className="space-y-6">
                    {techs.map((t, j) => {
                      const Icon = IconMap[t.icon] || Code2;
                      return (
                        <div key={j} className="flex items-center gap-4 group cursor-default">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 border border-gray-100 dark:border-white/5 shadow-sm ${catStyles.iconBg} ${catStyles.iconColor}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-bold text-gray-800 dark:text-gray-200">{t.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CONTRIBUTIONS & CHALLENGES ─── */}
      <section className="relative z-10 py-32 bg-[#F8F9FA] dark:bg-[#050505] transition-colors">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div>
            <h2 className="text-3xl font-black tracking-tight mb-12 text-gray-900 dark:text-white flex items-center gap-4">
              <GitBranch className="text-red-600" /> My Contributions
            </h2>
            <div className="space-y-10">
              {d.contributions.map((c, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="relative pl-8">
                  <div className="absolute top-2 left-0 w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                  <div className="absolute top-3 left-[3px] w-[2px] h-full bg-gray-200 dark:bg-white/5" />
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{c.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black tracking-tight mb-12 text-gray-900 dark:text-white flex items-center gap-4">
              <Cpu className="text-purple-600" /> Engineering Challenges
            </h2>
            <div className="space-y-4 mb-20">
              {d.challenges.map((challenge, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="flex items-center gap-4 p-5 bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-white/5 shadow-sm hover:border-gray-300 dark:hover:border-white/10 transition-colors">
                  <Terminal className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                  <span className="font-bold text-gray-800 dark:text-gray-300">{challenge}</span>
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white">Key Learnings</h2>
            <div className="flex flex-wrap gap-3">
              {d.learnings.map((learning, i) => (
                <span key={i} className="px-5 py-3 rounded-md bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 text-sm font-bold border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-default">
                  {learning}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── IMPACT SECTION ─── */}
      <section className="relative z-10 py-32 bg-white dark:bg-[#111] border-t border-gray-200 dark:border-white/5 transition-colors">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">Platform Impact</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">Delivering a flawless entertainment experience.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {d.metrics.map((m, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="p-10 rounded-2xl bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-white/5 text-center hover:border-red-500/30 transition-all duration-500 group shadow-sm hover:shadow-xl">
                <div className="text-3xl md:text-4xl font-black mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-purple-600 transition-colors">
                  {m.value}
                </div>
                <div className="text-gray-500 font-medium text-sm tracking-wide">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative z-10 py-40 overflow-hidden bg-gray-900 dark:bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(220,38,38,0.15)_0%,transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white">Experience Movies in a Modern Way.</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-16 font-medium max-w-2xl mx-auto leading-relaxed">
            Designed to deliver immersive cinematic browsing experiences with smooth frontend engineering and modern streaming-inspired design.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a 
              href={d.links.github}
              target="_blank"
              rel="noreferrer"
              className="px-12 py-5 bg-red-600 text-white rounded-md font-black uppercase tracking-widest text-sm hover:bg-red-500 transition-colors shadow-[0_0_40px_rgba(220,38,38,0.4)]"
            >
              Explore Project
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
