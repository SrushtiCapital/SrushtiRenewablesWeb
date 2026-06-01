"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { slideFromLeft, slideFromRight } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Phase = "engaged" | "pipeline";
type Accent = "emerald" | "amber" | "teal" | "violet";
type Filter = "all" | Phase;

type Counterparty = {
  institution: string;
  desk: string;
  phase: Phase;
  focus: string;
  accent: Accent;
};

const counterparties: Counterparty[] = [
  {
    institution: "Brookfield",
    desk: "Infrastructure Finance",
    phase: "engaged",
    focus: "Greenfield Equity",
    accent: "emerald",
  },
  {
    institution: "Kapil Group",
    desk: "Real Assets",
    phase: "engaged",
    focus: "Real estate",
    accent: "emerald",
  },
  {
    institution: "KfW DEG",
    desk: "Germany DFI",
    phase: "pipeline",
    focus: "Greenfield Equity",
    accent: "amber",
  },
  {
    institution: "CDC / BII",
    desk: "UK DFI",
    phase: "pipeline",
    focus: "Energy",
    accent: "amber",
  },
  {
    institution: "HSBC",
    desk: "Constructor Finance",
    phase: "pipeline",
    focus: "Infra debt",
    accent: "teal",
  },
  {
    institution: "Tata Steel",
    desk: "India",
    phase: "engaged",
    focus: "Greenfield Infrastructure",
    accent: "teal",
  },
  {
    institution: "CBI",
    desk: "UK",
    phase: "pipeline",
    focus: "Green bond",
    accent: "violet",
  },
  {
    institution: "UK Export Finance",
    desk: "Finance",
    phase: "engaged",
    focus: "Sustainable",
    accent: "violet",
  },
];

const bullets = [
  {
    num: "01",
    text: "One-page teasers and full IMs calibrated to lender risk-appetite filters",
    icon: "description",
  },
  {
    num: "02",
    text: "Personalised outreach with deal-specific rationale, not template emails",
    icon: "mail",
  },
  {
    num: "03",
    text: "Direct introductions to credit committees and sustainable-finance desks",
    icon: "groups",
  },
];

const accentStyles: Record<
  Accent,
  { dot: string; bar: string; glow: string }
> = {
  emerald: {
    dot: "bg-[#22a06b]",
    bar: "from-[#22a06b]/80 to-[#22a06b]/0",
    glow: "group-hover:shadow-[0_8px_32px_rgba(34,160,107,0.12)]",
  },
  amber: {
    dot: "bg-secondary",
    bar: "from-secondary/80 to-secondary/0",
    glow: "group-hover:shadow-[0_8px_32px_rgba(111,92,44,0.12)]",
  },
  teal: {
    dot: "bg-surface-tint",
    bar: "from-surface-tint/80 to-surface-tint/0",
    glow: "group-hover:shadow-[0_8px_32px_rgba(43,105,84,0.14)]",
  },
  violet: {
    dot: "bg-[#7c5cbf]",
    bar: "from-[#7c5cbf]/80 to-[#7c5cbf]/0",
    glow: "group-hover:shadow-[0_8px_32px_rgba(124,92,191,0.12)]",
  },
};

const phaseStyles: Record<Phase, { label: string; pill: string }> = {
  engaged: {
    label: "Engaged",
    pill: "bg-primary/8 text-primary border-primary/20",
  },
  pipeline: {
    label: "Pipeline",
    pill: "bg-secondary-fixed/40 text-on-secondary-container border-secondary/25",
  },
};

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "engaged", label: "Engaged" },
  { id: "pipeline", label: "Pipeline" },
];

function CounterpartyCard({
  item,
  index,
}: {
  item: Counterparty;
  index: number;
}) {
  const accent = accentStyles[item.accent];
  const phase = phaseStyles[item.phase];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-outline-variant/20 bg-white p-4 shadow-sm transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-primary/25",
        accent.glow,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b",
          accent.bar,
        )}
        aria-hidden
      />
      <span
        className="pointer-events-none absolute top-3 right-3 font-mono text-[10px] text-outline-variant/50"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex items-start gap-3 pr-6">
        <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
          <span
            className={cn("absolute inset-0 rounded-full opacity-40", accent.dot)}
          />
          <span
            className={cn(
              "relative m-auto h-1.5 w-1.5 rounded-full",
              accent.dot,
              item.phase === "engaged" && "animate-pulse",
            )}
          />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm leading-snug font-bold text-primary">
            {item.institution}
            <span className="font-normal text-on-surface-variant">
              {" "}
              · {item.desk}
            </span>
          </p>
          <div className="mt-2.5 flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "inline-flex rounded-full border px-2 py-0.5 font-mono text-[9px] tracking-wider uppercase",
                phase.pill,
              )}
            >
              {phase.label}
            </span>
            <span className="text-xs text-on-surface-variant">
              {item.focus}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Outreach() {
  const [filter, setFilter] = useState<Filter>("all");
  const prefersReducedMotion = useReducedMotion();

  const filtered = useMemo(
    () =>
      filter === "all"
        ? counterparties
        : counterparties.filter((c) => c.phase === filter),
    [filter],
  );

  const engagedCount = counterparties.filter((c) => c.phase === "engaged").length;
  const pipelineCount = counterparties.filter(
    (c) => c.phase === "pipeline",
  ).length;

  return (
    <FadeIn
      id="engage"
      className="relative overflow-hidden bg-surface-container-low px-margin-mobile py-section-padding md:px-gutter"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-depth opacity-60" />
      <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary-fixed/12 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[280px] w-[280px] -translate-x-1/3 translate-y-1/3 rounded-full bg-secondary-fixed/20 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-container-max">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left — interactive counterparty board */}
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideFromLeft}
          >
            <div className="relative overflow-hidden rounded-3xl border border-outline-variant/25 bg-white/90 shadow-[0_20px_60px_rgba(0,53,39,0.08)] backdrop-blur-sm">
              {/* Subtle grid texture */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
                  `,
                  backgroundSize: "24px 24px",
                }}
                aria-hidden
              />

              <div className="relative border-b border-outline-variant/20 bg-surface-container-low/70 px-5 py-5 md:px-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <p className="font-label-caps text-label-caps text-outline">
                        Live mandate view
                      </p>
                    </div>
                    <h3 className="mt-1 font-headline-sm text-headline-sm text-primary">
                      Institutional counterparties
                    </h3>
                  </div>
                  <div className="flex gap-8">
                    <div>
                      <p className="font-headline-sm text-headline-sm text-primary">
                        {engagedCount}
                      </p>
                      <p className="font-label-caps text-label-caps text-on-surface-variant">
                        Engaged
                      </p>
                    </div>
                    <div>
                      <p className="font-headline-sm text-headline-sm text-secondary">
                        {pipelineCount}
                      </p>
                      <p className="font-label-caps text-label-caps text-on-surface-variant">
                        Pipeline
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {filters.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFilter(f.id)}
                      className={cn(
                        "rounded-full border px-3 py-1 font-mono text-[10px] tracking-wider uppercase transition-all",
                        filter === f.id
                          ? "border-primary bg-primary text-on-primary shadow-sm"
                          : "border-outline-variant/40 bg-white text-on-surface-variant hover:border-primary/30",
                      )}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative p-4 md:p-5">
                <motion.div
                  layout
                  className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                >
                  {filtered.map((item, i) => (
                    <CounterpartyCard
                      key={`${item.institution}-${item.desk}`}
                      item={item}
                      index={i}
                    />
                  ))}
                </motion.div>

                {!prefersReducedMotion && (
                  <motion.div
                    className="pointer-events-none absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 bg-primary/5"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.15, 0.4] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    aria-hidden
                  />
                )}
              </div>

              <div className="border-t border-outline-variant/20 bg-surface-container-low/50 px-5 py-3 md:px-6">
                <p className="font-mono text-[10px] tracking-wide text-outline uppercase">
                  Illustrative counterparty view — not exhaustive
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            className="order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideFromRight}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" aria-hidden />
              <Badge variant="accent">02 / ENGAGE</Badge>
            </div>

            <h3 className="mb-6 max-w-xl font-headline-md text-headline-md leading-[1.15] text-primary">
              Targeted outreach to{" "}
              <span className="serif-italic text-tertiary">
                real decision-makers.
              </span>
            </h3>

            <p className="mb-10 max-w-lg font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Mandates do not move on mass-market teasers. We brief named
              institutional counterparties — the credit committees,
              sustainable-finance desks, and ECA infrastructure teams who
              actually allocate to emerging-market exposure.
            </p>

            <ul className="space-y-4">
              {bullets.map((item, i) => (
                <motion.li
                  key={item.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 + i * 0.1, duration: 0.45 }}
                  className="group flex gap-4 rounded-2xl border border-transparent bg-white/60 p-4 transition-all hover:border-outline-variant/30 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                      <span className="material-symbols-outlined text-xl">
                        {item.icon}
                      </span>
                    </span>
                    <span className="font-mono text-[10px] text-outline">
                      {item.num}
                    </span>
                  </div>
                  <p className="pt-1 font-body-md leading-relaxed text-on-surface">
                    {item.text}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </FadeIn>
  );
}
