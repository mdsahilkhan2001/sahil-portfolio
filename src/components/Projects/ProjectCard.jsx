import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ p }) {
  return (
    <motion.div whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800">
      <div className="relative">
        <img src={p.img} alt={p.title} className="w-full h-40 object-cover" loading="lazy" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{p.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">{p.desc}</p>
        <div className="flex items-center gap-2 mt-3">
          <a href={p.github} target="_blank" className="text-sm px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700">GitHub</a>
          {p.live && <a href={p.live} target="_blank" className="text-sm px-3 py-1 rounded-md bg-primary text-white">Live</a>}
        </div>
      </div>
    </motion.div>
  );
}
