"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_IMAGE } from "@/components/landing/hero";
import { Badge } from "@/components/ui/badge";
import { easeOut } from "@/lib/motion";
import type { ReactNode } from "react";

export type PageHeroProps = {
  badge: string;
  title: ReactNode;
  description: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({
  badge,
  title,
  description,
  image = HERO_IMAGE,
  imageAlt = "Infrastructure and energy at sunrise",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[min(72vh,640px)] overflow-hidden border-b border-outline-variant/30">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: easeOut }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[min(72vh,640px)] max-w-container-max flex-col justify-center px-margin-mobile pt-28 pb-14 sm:pt-32 sm:pb-16 md:px-gutter md:pt-40 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden />
            <Badge variant="accent">{badge}</Badge>
          </div>

          <h1 className="mt-6 font-headline-lg text-headline-lg leading-[1.08] font-semibold tracking-tight text-primary sm:mt-8 sm:text-5xl md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl font-body-lg text-base leading-relaxed text-on-surface-variant sm:mt-8 sm:text-body-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
