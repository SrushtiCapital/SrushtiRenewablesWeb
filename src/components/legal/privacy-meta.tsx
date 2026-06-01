"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { easeOut } from "@/lib/motion";
import { PRIVACY_META, PRIVACY_NOTICE } from "./privacy-data";

export function PrivacyMeta() {
  return (
    <FadeIn className="bg-white">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-center px-margin-mobile py-8 md:px-gutter md:py-10">
        <div className="w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: easeOut }}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-outline-variant/25 bg-outline-variant/15 shadow-sm sm:grid-cols-3"
          >
            {PRIVACY_META.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 bg-white px-5 py-4 sm:px-6 sm:py-5"
              >
                <span className="font-label-caps text-[10px] tracking-widest text-surface-tint uppercase">
                  {item.label}
                </span>
                <span className="font-body-md text-sm font-semibold text-primary sm:text-base">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: easeOut }}
            className="mt-6 rounded-2xl border border-secondary/30 bg-secondary-container/30 px-5 py-5 shadow-sm sm:px-6 sm:py-6"
          >
            <p className="font-label-caps text-label-caps tracking-widest text-secondary uppercase">
              {PRIVACY_NOTICE.title}
            </p>
            <p className="mt-3.5 font-body-sm text-body-sm leading-relaxed text-on-surface-variant sm:text-base">
              {PRIVACY_NOTICE.body}
            </p>
          </motion.aside>
        </div>
      </div>
    </FadeIn>
  );
}
