"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      className={`rounded-2xl border border-ink/8 bg-white p-6 shadow-soft ${className}`}
      whileHover={
        hover
          ? { y: -4, boxShadow: "0 14px 40px rgba(11, 18, 32, 0.10)" }
          : undefined
      }
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
