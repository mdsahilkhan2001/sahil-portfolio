 import React, { useState } from "react";
import { siteMeta } from "../../data/siteContent";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Briefcase, ArrowUp, Mail, ExternalLink, Globe } from "lucide-react";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="relative mt-32 pb-12 pt-20 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[50px] bg-blue-500/10 blur-[50px] rounded-full"></div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Brand/Copyright Section */}
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">
                  {siteMeta.name.charAt(0)}
                </div>
                <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
                  {siteMeta.name}
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs leading-relaxed">
                Building the future of web with clean code and innovative design.
              </p>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} • Crafted with ❤️
              </div>
            </div>

            {/* Social Links Section */}
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-4">
                {[
                  { icon: <Github className="w-5 h-5" />, url: siteMeta.github, label: "GitHub" },
                  { icon: <Linkedin className="w-5 h-5" />, url: siteMeta.linkedin, label: "LinkedIn" },
                  { icon: <Globe className="w-5 h-5" />, url: "https://sgscodeworks.in", label: "Tech Agency" },
                  { icon: <Briefcase className="w-5 h-5" />, action: () => setShowModal(true), label: "Resume" },
                ].map((social, i) => (
                  <motion.button
                    key={i}
                    onClick={social.action || (() => window.open(social.url, "_blank"))}
                    className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all shadow-sm"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </div>
              
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-blue-500 transition-colors"
                whileHover={{ y: -2 }}
              >
                Back to Top
                <div className="p-2 rounded-full border border-gray-200 dark:border-gray-800 group-hover:border-blue-500/50 transition-colors">
                  <ArrowUp className="w-3.5 h-3.5" />
                </div>
              </motion.button>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-gray-100 dark:border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
            <span>Software Engineer & Founder of SGS CodeWorks</span>
            <div className="flex gap-6">
              <span className="hover:text-blue-500 cursor-default transition-colors">Performance Optimized</span>
              <span className="hover:text-blue-500 cursor-default transition-colors">SEO Ready</span>
              <span className="hover:text-blue-500 cursor-default transition-colors">Accessibility First</span>
            </div>
          </div>
        </div>
      </footer>

      {/* CV Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="text-6xl"
                >
                  📄
                </motion.div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Thanks for your interest! 🎯
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    My CV is available upon request. Feel free to reach out
                    through the contact section to discuss opportunities.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    You can also connect with me on{" "}
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      LinkedIn
                    </span>{" "}
                    or check out my{" "}
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">
                      projects
                    </span>{" "}
                    to see my work!
                  </p>
                </div>

                <motion.button
                  onClick={() => setShowModal(false)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Got it! 👍
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
