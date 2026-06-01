"use client";

import { motion } from "framer-motion";
import { ECOSYSTEM_FLOW } from "./ecosystem-data";
import { cn } from "@/lib/utils";

export function EcosystemConnection() {
  return (
    <section className="relative overflow-hidden border-b border-outline-variant/20 bg-surface-container-low/40">
      <div className="pointer-events-none absolute inset-0 bg-radial-depth opacity-60" />

      <div className="relative mx-auto max-w-container-max px-margin-mobile py-16 md:px-gutter md:py-24 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <h2 className="font-headline-lg text-3xl leading-[1.08] font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Connecting the{" "}
              <span className="serif-italic text-surface-tint">ecosystem.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-body-md text-sm leading-relaxed text-on-surface-variant sm:text-base lg:col-span-7 lg:pt-2"
          >
            Capital structuring, carbon-credit revenue stacking, ESG-framework
            alignment, and insurance-led credit enhancement are not three different
            conversations — they are one. Our role is to keep them aligned across
            the same mandate.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {ECOSYSTEM_FLOW.map((step, i) => (
            <StepCard key={step.index} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
}: {
  step: (typeof ECOSYSTEM_FLOW)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      {index < ECOSYSTEM_FLOW.length - 1 && (
        <span
          className="pointer-events-none absolute top-8 -right-2.5 hidden text-outline/40 lg:inline"
          aria-hidden
        >
          →
        </span>
      )}

      <div
        className={cn(
          "relative h-full rounded-2xl border border-outline-variant/20 bg-white p-6 shadow-[0_4px_24px_rgba(6,78,59,0.04)]",
          "transition-all duration-300 hover:-translate-y-0.5 hover:border-surface-tint/30 hover:shadow-[0_12px_40px_rgba(6,78,59,0.08)]",
        )}
      >
        <span className="font-mono text-xs text-surface-tint">{step.index}</span>
        <h3 className="mt-3 font-headline-sm text-xl font-semibold text-primary">
          {step.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
          {step.body}
        </p>
        <span
          className="mt-5 block h-[2px] w-8 rounded-full bg-surface-tint/50 opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden
        />
      </div>
    </motion.article>
  );
}
