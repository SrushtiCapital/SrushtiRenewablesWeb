"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { EcosystemPillar } from "./ecosystem-data";
import { EcosystemCounterparties } from "./ecosystem-counterparties";
import { ShowcaseShell } from "@/components/sectors/showcase-shell";
import { cn } from "@/lib/utils";

const ACCENT = {
  teal: {
    badge: "border-surface-tint/35 bg-surface-tint/10 text-surface-tint",
    italic: "text-surface-tint",
    counter: "text-surface-tint",
    ring: "ring-surface-tint/15",
    tag: "border-surface-tint/35 text-surface-tint",
    metric: "text-surface-tint",
    bar: "bg-surface-tint",
  },
  gold: {
    badge: "border-[#c9a227]/35 bg-[#c9a227]/10 text-[#8a7020]",
    italic: "text-[#8a7020]",
    counter: "text-[#8a7020]",
    ring: "ring-[#c9a227]/15",
    tag: "border-[#c9a227]/35 text-[#8a7020]",
    metric: "text-[#8a7020]",
    bar: "bg-[#c9a227]",
  },
  violet: {
    badge: "border-violet-600/30 bg-violet-50 text-violet-800",
    italic: "text-violet-700",
    counter: "text-violet-700",
    ring: "ring-violet-600/15",
    tag: "border-violet-600/30 text-violet-800",
    metric: "text-violet-700",
    bar: "bg-violet-600",
  },
} as const;

type EcosystemPillarShowcaseProps = {
  pillar: EcosystemPillar;
};

export function EcosystemPillarShowcase({ pillar }: EcosystemPillarShowcaseProps) {
  const featured = pillar.slides[0];
  const a = ACCENT[pillar.accent as keyof typeof ACCENT] ?? ACCENT.teal;

  return (
    <ShowcaseShell id={pillar.id} index={pillar.index} accent={pillar.accent}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
        <motion.article
          className="flex min-w-0 flex-col lg:col-span-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span
            className={cn(
              "inline-flex w-fit rounded px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase",
              a.badge,
            )}
          >
            {pillar.badge}
          </span>

          <h2 className="mt-6 font-headline-lg text-3xl leading-[1.1] font-semibold tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            {pillar.headline}{" "}
            <span className={cn("serif-italic", a.italic)}>{pillar.headlineAccent}</span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-on-surface-variant sm:text-base">
            {pillar.intro}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-2 border-t border-outline-variant/20 pt-8 sm:grid-cols-2 sm:gap-3">
            {pillar.slides.slice(0, 4).map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-outline-variant/20 bg-surface-container-low/50 p-3 sm:p-4"
              >
                <p className={cn("font-headline-sm text-lg sm:text-xl", a.metric)}>
                  {s.metric}
                </p>
                <p className="mt-1 font-mono text-[8px] tracking-wider text-on-surface-variant uppercase sm:text-[9px]">
                  {s.metricLabel}
                </p>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.div
          className="min-w-0 lg:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <div
            className={cn(
              "relative aspect-5/6 overflow-hidden rounded-xl border border-outline-variant/25 bg-surface-container-low shadow-[0_12px_48px_rgba(6,78,59,0.07)] ring-1 sm:aspect-video sm:rounded-2xl lg:aspect-4/3 lg:shadow-[0_24px_64px_rgba(6,78,59,0.09)]",
              a.ring,
            )}
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-white via-white/60 to-white/20" />
            <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/40 to-transparent" />

            <span
              className={cn(
                "absolute top-3 left-3 rounded-full border bg-white/92 px-2.5 py-1 font-mono text-[9px] tracking-wider uppercase backdrop-blur-sm sm:top-5 sm:left-5 sm:px-3 sm:text-[10px]",
                a.tag,
              )}
            >
              {featured.tag}
            </span>

            <div className="absolute top-3 right-3 rounded-lg border border-outline-variant/30 bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm sm:top-5 sm:right-5 sm:rounded-xl sm:px-5 sm:py-3">
              <p className="font-mono text-[8px] tracking-widest text-on-surface-variant uppercase sm:text-[9px]">
                {featured.metricLabel}
              </p>
              <p className={cn("font-headline-sm text-xl sm:text-3xl", a.metric)}>
                {featured.metric}
              </p>
            </div>

            <div className="absolute right-0 bottom-0 left-0 p-4 sm:p-7">
              <h3 className="font-headline-md text-lg font-semibold text-primary sm:text-2xl">
                {featured.title}
              </h3>
              <p className="mt-2 max-w-md text-xs leading-relaxed text-on-surface-variant sm:text-sm">
                {featured.subtitle}
              </p>
            </div>

            <div className={cn("absolute bottom-0 left-0 h-[2px] w-full", a.bar)} />
          </div>
        </motion.div>
      </div>

      <div className="mt-12 max-w-3xl border-t border-outline-variant/20 pt-10 sm:mt-14 sm:pt-12">
        <h3 className="font-headline-sm text-lg font-semibold text-primary sm:text-xl">
          Why it matters to sponsors
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-on-surface-variant sm:text-base">
          {pillar.whyItMatters}
        </p>
      </div>

      <EcosystemCounterparties accent={pillar.accent} groups={pillar.counterparties} />

      {pillar.footnote ? (
        <p className="mt-6 font-body-md text-xs leading-relaxed text-on-surface-variant/80 italic">
          {pillar.footnote}
        </p>
      ) : null}
    </ShowcaseShell>
  );
}

export function EcosystemChapterNav({
  pillars,
  activeId,
  onSelect,
}: {
  pillars: EcosystemPillar[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav aria-label="Ecosystem chapters" className="sticky top-24 z-20 hidden lg:block">
      <p className="font-mono text-[10px] tracking-[0.2em] text-outline uppercase">
        Chapters
      </p>
      <ul className="mt-4 space-y-1">
        {pillars.map((pillar) => {
          const active = pillar.id === activeId;
          const a = ACCENT[pillar.accent as keyof typeof ACCENT] ?? ACCENT.teal;
          return (
            <li key={pillar.id}>
              <button
                type="button"
                onClick={() => onSelect(pillar.id)}
                className={cn(
                  "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all",
                  active
                    ? "bg-surface-container-low shadow-sm"
                    : "hover:bg-surface-container-low/60",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs transition-colors",
                    active ? a.counter : "text-outline",
                  )}
                >
                  {pillar.index}
                </span>
                <span
                  className={cn(
                    "text-sm transition-colors",
                    active
                      ? "font-medium text-primary"
                      : "text-on-surface-variant group-hover:text-on-surface",
                  )}
                >
                  {pillar.badge.replace(/^\/\d+\s—\s/i, "")}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function EcosystemDisclaimer() {
  return (
    <p className="mx-auto max-w-container-max px-margin-mobile pb-10 text-center font-body-sm text-xs italic text-outline md:px-gutter">
      Market figures are illustrative and sourced from publicly available research.
      Counterparty lists are indicative of ecosystem categories — not an exhaustive
      or confidential mandate view.
    </p>
  );
}
