"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { easeOut } from "@/lib/motion";
import { ABOUT_PRINCIPLES } from "./about-data";

export function AboutPrinciples() {
  return (
    <FadeIn id="approach" className="bg-white">
      <div className="mx-auto max-w-container-max px-margin-mobile py-14 md:px-gutter md:py-20 lg:py-24">
        <div className="space-y-4">
          {ABOUT_PRINCIPLES.map((principle, index) => (
            <motion.article
              key={principle.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: easeOut }}
              className="group rounded-2xl border border-outline-variant/25 bg-white p-5 transition-colors hover:border-surface-tint/30 hover:bg-surface-container-low/40 sm:p-6 md:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div className="flex shrink-0 items-start gap-5 sm:gap-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-tint/25 bg-surface-tint/5 text-surface-tint">
                    <span className="material-symbols-outlined text-xl">
                      {principle.icon}
                    </span>
                  </span>

                  <div className="min-w-0 flex-1 sm:max-w-none">
                    <p className="font-mono text-xs tracking-wider text-surface-tint">
                      {principle.number}
                    </p>
                    <h3 className="mt-2 font-headline-sm text-xl font-semibold text-primary sm:text-2xl">
                      {principle.title}
                    </h3>
                    <p className="mt-3 max-w-3xl font-body-md text-body-md leading-relaxed text-on-surface-variant">
                      {principle.description}
                    </p>
                  </div>
                </div>

                <Link
                  href="/services"
                  aria-label={`Explore ${principle.title}`}
                  className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-full border border-surface-tint/25 text-surface-tint transition-colors group-hover:border-surface-tint group-hover:bg-surface-tint/5 sm:mt-1"
                >
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
