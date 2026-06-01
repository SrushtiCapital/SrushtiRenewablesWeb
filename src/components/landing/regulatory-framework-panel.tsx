"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type FrameworkItem = {
  name: string;
  code?: string;
};

export type RegulatoryFramework = {
  region: string;
  jurisdiction: string;
  icon: string;
  title: string;
  items: FrameworkItem[];
  footnote: string;
  accent: "uk" | "india";
};

const accentConfig = {
  uk: {
    border: "border-primary-fixed/35",
    shadow: "shadow-[0_12px_48px_rgba(6,78,59,0.1)]",
    iconBg: "bg-gradient-to-br from-primary-fixed to-primary-container",
    iconText: "text-white",
    tag: "from-primary-container/15 to-primary-fixed/30 text-primary border-primary/25",
    rowHover:
      "hover:bg-gradient-to-r hover:from-primary-fixed/15 hover:to-transparent hover:shadow-[0_8px_24px_rgba(6,78,59,0.08)]",
    codePill: "bg-primary/10 text-primary",
    mesh: "bg-[radial-gradient(circle_at_100%_0%,rgba(176,240,214,0.25),transparent_55%)]",
  },
  india: {
    border: "border-secondary/30",
    shadow: "shadow-[0_12px_48px_rgba(111,92,44,0.1)]",
    iconBg: "bg-gradient-to-br from-secondary to-[#8a7340]",
    iconText: "text-white",
    tag: "from-secondary-fixed/40 to-secondary-fixed/10 text-on-secondary-container border-secondary/30",
    rowHover:
      "hover:bg-gradient-to-r hover:from-secondary-fixed/35 hover:to-transparent hover:shadow-[0_8px_24px_rgba(111,92,44,0.1)]",
    codePill: "bg-secondary-fixed/50 text-secondary",
    mesh: "bg-[radial-gradient(circle_at_0%_100%,rgba(250,224,164,0.3),transparent_55%)]",
  },
};

type RegulatoryFrameworkPanelProps = {
  framework: RegulatoryFramework;
  index?: number;
};

export function RegulatoryFrameworkPanel({
  framework,
  index = 0,
}: RegulatoryFrameworkPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const accent = accentConfig[framework.accent];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, rotate: index === 0 ? -1.5 : 1.5 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotate: 0 }
          : { opacity: 0, y: 28, rotate: index === 0 ? -1.5 : 1.5 }
      }
      transition={{ duration: 0.6, delay: index * 0.1, ease: easeOut }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative h-full"
    >
      <div
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-2xl border-2 bg-white/90 backdrop-blur-xl",
          accent.border,
          accent.shadow,
          accent.mesh,
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-outline-variant/15 px-5 py-5 md:px-6">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105",
                accent.iconBg,
              )}
            >
              <span
                className={cn(
                  "material-symbols-outlined text-2xl",
                  accent.iconText,
                )}
              >
                {framework.icon}
              </span>
            </span>
            <div>
              <p className="font-label-caps text-label-caps text-outline">
                {framework.region}
              </p>
              <p className="mt-0.5 font-headline-sm text-headline-sm text-primary">
                {framework.title}
              </p>
            </div>
          </div>
          <span
            className={cn(
              "rounded-full border bg-gradient-to-br px-3 py-1.5 font-label-caps text-[10px] tracking-[0.2em]",
              accent.tag,
            )}
          >
            {framework.jurisdiction}
          </span>
        </div>

        <ul className="flex flex-1 flex-col gap-2 p-4 md:p-5">
          {framework.items.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -12 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }
              }
              transition={{
                delay: 0.15 + i * 0.08,
                duration: 0.45,
                ease: easeOut,
              }}
            >
              <div
                className={cn(
                  "flex items-center justify-between gap-3 rounded-xl border border-transparent px-4 py-3.5 transition-all duration-300",
                  accent.rowHover,
                )}
              >
                <p className="min-w-0 font-body-md font-semibold text-on-surface">
                  {item.name}
                </p>
                {item.code && (
                  <span
                    className={cn(
                      "shrink-0 rounded-lg px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider",
                      accent.codePill,
                    )}
                  >
                    {item.code}
                  </span>
                )}
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mx-4 mb-4 rounded-xl border border-outline-variant/15 bg-surface-container-low/60 px-4 py-3 md:mx-5 md:mb-5">
          <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
            {framework.footnote}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
