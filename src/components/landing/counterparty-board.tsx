"use client";

import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type Counterparty = {
  institution: string;
  desk: string;
  phase: "engaged" | "pipeline";
  focus: string;
};

const phaseStyles = {
  engaged: {
    pill: "bg-primary/8 text-primary border-primary/20",
    dot: "bg-primary",
  },
  pipeline: {
    pill: "bg-secondary-fixed/50 text-on-secondary-container border-secondary/25",
    dot: "bg-secondary",
  },
};

type CounterpartyBoardProps = {
  items: Counterparty[];
  className?: string;
};

export function CounterpartyBoard({ items, className }: CounterpartyBoardProps) {
  const engaged = items.filter((i) => i.phase === "engaged").length;
  const pipeline = items.filter((i) => i.phase === "pipeline").length;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-outline-variant/30 bg-white shadow-[0_12px_48px_rgba(0,53,39,0.06)]",
        className,
      )}
    >
      <div className="border-b border-outline-variant/25 bg-surface-container-low/60 px-5 py-5 md:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-label-caps text-label-caps text-outline">
              Live mandate view
            </p>
            <h3 className="mt-1 font-headline-sm text-headline-sm text-primary">
              Institutional counterparties
            </h3>
          </div>
          <div className="flex gap-6">
            <div className="text-right">
              <p className="font-headline-sm text-headline-sm text-primary">
                {engaged}
              </p>
              <p className="font-label-caps text-label-caps text-on-surface-variant">
                Engaged
              </p>
            </div>
            <div className="text-right">
              <p className="font-headline-sm text-headline-sm text-secondary">
                {pipeline}
              </p>
              <p className="font-label-caps text-label-caps text-on-surface-variant">
                Pipeline
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <span className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
            <span
              className={cn("h-1.5 w-1.5 rounded-full", phaseStyles.engaged.dot)}
            />
            Engaged
          </span>
          <span className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
            <span
              className={cn("h-1.5 w-1.5 rounded-full", phaseStyles.pipeline.dot)}
            />
            Pipeline
          </span>
        </div>
      </div>

      <div
        className="hidden grid-cols-[1fr_auto_1fr] gap-4 border-b border-outline-variant/20 bg-surface/80 px-6 py-3 md:grid"
        aria-hidden
      >
        <span className="font-label-caps text-label-caps text-outline">
          Institution
        </span>
        <span className="font-label-caps text-label-caps text-outline">
          Status
        </span>
        <span className="text-right font-label-caps text-label-caps text-outline">
          Mandate focus
        </span>
      </div>

      <ul className="divide-y divide-outline-variant/20">
        {items.map((item, index) => (
          <motion.li
            key={`${item.institution}-${item.desk}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: easeOut,
            }}
            className="group px-5 py-4 transition-colors hover:bg-surface-container-low/50 md:px-6"
          >
            <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-[1fr_auto_1fr] md:gap-4">
              <div className="min-w-0">
                <p className="font-body-md font-semibold text-primary">
                  {item.institution}
                </p>
                <p className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
                  {item.desk}
                </p>
              </div>

              <div className="md:justify-self-center">
                <span
                  className={cn(
                    "inline-flex rounded-full border px-2.5 py-1 font-label-caps text-[10px] tracking-wider uppercase",
                    phaseStyles[item.phase].pill,
                  )}
                >
                  {item.phase}
                </span>
              </div>

              <p className="font-body-sm text-body-sm text-on-surface-variant md:text-right">
                {item.focus}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="border-t border-outline-variant/20 bg-surface-container-low/40 px-5 py-3 md:px-6">
        <p className="font-mono text-[10px] leading-relaxed tracking-wide text-outline uppercase">
          Illustrative counterparty view — not exhaustive
        </p>
      </div>
    </div>
  );
}
