import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, GraduationCap, Layout, 
  Layers, Zap, ShieldCheck, Home, 
  Box, BarChart3, Target, BookOpen, 
  AlertCircle, Lightbulb, Rocket, 
  ShieldAlert, Workflow, ChevronRight,
  Code2, Database, Globe, User,
  CheckCircle2, Users, Shield,
  TrendingUp, CheckCircle, Activity
} from "lucide-react";
import { aicasData as d } from "../data/aicasData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
});

const highlightWords = (text) => {
  const highlights = [
    "role-based ticketing workflows", "category-based ticket filtering", "Django REST APIs", "real-time status updates",
    "room allocation and occupancy tracking", "hostel-specific rules configuration", "React-based hostel dashboards", "hostel-related grievances",
    "course definition system", "filtering and validation logic", "frontend forms", "enrollment management",
    "JWT-based authentication", "RBAC", "Role-Based Access Control", "strict data isolation", "permission-related issues",
    "React frontend", "cross-service communication issues", "React hooks and state management", "API contract design"
  ];
  
  const regex = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) => {
    const isHighlight = highlights.some(h => h.toLowerCase() === part.toLowerCase());
    return isHighlight ? (
      <span key={i} className="text-[#9333EA] dark:text-purple-400 font-extrabold">{part}</span>
    ) : part;
  });
};

export default function AicasProjectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] text-[#1E293B] dark:text-slate-200 selection:bg-violet-100 dark:selection:bg-violet-900 pb-32 transition-colors duration-500">
      
      {/* ─── Subtle Grid Background ─── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* ─── HEADER AREA ─── */}
      <div className="relative z-10 pt-28 md:pt-32 pb-6 border-b border-gray-200 dark:border-white/5 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Back Button - Moved to Top Left as requested */}
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
              className="w-16 h-16 bg-[#9333EA] rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-200 dark:shadow-none shrink-0"
            >
              <Layers className="w-8 h-8" />
            </motion.div>
            <div>
              <h1 className="text-3xl md:text-4xl font-[800] tracking-[-0.03em] text-[#0F172A] dark:text-white leading-tight">
                {d.title}
              </h1>
              <p className="text-lg text-[#64748B] dark:text-slate-400 font-medium tracking-tight mt-1">{d.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 space-y-16">
        
        {/* ─── OVERVIEW CARD ─── */}
        <motion.div {...fadeUp(0.1)} className="bg-white dark:bg-[#1E293B]/40 rounded-[40px] border border-gray-100 dark:border-white/5 p-10 md:p-14 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center text-[#9333EA] dark:text-purple-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-[800] tracking-tight text-[#0F172A] dark:text-white">Overview</h2>
          </div>
          <div className="space-y-8 text-xl leading-[1.6] text-[#475569] dark:text-slate-300">
            <p className="font-medium">
              A <span className="text-[#9333EA] dark:text-purple-400 font-[800]">microservices-based ERP platform</span> designed to support both <span className="text-cyan-600 dark:text-cyan-400 font-[700]">school-level and college-level</span> educational institutions. The system handles academic, administrative, and operational workflows while maintaining strict <span className="text-[#9333EA] dark:text-purple-400 font-[700]">role-based access control</span> and <span className="text-cyan-600 dark:text-cyan-400 font-[700]">multi-tenant data isolation</span>.
            </p>
            <p className="font-medium">
              The platform is <span className="text-[#9333EA] dark:text-purple-400 font-[700]">configurable</span> to adapt to different institution types, enabling reuse of core services with role- and structure-specific behavior. Successfully deployed in <span className="text-cyan-600 dark:text-cyan-400 font-[800]">2+ colleges</span> serving <span className="text-[#9333EA] dark:text-purple-400 font-[800]">4,000+ active users</span>.
            </p>
          </div>
        </motion.div>

        {/* ─── SYSTEM ARCHITECTURE ─── */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 flex items-center justify-center text-[#9333EA] dark:text-purple-400 shadow-sm">
              <Layers className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-[800] tracking-tight dark:text-white">System Architecture</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Frontend Layer", desc: "React with TypeScript, responsive UI components", icon: <Code2 />, color: "bg-cyan-500" },
              { title: "API Gateway", desc: "Django REST Framework with JWT authentication", icon: <Globe />, color: "bg-emerald-500" },
              { title: "Data Layer", desc: "PostgreSQL with multi-tenant isolation", icon: <Database />, color: "bg-violet-600" }
            ].map((layer, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="bg-white dark:bg-[#1E293B]/40 p-10 rounded-[32px] border border-gray-100 dark:border-white/5 shadow-sm group hover:border-violet-200 dark:hover:border-violet-500/20 transition-all">
                <div className={`w-16 h-16 ${layer.color} text-white rounded-[24px] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-gray-200 dark:shadow-none group-hover:scale-110 transition-transform`}>
                  {layer.icon}
                </div>
                <h4 className="text-2xl font-[800] tracking-tight mb-4 dark:text-white">{layer.title}</h4>
                <p className="text-base text-gray-500 dark:text-slate-400 font-medium leading-relaxed">{layer.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.4)} className="bg-white dark:bg-[#1E293B]/40 rounded-[40px] border border-gray-100 dark:border-white/5 p-10 md:p-14 shadow-sm relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-violet-50/30 dark:bg-violet-900/10 -z-10" />
            <div className="flex items-center gap-4 mb-12">
              <Zap className="w-6 h-6 text-violet-600 dark:text-purple-400" />
              <h3 className="text-2xl font-[800] tracking-tight dark:text-white">Core Microservices</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Authentication & Authorization", icon: <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" /> },
                { title: "Ticketing System", icon: <GraduationCap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" /> },
                { title: "Hostel Management", icon: <Home className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> },
                { title: "Course/Academic Management", icon: <Shield className="w-6 h-6 text-red-500 dark:text-red-400" /> }
              ].map((service, i) => (
                <div key={i} className="bg-white dark:bg-[#0F172A]/60 p-8 rounded-3xl border border-gray-50 dark:border-white/5 shadow-sm flex flex-col items-center text-center gap-6 hover:border-violet-300 dark:hover:border-violet-500/40 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-violet-50 dark:group-hover:bg-violet-500/10 transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-xs font-[800] uppercase tracking-wider text-gray-500 dark:text-slate-400 group-hover:text-violet-600 transition-colors">{service.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── INSTITUTION SPECIFIC BEHAVIOR ─── */}
        <motion.div {...fadeUp(0.5)} className="bg-[#F1F5F9]/50 dark:bg-white/5 rounded-[44px] p-1.5 border border-gray-200 dark:border-white/5 overflow-hidden">
          <div className="bg-white dark:bg-[#1E293B]/60 rounded-[42px] p-12 shadow-sm border border-gray-100 dark:border-transparent">
            <h3 className="text-2xl font-[800] tracking-tight mb-12 dark:text-white">Institution-Specific Behavior</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-10 bg-white dark:bg-[#0F172A]/40 rounded-[32px] border border-gray-100 dark:border-white/5 shadow-sm">
                <h4 className="text-xl font-[800] text-violet-600 dark:text-purple-400 mb-8 flex items-center gap-3">
                   <div className="w-2.5 h-2.5 bg-violet-600 dark:bg-purple-400 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.3)]" /> School-Level
                </h4>
                <ul className="space-y-4 text-base text-gray-600 dark:text-slate-400 font-medium">
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-violet-300 rounded-full" /> Class-based structure (e.g., Grade 10-A)</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-violet-300 rounded-full" /> Simplified role hierarchy</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-violet-300 rounded-full" /> Direct teacher-student mapping</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-violet-300 rounded-full" /> Section-based organization</li>
                </ul>
              </div>
              <div className="p-10 bg-white dark:bg-[#0F172A]/40 rounded-[32px] border border-gray-100 dark:border-white/5 shadow-sm">
                <h4 className="text-xl font-[800] text-cyan-600 dark:text-cyan-400 mb-8 flex items-center gap-3">
                   <div className="w-2.5 h-2.5 bg-cyan-600 dark:bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(8,145,178,0.3)]" /> College-Level
                </h4>
                <ul className="space-y-4 text-base text-gray-600 dark:text-slate-400 font-medium">
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-cyan-300 rounded-full" /> Department + Semester structure</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-cyan-300 rounded-full" /> Complex role hierarchy (HODs, deans, etc.)</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-cyan-300 rounded-full" /> Course-based enrollment</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-cyan-300 rounded-full" /> Elective and credit systems</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── MY ROLE & CONTRIBUTIONS ─── */}
        <div className="space-y-12">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center text-[#9333EA] dark:text-purple-400">
                  <User className="w-6 h-6" />
               </div>
               <h2 className="text-4xl font-[800] tracking-tight dark:text-white">My Role & Contributions</h2>
            </div>
            <p className="text-xl text-gray-500 dark:text-slate-400 font-bold ml-16">Software Developer Trainee</p>
          </div>

          <div className="space-y-10">
             {d.contributions.map((c, i) => (
               <motion.div key={i} {...fadeUp(0.1 + i * 0.1)} className={`rounded-[40px] border p-12 shadow-sm ${c.color} dark:bg-[#1E293B]/40 dark:border-white/5 backdrop-blur-sm group hover:scale-[1.01] transition-all`}>
                  <h4 className="text-2xl font-[800] tracking-tight text-[#0F172A] dark:text-white mb-10 flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${c.dotColor} shadow-lg`} />
                    {c.title}
                  </h4>
                  <ul className="space-y-6">
                    {c.details.map((detail, di) => (
                      <li key={di} className="flex gap-5 items-start text-[17px] font-medium text-gray-600 dark:text-slate-300 leading-relaxed">
                        <div className="mt-1.5 shrink-0">
                           <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        </div>
                        <span>{highlightWords(detail)}</span>
                      </li>
                    ))}
                  </ul>
               </motion.div>
             ))}
          </div>
        </div>

        {/* ─── CHALLENGES FACED ─── */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500">
                <AlertCircle className="w-6 h-6" />
             </div>
             <h2 className="text-4xl font-[800] tracking-tight dark:text-white">Challenges Faced</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {d.challenges.map((item, i) => (
               <motion.div key={i} {...fadeUp(0.1 + i * 0.1)} className={`p-10 rounded-[40px] border shadow-sm ${item.color} dark:bg-[#1E293B]/40 dark:border-white/5 hover:bg-opacity-80 transition-all`}>
                  <h5 className="text-2xl font-[800] tracking-tight mb-5 dark:text-white">{item.title}</h5>
                  <p className="text-base text-gray-500 dark:text-slate-400 leading-[1.6] font-medium">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>

        {/* ─── KEY LEARNINGS ─── */}
        <motion.div {...fadeUp(0.2)} className="bg-white dark:bg-[#1E293B]/40 rounded-[48px] border border-gray-100 dark:border-white/5 p-12 md:p-16 shadow-sm backdrop-blur-sm">
           <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center text-[#9333EA] dark:text-purple-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-[800] tracking-tight dark:text-white">Key Learnings</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {d.learnings.map((l, i) => (
                <div key={i} className="p-10 bg-blue-50/40 dark:bg-white/5 rounded-[32px] border border-blue-100/50 dark:border-white/5 hover:bg-blue-50 dark:hover:bg-white/10 transition-all group">
                   <h5 className="text-2xl font-[800] tracking-tight mb-5 dark:text-white group-hover:text-violet-600 transition-colors">{l.title}</h5>
                   <p className="text-[17px] text-gray-500 dark:text-slate-400 font-medium leading-relaxed">{l.desc}</p>
                </div>
              ))}
           </div>
        </motion.div>

        {/* ─── IMPACT & RESULTS ─── */}
        <motion.div 
           {...fadeUp(0.3)} 
           className="rounded-[52px] p-12 md:p-16 text-white bg-gradient-to-br from-[#9333EA] via-[#3B82F6] to-[#0D9488] relative overflow-hidden shadow-2xl shadow-blue-500/20"
        >
           <div className="relative z-10">
              <div className="flex items-center gap-4 mb-16">
                 <TrendingUp className="w-8 h-8 text-white" />
                 <h2 className="text-4xl font-[800] tracking-tight">Impact & Results</h2>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                 {d.heroStats.map((s, i) => (
                   <div key={i} className="text-center group">
                      <div className="text-6xl font-[900] tracking-tight mb-3 group-hover:scale-110 transition-transform">{s.value}{s.suffix}</div>
                      <div className="text-xs font-[800] uppercase tracking-[0.3em] opacity-80">{s.label}</div>
                   </div>
                 ))}
              </div>

              <div className="bg-white/10 backdrop-blur-3xl rounded-[40px] border border-white/25 p-12">
                 <h4 className="text-2xl font-[800] mb-10 tracking-tight">Key Achievements</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">
                    {d.achievements.map((item, i) => (
                      <div key={i} className="flex items-center gap-5 group">
                         <div className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
                            <CheckCircle className="w-5 h-5 text-white" />
                         </div>
                         <span className="text-lg font-bold tracking-tight opacity-95">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
           
           <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-white/20 blur-[120px] rounded-full" />
           <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-black/20 blur-[120px] rounded-full" />
        </motion.div>

        {/* ─── PLATFORM HIGHLIGHTS ─── */}
        <motion.div {...fadeUp(0.4)} className="bg-white dark:bg-[#1E293B]/40 rounded-[48px] border border-gray-100 dark:border-white/5 p-12 md:p-16 shadow-sm backdrop-blur-sm">
           <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-[800] tracking-tight dark:text-white">Platform Highlights</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
              {d.highlights.map((h, i) => (
                <div key={i} className="space-y-4 group">
                   <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:scale-150 transition-transform" />
                      <h5 className="text-xl font-[800] tracking-tight text-[#0F172A] dark:text-white group-hover:text-emerald-600 transition-colors">{h.title}</h5>
                   </div>
                   <p className="text-[17px] text-gray-500 dark:text-slate-400 font-medium leading-[1.6] pl-6">
                      {h.desc}
                   </p>
                </div>
              ))}
           </div>
        </motion.div>

        {/* ─── FINAL CTA ─── */}
        <div className="pt-20 flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="group flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#9333EA] to-[#3B82F6] text-white rounded-3xl text-lg font-[800] uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:shadow-purple-500/40 transition-all"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" /> 
            Back to Projects
          </motion.button>
        </div>

      </div>

      <footer className="mt-40 text-center text-gray-500 dark:text-slate-500 text-[11px] font-[900] uppercase tracking-[0.6em]">
        AICAS ERP Platform Case Study | Build for Excellence
      </footer>

    </div>
  );
}
