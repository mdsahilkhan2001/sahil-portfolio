import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Terminal, ShieldCheck, Sparkles, Database, Code2, Layers, Zap, Globe, Lock, Clock, Activity, Users, Calendar, RefreshCw, 
  ChevronRight, GitBranch, Cpu, CheckCircle2, Workflow, ArrowRight
} from "lucide-react";
import { aiData as d } from "../data/aiInterviewData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
});

const IconMap = {
  Code2, Palette: Layers, Layers, Zap, Terminal, ShieldCheck, Globe, Database, Sparkles, Clock, Lock,
  Calendar, RefreshCw, Users, Activity
};

export default function AiInterviewProjectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] dark:bg-[#0B0C10] text-[#111827] dark:text-gray-100 font-sans selection:bg-purple-100 dark:selection:bg-purple-900/30 overflow-x-hidden">
      
      {/* ─── Premium Grid Background ─── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000A_1px,transparent_1px),linear-gradient(to_bottom,#0000000A_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#FFFFFF08_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* ─── HEADER AREA ─── */}
      <div className="relative z-10 pt-28 md:pt-32 pb-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2.5 px-6 py-2.5 bg-white dark:bg-[#1A1C23] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-full text-xs font-bold shadow-sm hover:shadow-md hover:border-purple-200 dark:hover:border-purple-800/50 transition-all group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </motion.button>
        </div>
      </div>

      {/* ─── HERO SECTION (Linear/Vercel Aesthetic) ─── */}
      <section className="relative z-10 pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            {...fadeUp()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-purple-100 dark:border-purple-800/30"
          >
            <Sparkles className="w-3.5 h-3.5" /> Enterprise Engineering
          </motion.div>
          
          <motion.h1 
            {...fadeUp(0.1)}
            className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-500"
          >
            AI-Powered Technical <br className="hidden md:block" /> Interview Platform
          </motion.h1>

          <motion.p 
            {...fadeUp(0.2)}
            className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium max-w-4xl mx-auto leading-relaxed mb-12"
          >
            {d.heroDescription}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-4 mb-24">
            <a 
              href="https://github.com/mdsahilkhan2001/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold text-sm shadow-xl shadow-gray-900/20 dark:shadow-white/10 hover:scale-105 transition-all inline-block"
            >
              Explore on GitHub
            </a>
            <a 
              href="/#contact"
              className="px-8 py-4 bg-white dark:bg-[#1A1C23] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-sm shadow-sm hover:border-purple-200 dark:hover:border-purple-800/50 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all inline-block"
            >
              Contact Developer
            </a>
          </motion.div>

          {/* Hero Image / Mockup */}
          <motion.div 
            {...fadeUp(0.4)}
            className="relative max-w-5xl mx-auto rounded-[32px] md:rounded-[48px] border border-gray-200/60 dark:border-white/10 bg-white/50 dark:bg-[#1A1C23]/50 backdrop-blur-xl p-4 md:p-6 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5" />
            <img 
              src="/ai_interview_platform_mockup_1778916629839.png" 
              alt="AI Interview Workflow" 
              className="w-full rounded-[24px] md:rounded-[36px] border border-gray-100 dark:border-white/5 relative z-10 shadow-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECT OVERVIEW ─── */}
      <section className="relative z-10 py-32 border-y border-gray-200/50 dark:border-gray-800/50 bg-white dark:bg-[#0F1117]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 dark:text-white">Built for Reliable & Scalable Technical Interviews</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            {d.overview}
          </p>
        </div>
      </section>

      {/* ─── PROBLEMS SOLVED ─── */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-6 dark:text-white">Problems Solved</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">Engineering solutions for scale and reliability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.problems.map((prob, i) => (
              <motion.div 
                key={i} {...fadeUp(i * 0.1)}
                className="group p-10 bg-white/60 dark:bg-[#1A1C23]/60 backdrop-blur-md rounded-3xl border border-gray-200/60 dark:border-white/5 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all shadow-sm hover:shadow-xl hover:shadow-purple-500/5"
              >
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{prob.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{prob.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SYSTEM ARCHITECTURE ─── */}
      <section className="relative z-10 py-32 bg-gray-900 dark:bg-[#0B0C10] border-y border-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Enterprise Architecture</h2>
            <p className="text-xl text-gray-400">A clean, scalable flow connecting the UI to AI evaluation services.</p>
          </div>
          
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {['Frontend (React)', 'API Layer', 'Django REST Backend', 'PostgreSQL Database', 'AI Evaluation Services', 'Session Persistence Layer'].map((layer, i) => (
              <React.Fragment key={layer}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full max-w-md bg-gray-800/50 backdrop-blur-md border border-gray-700 p-6 rounded-2xl text-center relative group hover:border-purple-500/50 transition-colors"
                >
                  <span className="text-lg font-bold tracking-wide">{layer}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                </motion.div>
                {i !== 5 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: 40, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.1 }}
                    className="w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 my-2"
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Authentication flow', 'Real-time sync', 'Session recovery', 'Scheduling workflow'].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 text-sm font-semibold text-gray-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-6 dark:text-white">Technology Stack</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">Production-ready infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(d.techStack).map(([category, techs], i) => {
              // Define distinct, premium colors for each category
              const catStyles = {
                frontend: {
                  bg: "bg-blue-50/80 dark:bg-blue-900/10",
                  border: "border-blue-200/50 dark:border-blue-800/30",
                  hover: "hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-blue-500/20",
                  iconBg: "bg-blue-100 dark:bg-blue-900/30",
                  iconColor: "text-blue-600 dark:text-blue-400"
                },
                backend: {
                  bg: "bg-emerald-50/80 dark:bg-emerald-900/10",
                  border: "border-emerald-200/50 dark:border-emerald-800/30",
                  hover: "hover:border-emerald-400 dark:hover:border-emerald-500/50 hover:shadow-emerald-500/20",
                  iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
                  iconColor: "text-emerald-600 dark:text-emerald-400"
                },
                database: {
                  bg: "bg-violet-50/80 dark:bg-violet-900/10",
                  border: "border-violet-200/50 dark:border-violet-800/30",
                  hover: "hover:border-violet-400 dark:hover:border-violet-500/50 hover:shadow-violet-500/20",
                  iconBg: "bg-violet-100 dark:bg-violet-900/30",
                  iconColor: "text-violet-600 dark:text-violet-400"
                },
                ai: {
                  bg: "bg-rose-50/80 dark:bg-rose-900/10",
                  border: "border-rose-200/50 dark:border-rose-800/30",
                  hover: "hover:border-rose-400 dark:hover:border-rose-500/50 hover:shadow-rose-500/20",
                  iconBg: "bg-rose-100 dark:bg-rose-900/30",
                  iconColor: "text-rose-600 dark:text-rose-400"
                }
              }[category] || {
                bg: "bg-gray-50/80 dark:bg-gray-900/10",
                border: "border-gray-200/50 dark:border-gray-800/30",
                hover: "hover:border-gray-400 dark:hover:border-gray-500/50 hover:shadow-gray-500/20",
                iconBg: "bg-gray-200 dark:bg-gray-800",
                iconColor: "text-gray-600 dark:text-gray-400"
              };

              return (
                <motion.div key={category} {...fadeUp(i * 0.1)} className={`backdrop-blur-md p-8 rounded-3xl border transition-all duration-300 shadow-lg shadow-black/5 hover:-translate-y-1 ${catStyles.bg} ${catStyles.border} ${catStyles.hover}`}>
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8 border-b border-black/5 dark:border-white/5 pb-4">{category}</h4>
                  <div className="space-y-6">
                    {techs.map((t, j) => {
                      const Icon = IconMap[t.icon] || Code2;
                      return (
                        <div key={j} className="flex items-center gap-4 group cursor-default">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${catStyles.iconBg} ${catStyles.iconColor}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{t.name}</span>
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

      {/* ─── CORE FEATURES ─── */}
      <section className="relative z-10 py-32 bg-white dark:bg-[#0F1117] border-y border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-6 dark:text-white">Core Features</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">Intelligent workflows and robust state management.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {d.features.map((f, i) => {
              const Icon = IconMap[f.icon] || Sparkles;
              return (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="p-8 rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors group">
                  <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3 dark:text-white">{f.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CONTRIBUTIONS & CHALLENGES ─── */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-12 dark:text-white flex items-center gap-4">
              <GitBranch className="text-purple-500" /> My Contributions
            </h2>
            <div className="space-y-8">
              {d.contributions.map((c, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="pl-6 border-l-2 border-purple-200 dark:border-purple-900/50 relative">
                  <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-purple-500" />
                  <h4 className="text-lg font-bold mb-2 dark:text-white">{c.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-12 dark:text-white flex items-center gap-4">
              <Cpu className="text-blue-500" /> Engineering Challenges
            </h2>
            <div className="space-y-4">
              {d.challenges.map((challenge, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-[#1A1C23]/60 border border-gray-200/60 dark:border-white/5 shadow-sm">
                  <Workflow className="w-5 h-5 text-gray-400" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{challenge}</span>
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl font-bold tracking-tight mt-20 mb-8 dark:text-white">Key Learnings</h2>
            <div className="flex flex-wrap gap-3">
              {d.learnings.map((learning, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-sm font-semibold border border-gray-200 dark:border-gray-700/50">
                  {learning}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── IMPACT SECTION ─── */}
      <section className="relative z-10 py-32 bg-gray-900 dark:bg-[#0B0C10] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Platform Impact</h2>
            <p className="text-xl text-gray-400">Metrics that matter.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {d.metrics.map((m, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="text-center p-8 rounded-3xl bg-gray-800/40 border border-gray-700 hover:bg-gray-800/80 transition-colors">
                <div className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  {m.value}
                </div>
                <div className="text-gray-400 font-semibold uppercase tracking-wider text-sm">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative z-10 py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold tracking-tight mb-8 dark:text-white">Building Reliable AI Interview Experiences</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-12">
            Designed to deliver scalable, interruption-safe, and intelligent technical interview workflows with modern engineering architecture.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/mdsahilkhan2001/" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-purple-600 text-white rounded-full font-bold shadow-xl shadow-purple-500/30 hover:bg-purple-500 transition-colors flex items-center gap-2"
            >
              View on GitHub <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="/#contact"
              className="px-8 py-4 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors inline-block"
            >
              Contact Developer
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
