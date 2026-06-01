"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { EcosystemCounterparty } from "./ecosystem-data";
import type { ShowcaseAccent } from "@/components/sectors/showcase-shell";
import { cn } from "@/lib/utils";

const ACCENT = {
  teal: {
    ring: "ring-surface-tint/20",
    tab: "border-surface-tint bg-surface-tint/10 text-surface-tint",
    tabIdle: "border-outline-variant/20 hover:border-surface-tint/30 hover:bg-surface-tint/5",
    chip: "border-surface-tint/25 bg-surface-tint/8 text-primary",
    bar: "bg-surface-tint",
    glow: "from-surface-tint/8",
  },
  gold: {
    ring: "ring-[#c9a227]/20",
    tab: "border-[#c9a227]/40 bg-[#c9a227]/10 text-[#8a7020]",
    tabIdle: "border-outline-variant/20 hover:border-[#c9a227]/30 hover:bg-[#c9a227]/5",
    chip: "border-[#c9a227]/25 bg-[#c9a227]/10 text-[#5c4a18]",
    bar: "bg-[#c9a227]",
    glow: "from-[#c9a227]/8",
  },
  violet: {
    ring: "ring-violet-500/20",
    tab: "border-violet-500/35 bg-violet-50 text-violet-800",
    tabIdle: "border-outline-variant/20 hover:border-violet-400/30 hover:bg-violet-50/80",
    chip: "border-violet-400/25 bg-violet-50 text-violet-900",
    bar: "bg-violet-600",
    glow: "from-violet-500/8",
  },
} as const;

function parseItems(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

type EcosystemCounterpartiesProps = {
  accent: ShowcaseAccent;
  groups: EcosystemCounterparty[];
};

export function EcosystemCounterparties({
  accent,
  groups,
}: EcosystemCounterpartiesProps) {
  const [active, setActive] = useState(0);
  const a = ACCENT[accent as keyof typeof ACCENT] ?? ACCENT.teal;
  const group = groups[active];
  const items = parseItems(group.value);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mt-14 border-t border-outline-variant/20 pt-12 sm:mt-16 sm:pt-14"
      aria-labelledby="counterparties-heading"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <p className="font-mono text-[10px] tracking-[0.2em] text-outline uppercase">
            Ecosystem access
          </p>
          <h3
            id="counterparties-heading"
            className="mt-3 font-headline-sm text-2xl font-semibold text-primary sm:text-[1.75rem]"
          >
            Counterparties we work with
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-on-surface-variant">
            Named categories across the mandate — registries, frameworks, and
            market routes we plug sponsors into.
          </p>

          <div className="mt-6 flex flex-col gap-2 sm:mt-8">
            {groups.map((entry, i) => (
              <button
                key={entry.label}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all",
                  i === active ? cn("shadow-sm ring-1", a.tab, a.ring) : a.tabIdle,
                )}
              >
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-[10px]",
                    i === active
                      ? "border-current/30 bg-white/60"
                      : "border-outline-variant/30 bg-white text-outline",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "text-sm leading-snug",
                    i === active ? "font-medium" : "text-on-surface-variant",
                  )}
                >
                  {entry.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:col-span-8">
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border border-outline-variant/20 bg-white p-6 shadow-[0_16px_48px_rgba(6,78,59,0.06)] sm:p-8",
              "ring-1 ring-black/[0.03]",
            )}
          >
            <div
              className={cn(
                "pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b to-transparent",
                a.glow,
              )}
              aria-hidden
            />

            <AnimatePanel key={group.label} label={group.label} items={items} accent={a} />
          </div>

          <div className="mt-4 flex flex-wrap gap-2 lg:hidden">
            {groups.map((entry, i) => (
              <button
                key={entry.label}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-full border px-3 py-1 font-mono text-[10px] tracking-wider uppercase transition-all",
                  i === active ? a.tab : "border-outline-variant/25 text-on-surface-variant",
                )}
              >
                {entry.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function AnimatePanel({
  label,
  items,
  accent,
}: {
  label: string;
  items: string[];
  accent: (typeof ACCENT)[keyof typeof ACCENT];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex items-center gap-3">
        <span className={cn("h-8 w-1 rounded-full", accent.bar)} aria-hidden />
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-outline uppercase">
            Active category
          </p>
          <p className="mt-0.5 font-headline-sm text-lg font-semibold text-primary sm:text-xl">
            {label}
          </p>
        </div>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-2.5">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
          >
            <span
              className={cn(
                "inline-flex rounded-full border px-3 py-1.5 text-xs leading-snug sm:px-4 sm:py-2 sm:text-sm",
                accent.chip,
              )}
            >
              {item}
            </span>
          </motion.li>
        ))}
      </ul>

      <p className="mt-6 border-t border-outline-variant/15 pt-4 font-mono text-[9px] tracking-wider text-outline uppercase sm:text-[10px]">
        Illustrative category view — introductions are mandate-confidential
      </p>
    </motion.div>
  );
}
