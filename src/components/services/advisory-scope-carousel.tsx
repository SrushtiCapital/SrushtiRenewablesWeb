"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import type { ServiceItem } from "./services-data";
import type { ServiceIconKey } from "./service-icons";
import { SERVICE_ICONS } from "./service-icons";
import type { ShowcaseAccent } from "@/components/sectors/showcase-shell";
import { cn } from "@/lib/utils";

const AUTO_MS = 3300;

const ACCENT: Record<
  ShowcaseAccent,
  {
    counter: string;
    pill: string;
    progress: string;
    navHover: string;
    icon: string;
    ring: string;
  }
> = {
  teal: {
    counter: "text-surface-tint",
    pill: "bg-surface-tint/15 text-primary ring-1 ring-surface-tint/35",
    progress: "bg-surface-tint",
    navHover: "hover:border-surface-tint/40 hover:text-primary",
    icon: "border-surface-tint/25 bg-surface-tint/10 text-surface-tint",
    ring: "ring-surface-tint/15",
  },
  gold: {
    counter: "text-[#8a7020]",
    pill: "bg-[#c9a227]/15 text-primary ring-1 ring-[#c9a227]/35",
    progress: "bg-[#c9a227]",
    navHover: "hover:border-[#c9a227]/40 hover:text-primary",
    icon: "border-[#c9a227]/25 bg-[#c9a227]/10 text-[#8a7020]",
    ring: "ring-[#c9a227]/15",
  },
  green: {
    counter: "text-emerald-700",
    pill: "bg-emerald-50 text-primary ring-1 ring-emerald-600/30",
    progress: "bg-emerald-600",
    navHover: "hover:border-emerald-600/40 hover:text-primary",
    icon: "border-emerald-600/25 bg-emerald-50 text-emerald-800",
    ring: "ring-emerald-600/15",
  },
  violet: {
    counter: "text-violet-700",
    pill: "bg-violet-50 text-primary ring-1 ring-violet-600/30",
    progress: "bg-violet-600",
    navHover: "hover:border-violet-600/40 hover:text-primary",
    icon: "border-violet-600/25 bg-violet-50 text-violet-800",
    ring: "ring-violet-600/15",
  },
};

type AdvisoryScopeCarouselProps = {
  items: ServiceItem[];
  accent: ShowcaseAccent;
};

export function AdvisoryScopeCarousel({ items, accent }: AdvisoryScopeCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const item = items[active];
  const a = ACCENT[accent];
  const Icon = SERVICE_ICONS[item.icon as ServiceIconKey];

  const go = useCallback(
    (index: number) => {
      setActive(((index % items.length) + items.length) % items.length);
    },
    [items.length],
  );

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const t = window.setInterval(() => go(active + 1), AUTO_MS);
    return () => window.clearInterval(t);
  }, [active, paused, go, items.length]);

  return (
    <div
      className="mt-10 border-t border-outline-variant/20 pt-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.18em] text-outline uppercase">
          Advisory scope
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-baseline gap-1.5">
            <span className={cn("font-headline-sm text-xl tabular-nums sm:text-2xl", a.counter)}>
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs text-on-surface-variant/70">
              / {String(items.length).padStart(2, "0")}
            </span>
          </div>
          <div className="flex gap-1.5">
            <NavButton label="Previous" className={a.navHover} onClick={() => go(active - 1)}>
              ←
            </NavButton>
            <NavButton label="Next" className={a.navHover} onClick={() => go(active + 1)}>
              →
            </NavButton>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "relative mt-5 min-h-[140px] overflow-hidden rounded-xl border border-outline-variant/20 bg-white p-5 shadow-[0_8px_32px_rgba(6,78,59,0.05)] ring-1 sm:min-h-[152px] sm:p-6",
          a.ring,
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4 sm:gap-5"
          >
            <span
              className={cn(
                "flex size-11 shrink-0 items-center justify-center rounded-xl border sm:size-12",
                a.icon,
              )}
            >
              <Icon className="size-5" strokeWidth={1.5} />
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="font-mono text-[10px] tracking-wider text-outline uppercase">
                Scope {String(active + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-on-surface sm:text-[15px]">
                {item.text}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className={cn("absolute bottom-0 left-0 h-[2px]", a.progress)}
          animate={{ width: `${((active + 1) / items.length) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <div className="-mx-1 mt-4 flex gap-1.5 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible">
        {items.map((entry, i) => (
          <button
            key={entry.text}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Scope ${i + 1}`}
            className={cn(
              "shrink-0 rounded-full px-2.5 py-1 font-mono text-[9px] tracking-wider uppercase transition-all sm:px-3 sm:text-[10px]",
              i === active
                ? a.pill
                : "text-on-surface-variant/70 hover:text-on-surface",
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </div>
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "flex size-9 items-center justify-center rounded-full border border-outline-variant/40 bg-white text-on-surface-variant shadow-sm transition-colors",
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
