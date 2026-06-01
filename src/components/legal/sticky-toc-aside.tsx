"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const HEADER_OFFSET = 96;

type TocItem = {
  id: string;
  tier: string;
  title: string;
};

type StickyTocAsideProps = {
  sectionId: string;
  items: TocItem[];
  activeId: string;
  onNavigate: (id: string) => void;
  variant?: "light" | "dark";
  footerLink?: { href: string; label: string };
};

const variantStyles = {
  light: {
    nav: "rounded-2xl border border-outline-variant/25 bg-white shadow-[0_8px_32px_rgba(6,78,59,0.08)] ring-1 ring-black/[0.02]",
    header: "border-b border-outline-variant/15 bg-surface-container-low/50",
    label: "font-label-caps text-label-caps tracking-widest text-surface-tint uppercase",
    sub: "font-body-sm text-body-sm text-on-surface-variant",
    progressTrack: "bg-outline-variant/20",
    progressBar: "bg-surface-tint",
    itemActive:
      "border-surface-tint bg-surface-tint/10 font-medium text-primary",
    itemIdle:
      "border-transparent text-on-surface-variant hover:border-surface-tint/30 hover:bg-surface-container-low hover:text-surface-tint",
    badgeActive: "bg-surface-tint text-white",
    badgeIdle:
      "bg-surface-container-low text-surface-tint/80 group-hover:bg-surface-tint/15",
    tier: "text-surface-tint/70",
    footer: "border-t border-outline-variant/20",
    footerBtn:
      "border-surface-tint/25 bg-surface-tint/5 text-surface-tint hover:border-surface-tint/40 hover:bg-surface-tint/10 hover:text-primary",
  },
  dark: {
    nav: "rounded-2xl border border-white/10 bg-[#111413] shadow-[0_8px_40px_rgba(0,0,0,0.45)]",
    header: "border-b border-white/[0.08] bg-[#0d0f0e]",
    label: "font-mono text-[10px] tracking-[0.14em] text-[#6ee4c8] uppercase",
    sub: "font-body-sm text-sm text-[#7a8a84]",
    progressTrack: "bg-white/10",
    progressBar: "bg-[#6ee4c8]",
    itemActive:
      "border-[#6ee4c8] bg-[#6ee4c8]/10 font-medium text-white",
    itemIdle:
      "border-transparent text-[#8a9a94] hover:border-[#6ee4c8]/30 hover:bg-white/[0.04] hover:text-[#6ee4c8]",
    badgeActive: "bg-[#6ee4c8] text-[#0a0c0b]",
    badgeIdle:
      "bg-white/[0.06] text-[#6ee4c8]/80 group-hover:bg-[#6ee4c8]/15",
    tier: "text-[#6ee4c8]/60",
    footer: "border-t border-white/[0.08]",
    footerBtn:
      "border-[#6ee4c8]/25 bg-[#6ee4c8]/5 text-[#6ee4c8] hover:border-[#6ee4c8]/40 hover:bg-[#6ee4c8]/10 hover:text-white",
  },
} as const;

export function StickyTocAside({
  sectionId,
  items,
  activeId,
  onNavigate,
  variant = "light",
  footerLink = { href: "/contact", label: "Raise a concern" },
}: StickyTocAsideProps) {
  const styles = variantStyles[variant];
  const slotRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [coords, setCoords] = useState({ left: 0, width: 288 });
  const [spacerHeight, setSpacerHeight] = useState(0);

  const activeIndex = items.findIndex((item) => item.id === activeId);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section || !slotRef.current) return;

    const update = () => {
      const sectionRect = section.getBoundingClientRect();
      const slotRect = slotRef.current!.getBoundingClientRect();

      const shouldPin =
        sectionRect.top <= HEADER_OFFSET &&
        sectionRect.bottom > HEADER_OFFSET + 160;

      setPinned(shouldPin);
      setCoords({ left: slotRect.left, width: slotRect.width });

      if (tocRef.current) {
        setSpacerHeight(tocRef.current.offsetHeight);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionId]);

  return (
    <div ref={slotRef} className="hidden w-72 shrink-0 lg:block">
      {pinned && <div style={{ height: spacerHeight }} aria-hidden />}

      <div
        ref={tocRef}
        className={cn("z-30 w-72", pinned ? "fixed" : "sticky top-24")}
        style={
          pinned
            ? {
                top: HEADER_OFFSET,
                left: coords.left,
                width: coords.width,
              }
            : undefined
        }
      >
        <nav aria-label="Table of contents">
          <div
            className={cn(
              "flex max-h-[calc(100vh-7rem)] flex-col overflow-hidden",
              styles.nav,
            )}
          >
            <div className={cn("shrink-0 px-5 py-4 sm:px-6", styles.header)}>
              <p className={styles.label}>Table of contents</p>
              <p className={cn("mt-1", styles.sub)}>{items.length} sections</p>
              <div
                className={cn(
                  "mt-3 h-1 overflow-hidden rounded-full",
                  styles.progressTrack,
                )}
                role="progressbar"
                aria-valuenow={activeIndex + 1}
                aria-valuemin={1}
                aria-valuemax={items.length}
                aria-label="Reading progress"
              >
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-300",
                    styles.progressBar,
                  )}
                  style={{
                    width: `${((activeIndex + 1) / items.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <ol className="min-h-0 flex-1 space-y-0.5 overflow-y-auto px-3 py-3 sm:px-4 sm:py-4">
              {items.map((item, index) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "location" : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(item.id);
                      }}
                      className={cn(
                        "group flex w-full items-start gap-3 rounded-lg border-l-2 py-2.5 pr-2 pl-3 text-left transition-colors",
                        isActive ? styles.itemActive : styles.itemIdle,
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-[10px] font-medium",
                          isActive ? styles.badgeActive : styles.badgeIdle,
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13px] leading-snug">
                          {item.title}
                        </span>
                        <span
                          className={cn(
                            "mt-0.5 block font-mono text-[10px] tracking-wide",
                            styles.tier,
                          )}
                        >
                          {item.tier}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>

            <div className={cn("shrink-0 p-4 sm:p-5", styles.footer)}>
              <Link
                href={footerLink.href}
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors",
                  styles.footerBtn,
                )}
              >
                {footerLink.label}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
