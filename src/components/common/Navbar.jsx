import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Home, User, Zap, Briefcase, Mail, Cpu, Layout } from 'lucide-react';

const links = [
  { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
  { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
  { id: "skills", label: "Skills", icon: <Zap className="w-4 h-4" /> },
  { id: "projects", label: "Projects", icon: <Layout className="w-4 h-4" /> },
  { id: "timeline", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
  { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> }
];

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Find active section
      const sections = links.map(link => document.getElementById(link.id)).filter(Boolean);
      const current = sections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  const navLinkVariants = {
    initial: { y: 0 },
    hover: { y: -2, transition: { duration: 0.2, ease: "easeOut" } }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 dark:bg-gray-950/70 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-b border-white/20 dark:border-gray-800/50 py-1"
          : "backdrop-blur-sm bg-transparent border-b border-transparent py-3"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNav("home")}
        >
          <motion.div
            className="relative"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
              MS
            </div>
            {/* Pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-blue-400"
            />
          </motion.div>
          <div className="hidden sm:block">
            <motion.h1
              className="font-bold text-lg bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              MD SAHIL KHAN
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-gray-500 dark:text-gray-400 font-medium"
            >
              Software Engineer
            </motion.p>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          {/* Navigation Links */}
          <div className="flex items-center gap-1 mr-6 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-full p-1.5 border border-gray-200/50 dark:border-gray-800/50 shadow-sm">
            {links.map((link) => (
              <motion.button
                key={link.id}
                variants={navLinkVariants}
                initial="initial"
                whileHover="hover"
                onClick={() => handleNav(link.id)}
                className={`relative px-4 py-2 text-xs font-bold rounded-full transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {/* Active background */}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeTabDesktop"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5 uppercase tracking-wider">
                  {link.icon}
                  {link.label}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </motion.div>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors duration-200"
          >
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  animate={{
                    d: open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden overflow-hidden border-t border-gray-200/50 dark:border-gray-800/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
          >
            <div className="container py-4">
              <div className="grid grid-cols-2 gap-3">
                {links.map((link) => (
                  <motion.button
                    key={link.id}
                    variants={mobileItemVariants}
                    onClick={() => handleNav(link.id)}
                    className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 ${
                      activeSection === link.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105"
                        : "bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    whileHover={{ scale: activeSection === link.id ? 1.05 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="font-medium">{link.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                variants={mobileItemVariants}
                className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-800/50"
              >
                <motion.button
                  onClick={() => handleNav("contact")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
                >
                  <span>🚀</span>
                  Let's Work Together
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
        style={{
          scaleX: scrolled ? 1 : 0
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.nav>
  );
}
