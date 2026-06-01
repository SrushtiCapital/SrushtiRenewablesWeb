"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Globe,
  Leaf,
  Sparkles,
  TrendingUp,
  X,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { PRACTICE_CARDS } from "./data";
import type { PracticeCard } from "./types";
import { cn } from "@/lib/utils";

const AUTO_PLAY_MS = 3000;

const CARD_ICONS: Record<string, LucideIcon> = {
  fdi: Sparkles,
  ecb: TrendingUp,
  holdco: Calendar,
  modelling: BarChart3,
  greenbond: Leaf,
  institutional: Globe,
};

export function Practice() {
  const [selectedPractice, setSelectedPractice] = useState<PracticeCard | null>(
    null,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else if (window.innerWidth < 1280) setItemsToShow(3);
      else setItemsToShow(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, PRACTICE_CARDS.length - itemsToShow);
  const safeCurrentIndex = Math.min(currentIndex, maxIndex);
  const slideCount = maxIndex + 1;

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(((index % slideCount) + slideCount) % slideCount);
    },
    [slideCount],
  );

  const handlePrev = () => goTo(safeCurrentIndex - 1);
  const handleNext = useCallback(() => {
    goTo(safeCurrentIndex + 1);
  }, [goTo, safeCurrentIndex]);

  useEffect(() => {
    if (isPaused || slideCount <= 1) return;
    const timer = window.setInterval(handleNext, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [handleNext, isPaused, slideCount]);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  return (
    <section
      id="practice"
      className="border-y border-outline-variant/30 bg-surface-container-low py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-label-caps text-label-caps font-bold tracking-[0.2em] text-outline uppercase">
              Bespoke solutions
            </span>
            <h2 className="mt-2 font-headline-lg text-headline-lg font-semibold tracking-tight text-primary">
              Our{" "}
              <span className="font-headline-lg italic text-secondary">
                practice.
              </span>
            </h2>
          </div>
          <p className="border-l-2 border-outline-variant/50 py-1 pl-6 font-body-md text-body-md leading-relaxed text-on-surface-variant lg:col-span-5">
            We advise promoters, boards, and institutional stakeholders on the
            full capital-raising lifecycle for cross-border infrastructure,
            storage, wind, and utility transitions.
          </p>
        </div>

        <div
          className="relative mt-10 sm:mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className=" overflow-hidden rounded-3xl border border-outline-variant/30 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] ">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{
                  x: `-${safeCurrentIndex * (100 / itemsToShow)}%`,
                }}
                transition={{ type: "spring", stiffness: 290, damping: 32 }}
              >
                {PRACTICE_CARDS.map((card) => {
                  const Icon = CARD_ICONS[card.id] ?? Sparkles;
                  const isSelected = selectedPractice?.id === card.id;

                  return (
                    <div
                      key={card.id}
                      style={{ width: `${100 / itemsToShow}%` }}
                      className="shrink-0 border-r border-outline-variant/25 last:border-r-0"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedPractice(isSelected ? null : card)
                        }
                        className={cn(
                          "group flex h-full min-h-[280px] w-full flex-col bg-white p-6 text-left transition-colors duration-300 sm:min-h-[300px] sm:p-8",
                          "hover:bg-surface-container-low/60 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:outline-none",
                          isSelected && "bg-surface-container-low/80",
                        )}
                        aria-pressed={isSelected}
                        aria-label={`${card.title} — ${card.description}`}
                      >
                        <span className="font-mono text-sm text-outline">
                          {card.number}
                        </span>

                        <span className="mt-5 inline-flex size-9 items-center justify-center rounded border border-primary/25 bg-primary/5 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                          <Icon className="size-4" strokeWidth={1.75} />
                        </span>

                        <h3 className="mt-5 font-headline-sm text-xl leading-snug font-semibold text-primary sm:text-2xl">
                          {card.title}
                        </h3>

                        <p className="mt-3 flex-1 font-body-sm text-sm leading-relaxed text-on-surface-variant">
                          {card.description}
                        </p>

                        <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-secondary uppercase opacity-0 transition-opacity group-hover:opacity-100">
                          View detail
                          <ArrowRight className="size-3" />
                        </span>
                      </button>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          <div className=" mt-5 flex flex-col items-center justify-center gap-4 sm:mx-4 sm:flex-row md:mx-8 lg:mx-12">
            

            <div className="flex items-center gap-2">
              {Array.from({ length: slideCount }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    safeCurrentIndex === idx
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-outline-variant/60 hover:bg-outline",
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            </div>

            {/* <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="rounded-full border border-outline-variant/40 p-2 text-primary transition-colors hover:bg-white active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="rounded-full border border-outline-variant/40 p-2 text-primary transition-colors hover:bg-white active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="size-4" />
              </button>
          </div> */}
        </div>

        <AnimatePresence mode="wait">
          {selectedPractice && (
            <motion.div
              key={selectedPractice.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
              className="relative mx-2 mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-tertiary to-[#122218] p-6 text-[#FAF9F5] shadow-lg sm:mx-4 sm:p-8 md:mx-8 lg:mx-12"
            >
              <button
                type="button"
                onClick={() => setSelectedPractice(null)}
                className="absolute top-4 right-4 rounded-full p-1.5 text-stone-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close detail panel"
              >
                <X className="size-5" />
              </button>

              <div className="flex flex-wrap items-center gap-3 pr-10">
                <span className="rounded border border-emerald-700/60 bg-emerald-950/80 px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider text-emerald-300 uppercase">
                  Deep dive · {selectedPractice.number}
                </span>
                <h4 className="font-headline-sm text-xl font-semibold">
                  {selectedPractice.title}
                </h4>
              </div>

              <div className="mt-6 grid gap-6 text-sm md:grid-cols-3">
                <div>
                  <span className="font-mono text-[10px] tracking-wider text-emerald-400 uppercase">
                    Applicable sectors
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {selectedPractice.sectorFocus.map((sec) => (
                      <span
                        key={sec}
                        className="rounded bg-white/10 px-2 py-0.5 text-xs text-stone-200"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:border-l md:border-white/15 md:pl-6">
                  <span className="font-mono text-[10px] tracking-wider text-emerald-400 uppercase">
                    Critical challenge
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-stone-200">
                    {selectedPractice.keyChallenges}
                  </p>
                </div>
                <div className="md:border-l md:border-white/15 md:pl-6">
                  <span className="font-mono text-[10px] tracking-wider text-emerald-400 uppercase">
                    Cross-border advantage
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-stone-200">
                    {selectedPractice.crossBorderAngle}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
