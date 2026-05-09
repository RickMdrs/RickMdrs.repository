"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

export function CountUp({
  to,
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const value = useMotionValue(0);
  const spring = useSpring(value, { stiffness: 60, damping: 20, mass: 1 });
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) value.set(to);
  }, [inView, to, value]);

  return (
    <motion.span ref={ref} className="font-mono tabular-nums">
      {display}
    </motion.span>
  );
}
