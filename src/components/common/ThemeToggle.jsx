import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");
  
  return (
    <button 
      onClick={toggle} 
      aria-label="Toggle theme" 
      className="relative p-2.5 rounded-full bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-all shadow-sm backdrop-blur-md"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Sun className="w-5 h-5 text-amber-400 drop-shadow-md" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Moon className="w-5 h-5 text-indigo-600 drop-shadow-md" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
