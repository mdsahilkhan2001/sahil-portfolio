import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Palette, Smartphone, Zap, Sparkles, Layout, Film, Code2, PenTool,
  ArrowRight, Droplet, Star, Play, PlayCircle
} from "lucide-react";
import { skincareData as d } from "../data/skincareData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] }
});

const IconMap = {
  Code2, Palette, Zap, Layout, Smartphone, Sparkles, Film, PenTool
};

export default function SkincareProjectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#2C2A28] font-sans selection:bg-[#E8DCC9] overflow-x-hidden transition-colors duration-700">
      
      {/* ─── Luxury Soft Backdrop ─── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9] via-[#FAF9F6] to-[#F2EFE9]"></div>
        <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-[#F4E3D7]/40 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#E8DCC9]/40 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"></div>
      </div>

      {/* ─── HEADER AREA ─── */}
      <div className="relative z-10 pt-28 md:pt-32 pb-6">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2.5 px-6 py-2.5 bg-white/60 backdrop-blur-md border border-[#E8DCC9] text-[#2C2A28] rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-white hover:border-[#D6C4AD] transition-all group shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#B89B85]" /> Back
          </motion.button>
        </div>
      </div>

      {/* ─── HERO SECTION (Aesop / Rhode Style) ─── */}
      <section className="relative z-10 pt-16 pb-40">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          
          <motion.div 
            {...fadeUp()}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white text-[#8A7361] text-[10px] font-bold uppercase tracking-[0.3em] mb-12 rounded-full border border-[#E8DCC9] shadow-sm"
          >
            <Droplet className="w-3.5 h-3.5" /> Frontend Showcase
          </motion.div>
          
          <motion.h1 
            {...fadeUp(0.1)}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-medium tracking-tight mb-8 leading-[1.05] text-[#1A1918]"
          >
            Luxury Skincare Crafted <br className="hidden md:block" />
            <span className="italic text-[#A68A77]">for Modern Beauty.</span>
          </motion.h1>

          <motion.p 
            {...fadeUp(0.2)}
            className="text-lg md:text-xl text-[#6D6760] font-light max-w-3xl mx-auto leading-relaxed mb-16"
          >
            {d.heroDescription}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-6 mb-32">
            <a 
              href={d.links.live}
              target="_blank"
              rel="noreferrer"
              className="px-12 py-5 bg-[#2C2A28] text-white font-medium uppercase tracking-[0.2em] text-xs hover:bg-[#1A1918] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Explore Collection
            </a>
            <a 
              href={d.links.github}
              target="_blank"
              rel="noreferrer"
              className="px-12 py-5 bg-transparent border border-[#B89B85] text-[#2C2A28] font-medium uppercase tracking-[0.2em] text-xs hover:bg-white hover:border-[#8A7361] transition-all hover:-translate-y-1"
            >
              View Code
            </a>
          </motion.div>

          {/* Hero Mockup Focus */}
          <motion.div 
            {...fadeUp(0.4)}
            className="relative w-full max-w-5xl mx-auto rounded-none bg-white p-4 md:p-8 border border-[#E8DCC9] shadow-[0_30px_60px_rgba(138,115,97,0.1)] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent z-10 opacity-30"></div>
            <img 
              src={d.img} 
              alt="Skincare Landing Page" 
              className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "/project section img/figma.png"; 
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECT OVERVIEW ─── */}
      <section className="relative z-10 py-32 bg-[#FFFDF9] border-y border-[#E8DCC9]/50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-8 text-[#1A1918]">Modern Luxury Frontend Experience</h2>
          <p className="text-lg md:text-xl text-[#6D6760] font-light leading-relaxed max-w-4xl mx-auto">
            {d.overview}
          </p>
        </div>
      </section>

      {/* ─── CORE FEATURES ─── */}
      <section className="relative z-10 py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6 text-[#1A1918]">Elegant Features</h2>
            <p className="text-lg text-[#8A7361] font-light tracking-wide">Crafted with precision and fluidity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {d.features.map((f, i) => {
              const Icon = IconMap[f.icon] || Sparkles;
              return (
                <motion.div 
                  key={i} 
                  {...fadeUp(i * 0.1)} 
                  className="group relative p-10 bg-white rounded-none border border-[#E8DCC9] hover:border-[#B89B85] transition-all duration-700 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(138,115,97,0.08)] overflow-hidden"
                >
                  <div className="w-12 h-12 bg-[#FAF9F6] text-[#A68A77] group-hover:bg-[#F4E3D7]/50 group-hover:text-[#8A7361] transition-colors flex items-center justify-center mb-8 border border-[#E8DCC9]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-4 text-[#1A1918]">{f.title}</h3>
                  <p className="text-[#6D6760] font-light leading-relaxed text-sm md:text-base">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ANIMATION SHOWCASE ─── */}
      <section className="relative z-10 py-32 bg-[#F2EFE9] border-y border-[#E8DCC9]/50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-8 text-[#1A1918]">Cinematic Motion Experience</h2>
              <p className="text-lg text-[#6D6760] font-light leading-relaxed mb-10">
                Immersive GSAP-powered animations elevate the user journey. From the moment the page loads, soft reveals and scroll-triggered transitions guide the eye seamlessly through the luxury product showcase.
              </p>
              <div className="space-y-6">
                {['Smooth page reveal preview', 'Word-by-word text animation', 'Product hover interaction', 'Scroll-triggered transitions'].map((item, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.1)} className="flex items-center gap-4 border-b border-[#E8DCC9] pb-4">
                    <Star className="w-4 h-4 text-[#A68A77]" />
                    <span className="text-[#2C2A28] font-medium tracking-wide">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <motion.div 
                {...fadeUp(0.3)}
                className="bg-white p-4 border border-[#E8DCC9] shadow-[0_20px_60px_rgba(138,115,97,0.1)] relative z-10"
              >
                <div className="relative overflow-hidden group cursor-pointer bg-[#FAF9F6]">
                  <img 
                    src="/project section img/imagemask-DTpAmthc.png" 
                    alt="Motion Preview" 
                    className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-[#2C2A28]/5 group-hover:bg-[#2C2A28]/20 transition-colors duration-500 flex flex-col items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white drop-shadow-md opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                    <div className="absolute bottom-6 text-center w-full text-xs tracking-[0.2em] uppercase text-white font-medium drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">Watch Animation Reel</div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] bg-[#F4E3D7] rounded-full blur-[80px] -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="relative z-10 py-32 bg-[#FFFDF9]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="mb-24 text-center">
            <h2 className="text-4xl font-serif tracking-tight mb-6 text-[#1A1918]">Technology Stack</h2>
            <p className="text-lg text-[#8A7361] font-light">The foundation of modern elegance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Object.entries(d.techStack).map(([category, techs], i) => (
              <motion.div key={category} {...fadeUp(i * 0.1)} className="p-10 bg-white border border-[#E8DCC9] hover:border-[#B89B85] transition-all duration-500 shadow-sm hover:shadow-[0_15px_40px_rgba(138,115,97,0.06)] hover:-translate-y-1">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A68A77] mb-8 border-b border-[#E8DCC9] pb-4">{category}</h4>
                <div className="space-y-6">
                  {techs.map((t, j) => {
                    const Icon = IconMap[t.icon] || Code2;
                    return (
                      <div key={j} className="flex items-center gap-6 group cursor-default">
                        <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110 bg-[#FAF9F6] border border-[#E8DCC9] text-[#8A7361] group-hover:bg-[#F4E3D7]/40">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-[#2C2A28] text-lg">{t.name}</span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTRIBUTIONS & CHALLENGES ─── */}
      <section className="relative z-10 py-32 bg-[#FAF9F6] border-y border-[#E8DCC9]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div>
            <h2 className="text-3xl font-serif tracking-tight mb-14 text-[#1A1918] flex items-center gap-4">
              My Contributions
            </h2>
            <div className="space-y-12">
              {d.contributions.map((c, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="relative pl-8">
                  <div className="absolute top-2.5 left-0 w-1.5 h-1.5 bg-[#8A7361] rotate-45" />
                  <div className="absolute top-5 left-[2px] w-[1px] h-[calc(100%+1rem)] bg-[#E8DCC9]" />
                  <h4 className="text-xl font-medium mb-3 text-[#1A1918]">{c.title}</h4>
                  <p className="text-[#6D6760] font-light leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif tracking-tight mb-14 text-[#1A1918] flex items-center gap-4">
              Engineering Challenges
            </h2>
            <div className="space-y-4 mb-20">
              {d.challenges.map((challenge, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="flex items-center gap-4 p-5 bg-white border border-[#E8DCC9] hover:border-[#B89B85] transition-colors">
                  <div className="w-1.5 h-1.5 bg-[#D6C4AD] rounded-full" />
                  <span className="font-medium text-[#2C2A28]">{challenge}</span>
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl font-serif tracking-tight mb-8 text-[#1A1918]">Key Learnings</h2>
            <div className="flex flex-wrap gap-3">
              {d.learnings.map((learning, i) => (
                <span key={i} className="px-5 py-3 bg-white border border-[#E8DCC9] text-[#6D6760] text-sm font-medium hover:bg-[#FAF9F6] transition-colors cursor-default">
                  {learning}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── IMPACT SECTION ─── */}
      <section className="relative z-10 py-32 bg-[#FFFDF9]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-serif tracking-tight mb-6 text-[#1A1918]">Platform Impact</h2>
            <p className="text-lg text-[#8A7361] font-light">Measurable excellence in frontend design.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {d.metrics.map((m, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="p-10 bg-white border border-[#E8DCC9] text-center hover:border-[#B89B85] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(138,115,97,0.05)] hover:-translate-y-2 group">
                <div className="text-2xl md:text-3xl font-serif mb-4 text-[#1A1918] group-hover:text-[#8A7361] transition-colors">
                  {m.value}
                </div>
                <div className="text-[#6D6760] font-medium text-xs uppercase tracking-widest">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative z-10 py-40 overflow-hidden bg-[#FAF9F6] border-t border-[#E8DCC9]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(244,227,215,0.4)_0%,transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-8 text-[#1A1918]">Crafting Luxury Digital Experiences.</h2>
          <p className="text-lg text-[#6D6760] font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            Blending modern frontend engineering with elegant motion design to create immersive beauty-focused interfaces.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a 
              href={d.links.live}
              target="_blank"
              rel="noreferrer"
              className="px-14 py-6 bg-[#2C2A28] text-white uppercase tracking-[0.2em] text-xs font-medium hover:bg-[#1A1918] transition-colors shadow-2xl"
            >
              Explore Design
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
