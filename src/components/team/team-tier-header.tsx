"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/motion";
import type { ReactNode } from "react";

type TeamTierHeaderProps = {
  tier: string;
  title: ReactNode;
  description: string;
  muted?: boolean;
  className?: string;
};

export function TeamTierHeader({
  tier,
  title,
  description,
  muted = false,
  className,
}: TeamTierHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: easeOut }}
      className={cn(
        "grid grid-cols-1 gap-6 border-b border-outline-variant/20 pb-10 md:grid-cols-12 md:gap-10 md:pb-12",
        className,
      )}
    >
      <div className="md:col-span-4">
        <p
          className={cn(
            "font-mono text-xs tracking-[0.22em] uppercase",
            muted ? "text-surface-tint" : "text-surface-tint/90",
          )}
        >
          {tier}
        </p>
        <h2 className="mt-4 font-headline-lg text-3xl leading-[1.08] font-semibold tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </div>
      <p className="font-body-lg text-base leading-relaxed text-on-surface-variant md:col-span-8 md:self-end md:pb-1 lg:text-body-lg">
        {description}
      </p>
    </motion.header>
  );
}
