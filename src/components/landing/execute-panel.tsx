"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

const timelineSteps = [
  { label: "T+0", sub: "Mandate", pending: false },
  { label: "T+30", sub: "Structure", pending: false },
  { label: "T+60", sub: "Term sheet", pending: false },
  { label: "T+90", sub: "DD", pending: false },
  { label: "T+120+", sub: "Drawdown", pending: true },
];

const filingBoxes = [
  { org: "RBI", item: "Form ECB" },
  { org: "RBI", item: "FC-GPR" },
  { org: "CBI", item: "Annual impact" },
];

const panelVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.45, ease: easeOut },
  }),
};

export function ExecutePanel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const activeProgress = 0.72;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={panelVariants}
      className="overflow-hidden rounded-2xl border border-outline-variant/35 bg-white shadow-[0_12px_48px_rgba(0,53,39,0.07)]"
    >
      <div className="border-b border-outline-variant/25 bg-surface-container-low/70 px-6 py-5 md:px-8">
        <p className="font-label-caps text-label-caps text-outline">
          Mandate execution
        </p>
        <p className="mt-1 font-headline-sm text-headline-sm text-primary">
          Drawdown &amp; reporting workflow
        </p>
      </div>

      <div className="space-y-10 p-6 md:p-8">
        {/* Timeline */}
        <motion.div custom={0} variants={blockVariants}>
          <p className="mb-6 font-mono text-[11px] font-semibold tracking-widest text-primary uppercase">
            Drawdown timeline
          </p>

          <div className="relative px-1">
            <div className="absolute top-[7px] right-0 left-0 h-0.5 rounded-full bg-outline-variant/50" />
            <motion.div
              className="absolute top-[7px] left-0 h-0.5 rounded-full bg-primary"
              initial={{ width: "0%" }}
              animate={isInView ? { width: `${activeProgress * 100}%` } : { width: "0%" }}
              transition={{ duration: 0.9, delay: 0.35, ease: easeOut }}
            />

            <div className="relative flex justify-between gap-1">
              {timelineSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  className="flex max-w-[4.5rem] flex-col items-center gap-2 sm:max-w-none"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 10 }
                  }
                  transition={{
                    delay: 0.45 + i * 0.09,
                    duration: 0.4,
                    ease: easeOut,
                  }}
                >
                  <div
                    className={cn(
                      "h-3.5 w-3.5 rounded-full border-2 bg-white",
                      step.pending
                        ? "border-outline"
                        : "border-primary bg-primary shadow-[0_0_0_3px_rgba(255,255,255,1),0_0_12px_rgba(6,78,59,0.25)]",
                    )}
                  />
                  <div className="text-center">
                    <span
                      className={cn(
                        "block font-mono text-[11px] font-bold",
                        step.pending ? "text-outline" : "text-primary",
                      )}
                    >
                      {step.label}
                    </span>
                    <span className="mt-0.5 block font-body-sm text-[10px] leading-tight text-on-surface-variant">
                      {step.sub}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="h-px bg-outline-variant/30" />

        {/* Filings */}
        <motion.div custom={1} variants={blockVariants}>
          <p className="mb-5 font-mono text-[11px] font-semibold tracking-widest text-secondary uppercase">
            Filings &amp; reporting
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {filingBoxes.map((box, i) => (
              <motion.div
                key={`${box.org}-${box.item}`}
                initial={{ opacity: 0, y: 14 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
                }
                transition={{
                  delay: 0.85 + i * 0.1,
                  duration: 0.45,
                  ease: easeOut,
                }}
                whileHover={{ y: -2 }}
                className="rounded-xl border border-outline-variant/30 bg-surface-container-low/50 px-4 py-5 text-center transition-colors hover:border-primary/25 hover:bg-white"
              >
                <p className="font-label-caps text-[10px] text-outline">
                  {box.org}
                </p>
                <p className="mt-2 font-body-md text-sm font-semibold text-primary">
                  {box.item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

   
    </motion.div>
  );
}
