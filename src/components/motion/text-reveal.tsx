"use client";

import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

type TextRevealProps = {
  children: string;
  className?: string;
  delay?: number;
};

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  const words = children.split(" ");

  return (
    <span className={className} aria-label={children}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.04,
              ease: easeOut,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
