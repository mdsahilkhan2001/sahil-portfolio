import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, ShieldCheck, ShoppingBag, CreditCard, Smartphone, Sparkles, Cloud, Code2, Palette, Zap, Bell, Terminal, Database, Globe, Layout,
  ArrowRight, Tag, Zap as ZapIcon, Key, GitBranch, Cpu, ChevronRight
} from "lucide-react";
import { f1Data as d } from "../data/f1StreetwearData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
});

const IconMap = {
  Code2, Palette, Zap, Bell, Terminal, Database, Globe, Layout, ShieldCheck, ShoppingBag, CreditCard, Smartphone, Sparkles, Cloud
};

export default function F1StreetwearProjectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F5F5F7] dark:bg-[#000000] text-gray-900 dark:text-gray-100 font-sans selection:bg-red-500/30 overflow-x-hidden">
      
      {/* ─── Racing Inspired Background ─── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#FFFFFF05_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF05_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 dark:bg-red-600/10 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-lighten pointer-events-none transform translate-x-1/3 -translate-y-1/4"></div>
      </div>

      {/* ─── HEADER AREA ─── */}
      <div className="relative z-10 pt-28 md:pt-32 pb-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2.5 px-6 py-2.5 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-sm hover:shadow-md hover:border-red-500/50 dark:hover:border-red-500/50 transition-all group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back
          </motion.button>
        </div>
      </div>

      {/* ─── HERO SECTION (Streetwear / Luxury Aesthetic) ─── */}
      <section className="relative z-10 pt-12 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div 
              {...fadeUp()}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10"
            >
              <Tag className="w-3.5 h-3.5" /> F1 Streetwear
            </motion.div>
            
            <motion.h1 
              {...fadeUp(0.1)}
              className="text-6xl md:text-8xl lg:text-9xl font-[900] tracking-tighter mb-8 leading-[0.9] text-gray-900 dark:text-white uppercase"
            >
              High-Speed <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Fashion.</span>
            </motion.h1>

            <motion.p 
              {...fadeUp(0.2)}
              className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed mb-16"
            >
              {d.heroDescription}
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-4 mb-24">
              <a 
                href={d.links.live}
                target="_blank"
                rel="noreferrer"
                className="px-10 py-5 bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-xs hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-all duration-300 shadow-xl"
              >
                Shop Collection
              </a>
              <a 
                href={d.links.github}
                target="_blank"
                rel="noreferrer"
                className="px-10 py-5 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 text-black dark:text-white font-black uppercase tracking-widest text-xs hover:border-red-600 dark:hover:border-red-600 transition-all duration-300"
              >
                Explore GitHub
              </a>
            </motion.div>

            {/* Hero Mockup Focus */}
            <motion.div 
              {...fadeUp(0.4)}
              className="relative mx-auto rounded-3xl bg-white dark:bg-[#0A0A0A] p-2 md:p-4 shadow-[0_40px_100px_-20px_rgba(220,38,38,0.15)] overflow-hidden"
            >
              <img 
                src="/project section img/F1.png" 
                alt="F1 Streetwear Showcase" 
                className="w-full rounded-2xl border border-gray-100 dark:border-white/5 object-cover"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "/project section img/b2b erp.png"; // Fallback image just in case
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PROJECT OVERVIEW ─── */}
      <section className="relative z-10 py-32 bg-white dark:bg-[#0A0A0A] border-y border-gray-200/50 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 dark:text-white">Modern Streetwear Commerce Experience</h2>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
            {d.overview}
          </p>
        </div>
      </section>

      {/* ─── CORE FEATURES ─── */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tight mb-4 dark:text-white">Premium Features</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">Engineered for a seamless shopping experience.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.features.map((f, i) => {
              const Icon = IconMap[f.icon] || Sparkles;
              return (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="group p-8 bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-white/5 hover:border-red-500 transition-colors shadow-sm hover:shadow-2xl hover:shadow-red-500/10">
                  <div className="w-14 h-14 bg-gray-50 dark:bg-[#1A1A1A] group-hover:bg-red-50 dark:group-hover:bg-red-900/20 text-gray-900 dark:text-white group-hover:text-red-600 transition-colors rounded-full flex items-center justify-center mb-8">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">{f.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── AUTHENTICATION FLOW & BACKEND ARCHITECTURE ─── */}
      <section className="relative z-10 py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.15)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Serverless Backend */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6 rounded-full border border-red-500/20">
                <Cloud className="w-4 h-4" /> Cloud Infrastructure
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Serverless Architecture</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                Powered by a lightweight cloud-based backend utilizing Google Apps Script and Google Sheets, completely eliminating the need for traditional server infrastructure. This enables blazing fast prototyping, simple deployment, and lightweight API integrations for authentication and order management.
              </p>

              <div className="space-y-6">
                {['Frontend App', 'Apps Script API', 'Google Sheets DB', 'Email & OTP Services'].map((layer, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-gray-400">
                      <span className="font-bold">{i + 1}</span>
                    </div>
                    <span className="text-xl font-bold tracking-wide">{layer}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* OTP Flow Visualization */}
            <div className="relative">
              <motion.div 
                {...fadeUp(0.2)}
                className="bg-[#111] border border-gray-800 rounded-[32px] p-8 md:p-12 shadow-2xl relative z-10"
              >
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold mb-2">Secure Authentication</h3>
                  <p className="text-gray-500">OTP Verification Workflow</p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-black border border-gray-800 rounded-xl flex items-center justify-between">
                    <span className="text-gray-400">Email Address</span>
                    <span className="text-white font-medium">user@example.com</span>
                  </div>
                  <div className="p-4 bg-black border border-red-500/50 rounded-xl flex items-center justify-between shadow-[0_0_20px_rgba(220,38,38,0.1)]">
                    <span className="text-red-400 font-bold flex items-center gap-2"><Key className="w-4 h-4" /> Enter OTP</span>
                    <span className="text-white font-mono tracking-[0.5em]">••••••</span>
                  </div>
                  <button className="w-full py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-gray-200 transition-colors mt-6">
                    Verify & Login
                  </button>
                </div>
              </motion.div>
              {/* Decorative background elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/10 blur-[100px] z-0 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4 dark:text-white">Technology Stack</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">Built with modern tools for optimal performance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(d.techStack).map(([category, techs], i) => {
              // F1 Streetwear specific styling: High contrast, aggressive hovers, racing colors
              const catStyles = {
                frontend: {
                  bg: "bg-red-50/50 dark:bg-red-900/10",
                  border: "border-red-200/50 dark:border-red-800/30",
                  hover: "hover:border-red-500 hover:shadow-red-500/20",
                  iconBg: "bg-red-100 dark:bg-red-900/40",
                  iconColor: "text-red-600 dark:text-red-500"
                },
                backend: {
                  bg: "bg-slate-50/50 dark:bg-slate-900/20",
                  border: "border-slate-200/50 dark:border-slate-800/50",
                  hover: "hover:border-slate-500 hover:shadow-slate-500/20",
                  iconBg: "bg-slate-200 dark:bg-slate-800",
                  iconColor: "text-slate-700 dark:text-slate-400"
                },
                infrastructure: {
                  bg: "bg-zinc-50/80 dark:bg-zinc-900/20",
                  border: "border-zinc-200/50 dark:border-zinc-800/50",
                  hover: "hover:border-zinc-500 hover:shadow-zinc-500/20",
                  iconBg: "bg-zinc-200 dark:bg-zinc-800",
                  iconColor: "text-zinc-700 dark:text-zinc-400"
                },
                design: {
                  bg: "bg-neutral-50/80 dark:bg-neutral-900/30",
                  border: "border-neutral-200/50 dark:border-neutral-800/50",
                  hover: "hover:border-neutral-500 hover:shadow-neutral-500/20",
                  iconBg: "bg-neutral-200 dark:bg-neutral-800",
                  iconColor: "text-neutral-800 dark:text-neutral-300"
                }
              }[category] || {
                bg: "bg-gray-50/50 dark:bg-gray-900/10",
                border: "border-gray-200/50 dark:border-gray-800/30",
                hover: "hover:border-gray-400 hover:shadow-gray-500/10",
                iconBg: "bg-gray-200 dark:bg-gray-800",
                iconColor: "text-gray-600 dark:text-gray-400"
              };

              return (
                <motion.div key={category} {...fadeUp(i * 0.1)} className={`p-8 rounded-2xl border transition-all duration-300 shadow-lg shadow-black/5 hover:-translate-y-1.5 ${catStyles.bg} ${catStyles.border} ${catStyles.hover}`}>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6 pb-4 border-b border-black/10 dark:border-white/10">{category}</h4>
                  <div className="space-y-6">
                    {techs.map((t, j) => {
                      const Icon = IconMap[t.icon] || Code2;
                      return (
                        <div key={j} className="flex items-center gap-4 group cursor-default">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${catStyles.iconBg} ${catStyles.iconColor}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-bold text-gray-900 dark:text-gray-100">{t.name}</span>
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
      <section className="relative z-10 py-32 bg-white dark:bg-[#0A0A0A] border-y border-gray-200/50 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-12 dark:text-white flex items-center gap-4">
              <GitBranch className="text-red-600" /> My Contributions
            </h2>
            <div className="space-y-10">
              {d.contributions.map((c, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="relative pl-8">
                  <div className="absolute top-2 left-0 w-1.5 h-1.5 bg-red-600 rounded-full" />
                  <div className="absolute top-2 left-[2px] w-0.5 h-full bg-gray-200 dark:bg-gray-800" />
                  <h4 className="text-xl font-bold mb-3 dark:text-white">{c.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-12 dark:text-white flex items-center gap-4">
              <Cpu className="text-red-600" /> Engineering Challenges
            </h2>
            <div className="space-y-4 mb-20">
              {d.challenges.map((challenge, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="flex items-center gap-4 p-5 bg-[#F5F5F7] dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800">
                  <ZapIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="font-bold text-gray-800 dark:text-gray-200">{challenge}</span>
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl font-black uppercase tracking-tight mb-8 dark:text-white">Key Learnings</h2>
            <div className="flex flex-wrap gap-3">
              {d.learnings.map((learning, i) => (
                <span key={i} className="px-5 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-bold shadow-sm">
                  {learning}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── IMPACT SECTION ─── */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-6 dark:text-white">Platform Impact</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">Delivering high-end results.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {d.metrics.map((m, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="p-8 rounded-2xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/5 text-center shadow-sm hover:shadow-lg hover:border-red-500 transition-all">
                <div className="text-2xl md:text-3xl font-black mb-2 text-gray-900 dark:text-white uppercase">
                  {m.value}
                </div>
                <div className="text-gray-500 dark:text-gray-400 font-medium text-sm">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative z-10 py-40 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(220,38,38,0.2)_0%,transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">Built for Modern Streetwear Commerce.</h2>
          <p className="text-xl text-gray-400 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            Delivering premium shopping experiences through modern frontend engineering, lightweight cloud infrastructure, and fashion-focused design.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a 
              href={d.links.live}
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 bg-red-600 text-white rounded-none font-black uppercase tracking-widest text-xs hover:bg-red-500 transition-colors"
            >
              Explore Collection
            </a>
            <a 
              href={d.links.github}
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-none font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
