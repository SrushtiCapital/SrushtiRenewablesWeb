"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconConnectionProps = {
  icon: LucideIcon;
  className?: string;
};

/** Green icon disc with gold arc + terminal dot — corridor “connection” motif */
export function IconConnection({ icon: Icon, className }: IconConnectionProps) {
  return (
    <div
      className={cn(
        "relative flex h-[76px] w-[68px] shrink-0 items-center justify-center",
        className,
      )}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 68 76"
        fill="none"
        aria-hidden
      >
        <path
          d="M 20 12 A 28 28 0 0 0 20 60"
          stroke="#c9a227"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="20" cy="12" r="3.25" fill="#c9a227" />
        <circle cx="20" cy="60" r="1.75" fill="#c9a227" fillOpacity="0.45" />
      </svg>

      <span className="relative z-10 flex size-[3.25rem] items-center justify-center rounded-full bg-primary-container shadow-[0_4px_14px_rgba(6,78,59,0.28)] ring-2 ring-white transition-transform duration-300 group-hover:scale-[1.03]">
        <Icon className="size-[1.35rem] text-white" strokeWidth={1.65} />
      </span>

      <span className="absolute bottom-0 left-1/2 h-[2px] w-9 -translate-x-1/2 rounded-full bg-secondary/90" />
    </div>
  );
}
