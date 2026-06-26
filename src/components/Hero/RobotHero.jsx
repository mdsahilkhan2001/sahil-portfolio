import React from "react";
import { motion } from "framer-motion";

export default function RobotHero() {
  return (
    <div className="relative flex items-center justify-center w-full h-full select-none mt-12">
      {/* Ambient glow behind the robot */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[350px] h-[350px] rounded-full bg-blue-500/30 blur-[90px] pointer-events-none"
      />
      
      {/* Robot Image with floating effect */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full max-w-lg mx-auto flex justify-center items-center"
        style={{ aspectRatio: "1/1.2" }}
      >
        {/* R2 Image (Base - Sharp) */}
        <motion.img 
          src="/robot img/r2.png" 
          alt="Robot base" 
          className="absolute inset-0 w-[120%] max-w-none h-auto object-contain drop-shadow-[0_20px_40px_rgba(59,130,246,0.35)]"
          style={{ left: "-10%" }}
        />
        {/* R1 Image (Overlay - Motion Blur isolated to hand) */}
        <motion.img 
          src="/robot img/r1.png" 
          alt="Robot waving blur" 
          className="absolute inset-0 w-[120%] max-w-none h-auto object-contain drop-shadow-[0_20px_40px_rgba(59,130,246,0.35)]"
          style={{ 
            left: "-10%",
            WebkitMaskImage: "radial-gradient(circle at 80% 40%, black 10%, transparent 35%)",
            maskImage: "radial-gradient(circle at 80% 40%, black 10%, transparent 35%)"
          }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.25, ease: "linear" }}
        />

        {/* "Hi!" bubble */}
        <motion.div
          style={{ position: "absolute", top: "15%", right: "-10%", pointerEvents: "none", zIndex: 30 }}
          animate={{ scale: [0.9, 1.1, 0.9], y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span style={{
            display: "inline-block", padding: "12px 24px",
            background: "#fff", borderRadius: 24,
            border: "3px solid #60a5fa",
            fontWeight: 900, fontSize: 24, color: "#2563eb",
            boxShadow: "0 10px 30px rgba(96,165,250,0.42)",
            letterSpacing: "-0.01em", whiteSpace: "nowrap",
          }}>Hi! 👋</span>
          {/* Bubble tail */}
          <div style={{
            position: "absolute", bottom: -10, left: 20,
            width: 20, height: 20,
            background: "#fff",
            borderRight: "3px solid #60a5fa",
            borderBottom: "3px solid #60a5fa",
            transform: "rotate(45deg)",
          }} />
        </motion.div>
      </motion.div>

      {/* Ground shadow beneath the robot */}
      <motion.div
        animate={{ scaleX: [1, 0.7, 1], opacity: [0.25, 0.08, 0.25] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-8 w-64 h-12 bg-blue-500/30 rounded-[100%] blur-[12px]"
      />
    </div>
  );
}
