import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, CheckCircle2, BookOpen, Share2 } from "lucide-react";
import { primeData as d } from "../data/primeApparelData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] },
});

export default function ProjectDetailPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#030308] text-gray-900 dark:text-white overflow-x-hidden relative">

      {/* ─── Subtle Grid Background ─── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* ─── HERO ─── */}
      <section className="relative z-10 min-h-[75vh] pt-24 lg:pt-32 pb-10 lg:pb-12 flex items-start overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] animate-pulse" style={{animationDelay:"2s"}} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-8 sm:pt-12">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            
            {/* LEFT: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {/* Back to Portfolio Button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full text-gray-700 dark:text-white/80 hover:text-blue-600 dark:hover:text-white transition-all group cursor-pointer shadow-sm"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
                </motion.button>

                {/* Enterprise Solution Badge */}
                <motion.div {...fadeUp(0.05)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 backdrop-blur-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">Enterprise Solution</span>
                </motion.div>
              </div>

              <div className="relative">
                <motion.h1 {...fadeUp(0.1)} className="text-5xl sm:text-7xl font-black tracking-tighter text-gray-900 dark:text-white leading-[1.1] mb-6">
                  {d.title.split(" ").map((word, i) => (
                    <span key={i} className={i >= d.title.split(" ").length - 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400" : ""}>
                      {word}{" "}
                    </span>
                  ))}
                </motion.h1>
              </div>


              <motion.p {...fadeUp(0.15)} className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400/80 mb-8">{d.role}</motion.p>
              
              <motion.p {...fadeUp(0.2)} className="text-lg text-gray-600 dark:text-white/60 max-w-xl leading-relaxed mb-10">
                {d.subtitle}
              </motion.p>



              {/* Tech Badges */}
              <motion.div {...fadeUp(0.25)} className="flex flex-wrap gap-2 mb-12">
                {[
                  { name: "React.js", icon: "/icons/react.png" },
                  { name: "Node.js", icon: "/icons/node.png" },
                  { name: "Express.js", icon: "/icons/express.png" },
                  { name: "MongoDB", icon: "/icons/mongodb.png" },
                  { name: "JWT", icon: null },
                  { name: "Socket.io", icon: null },
                  { name: "Cloudinary", icon: null },
                  { name: "Redux", icon: "/icons/react.png" },
                ].map(t => (
                  <span key={t.name} className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 backdrop-blur-sm rounded-full text-[10px] font-bold text-blue-600 dark:text-white/70 hover:bg-blue-100 dark:hover:bg-white/10 transition-colors">
                    {t.icon && <img src={t.icon} alt="" className="w-3.5 h-3.5 object-contain" />}
                    {t.name}
                  </span>
                ))}
              </motion.div>


              {/* CTA Buttons */}
              <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
                {d.live && (
                  <a href={d.live} target="_blank" rel="noreferrer" 
                    className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 rounded-2xl text-sm font-black text-white shadow-xl shadow-blue-500/20 transition-all hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4"/>Live Demo
                  </a>
                )}
                {d.github && (
                  <a href={d.github} target="_blank" rel="noreferrer" 
                    className="flex items-center gap-2 px-8 py-4 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 backdrop-blur-sm rounded-2xl text-sm font-black text-gray-900 dark:text-white transition-all"
                  >
                    <Github className="w-4 h-4"/>GitHub
                  </a>
                )}
                <button onClick={() => document.getElementById("about-section").scrollIntoView({behavior:"smooth"})}
                  className="flex items-center gap-2 px-8 py-4 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 backdrop-blur-sm rounded-2xl text-sm font-black text-gray-900 dark:text-white transition-all">
                  <BookOpen className="w-4 h-4"/>Case Study
                </button>
                <button onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: d.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }
                }}
                  className="flex items-center gap-2 px-8 py-4 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 backdrop-blur-sm rounded-2xl text-sm font-black text-gray-900 dark:text-white transition-all">
                  <Share2 className="w-4 h-4"/>Share
                </button>

              </motion.div>
            </motion.div>

            {/* RIGHT: Premium Image Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
            >
              {/* Card Container */}
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative bg-[#0A0A10]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden p-3 shadow-2xl">
                  <div className="aspect-video overflow-hidden rounded-[2rem]">
                    <img 
                      src={d.heroImg || d.img} 
                      alt={d.title} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                </div>

              </div>


              {/* Decorative side stats (Optional but adds premium feel) */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10 animate-pulse" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-violet-600/10 rounded-full blur-[80px] -z-10 animate-pulse" style={{animationDelay: "1s"}} />
            </motion.div>

          </div>


          {/* Stats Bar (Positioned below the grid) */}
          <div className="mt-24 lg:mt-32">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {d.stats.map((s, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="group p-8 rounded-3xl bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 shadow-sm dark:shadow-none"
                >
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 group-hover:scale-110 transition-transform origin-left">{s.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-white/40 mt-2 group-hover:text-gray-900 dark:group-hover:text-white/60 transition-colors">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ─── ABOUT ─── */}
      <section id="about-section" className="py-28 bg-gray-50 dark:bg-[#07070f]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/40">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">About the Project</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.05)} className="text-4xl md:text-5xl font-black tracking-tighter mb-10">
            Solving Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Enterprise</span> Problems
          </motion.h2>
          <div className="space-y-5">
            {d.about.split("\n\n").map((para, i) => (
              <motion.p key={i} {...fadeUp(0.1 + i * 0.05)} className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{para}</motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-28 bg-white dark:bg-[#030308]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800/40">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">Key Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              12 Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">Capabilities</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {d.features.map((f, i) => (
              <motion.div key={i} {...fadeUp(0.05 + i * 0.04)}
                className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-xl transition-all duration-300 cursor-default">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-sm font-black mb-2 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-pink-500 transition-all">{f.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DASHBOARD PREVIEW ─── */}
      <section className="py-28 bg-gray-50 dark:bg-[#07070f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Dashboard Preview</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Built for Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Stakeholder</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.dashboardPreviews.map((preview, i) => (
              <motion.div key={i} {...fadeUp(0.05 + i * 0.06)}
                className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md hover:shadow-2xl transition-all duration-500 cursor-default">
                <div className="h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img src={preview.img} alt={preview.label} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-sm font-black text-gray-900 dark:text-white">{preview.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="py-28 bg-white dark:bg-[#030308]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">Tech Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Technology</span> Stack
            </h2>
          </motion.div>
          <div className="space-y-12">
            {Object.entries(d.techStack).map(([group, items], gi) => (
              <motion.div key={group} {...fadeUp(0.1 + gi * 0.05)}>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-5">{group}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {items.map((tech, ti) => (
                    <motion.div key={ti} {...fadeUp(0.1 + ti * 0.04)}
                      whileHover={{ scale: 1.04 }}
                      className="relative p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 overflow-hidden group cursor-default shadow-sm hover:shadow-md transition-all">
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      {tech.icon ? (
                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 p-2 border border-gray-100 dark:border-gray-700 shadow-sm mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tech.color} mb-3 shadow-lg group-hover:scale-110 transition-transform`} />
                      )}
                      <span className="text-sm font-black text-gray-900 dark:text-white">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CHALLENGES & SOLUTIONS ─── */}
      <section className="py-28 bg-gray-50 dark:bg-[#07070f]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/40">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-600 dark:text-rose-400">Challenges & Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Problems <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Solved</span>
            </h2>
          </motion.div>
          <div className="space-y-6">
            {d.challenges.map((c, i) => (
              <motion.div key={i} {...fadeUp(0.05 + i * 0.06)}
                className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <div className="p-7 bg-rose-50 dark:bg-rose-900/10 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800">
                  <div className="text-[10px] font-black uppercase tracking-[0.15em] text-rose-600 dark:text-rose-400 mb-3 flex items-center gap-2"><span>⚠️</span> Challenge</div>
                  <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed font-medium">{c.challenge}</p>
                </div>
                <div className="p-7 bg-emerald-50 dark:bg-emerald-900/10">
                  <div className="text-[10px] font-black uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2"><span>✅</span> Solution</div>
                  <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{c.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESULTS ─── */}
      <section className="py-28 bg-white dark:bg-[#030308]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/40">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Results & Impact</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.05)} className="text-4xl md:text-5xl font-black tracking-tighter mb-16">
            Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Impact</span>
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {d.stats.map((s, i) => (
              <motion.div key={i} {...fadeUp(0.1 + i * 0.07)}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 mb-2">{s.value}</div>
                <div className="text-xs font-bold text-gray-500 dark:text-gray-400">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTRIBUTIONS ─── */}
      <section className="py-28 bg-gray-50 dark:bg-[#07070f]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800/40">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">My Contributions</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.05)} className="text-4xl md:text-5xl font-black tracking-tighter mb-12">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">Built</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {d.contributions.map((c, i) => (
              <motion.div key={i} {...fadeUp(0.05 + i * 0.05)}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-violet-300 dark:hover:border-violet-700 transition-all group">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shrink-0 text-white text-xs font-black">
                  {String(i + 1).padStart(2,"0")}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-28 bg-white dark:bg-[#030308] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800/40">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">Development Workflow</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Timeline</span>
            </h2>
          </motion.div>
          {/* Mobile: vertical, Desktop: horizontal */}
          <div className="hidden lg:flex items-start gap-0">
            {d.timeline.map((t, i) => (
              <motion.div key={i} {...fadeUp(0.05 + i * 0.07)} className="flex-1 relative">
                {i < d.timeline.length - 1 && (
                  <div className="absolute top-6 left-1/2 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 z-0" />
                )}
                <div className="flex flex-col items-center text-center px-2 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-xs font-black mb-4 shadow-lg shadow-blue-500/30">{t.step}</div>
                  <div className="text-sm font-black text-gray-900 dark:text-white mb-1">{t.label}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed">{t.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex lg:hidden flex-col gap-4">
            {d.timeline.map((t, i) => (
              <motion.div key={i} {...fadeUp(0.05 + i * 0.06)} className="flex gap-5 items-start">
                <div className="relative flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-[10px] font-black shrink-0">{t.step}</div>
                  {i < d.timeline.length - 1 && <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-violet-500 to-blue-500 min-h-[24px]" />}
                </div>
                <div className="pb-4">
                  <div className="text-sm font-black text-gray-900 dark:text-white mb-1">{t.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{t.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">Let's Collaborate</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.05)} className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
            Interested in building<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">scalable enterprise apps?</span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-lg text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
            I specialize in designing and building production-ready MERN stack applications that scale. Let's turn your idea into reality.
          </motion.p>
          <motion.div {...fadeUp(0.15)} className="flex flex-wrap justify-center gap-4">
            <button onClick={() => { navigate("/"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}), 200); }}
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-black text-sm rounded-2xl shadow-2xl shadow-blue-500/30 transition-all hover:scale-105">
              Let's Work Together →
            </button>
            <button onClick={() => navigate(-1)}
              className="px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-sm rounded-2xl backdrop-blur-sm transition-all">
              ← Back to Projects
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


