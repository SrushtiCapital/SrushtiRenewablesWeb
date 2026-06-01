"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function SectorsAdjacent() {
  return (
    <section className="relative overflow-hidden border-t border-outline-variant/25 bg-surface-container-low px-margin-mobile py-20 md:px-gutter md:py-28">
      <div className="pointer-events-none absolute top-0 left-1/4 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-primary-fixed/15 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-[280px] w-[280px] translate-x-1/2 rounded-full bg-secondary-fixed/25 blur-[90px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-surface-tint" aria-hidden />
          <span className="font-label-caps text-label-caps tracking-[0.2em] text-surface-tint uppercase">
            Adjacent sectors
          </span>
          <span className="h-px w-8 bg-surface-tint" aria-hidden />
        </div>

        <h2 className="mt-8 font-headline-lg text-3xl leading-tight font-semibold text-primary sm:text-4xl md:text-5xl">
          Sector-adjacent?{" "}
          <span className="bg-gradient-to-r from-surface-tint via-primary-fixed-dim to-secondary bg-clip-text font-headline-lg italic text-transparent">
            Let&apos;s talk anyway.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl font-body-md text-base leading-relaxed text-on-surface-variant">
          Data centres, EV charging infrastructure, water and waste, and
          selected industrial decarbonisation transactions — if the structure
          looks like ours, we&apos;ll engage.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-on-primary transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Start a conversation
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-outline-variant/50 bg-white px-8 py-3.5 text-sm font-bold text-primary transition-colors hover:border-primary/30 hover:bg-surface-container-low"
          >
            How we work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
