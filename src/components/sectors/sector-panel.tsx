"use client";

import { motion } from "framer-motion";
import type { Sector } from "./sectors-data";
import { SectorStatBox, SectorTag } from "./sector-stat";
import { cn } from "@/lib/utils";

type SectorPanelProps = {
  sector: Sector;
  index: number;
};

export function SectorPanel({ sector, index }: SectorPanelProps) {
  return (
    <motion.section
      id={sector.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <article
        className={cn(
          "overflow-hidden rounded-2xl border border-outline-variant/25 bg-white shadow-[0_8px_40px_rgba(6,78,59,0.06)]",
          "ring-1 ring-black/[0.02]",
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="border-b border-outline-variant/15 p-8 md:p-10 lg:col-span-7 lg:border-r lg:border-b-0">
            <SectorTag
              index={sector.index}
              code={sector.code}
              variant={sector.tagVariant}
            />

            <h2 className="mt-6 font-headline-md text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              {sector.title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-on-surface-variant">
              {sector.description}
            </p>

            <ul className="mt-8 space-y-4">
              {sector.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-4">
                  <span
                    className="mt-2.5 h-px w-6 shrink-0 bg-surface-tint"
                    aria-hidden
                  />
                  <span className="font-body-md text-[15px] leading-relaxed text-on-surface">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center gap-3 bg-surface-container-low/40 p-6 md:p-8 lg:col-span-5">
            {sector.stats.map((stat) => (
              <SectorStatBox key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </article>
    </motion.section>
  );
}
