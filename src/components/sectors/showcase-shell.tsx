"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ShowcaseAccent = "teal" | "gold" | "green" | "violet";

const GLOW: Record<ShowcaseAccent, string> = {
  teal: "bg-surface-tint/12",
  gold: "bg-[#c9a227]/12",
  green: "bg-emerald-500/10",
  violet: "bg-violet-500/10",
};

type ShowcaseShellProps = {
  id: string;
  index: string;
  accent?: ShowcaseAccent;
  children: ReactNode;
  className?: string;
};

export function ShowcaseShell({
  id,
  index,
  accent = "teal",
  children,
  className,
}: ShowcaseShellProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.55, 0.3]);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "cinematic-grain relative overflow-hidden border-b border-outline-variant/20 bg-white",
        className,
      )}
    >
      <span
        className="pointer-events-none absolute -top-4 -left-1 font-headline-xl text-[7rem] leading-none font-bold text-primary/[0.04] select-none sm:-top-6 sm:-left-2 sm:text-[10rem] lg:text-[13rem]"
        aria-hidden
      >
        {index}
      </span>

      <motion.div
        style={{ y: glowY, opacity: glowOpacity }}
        className={cn(
          "pointer-events-none absolute top-0 right-0 h-[480px] w-[480px] rounded-full blur-[100px]",
          GLOW[accent],
        )}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-surface-container-low/60 blur-[90px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile py-12 sm:py-16 md:px-gutter md:py-20 lg:py-24">
        {children}
      </div>
    </section>
  );
}
