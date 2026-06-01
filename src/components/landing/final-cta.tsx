"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { easeOut } from "@/lib/motion";

export function FinalCta() {
  return (
    <FadeIn className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-container to-primary px-margin-mobile py-section-padding text-center md:px-gutter">
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
          ENGAGE
        </span>
        <h2 className="mb-8 font-headline-lg text-headline-lg text-white">
          Bring us in when capital, structure, and execution must{" "}
          <span className="serif-italic text-secondary-fixed">line up.</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl font-body-lg text-body-lg text-on-primary-container">
          We work mandate-by-mandate with promoters, boards, and institutional
          counterparties on cross-border capital-raising — from earliest
          structuring view through to drawdown.
        </p>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <Button variant="inverse" size="lg" onClick={() => window.location.href = "/contact"}>
            Start a conversation
          </Button>
          <Button variant="inverseOutline" className=" text-white" size="lg" onClick={() => window.location.href = "/services"}>
            Practice overview
          </Button>
        </div>
      </motion.div>
    </FadeIn>
  );
}
