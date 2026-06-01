"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AdvisoryScopeCarousel } from "./advisory-scope-carousel";
import type { ServiceLine } from "./services-data";
import { ShowcaseShell, type ShowcaseAccent } from "@/components/sectors/showcase-shell";
import { cn } from "@/lib/utils";

const ACCENT: Record<
  ShowcaseAccent,
  {
    badge: string;
    italic: string;
    ring: string;
    tag: string;
  }
> = {
  teal: {
    badge: "border-surface-tint/35 bg-surface-tint/10 text-surface-tint",
    italic: "text-surface-tint",
    ring: "ring-surface-tint/15",
    tag: "border-surface-tint/35 text-surface-tint",
  },
  gold: {
    badge: "border-[#c9a227]/35 bg-[#c9a227]/10 text-[#8a7020]",
    italic: "text-[#8a7020]",
    ring: "ring-[#c9a227]/15",
    tag: "border-[#c9a227]/35 text-[#8a7020]",
  },
  green: {
    badge: "border-emerald-600/30 bg-emerald-50 text-emerald-800",
    italic: "text-emerald-700",
    ring: "ring-emerald-600/15",
    tag: "border-emerald-600/30 text-emerald-800",
  },
  violet: {
    badge: "border-violet-600/30 bg-violet-50 text-violet-800",
    italic: "text-violet-700",
    ring: "ring-violet-600/15",
    tag: "border-violet-600/30 text-violet-800",
  },
};

const SECTION_ACCENTS: ShowcaseAccent[] = ["teal", "gold", "violet", "teal", "gold", "violet"];

type ServiceSectionProps = {
  service: ServiceLine;
  index: number;
};

export function ServiceSection({ service, index }: ServiceSectionProps) {
  const accent = SECTION_ACCENTS[index] ?? "teal";
  const a = ACCENT[accent];
  const reverse = index % 2 === 1;

  return (
    <ShowcaseShell id={service.id} index={service.index} accent={accent}>
      <div
        className={cn(
          "grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16",
          reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
        )}
      >
        <motion.article
          className="min-w-0 lg:col-span-5"
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className={cn(
              "inline-flex rounded px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase",
              a.badge,
            )}
          >
            /{service.index} — {service.code}
          </span>

          <h2 className="mt-6 font-headline-lg text-3xl leading-[1.08] font-semibold tracking-tight text-primary sm:mt-8 sm:text-4xl lg:text-[2.75rem]">
            {service.title}{" "}
            <span className={cn("serif-italic", a.italic)}>{service.titleAccent}</span>
          </h2>

          <p className="mt-5 max-w-md font-body-md text-sm leading-relaxed text-on-surface-variant sm:text-base">
            {service.description}
          </p>

          <AdvisoryScopeCarousel items={service.items} accent={accent} />
        </motion.article>

        <motion.div
          className="min-w-0 lg:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className={cn(
              "relative aspect-5/6 overflow-hidden rounded-xl border border-outline-variant/25 bg-surface-container-low shadow-[0_12px_48px_rgba(6,78,59,0.07)] ring-1 sm:aspect-video sm:rounded-2xl lg:aspect-4/3 lg:shadow-[0_24px_64px_rgba(6,78,59,0.09)]",
              a.ring,
            )}
          >
            <Image
              src={service.image}
              alt={`${service.title} ${service.titleAccent}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority={index === 0}
            />

            <span
              className={cn(
                "absolute top-3 left-3 rounded-full border bg-white/92 px-2.5 py-1 font-mono text-[9px] tracking-wider uppercase backdrop-blur-sm sm:top-5 sm:left-5 sm:px-3 sm:text-[10px]",
                a.tag,
              )}
            >
              {service.code}
            </span>
          </div>

          <div className="mt-4 px-1">
            <p className="font-mono text-[9px] tracking-[0.16em] text-on-surface-variant uppercase sm:text-[10px]">
              Service line {service.index}
            </p>
            <p className="mt-1 font-headline-sm text-lg font-semibold text-primary sm:text-2xl">
              {service.title}
            </p>
          </div>
        </motion.div>
      </div>
    </ShowcaseShell>
  );
}
