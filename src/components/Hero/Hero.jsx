 import React, { useEffect, useState } from "react";
import TypedText from "./TypedText";
import { siteMeta } from "../../data/siteContent";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from 'lucide-react';

import profile from "../../assets/profile.jpg";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full"
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-1 h-1 bg-purple-400 rounded-full"
          animate={{ y: [20, -20, 20], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full"
          animate={{ y: [-15, 15, -15], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                Available for work
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <motion.span
                  animate={{ rotate: [0, 14, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block"
                >
                  👋
                </motion.span>
                <br />
                I'm{" "}
                <motion.span
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ backgroundSize: "200%" }}
                >
                  {siteMeta.name}
                </motion.span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
                {siteMeta.tagline}
              </p>
              <div className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                <TypedText strings={siteMeta.roleTypes} />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                </span>
              </motion.button>

              <motion.button
                onClick={() => setShowModal(true)}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl font-semibold text-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {[
                { icon: "💻", url: siteMeta.github, label: "GitHub" },
                { icon: "💼", url: siteMeta.linkedin, label: "LinkedIn" },
                {
                  icon: "✉️",
                  action: () => scrollToSection("contact"),
                  label: "Contact",
                },
              ].map((social, i) => (
                <motion.button
                  key={i}
                  onClick={
                    social.action || (() => window.open(social.url, "_blank"))
                  }
                  className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-xl hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  {social.icon}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Profile Card */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              className="relative"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20 scale-110" />

              <motion.div
                className="relative w-80 h-96 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20"
                whileHover={{
                  rotateY: 10,
                  rotateX: 5,
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Profile Image */}
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <img
                    src={profile}
                    alt="Profile"
                    className="relative w-28 h-28 object-cover rounded-full mx-auto top-2 left-2 border-4 border-white dark:border-gray-900"
                  />

                  <motion.div
                    className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-400 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center text-white text-sm font-bold"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✓
                  </motion.div>
                </div>

                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold">{siteMeta.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    📍 {siteMeta.location || "Remote"}
                  </p>

                  <div className="flex justify-center gap-2">
                    {["React", "Node.js", "Next.js"].map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + i * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-green-500">●</span> Available for
                      projects
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ↓
        </motion.button>
      </motion.div>

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
                    through the contact section below to discuss opportunities.
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
    </section>
  );
}
