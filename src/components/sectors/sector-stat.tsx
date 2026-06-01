"use client";

import { cn } from "@/lib/utils";
import type { SectorStat } from "./sectors-data";

export function SectorStatBox({ label, value, highlight }: SectorStat) {
  return (
    <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low/80 px-5 py-4 transition-colors hover:border-outline-variant/40 hover:bg-white">
      <p className="font-label-caps text-[10px] tracking-[0.14em] text-outline uppercase">
        {label}
      </p>
      <p className="mt-2 font-headline-sm text-lg leading-snug text-primary">
        {highlight ? (
          <>
            <span className="font-headline-sm italic text-surface-tint">
              {highlight}{" "}
            </span>
            <span>{value}</span>
          </>
        ) : (
          value
        )}
      </p>
    </div>
  );
}

const tagStyles = {
  teal: "border-surface-tint/25 bg-primary-fixed/15 text-primary-container",
  gold: "border-secondary/30 bg-secondary-fixed/35 text-on-secondary-container",
  violet: "border-[#7c5cbf]/25 bg-[#7c5cbf]/10 text-[#5a4589]",
  green: "border-primary-container/25 bg-primary-fixed/20 text-primary-container",
} as const;

export function SectorTag({
  index,
  code,
  variant,
}: {
  index: string;
  code: string;
  variant: keyof typeof tagStyles;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-md border px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase",
        tagStyles[variant],
      )}
    >
      /{index} — {code}
    </span>
  );
}
