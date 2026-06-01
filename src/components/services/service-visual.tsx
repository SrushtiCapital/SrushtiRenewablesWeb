"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Left-side arc tracing the rounded image — dot travels this path */
const IMAGE_ARC_PATH = "M 14 16 A 36 36 0 0 0 14 64";

const ARC_DURATION = "3.2s";

type ServiceVisualProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ServiceVisual({ src, alt, className }: ServiceVisualProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative mt-8 w-full max-w-[300px]", className)}
    >
      <div
        className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-secondary/30 via-primary-fixed/20 to-transparent opacity-70 blur-md"
        aria-hidden
      />

      <div className="relative aspect-[5/4] overflow-visible rounded-[1.75rem]">
        {/* Arc + traveling dot (in sync with marching dashes) */}
        <svg
          className="pointer-events-none absolute -top-1 -left-2 z-20 h-[78px] w-[32px] overflow-visible"
          viewBox="0 0 32 80"
          fill="none"
          aria-hidden
        >
          <path
            d={IMAGE_ARC_PATH}
            stroke="#c9a227"
            strokeWidth="1.75"
            strokeDasharray="5 7"
            strokeLinecap="round"
            className={prefersReducedMotion ? undefined : "service-visual-arc-dash"}
            style={
              prefersReducedMotion
                ? undefined
                : { animationDuration: ARC_DURATION }
            }
          />
          {!prefersReducedMotion && (
            <circle r="3.5" fill="#c9a227" className="drop-shadow-sm">
              <animateMotion
                dur={ARC_DURATION}
                repeatCount="indefinite"
                path={IMAGE_ARC_PATH}
                calcMode="linear"
              />
            </circle>
          )}
          {prefersReducedMotion && (
            <circle cx="14" cy="16" r="3.5" fill="#c9a227" />
          )}
        </svg>

        <div className="relative size-full overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_12px_40px_rgba(6,78,59,0.12)] ring-1 ring-outline-variant/20">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 280px, 300px"
            className="object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-container/15 via-transparent to-transparent" />
        </div>

        {/* Corner node — pulses in sync with arc loop */}
        <span
          className={cn(
            "absolute -right-2 -bottom-2 z-10 flex size-10 items-center justify-center rounded-full border-2 border-white bg-primary-container shadow-md",
            !prefersReducedMotion && "service-visual-node-pulse",
          )}
          style={
            prefersReducedMotion
              ? undefined
              : { animationDuration: ARC_DURATION }
          }
          aria-hidden
        >
          <span className="size-2 rounded-full bg-secondary" />
        </span>
      </div>
    </motion.div>
  );
}
