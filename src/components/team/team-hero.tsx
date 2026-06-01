"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { easeOut } from "@/lib/motion";

const STATS = [
  { value: "12", label: "Named practitioners" },
  { value: "UK · IN", label: "Corridor coverage" },
  { value: "3", label: "Practice tiers" },
] as const;

export function TeamHero() {
  return (
    <section className="relative overflow-hidden border-b border-outline-variant/20 bg-white">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-surface-tint/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-container-max px-margin-mobile pt-28 pb-12 sm:pt-32 md:px-gutter md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden />
            <Badge variant="accent">Team</Badge>
          </div>

          <h1 className="mt-6 font-headline-lg text-headline-lg leading-[1.06] font-semibold tracking-tight text-primary sm:mt-8 sm:text-5xl md:text-[3.5rem]">
            The people{" "}
            <span className="serif-italic text-surface-tint">doing the work.</span>
          </h1>

          <p className="mt-6 max-w-2xl font-body-lg text-base leading-relaxed text-on-surface-variant sm:mt-8 sm:text-body-lg">
            A senior, narrowly-specialised team across the UK and India — combining
            decades of infrastructure finance, legal & compliance, technology, and
            operations experience. We staff lean and deep; every name below is
            hands-on.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-outline-variant/25 bg-outline-variant/20 sm:grid-cols-3 md:mt-14"
        >
          {STATS.map((stat) => (
            <li
              key={stat.label}
              className="flex flex-col gap-1 bg-white px-6 py-5 sm:px-8 sm:py-6"
            >
              <span className="font-headline-sm text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                {stat.value}
              </span>
              <span className="font-label-caps text-label-caps tracking-widest text-surface-tint uppercase">
                {stat.label}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
