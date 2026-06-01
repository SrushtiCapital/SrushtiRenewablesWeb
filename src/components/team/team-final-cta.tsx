"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { easeOut } from "@/lib/motion";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M3 8h10m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TeamFinalCta() {
  return (
    <FadeIn className="relative overflow-hidden border-t border-outline-variant/20 bg-gradient-to-br from-primary via-primary-container to-primary px-margin-mobile py-section-padding text-center md:px-gutter">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(176,240,214,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 50%, rgba(176,240,214,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 50%, rgba(176,240,214,0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <span className="mb-6 block font-label-caps text-label-caps tracking-widest text-on-primary-container uppercase">
          Engage
        </span>
        <h2 className="mb-8 font-headline-lg text-3xl leading-[1.08] text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          Senior on both sides of the{" "}
          <span className="serif-italic text-secondary-fixed">corridor.</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl font-body-lg text-base leading-relaxed text-on-primary-container sm:text-body-lg">
          Every mandate is staffed by named people — not faceless analyst pools.
          Reach out to start a conversation or to be introduced to a specific team
          member.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            variant="inverse"
            size="lg"
            className="gap-2"
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            Get in touch
            <ArrowIcon />
          </Button>
          <Button
            variant="inverseOutline"
            className="text-white"
            size="lg"
            onClick={() => {
              window.location.href = "/about";
            }}
          >
            About the practice
          </Button>
        </div>
      </motion.div>
    </FadeIn>
  );
}
