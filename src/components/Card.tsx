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
      className={`card-surface p-6 ${className}`}
      whileHover={
        hover
          ? { y: -4, boxShadow: "0 12px 36px rgba(11, 18, 32, 0.11)" }
          : undefined
      }
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
