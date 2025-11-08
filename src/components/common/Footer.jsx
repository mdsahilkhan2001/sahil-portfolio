 import React, { useState } from "react";
import { siteMeta } from "../../data/siteContent";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="mt-20 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            © {new Date().getFullYear()} {siteMeta.name}. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a
              href={siteMeta.github}
              target="_blank"
              className="text-sm hover:text-primary"
            >
              GitHub
            </a>
            <a
              href={siteMeta.linkedin}
              target="_blank"
              className="text-sm hover:text-primary"
            >
              LinkedIn
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="text-sm hover:text-primary"
            >
              Resume
            </button>
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
