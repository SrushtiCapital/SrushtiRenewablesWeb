"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { easeOut } from "@/lib/motion";
import { ABOUT_HERO_IMAGE } from "./about-data";

export function AboutHero() {
  return (
    <section className="border-b border-outline-variant/20 bg-white">
      <div className="mx-auto grid max-w-container-max grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-margin-mobile pt-28 pb-12 sm:pt-32 md:px-gutter md:pb-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-surface-tint" aria-hidden />
              <Badge variant="accent">About us</Badge>
            </div>

            <h1 className="mt-6 font-headline-lg text-headline-lg leading-[1.08] font-semibold tracking-tight text-primary sm:mt-8 sm:text-5xl md:text-[3.25rem]">
              A specialist firm,{" "}
              <span className="serif-italic text-surface-tint">by design.</span>
            </h1>

            <p className="mt-6 font-body-lg text-base leading-relaxed text-on-surface-variant sm:mt-8 sm:text-body-lg">
              Srushti Renewables is a cross-border capital advisory firm focused
              exclusively on bridging institutional capital from the UK and Europe
              into India&apos;s infrastructure, energy, and real estate platforms.
            </p>

            <Link
              href="#approach"
              className="mt-8 inline-flex items-center gap-3 font-body-sm text-body-sm text-surface-tint transition-colors hover:text-primary sm:mt-10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-tint/30 bg-surface-tint/5">
                <span className="material-symbols-outlined text-lg">
                  arrow_downward
                </span>
              </span>
              Learn more about our approach
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          className="relative min-h-[320px] lg:min-h-[520px]"
        >
          <Image
            src={ABOUT_HERO_IMAGE}
            alt="Modern architectural detail"
            fill
            priority
            className="object-cover grayscale"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
