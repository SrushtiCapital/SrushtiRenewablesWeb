"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import type { ShowcaseSlide } from "./showcase-data";
import { ShowcaseShell, type ShowcaseAccent } from "./showcase-shell";
import { cn } from "@/lib/utils";

const AUTO_MS = 6000;

const ACCENT: Record<
  ShowcaseAccent,
  {
    badge: string;
    italic: string;
    counter: string;
    pill: string;
    progress: string;
    ring: string;
    tag: string;
    metric: string;
    navHover: string;
  }
> = {
  teal: {
    badge: "border-surface-tint/35 bg-surface-tint/10 text-surface-tint",
    italic: "text-surface-tint",
    counter: "text-surface-tint",
    pill: "bg-surface-tint/15 text-primary ring-1 ring-surface-tint/35",
    progress: "bg-surface-tint",
    ring: "ring-surface-tint/15",
    tag: "border-surface-tint/35 text-surface-tint",
    metric: "text-surface-tint",
    navHover: "hover:border-surface-tint/40 hover:text-primary",
  },
  gold: {
    badge: "border-[#c9a227]/35 bg-[#c9a227]/10 text-[#8a7020]",
    italic: "text-[#8a7020]",
    counter: "text-[#8a7020]",
    pill: "bg-[#c9a227]/15 text-primary ring-1 ring-[#c9a227]/35",
    progress: "bg-[#c9a227]",
    ring: "ring-[#c9a227]/15",
    tag: "border-[#c9a227]/35 text-[#8a7020]",
    metric: "text-[#8a7020]",
    navHover: "hover:border-[#c9a227]/40 hover:text-primary",
  },
  green: {
    badge: "border-emerald-600/30 bg-emerald-50 text-emerald-800",
    italic: "text-emerald-700",
    counter: "text-emerald-700",
    pill: "bg-emerald-50 text-primary ring-1 ring-emerald-600/30",
    progress: "bg-emerald-600",
    ring: "ring-emerald-600/15",
    tag: "border-emerald-600/30 text-emerald-800",
    metric: "text-emerald-700",
    navHover: "hover:border-emerald-600/40 hover:text-primary",
  },
  violet: {
    badge: "border-violet-600/30 bg-violet-50 text-violet-800",
    italic: "text-violet-700",
    counter: "text-violet-700",
    pill: "bg-violet-50 text-primary ring-1 ring-violet-600/30",
    progress: "bg-violet-600",
    ring: "ring-violet-600/15",
    tag: "border-violet-600/30 text-violet-800",
    metric: "text-violet-700",
    navHover: "hover:border-violet-600/40 hover:text-primary",
  },
};

export type SectorCarouselShowcaseProps = {
  id: string;
  index: string;
  accent: ShowcaseAccent;
  badge: string;
  title: ReactNode;
  description: string;
  slides: ShowcaseSlide[];
};

export function SectorCarouselShowcase({
  id,
  index,
  accent,
  badge,
  title,
  description,
  slides,
}: SectorCarouselShowcaseProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[active];
  const a = ACCENT[accent];

  const go = useCallback(
    (index: number) => {
      setActive(((index % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => go(active + 1), AUTO_MS);
    return () => window.clearInterval(t);
  }, [active, paused, go]);

  return (
    <ShowcaseShell id={id} index={index} accent={accent}>
      <div
        className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:items-center lg:gap-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="min-w-0 lg:col-span-5"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className={cn(
              "inline-flex rounded px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase",
              a.badge,
            )}
          >
            {badge}
          </span>

          <h2 className="mt-6 font-headline-lg text-3xl leading-[1.08] font-semibold tracking-tight text-primary sm:mt-8 sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-4 max-w-md font-body-md text-sm leading-relaxed text-on-surface-variant sm:mt-6 sm:text-base">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-6">
            <div className="flex items-baseline gap-2">
              <span className={cn("font-headline-sm text-2xl sm:text-3xl", a.counter)}>
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs text-on-surface-variant/70">
                / {String(slides.length).padStart(2, "0")}
              </span>
            </div>
            <div className="h-8 w-px bg-outline-variant/40" aria-hidden />
            <div className="flex gap-2">
              <NavButton label="Previous" className={a.navHover} onClick={() => go(active - 1)}>
                ←
              </NavButton>
              <NavButton label="Next" className={a.navHover} onClick={() => go(active + 1)}>
                →
              </NavButton>
            </div>
          </div>

          <div className="-mx-margin-mobile mt-5 flex gap-2 overflow-x-auto px-margin-mobile pb-1 sm:mx-0 sm:mt-6 sm:flex-wrap sm:overflow-visible sm:px-0">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "shrink-0 rounded-full px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase transition-all",
                  i === active
                    ? a.pill
                    : "text-on-surface-variant/70 hover:text-on-surface",
                )}
              >
                {s.id}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="min-w-0 lg:col-span-7"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <div
            className={cn(
              "relative aspect-[5/6] overflow-hidden rounded-xl border border-outline-variant/25 bg-surface-container-low shadow-[0_12px_40px_rgba(6,78,59,0.08)] ring-1 sm:aspect-video sm:rounded-2xl lg:aspect-4/3 lg:shadow-[0_20px_60px_rgba(6,78,59,0.08)]",
              a.ring,
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={active === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-white via-white/55 to-white/15" />
                <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/30 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(6,78,59,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.04)_1px,transparent_1px)] bg-size-[48px_48px] opacity-50" />

            <motion.span
              key={`tag-${slide.id}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "absolute top-3 left-3 max-w-[45%] truncate rounded-full border bg-white/90 px-2.5 py-1 font-mono text-[9px] tracking-wider uppercase backdrop-blur-sm sm:top-5 sm:left-5 sm:max-w-none sm:px-3 sm:text-[10px]",
                a.tag,
              )}
            >
              {slide.tag}
            </motion.span>

            <motion.div
              key={`metric-${slide.id}`}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 }}
              className="absolute top-3 right-3 rounded-lg border border-outline-variant/30 bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm sm:top-5 sm:right-5 sm:rounded-xl sm:px-4 sm:py-3"
            >
              <p className="font-mono text-[8px] tracking-widest text-on-surface-variant uppercase sm:text-[9px]">
                {slide.metricLabel}
              </p>
              <p className={cn("font-headline-sm text-lg sm:text-2xl", a.metric)}>
                {slide.metric}
              </p>
            </motion.div>

            <div className="absolute right-0 bottom-0 left-0 p-4 sm:p-6 lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-headline-md text-lg font-semibold text-primary sm:text-2xl lg:text-3xl">
                    {slide.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-xs leading-relaxed text-on-surface-variant sm:mt-3 sm:text-sm">
                    {slide.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              className={cn("absolute bottom-0 left-0 h-[2px]", a.progress)}
              initial={false}
              animate={{ width: `${((active + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.45 }}
            />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:grid-cols-3 sm:gap-3">
            {slides.slice(active, active + 3).map((_, i) => {
              const idx = (active + i) % slides.length;
              const item = slides[idx];
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(idx)}
                  className="group rounded-xl border border-outline-variant/25 bg-surface-container-low/50 p-3 text-left transition-all hover:border-outline-variant/50 hover:bg-white hover:shadow-sm"
                >
                  <p className="font-mono text-[9px] text-on-surface-variant uppercase">
                    {item.tag}
                  </p>
                  <p className="mt-1 text-xs font-medium text-on-surface group-hover:text-primary">
                    {item.title}
                  </p>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </ShowcaseShell>
  );
}

function NavButton({
  children,
  label,
  onClick,
  className,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/40 bg-white text-on-surface-variant shadow-sm transition-colors sm:h-11 sm:w-11",
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
