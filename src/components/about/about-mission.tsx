"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { easeOut } from "@/lib/motion";

export function AboutMission() {
  return (
    <FadeIn className="border-b border-outline-variant/20 bg-white">
      <div className="mx-auto max-w-container-max px-margin-mobile py-14 md:px-gutter md:py-20 lg:py-24">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-surface-tint" aria-hidden />
          <Badge variant="accent">Our mission</Badge>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="font-headline-lg text-headline-lg leading-[1.12] font-semibold text-primary lg:col-span-7 lg:text-[2.75rem]"
          >
            To enable{" "}
            <span className="serif-italic text-surface-tint">5 GW</span> of
            clean energy infrastructure{" "}
            <span className="serif-italic text-surface-tint">by 2030</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant lg:col-span-5 lg:pt-2"
          >
            We bridge the gap between capital-rich UK and European institutions
            and India&apos;s most ambitious infrastructure sponsors — structuring
            mandates that are fundable, compliant, and built for scale.
          </motion.p>
        </div>
      </div>
    </FadeIn>
  );
}
