"use client";

import { motion } from "framer-motion";

export function AmbientBg() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(94,106,210,0.08),_transparent_60%)]" />

      <motion.div
        className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(94,106,210,0.22) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.6,
        }}
        animate={{ x: [0, 80, -40, 0], y: [0, 60, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-1/3 right-0 h-[480px] w-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(143,93,224,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.5,
        }}
        animate={{ x: [0, -100, 40, 0], y: [0, 40, -60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 h-[440px] w-[440px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(94,106,210,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.45,
        }}
        animate={{ x: [0, 60, -60, 0], y: [0, -40, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="grain" />
    </div>
  );
}
