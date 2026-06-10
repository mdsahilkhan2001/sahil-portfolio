import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Brain, Scan, Activity, Eye, Network, Monitor, BarChart, 
  Code, FileCode, Upload, Filter, Flame, CheckCircle2, Cpu, 
  GitBranch, ArrowRight, Sparkles, Layers, ShieldCheck
} from "lucide-react";
import { covidData as d } from "../data/covidData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
});

const IconMap = {
  Brain, Scan, Activity, Eye, Network, Monitor, BarChart, Code, FileCode, Upload, Filter, Flame, Sparkles, Layers, ShieldCheck
};

export default function CovidProjectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] dark:bg-[#0B0C10] text-[#111827] dark:text-gray-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30 overflow-x-hidden">
      
      {/* ─── Premium Grid Background ─── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#FFFFFF05_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF05_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* ─── HEADER AREA ─── */}
      <div className="relative z-10 pt-28 md:pt-32 pb-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2.5 px-6 py-2.5 bg-white dark:bg-[#1A1C23] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-full text-xs font-bold shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800/50 transition-all group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </motion.button>
        </div>
      </div>

      {/* ─── HERO SECTION ─── */}
      <section className="relative z-10 pt-16 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            {...fadeUp()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-blue-100 dark:border-blue-800/30 shadow-sm"
          >
            <Activity className="w-3.5 h-3.5" /> Medical AI Diagnostics
          </motion.div>
          
          <motion.h1 
            {...fadeUp(0.1)}
            className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-500"
          >
            AI-Powered Chest <br className="hidden md:block" /> X-Ray Diagnostics
          </motion.h1>

          <motion.p 
            {...fadeUp(0.2)}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed mb-12"
          >
            {d.heroDescription}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-4 mb-24">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-sm shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:scale-105 transition-all inline-block cursor-pointer">
              Analyze X-Ray
            </button>
            <button className="px-8 py-4 bg-white dark:bg-[#1A1C23] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-sm shadow-sm hover:border-blue-200 dark:hover:border-blue-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all inline-block cursor-pointer">
              Explore AI System
            </button>
          </motion.div>

          {/* Hero Image / Mockup */}
          <motion.div 
            {...fadeUp(0.4)}
            className="relative max-w-5xl mx-auto rounded-[32px] md:rounded-[48px] border border-gray-200/60 dark:border-white/10 bg-white/50 dark:bg-[#1A1C23]/50 backdrop-blur-xl p-4 md:p-6 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-cyan-500/5" />
            <div className="relative rounded-[24px] md:rounded-[36px] overflow-hidden border border-gray-100 dark:border-white/5">
                <img 
                src="/covid_ai_dashboard.png" 
                alt="COVID-19 AI Diagnostic Dashboard" 
                className="w-full relative z-10 shadow-sm"
                />
                {/* AI Scanning Effect Overlay */}
                <motion.div 
                    initial={{ top: "-100%" }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-blue-400/50 shadow-[0_0_20px_rgba(96,165,250,0.8)] z-20 pointer-events-none"
                />
            </div>
            
            {/* Floating X-ray Decoration Cards */}
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 top-1/4 hidden lg:block w-48 p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl z-30"
            >
                <div className="aspect-square rounded-lg bg-gray-200 dark:bg-gray-900 mb-2 overflow-hidden">
                    <img src="/covid_ai_dashboard.png" alt="scan" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="h-2 w-3/4 bg-gray-100 dark:bg-gray-700 rounded mb-1" />
                <div className="h-2 w-1/2 bg-gray-100 dark:bg-gray-700 rounded" />
            </motion.div>

            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-12 bottom-1/4 hidden lg:block w-48 p-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl z-30"
            >
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-[8px] font-bold uppercase tracking-wider text-gray-400">Analysis Active</span>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <div className="h-1 w-12 bg-gray-100 dark:bg-gray-700 rounded" />
                        <span className="text-[8px] font-bold text-blue-500">98.2%</span>
                    </div>
                    <div className="h-1 w-full bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
                        <div className="h-full w-[98.2%] bg-blue-500" />
                    </div>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECT OVERVIEW ─── */}
      <section className="relative z-10 py-32 border-y border-gray-200/50 dark:border-gray-800/50 bg-white dark:bg-[#0F1117]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp()} className="text-3xl md:text-5xl font-bold tracking-tight mb-8 dark:text-white">AI-Assisted Medical Imaging System</motion.h2>
          <motion.div {...fadeUp(0.1)} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium space-y-6">
            {d.overview.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CORE FEATURES ─── */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-6 dark:text-white">Intelligent Clinical Features</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">Engineered for precision, explainability, and healthcare trust.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {d.features.map((f, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="p-8 rounded-3xl bg-white dark:bg-[#1A1C23] border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all group shadow-sm hover:shadow-xl hover:shadow-blue-500/5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${f.color} text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="text-xl">{f.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI WORKFLOW PIPELINE ─── */}
      <section className="relative z-10 py-32 bg-gray-50 dark:bg-[#0B0C10] border-y border-gray-200/50 dark:border-gray-800/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-24">
                <h2 className="text-4xl font-bold tracking-tight mb-6 dark:text-white">Futuristic AI Diagnostic Pipeline</h2>
                <p className="text-xl text-gray-500 dark:text-gray-400">From raw imaging to explainable diagnostic insights.</p>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Connecting Lines (Desktop) */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-800 hidden md:block -translate-y-1/2" />
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                    {d.workflow.map((step, i) => {
                        const Icon = IconMap[step.icon] || Activity;
                        return (
                            <motion.div 
                                key={i} 
                                {...fadeUp(i * 0.1)}
                                className="flex flex-col items-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-50 dark:border-gray-900 flex items-center justify-center mb-6 shadow-xl relative group">
                                    <div className="absolute inset-0 rounded-full bg-blue-500/10 scale-0 group-hover:scale-125 transition-transform duration-500" />
                                    <Icon className="w-6 h-6 text-blue-500 relative z-10" />
                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white dark:border-gray-800">
                                        {step.step}
                                    </div>
                                </div>
                                <h4 className="text-sm font-bold mb-2 dark:text-white text-center">{step.label}</h4>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 text-center leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
      </section>

      {/* ─── GRAD-CAM VISUALIZATION SHOWCASE ─── */}
      <section className="relative z-10 py-32 bg-white dark:bg-[#0F1117]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                    <motion.div 
                        {...fadeUp()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-orange-100 dark:border-orange-800/30"
                    >
                        <Flame className="w-3.5 h-3.5" /> Explainable AI (XAI)
                    </motion.div>
                    <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-bold tracking-tight mb-8 dark:text-white leading-tight">
                        Visualizing Model <br /> Decision Making
                    </motion.h2>
                    <motion.p {...fadeUp(0.2)} className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium">
                        Using Grad-CAM (Gradient-weighted Class Activation Mapping), the system highlights the specific regions of the chest X-ray that the CNN model prioritized during classification. This transforms the "black box" of AI into a transparent diagnostic assistant.
                    </motion.p>
                    
                    <div className="space-y-6">
                        {['Anatomical region focus', 'Confidence-weighted heatmaps', 'Clinical transparency', 'Diagnostic verification support'].map((item, i) => (
                            <motion.div key={i} {...fadeUp(0.3 + i * 0.1)} className="flex items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                                </div>
                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div 
                    {...fadeUp(0.4)}
                    className="relative"
                >
                    <div className="bg-white dark:bg-[#1A1C23] p-4 rounded-[40px] border border-gray-200 dark:border-gray-800 shadow-2xl relative overflow-hidden group">
                        <div className="aspect-square rounded-[28px] overflow-hidden bg-gray-100 dark:bg-gray-900 relative">
                            {/* Base Image */}
                            <img src="/covid_ai_dashboard.png" alt="X-ray" className="w-full h-full object-cover" />
                            
                            {/* Animated Heatmap Overlay */}
                            <motion.div 
                                animate={{ opacity: [0.3, 0.8, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-gradient-to-tr from-orange-500/40 via-red-500/20 to-transparent mix-blend-overlay pointer-events-none"
                            />

                            {/* UI Elements */}
                            <div className="absolute top-6 right-6 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white z-20">
                                <div className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">Focus Intensity</div>
                                <div className="flex items-center gap-2">
                                    <div className="h-1 w-24 bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full w-[85%] bg-orange-500" />
                                    </div>
                                    <span className="text-xs font-black">HIGH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px] -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-[60px] -z-10" />
                </motion.div>
            </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="relative z-10 py-32 bg-gray-50 dark:bg-[#0B0C10] border-y border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-6 dark:text-white">Scientific Tech Stack</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">Built with production-grade AI frameworks and medical imaging tools.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(d.techStack).map(([category, techs], i) => (
                <motion.div 
                    key={category} 
                    {...fadeUp(i * 0.1)} 
                    className="bg-white dark:bg-[#1A1C23] backdrop-blur-md p-8 rounded-3xl border border-gray-200 dark:border-gray-800 transition-all duration-300 shadow-sm hover:-translate-y-1"
                >
                  <h4 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">{category}</h4>
                  <div className="space-y-6">
                    {techs.map((t, j) => {
                      const Icon = IconMap[t.icon] || Code;
                      return (
                        <div key={j} className="flex items-center gap-4 group cursor-default">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 bg-gradient-to-br ${t.color} text-white shadow-md`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{t.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTRIBUTIONS ─── */}
      <section className="relative z-10 py-32 bg-white dark:bg-[#0F1117]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-12 dark:text-white flex items-center gap-4">
              <GitBranch className="text-blue-500" /> My Contributions
            </h2>
            <div className="space-y-8">
              {d.contributions.map((c, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="pl-6 border-l-2 border-blue-200 dark:border-blue-900/50 relative">
                  <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-blue-500" />
                  <h4 className="text-lg font-bold mb-2 dark:text-white">{c.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-12 dark:text-white flex items-center gap-4">
              <ShieldCheck className="text-cyan-500" /> Research Challenges
            </h2>
            <div className="space-y-4 mb-20">
              {d.challenges.map((challenge, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-[#1A1C23] border border-gray-200 dark:border-gray-800 shadow-sm">
                  <Cpu className="w-5 h-5 text-gray-400" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200 leading-tight">{challenge}</span>
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl font-bold tracking-tight mb-8 dark:text-white">Key Learnings</h2>
            <div className="flex flex-wrap gap-3">
              {d.learnings.map((learning, i) => (
                <span key={i} className="px-5 py-2.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-bold border border-blue-100 dark:border-blue-800/30">
                  {learning}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── IMPACT SECTION ─── */}
      <section className="relative z-10 py-32 bg-[#0B0C10] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Diagnostic Impact</h2>
            <p className="text-xl text-gray-400">Measurable research and engineering outcomes.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {d.metrics.map((m, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="text-center p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all group">
                <div className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:scale-110 transition-transform">
                  {m.value}
                </div>
                <div className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA SECTION ─── */}
      <section className="relative z-10 py-40 bg-white dark:bg-[#0F1117]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-blue-100 dark:border-blue-800/30">
            <Monitor className="w-3.5 h-3.5" /> Future of Medicine
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 dark:text-white">Advancing Healthcare Through Explainable AI</motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-xl text-gray-500 dark:text-gray-400 mb-12 font-medium leading-relaxed">
            Combining deep learning, medical imaging, and explainable AI visualization to support intelligent diagnostic experiences.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="flex items-center justify-center gap-6">
            <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold shadow-2xl shadow-blue-500/40 hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-3">
              Explore System <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-5 bg-white dark:bg-[#1A1C23] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all inline-block cursor-pointer">
              View Research
            </button>
          </motion.div>
        </div>

        {/* Background Particle Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      </section>

    </div>
  );
}
