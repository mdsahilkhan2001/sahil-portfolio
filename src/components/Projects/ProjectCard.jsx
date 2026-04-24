import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";

export default function ProjectCard({ p, onClick }) {
  return (
    <motion.div 
      onClick={onClick}
      whileHover={{ y: -10 }}
      layout
      className="group cursor-pointer bg-white dark:bg-gray-800/50 backdrop-blur-xl rounded-[32px] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all"
    >
      <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img 
          src={p.img} 
          alt={p.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {p.companyProject && (
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full shadow-lg border border-white/20">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-900 dark:text-white">Company Project</span>
          </div>
        )}
      </div>
      
      <div className="p-8 relative">
        {/* Hover Arrow */}
        <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {p.tags?.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800/80 rounded-md text-[9px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 pr-8 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {p.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-6">
          {p.desc}
        </p>
        
        {/* Direct GitHub Link on small card */}
        <div className="flex items-center">
          <a 
            href={p.github || "https://github.com/mdsahilkhan2001"} 
            target="_blank" 
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.48-1.54 6.48-7.14a5.46 5.46 0 0 0-1.54-3.9 5.1 5.1 0 0 0-.15-3.8s-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0C6.27 2.2 5 2.58 5 2.58a5.1 5.1 0 0 0-.15 3.8 5.46 5.46 0 0 0-1.54 3.9c0 5.6 3.34 6.78 6.48 7.14a4.8 4.8 0 0 0-1 3.02V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
            {p.companyProject ? "GitHub Profile" : "View Code"}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
