import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, MessageSquare, Users, 
  ShieldCheck, CheckCircle2, Layout, 
  TrendingUp, Code2, Layers, Shuffle,
  Palette, Sparkles, Zap, Terminal,
  Globe, Database, Box, Cpu,
  GraduationCap, Briefcase, UserCheck,
  MoreHorizontal, Heart, MessageCircle,
  Share2, Bell, Search, Plus,
  ChevronRight, Folder, FileText,
  Lock, ArrowRight, User
} from "lucide-react";
import { discussData as d } from "../data/discussData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
});

const IconMap = {
  Code2, Layers, Shuffle, Palette, Sparkles, Zap,
  Terminal, Globe, ShieldCheck, Database, Box,
  Cpu, GraduationCap, Briefcase, Users, UserCheck,
  MessageSquare, CheckCircle2, Layout, TrendingUp, Lock
};

const PostCard = ({ user, time, content, likes, comments, verified = false, delay = 0 }) => (
  <motion.div 
    {...fadeUp(delay)}
    className="bg-white dark:bg-[#1E293B]/60 rounded-[32px] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-gray-100 dark:border-white/5 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all group backdrop-blur-sm"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">
          {user[0]}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-gray-900 dark:text-white">{user}</span>
            {verified && <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 fill-blue-50 dark:fill-blue-900" />}
          </div>
          <span className="text-[10px] text-gray-400 dark:text-slate-500 font-medium uppercase tracking-wider">{time}</span>
        </div>
      </div>
      <MoreHorizontal className="w-5 h-5 text-gray-300 dark:text-slate-600 group-hover:text-gray-400 transition-colors" />
    </div>
    <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-5 font-medium">{content}</p>
    <div className="flex items-center gap-6 pt-4 border-t border-gray-50 dark:border-white/5">
      <div className="flex items-center gap-2 text-gray-400 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-400 transition-colors cursor-pointer">
        <Heart className="w-4 h-4" /> <span className="text-xs font-bold">{likes}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer">
        <MessageCircle className="w-4 h-4" /> <span className="text-xs font-bold">{comments}</span>
      </div>
      <Share2 className="w-4 h-4 text-gray-300 dark:text-slate-600 ml-auto hover:text-gray-500 transition-colors cursor-pointer" />
    </div>
  </motion.div>
);

export default function DiscussProjectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FCFDFF] dark:bg-[#0F172A] text-gray-900 dark:text-slate-200 selection:bg-blue-100 dark:selection:bg-blue-900 pb-32 transition-colors duration-500">
      
      {/* ─── Subtle Grid Background ─── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* ─── HEADER AREA ─── */}
      <div className="relative z-10 pt-28 md:pt-32 pb-6 border-b border-gray-200 dark:border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center gap-2.5 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl text-sm font-bold shadow-xl hover:bg-black dark:hover:bg-gray-100 hover:shadow-gray-500/20 dark:hover:shadow-white/20 transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </motion.button>

          <div className="flex items-center gap-6">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-blue-200 dark:shadow-none shrink-0"
            >
              <MessageSquare className="w-8 h-8" />
            </motion.div>
            <div>
              <h1 className="text-3xl md:text-4xl font-[800] tracking-[-0.03em] text-[#0F172A] dark:text-white leading-tight">
                {d.title}
              </h1>
              <p className="text-lg text-[#64748B] dark:text-slate-400 font-medium tracking-tight mt-1">
                {d.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-12 pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-100 dark:border-blue-800/50 shadow-sm shadow-blue-500/5">
                <Sparkles className="w-3.5 h-3.5" /> Modern Community Experience
              </div>
              <h1 className="text-5xl md:text-7xl font-[900] tracking-[-0.04em] text-gray-900 dark:text-white leading-[1.05] mb-10">
                {d.subtitle.split(" & ").map((part, i) => (
                  <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400" : ""}>
                    {part}{i === 0 ? " & " : ""}
                  </span>
                ))}
              </h1>
              <p className="text-xl text-gray-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl mb-14">
                {d.heroDescription}
              </p>
              <div className="flex flex-wrap gap-5">
                <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-blue-500/25 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95">
                  Explore Communities
                </button>
                <button className="px-10 py-5 bg-white dark:bg-[#1E293B]/40 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-lg transition-all active:scale-95">
                  Join Discussion
                </button>
              </div>

              <div className="mt-20 flex items-center gap-8">
                <div className="flex -space-x-4">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white dark:border-[#0F172A] bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-[11px] font-bold text-gray-400 dark:text-slate-500 shadow-sm">
                       U{i}
                     </div>
                   ))}
                   <div className="w-12 h-12 rounded-full border-[3px] border-white dark:border-[#0F172A] bg-blue-600 flex items-center justify-center text-[11px] font-bold text-white shadow-md">
                     +10k
                   </div>
                </div>
                <div className="h-12 w-[1px] bg-gray-200 dark:bg-white/10" />
                <div className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
                  Trusted by <span className="text-gray-900 dark:text-white">verified faculty</span>
                </div>
              </div>
            </motion.div>

            <div className="relative">
               {/* Mockup Floating Cards */}
               <div className="grid grid-cols-1 gap-8 relative z-10">
                  <PostCard 
                    user="Dr. Sarah Johnson" 
                    time="15 min ago" 
                    content="Welcome to the Computer Science hub! Feel free to share your latest research or ask questions about advanced algorithms." 
                    likes="128" 
                    comments="24"
                    verified={true}
                    delay={0.2}
                  />
                  <div className="ml-16">
                    <PostCard 
                      user="Alex Rivera" 
                      time="5 min ago" 
                      content="Has anyone started the new project in Redux Toolkit? I'm having some trouble with the middleware configuration." 
                      likes="42" 
                      comments="12"
                      delay={0.4}
                    />
                  </div>
                  <motion.div 
                    {...fadeUp(0.6)}
                    className="absolute -right-12 top-1/2 -translate-y-1/2 w-64 p-8 bg-white/90 dark:bg-[#1E293B]/80 backdrop-blur-2xl rounded-[40px] border border-white/50 dark:border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-none hidden xl:block"
                  >
                     <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-6">Trending Tags</h4>
                     <div className="space-y-4">
                        {["#programming", "#research", "#campus_life"].map(t => (
                          <div key={t} className="flex items-center justify-between text-sm group cursor-pointer">
                             <span className="font-bold text-gray-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t}</span>
                             <span className="text-[10px] font-black text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">LIVE</span>
                          </div>
                        ))}
                     </div>
                  </motion.div>
               </div>

               {/* Background Decorative */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 dark:bg-blue-900/20 blur-[140px] rounded-full -z-10 animate-pulse" />
               <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-100/30 dark:bg-indigo-900/20 blur-[80px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK SECTION ─── */}
      <section className="bg-white dark:bg-[#0F172A] py-40 relative border-y border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
             <div className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-6">Production Architecture</div>
             <h2 className="text-5xl font-[900] tracking-tight mb-4 dark:text-white">Enterprise-Ready Stack</h2>
             <p className="text-gray-500 dark:text-slate-400 font-medium max-w-xl mx-auto leading-relaxed">Modern technologies orchestrated for high-performance social networking.</p>
          </div>
          
          <div className="space-y-24">
            <div>
              <div className="flex items-center gap-4 mb-10">
                 <div className="h-[1px] bg-gray-100 dark:bg-white/5 flex-1" />
                 <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 dark:text-slate-500">Frontend Ecosystem</h4>
                 <div className="h-[1px] bg-gray-100 dark:bg-white/5 flex-1" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                 {d.techStack.frontend.map((t, i) => {
                   const Icon = IconMap[t.icon];
                   return (
                     <motion.div 
                        key={i} {...fadeUp(i * 0.1)}
                        className="bg-gradient-to-b from-blue-50/50 to-blue-100/50 dark:from-blue-900/10 dark:to-transparent p-8 rounded-[32px] border border-blue-200/50 dark:border-blue-500/10 flex flex-col items-center gap-5 hover:border-blue-300 dark:hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-500 group relative"
                     >
                        <div className="w-16 h-16 rounded-[24px] bg-white dark:bg-[#1E293B] flex items-center justify-center text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-all duration-500 shadow-sm dark:shadow-none group-hover:shadow-md">
                           <Icon className="w-8 h-8" />
                        </div>
                        <span className="text-[11px] font-[900] uppercase tracking-widest text-blue-950 dark:text-blue-100 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors text-center">{t.name}</span>
                     </motion.div>
                   );
                 })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <motion.div {...fadeUp(0.4)} className="bg-gray-50/50 dark:bg-[#1E293B]/20 p-10 rounded-[48px] border border-gray-100 dark:border-white/5">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 dark:text-indigo-400 mb-10 text-center">Backend & API Engine</h4>
                  <div className="grid grid-cols-3 gap-6">
                    {d.techStack.backend.map((t, i) => {
                      const Icon = IconMap[t.icon];
                      return (
                        <div key={i} className="bg-gradient-to-b from-indigo-50/50 to-indigo-100/50 dark:from-indigo-900/10 dark:to-transparent p-8 rounded-[32px] border border-indigo-200/50 dark:border-indigo-500/10 flex flex-col items-center gap-5 hover:shadow-xl hover:shadow-indigo-500/15 hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:-translate-y-1 transition-all group">
                           <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1E293B] flex items-center justify-center text-indigo-500 dark:text-indigo-400 shadow-sm dark:shadow-none group-hover:shadow-md">
                             <Icon className="w-6 h-6" />
                           </div>
                           <span className="text-[10px] font-[900] uppercase tracking-tight text-center text-indigo-950 dark:text-indigo-100">{t.name}</span>
                        </div>
                      );
                    })}
                  </div>
               </motion.div>
               <motion.div {...fadeUp(0.5)} className="bg-gray-50/50 dark:bg-[#1E293B]/20 p-10 rounded-[48px] border border-gray-100 dark:border-white/5">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-400 mb-10 text-center">Data Infrastructure</h4>
                  <div className="grid grid-cols-2 gap-6">
                    {d.techStack.database.map((t, i) => {
                      const Icon = IconMap[t.icon];
                      return (
                        <div key={i} className="bg-gradient-to-b from-emerald-50/50 to-emerald-100/50 dark:from-emerald-900/10 dark:to-transparent p-8 rounded-[32px] border border-emerald-200/50 dark:border-emerald-500/10 flex flex-col items-center gap-5 hover:shadow-xl hover:shadow-emerald-500/15 hover:border-emerald-300 dark:hover:border-emerald-500/30 hover:-translate-y-1 transition-all group">
                           <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1E293B] flex items-center justify-center text-emerald-500 dark:text-emerald-400 shadow-sm dark:shadow-none group-hover:shadow-md">
                             <Icon className="w-6 h-6" />
                           </div>
                           <span className="text-[10px] font-[900] uppercase tracking-tight text-center text-emerald-950 dark:text-emerald-100">{t.name}</span>
                        </div>
                      );
                    })}
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ─── */}
      <section className="py-40 bg-gray-50/30 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
             <div>
                <div className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-6">Core Capabilities</div>
                <h2 className="text-5xl md:text-6xl font-[900] tracking-[-0.04em] mb-6 text-gray-900 dark:text-white leading-tight">
                  Human-Centric <br/>Engineering.
                </h2>
                <p className="text-lg text-gray-500 dark:text-slate-400 font-medium max-w-xl leading-relaxed">We've built a system that prioritizes real conversations, verified trust, and seamless collaboration.</p>
             </div>
             <motion.button 
               whileHover={{ scale: 1.05 }}
               className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-[#1E293B]/60 border border-gray-200 dark:border-white/10 rounded-2xl text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white hover:border-blue-400 dark:hover:border-blue-500/50 transition-all shadow-sm"
             >
                Explore Modules <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
             </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {d.features.map((f, i) => {
               const Icon = IconMap[f.icon];
               
               const featureColors = [
                 { bg: "bg-blue-50/80 dark:bg-blue-900/10", border: "border-blue-200/60 dark:border-blue-500/10", hoverBorder: "hover:border-blue-300 dark:hover:border-blue-500/30", iconText: "text-blue-500 dark:text-blue-400", text: "text-blue-950 dark:text-blue-100", desc: "text-blue-900/70 dark:text-blue-200/60", tagBg: "bg-white dark:bg-[#0F172A]", tagText: "text-blue-600 dark:text-blue-400", tagBorder: "border-blue-100 dark:border-blue-500/20" },
                 { bg: "bg-purple-50/80 dark:bg-purple-900/10", border: "border-purple-200/60 dark:border-purple-500/10", hoverBorder: "hover:border-purple-300 dark:hover:border-purple-500/30", iconText: "text-purple-500 dark:text-purple-400", text: "text-purple-950 dark:text-purple-100", desc: "text-purple-900/70 dark:text-purple-200/60", tagBg: "bg-white dark:bg-[#0F172A]", tagText: "text-purple-600 dark:text-purple-400", tagBorder: "border-purple-100 dark:border-purple-500/20" },
                 { bg: "bg-pink-50/80 dark:bg-pink-900/10", border: "border-pink-200/60 dark:border-pink-500/10", hoverBorder: "hover:border-pink-300 dark:hover:border-pink-500/30", iconText: "text-pink-500 dark:text-pink-400", text: "text-pink-950 dark:text-pink-100", desc: "text-pink-900/70 dark:text-pink-200/60", tagBg: "bg-white dark:bg-[#0F172A]", tagText: "text-pink-600 dark:text-pink-400", tagBorder: "border-pink-100 dark:border-pink-500/20" },
                 { bg: "bg-emerald-50/80 dark:bg-emerald-900/10", border: "border-emerald-200/60 dark:border-emerald-500/10", hoverBorder: "hover:border-emerald-300 dark:hover:border-emerald-500/30", iconText: "text-emerald-500 dark:text-emerald-400", text: "text-emerald-950 dark:text-emerald-100", desc: "text-emerald-900/70 dark:text-emerald-200/60", tagBg: "bg-white dark:bg-[#0F172A]", tagText: "text-emerald-600 dark:text-emerald-400", tagBorder: "border-emerald-100 dark:border-emerald-500/20" },
                 { bg: "bg-amber-50/80 dark:bg-amber-900/10", border: "border-amber-200/60 dark:border-amber-500/10", hoverBorder: "hover:border-amber-300 dark:hover:border-amber-500/30", iconText: "text-amber-500 dark:text-amber-400", text: "text-amber-950 dark:text-amber-100", desc: "text-amber-900/70 dark:text-amber-200/60", tagBg: "bg-white dark:bg-[#0F172A]", tagText: "text-amber-600 dark:text-amber-400", tagBorder: "border-amber-100 dark:border-amber-500/20" },
                 { bg: "bg-cyan-50/80 dark:bg-cyan-900/10", border: "border-cyan-200/60 dark:border-cyan-500/10", hoverBorder: "hover:border-cyan-300 dark:hover:border-cyan-500/30", iconText: "text-cyan-500 dark:text-cyan-400", text: "text-cyan-950 dark:text-cyan-100", desc: "text-cyan-900/70 dark:text-cyan-200/60", tagBg: "bg-white dark:bg-[#0F172A]", tagText: "text-cyan-600 dark:text-cyan-400", tagBorder: "border-cyan-100 dark:border-cyan-500/20" },
               ];
               const c = featureColors[i % featureColors.length];

               return (
                 <motion.div 
                    key={i} {...fadeUp(i * 0.1)}
                    className={`p-12 rounded-[48px] ${c.bg} border ${c.border} ${c.hoverBorder} hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] dark:hover:shadow-none hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden`}
                 >
                    <div className={`w-16 h-16 rounded-[24px] bg-white dark:bg-[#1E293B] ${c.iconText} flex items-center justify-center mb-10 shadow-sm dark:shadow-none group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                       <Icon className="w-8 h-8" />
                    </div>
                    <h3 className={`text-2xl font-[900] mb-5 ${c.text} tracking-tight`}>{f.title}</h3>
                    <p className={`text-base ${c.desc} leading-relaxed font-medium mb-10`}>{f.desc}</p>
                    <div className="flex flex-wrap gap-2.5">
                       {f.details.map((tag, ti) => (
                         <span key={ti} className={`px-4 py-1.5 ${c.tagBg} text-[10px] font-black ${c.tagText} uppercase tracking-widest rounded-xl border ${c.tagBorder} shadow-sm dark:shadow-none group-hover:border-transparent transition-all duration-500`}>{tag}</span>
                       ))}
                    </div>
                 </motion.div>
               );
             })}
          </div>
        </div>
      </section>

      {/* ─── PLATFORM SNEAK PEEK ─── */}
      <section className="py-40 overflow-hidden bg-white dark:bg-[#0F172A] border-y border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <div className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-6">Visual Interface</div>
             <h2 className="text-5xl font-[900] tracking-tight mb-6 text-gray-900 dark:text-white">Platform Sneak Peek</h2>
             <p className="text-gray-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed text-lg">Take a closer look at the actual interface designed for high-engagement community interactions.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <motion.div 
               {...fadeUp(0.1)}
               className="group relative rounded-[56px] overflow-hidden border border-gray-100 dark:border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] dark:shadow-none transition-all duration-700 hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)]"
             >
                <img 
                  src="/project section img/dashboard_2.png" 
                  alt="Community Dashboard Interface" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-14">
                   <h4 className="text-white text-3xl font-[900] mb-4 tracking-tight">Social Feed & Communities</h4>
                   <p className="text-white/80 text-lg font-medium leading-relaxed max-w-md">Real-time discussion threads with verified user integration and topic categorization.</p>
                </div>
             </motion.div>

             <motion.div 
               {...fadeUp(0.2)}
               className="group relative rounded-[56px] overflow-hidden border border-gray-100 dark:border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] dark:shadow-none transition-all duration-700 hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)]"
             >
                <img 
                  src="/project section img/dashboard_4.png" 
                  alt="Discussion Details UI" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-14">
                   <h4 className="text-white text-3xl font-[900] mb-4 tracking-tight">Detailed Thread View</h4>
                   <p className="text-white/80 text-lg font-medium leading-relaxed max-w-md">Deep-nested comments, rich text support, and structured academic collaboration tools.</p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY CATEGORIES ─── */}
      <section className="py-40 bg-gray-50/50 dark:bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
             <div className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-6">Structured Hubs</div>
             <h2 className="text-5xl font-[900] tracking-tight mb-6 dark:text-white">Community Categories</h2>
             <p className="text-gray-500 dark:text-slate-400 font-medium text-lg leading-relaxed">Find your niche and start participating in specialized hubs.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
             {d.categories.map((cat, i) => {
               const Icon = IconMap[cat.icon];
               return (
                 <motion.div 
                    key={i} {...fadeUp(i * 0.1)}
                    className="group flex flex-col items-center cursor-pointer"
                 >
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${cat.color} p-[1.5px] mb-8 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-gray-200 dark:shadow-none group-hover:shadow-blue-200/50 dark:group-hover:shadow-none`}>
                       <div className="w-full h-full bg-white dark:bg-[#1E293B] rounded-full flex items-center justify-center text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500">
                          <Icon className="w-10 h-10" />
                       </div>
                    </div>
                    <span className="text-sm font-[900] uppercase tracking-widest text-gray-500 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-white text-center transition-colors">{cat.name}</span>
                 </motion.div>
               );
             })}
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-50/30 dark:bg-blue-900/10 blur-[150px] rounded-full -z-10" />
      </section>

      {/* ─── AUTHENTICATION FLOW ─── */}
      <section className="py-40 bg-white dark:bg-[#0F172A] border-y border-gray-100 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white dark:bg-[#1E293B]/40 rounded-[64px] border border-gray-100 dark:border-white/5 p-16 md:p-24 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.04)] dark:shadow-none relative overflow-hidden backdrop-blur-sm">
             <div className="relative z-10 text-center">
                <div className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-10">Security Protocol</div>
                <h3 className="text-4xl font-[900] tracking-tight mb-20 dark:text-white">Secure Authentication Pipeline</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 relative">
                   {d.authFlow.map((step, i) => (
                     <React.Fragment key={i}>
                       <div className="flex flex-col items-center gap-6 text-center group relative z-10">
                          <div className="w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-[900] text-2xl shadow-sm dark:shadow-none group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                             {i + 1}
                          </div>
                          <div>
                            <div className="text-lg font-[900] text-gray-900 dark:text-white mb-2 tracking-tight">{step.step}</div>
                            <div className="text-[11px] text-gray-400 dark:text-slate-500 font-bold uppercase tracking-widest max-w-[140px] leading-relaxed">{step.desc}</div>
                          </div>
                       </div>
                       {i < d.authFlow.length - 1 && (
                         <div className="hidden md:block w-full h-[3px] bg-gradient-to-r from-blue-100 via-indigo-100 to-transparent dark:from-blue-900/50 dark:via-indigo-900/50 flex-1 mx-4 opacity-50 rounded-full" />
                       )}
                       {i < d.authFlow.length - 1 && (
                         <ChevronRight className="md:hidden w-8 h-8 text-gray-200 dark:text-slate-700 my-6" />
                       )}
                     </React.Fragment>
                   ))}
                </div>
             </div>
             {/* Decorative Background Glows */}
             <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-50 dark:bg-blue-900/10 blur-[100px] rounded-full -z-10" />
             <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-indigo-50 dark:bg-indigo-900/10 blur-[100px] rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* ─── PROJECT STRUCTURE ─── */}
      <section className="py-40 bg-gray-50/50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <div className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-6">Code Architecture</div>
                 <h2 className="text-5xl font-[900] tracking-tight mb-8 leading-tight text-gray-900 dark:text-white">Modular & Scalable Design</h2>
                 <p className="text-xl text-gray-500 dark:text-slate-400 font-medium leading-relaxed mb-12">A highly organized architecture designed for rapid feature iteration and clear separation of concerns.</p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-6 p-6 bg-white dark:bg-[#1E293B]/60 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md dark:shadow-none transition-all">
                       <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-inner dark:shadow-none"><Layout className="w-7 h-7"/></div>
                       <div><div className="text-lg font-[900] text-gray-900 dark:text-white mb-1 tracking-tight">Component Decoupling</div><div className="text-[11px] text-gray-400 dark:text-slate-500 font-bold uppercase tracking-widest">Frontend Organization</div></div>
                    </div>
                    <div className="flex items-center gap-6 p-6 bg-white dark:bg-[#1E293B]/60 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md dark:shadow-none transition-all">
                       <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-inner dark:shadow-none"><Terminal className="w-7 h-7"/></div>
                       <div><div className="text-lg font-[900] text-gray-900 dark:text-white mb-1 tracking-tight">Micro-Service Pattern</div><div className="text-[11px] text-gray-400 dark:text-slate-500 font-bold uppercase tracking-widest">Backend Decoupling</div></div>
                    </div>
                 </div>
              </div>

              <div className="bg-white dark:bg-[#1E293B]/60 rounded-[56px] border border-gray-100 dark:border-white/5 p-12 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] dark:shadow-none font-mono text-sm overflow-hidden relative group backdrop-blur-sm">
                 <div className="flex gap-2 mb-10">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-lg shadow-red-200 dark:shadow-none" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-lg shadow-amber-200 dark:shadow-none" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-200 dark:shadow-none" />
                 </div>
                 <div className="space-y-8 max-h-[500px] overflow-y-auto custom-scrollbar pr-6">
                    <div className="space-y-4">
                       <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-[900] text-base">
                          <Folder className="w-5 h-5 fill-blue-50 dark:fill-blue-900/30" /> Frontend (React + Vite)
                       </div>
                       <div className="ml-8 space-y-3 border-l-2 border-gray-50 dark:border-white/5">
                          {d.structure.frontend.map((f, i) => (
                            <div key={i} className="ml-6 flex items-center gap-3 text-gray-600 dark:text-slate-400 group/item cursor-default hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                               <div className="w-4 h-[2px] bg-gray-100 dark:bg-white/10 group-hover/item:bg-blue-100 dark:group-hover/item:bg-blue-900/50 transition-colors" />
                               <Folder className="w-4 h-4" /> <span className="font-bold">{f.name}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 font-[900] text-base">
                          <Folder className="w-5 h-5 fill-indigo-50 dark:fill-indigo-900/30" /> Backend (Django REST)
                       </div>
                       <div className="ml-8 space-y-3 border-l-2 border-gray-50 dark:border-white/5">
                          {d.structure.backend.map((f, i) => (
                            <div key={i} className="ml-6 flex items-center gap-3 text-gray-600 dark:text-slate-400 group/item cursor-default hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                               <div className="w-4 h-[2px] bg-gray-100 dark:bg-white/10 group-hover/item:bg-indigo-100 dark:group-hover/item:bg-indigo-900/50 transition-colors" />
                               {f.type === 'folder' ? <Folder className="w-4 h-4" /> : <FileText className="w-4 h-4" />} <span className="font-bold">{f.name}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-40 overflow-hidden relative">
         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div 
               whileHover={{ y: -10 }}
               className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[72px] p-16 md:p-32 text-center text-white relative shadow-[0_50px_100px_-20px_rgba(15,23,42,0.4)] dark:shadow-none dark:border dark:border-white/5 overflow-hidden"
            >
               <div className="relative z-20">
                  <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-[900] uppercase tracking-[0.3em] mb-12">
                     <Sparkles className="w-4 h-4 animate-pulse" /> Launch Your Community
                  </div>
                  <h2 className="text-5xl md:text-8xl font-[900] tracking-[-0.04em] mb-12 leading-[1] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                    Join the Future of <br className="hidden md:block"/> Modern Discussions
                  </h2>
                  <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto mb-20 leading-relaxed">
                    Connect, collaborate, share knowledge, and build meaningful communities with a modern discussion platform.
                  </p>
                  <div className="flex flex-wrap justify-center gap-8">
                     <button className="px-12 py-6 bg-blue-600 text-white rounded-[24px] font-[900] text-base uppercase tracking-widest shadow-2xl shadow-blue-500/30 hover:bg-blue-500 hover:scale-105 transition-all duration-300">
                        Start Exploring
                     </button>
                     <button className="px-12 py-6 bg-white/10 text-white border border-white/20 rounded-[24px] font-[900] text-base uppercase tracking-widest hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        Create Community
                     </button>
                  </div>
               </div>
               
               {/* High-End Animated Background Elements */}
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.1, 0.2, 0.1] }}
                 transition={{ duration: 15, repeat: Infinity }}
                 className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-500 blur-[150px] rounded-full z-0"
               />
               <motion.div 
                 animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0], opacity: [0.1, 0.2, 0.1] }}
                 transition={{ duration: 18, repeat: Infinity }}
                 className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-indigo-500 blur-[150px] rounded-full z-0"
               />
            </motion.div>
         </div>
      </section>

      <footer className="mt-20 text-center py-20 border-t border-gray-100 dark:border-white/5">
         <div className="text-[12px] font-[900] uppercase tracking-[0.8em] text-gray-900 dark:text-slate-400">
            Discuss Community © 2026 | Social Engineering Portfolio
         </div>
      </footer>

    </div>
  );
}
