import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, BarChart, Zap, Filter, FileSpreadsheet, Eraser, Layers, 
  Activity, MousePointer2, Layout, CheckCircle2, TrendingUp, Users, 
  DollarSign, PieChart, ArrowRight, Code, Sparkles, Database, ShieldCheck, Clock
} from "lucide-react";
import { hospitalData as d } from "../data/hospitalAnalyticsData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
});

const IconMap = {
  BarChart, Zap, Filter, FileSpreadsheet, Eraser, Layers, Activity, MousePointer2, Layout, Database, ShieldCheck
};

export default function HospitalAnalyticsProjectPage() {
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
      <section className="relative z-10 pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            {...fadeUp()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-blue-100 dark:border-blue-800/30"
          >
            <PieChart className="w-3.5 h-3.5" /> Healthcare Business Intelligence
          </motion.div>
          
          <motion.h1 
            {...fadeUp(0.1)}
            className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-500"
          >
            Healthcare Intelligence <br className="hidden md:block" /> Powered by Data
          </motion.h1>

          <motion.p 
            {...fadeUp(0.2)}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium max-w-4xl mx-auto leading-relaxed mb-12"
          >
            {d.heroDescription}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-4 mb-24">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-sm shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:scale-105 transition-all inline-block cursor-pointer">
              Explore Dashboard
            </button>
            <button className="px-8 py-4 bg-white dark:bg-[#1A1C23] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-sm shadow-sm hover:border-blue-200 dark:hover:border-blue-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all inline-block cursor-pointer">
              View Analytics
            </button>
          </motion.div>

          {/* Hero Image / Mockup */}
          <motion.div 
            {...fadeUp(0.4)}
            className="relative max-w-5xl mx-auto rounded-[32px] md:rounded-[48px] border border-gray-200/60 dark:border-white/10 bg-white/50 dark:bg-[#1A1C23]/50 backdrop-blur-xl p-4 md:p-6 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-indigo-500/5" />
            <div className="relative rounded-[24px] md:rounded-[36px] overflow-hidden border border-gray-100 dark:border-white/5 bg-white dark:bg-gray-900 p-2 shadow-inner">
                <img 
                src="/hospital_analytics_dashboard.png" 
                alt="Hospital ERP Analytics Dashboard" 
                className="w-full relative z-10 rounded-[22px] md:rounded-[34px]"
                />
                
                {/* Floating KPI Cards on Image */}
                <div className="absolute top-10 right-10 z-20 space-y-4 hidden lg:block">
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-xl flex items-center gap-4 w-48"
                    >
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Revenue</div>
                            <div className="text-sm font-black dark:text-white">+24.8%</div>
                        </div>
                    </motion.div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECT OVERVIEW ─── */}
      <section className="relative z-10 py-32 border-y border-gray-200/50 dark:border-gray-800/50 bg-white dark:bg-[#0F1117]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp()} className="text-3xl md:text-5xl font-bold tracking-tight mb-8 dark:text-white">Modern Healthcare Business Intelligence</motion.h2>
          <motion.div {...fadeUp(0.1)} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium space-y-6">
            {d.overview.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── KPI ANALYTICS SECTION ─── */}
      <section className="relative z-10 py-32 bg-gray-50 dark:bg-[#0B0C10]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                    { label: "Total Patients", value: "10,240", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
                    { label: "Revenue Growth", value: "+18.2%", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                    { label: "Expense Ratio", value: "62.4%", icon: DollarSign, color: "text-amber-500", bg: "bg-amber-500/10" },
                    { label: "Treatment Success", value: "94.8%", icon: Activity, color: "text-rose-500", bg: "bg-rose-500/10" },
                    { label: "Operational Eff.", value: "88.2%", icon: Zap, color: "text-indigo-500", bg: "bg-indigo-500/10" },
                    { label: "Avg Length Stay", value: "4.2 Days", icon: Clock, color: "text-cyan-500", bg: "bg-cyan-500/10" },
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        {...fadeUp(i * 0.05)}
                        className="bg-white dark:bg-[#1A1C23] p-6 rounded-[32px] border border-gray-200 dark:border-gray-800 flex flex-col items-center text-center shadow-sm group hover:shadow-xl hover:border-blue-500/30 transition-all"
                    >
                        <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div className="text-2xl font-black dark:text-white mb-1">{stat.value}</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* ─── CORE FEATURES ─── */}
      <section className="relative z-10 py-32 bg-white dark:bg-[#0F1117]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-6 dark:text-white">Executive Enterprise Analytics</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">Comprehensive BI capabilities for modern hospital administration.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {d.features.map((f, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="p-10 rounded-[40px] bg-gray-50 dark:bg-[#1A1C23] border border-gray-100 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all group shadow-sm hover:shadow-xl">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${f.color} text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="text-2xl">{f.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DAX & DATA MODELING SECTION ─── */}
      <section className="relative z-10 py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                    <motion.div {...fadeUp()} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-blue-500/20">
                        <Code className="w-3.5 h-3.5" /> Data Engineering
                    </motion.div>
                    <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                        Advanced DAX & <br /> Data Modeling
                    </motion.h2>
                    <motion.p {...fadeUp(0.2)} className="text-lg text-gray-400 mb-10 leading-relaxed">
                        The project implements optimized data modeling and complex DAX calculations to provide accurate, multi-dimensional healthcare insights with high performance across large datasets.
                    </motion.p>
                    
                    <div className="space-y-4">
                        {['Star schema data architecture', 'Optimized DAX measure calculations', 'Automated Power Query workflows', 'Complex relationship modeling'].map((item, i) => (
                            <motion.div key={i} {...fadeUp(0.3 + i * 0.1)} className="flex items-center gap-4">
                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                <span className="font-semibold text-gray-300">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {d.daxCalculations.map((calc, i) => (
                        <motion.div 
                            key={i} 
                            {...fadeUp(0.4 + i * 0.1)}
                            className="bg-gray-800/50 backdrop-blur-md border border-gray-700 p-6 rounded-3xl group hover:border-blue-500/50 transition-colors"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">{calc.name}</span>
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            </div>
                            <div className="bg-black/40 rounded-xl p-4 mb-4 font-mono text-[10px] text-gray-300 border border-white/5">
                                {calc.code}
                            </div>
                            <p className="text-[10px] text-gray-500 leading-relaxed">{calc.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="relative z-10 py-32 bg-white dark:bg-[#0F1117]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-6 dark:text-white">Premium Analytics Stack</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">Enterprise BI stack focused on accuracy, performance, and executive storytelling.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(d.techStack).map(([category, techs], i) => (
                <motion.div 
                    key={category} 
                    {...fadeUp(i * 0.1)} 
                    className="bg-gray-50 dark:bg-[#1A1C23] p-10 rounded-[48px] border border-gray-100 dark:border-gray-800 shadow-sm hover:-translate-y-2 transition-all duration-300"
                >
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-10 border-b border-gray-200 dark:border-gray-800 pb-5">{category}</h4>
                  <div className="space-y-8">
                    {techs.map((t, j) => {
                      const Icon = IconMap[t.icon] || BarChart;
                      return (
                        <div key={j} className="flex items-center gap-6 group cursor-default">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br ${t.color} text-white shadow-lg`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-lg font-bold text-gray-800 dark:text-gray-200">{t.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUSINESS IMPACT ─── */}
      <section className="relative z-10 py-32 bg-gray-50 dark:bg-[#0B0C10] border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-24">
                <h2 className="text-4xl font-bold tracking-tight mb-6 dark:text-white">Business Impact & Insights</h2>
                <p className="text-xl text-gray-500 dark:text-gray-400">Transforming clinical data into strategic hospital advantages.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {d.impact.map((insight, i) => (
                    <motion.div 
                        key={i} 
                        {...fadeUp(i * 0.05)}
                        className="flex items-start gap-6 p-8 rounded-[32px] bg-white dark:bg-[#1A1C23] border border-gray-200 dark:border-gray-800 group hover:border-blue-500/30 transition-all"
                    >
                        <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="w-5 h-5 text-blue-500" />
                        </div>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">{insight}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* ─── CONTRIBUTIONS & CHALLENGES ─── */}
      <section className="relative z-10 py-32 bg-white dark:bg-[#0F1117]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-12 dark:text-white flex items-center gap-4">
              <Layers className="text-blue-500" /> My Contributions
            </h2>
            <div className="space-y-8">
              {d.contributions.map((c, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="pl-6 border-l-2 border-blue-200 dark:border-blue-900/50 relative">
                  <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-blue-500" />
                  <h4 className="text-xl font-bold mb-2 dark:text-white">{c.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-12 dark:text-white flex items-center gap-4">
              <ShieldCheck className="text-indigo-500" /> Engineering Challenges
            </h2>
            <div className="space-y-4 mb-20">
              {d.challenges.map((challenge, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-[#1A1C23] border border-gray-200 dark:border-gray-800 shadow-sm">
                  <Activity className="w-5 h-5 text-gray-400" />
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

      {/* ─── FUTURE IMPROVEMENTS ─── */}
      <section className="relative z-10 py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-24">
                <h2 className="text-4xl font-bold tracking-tight mb-6">Future Roadmap</h2>
                <p className="text-xl text-gray-400">Scaling towards automated predictive healthcare intelligence.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {d.futureFeatures.map((feature, i) => (
                    <motion.div 
                        key={i} 
                        {...fadeUp(i * 0.1)}
                        className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
                    >
                        <Sparkles className="w-8 h-8 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                        <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* ─── FINAL CTA SECTION ─── */}
      <section className="relative z-10 py-40 bg-white dark:bg-[#0F1117]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-blue-100 dark:border-blue-800/30">
            <TrendingUp className="w-3.5 h-3.5" /> Data-Driven Decisions
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 dark:text-white">Transforming Healthcare Through Intelligence</motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-xl text-gray-500 dark:text-gray-400 mb-12 font-medium leading-relaxed">
            Delivering modern healthcare analytics experiences through interactive dashboards, KPI reporting, and enterprise-grade data visualization.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="flex items-center justify-center gap-6">
            <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold shadow-2xl shadow-blue-500/40 hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-3">
              View Dashboard <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-5 bg-white dark:bg-[#1A1C23] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all inline-block cursor-pointer">
              Explore Analytics
            </button>
          </motion.div>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      </section>

    </div>
  );
}
