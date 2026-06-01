"use client";

import { motion } from "framer-motion";
import { ECOSYSTEM_FLOW } from "./ecosystem-data";

export function EcosystemConnect() {
  return (
    <section className="relative overflow-hidden border-b border-outline-variant/20 bg-white py-16 sm:py-20 md:py-24">
      <span
        className="pointer-events-none absolute -top-6 right-0 font-headline-xl text-[7rem] leading-none font-bold text-primary/[0.035] select-none sm:text-[10rem]"
        aria-hidden
      >
        →
      </span>

      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-headline-lg text-3xl leading-[1.1] font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
              Connecting the{" "}
              <span className="serif-italic text-surface-tint">ecosystem.</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-sm leading-relaxed text-on-surface-variant sm:text-base lg:pt-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Capital structuring, carbon-credit revenue stacking, ESG-framework alignment,
            and insurance-led credit enhancement are not three different conversations
            — they are one. Our role is to keep them aligned across the same mandate.
          </motion.p>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <div
            className="pointer-events-none absolute top-12 right-0 left-0 hidden h-px bg-linear-to-r from-transparent via-surface-tint/30 to-transparent lg:block"
            aria-hidden
          />

          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {ECOSYSTEM_FLOW.map((step, i) => (
              <motion.li
                key={step.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                {i < ECOSYSTEM_FLOW.length - 1 ? (
                  <span
                    className="pointer-events-none absolute top-1/2 -right-3 z-10 hidden font-mono text-surface-tint/40 lg:block"
                    aria-hidden
                  >
                    →
                  </span>
                ) : null}

                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-full flex-col rounded-2xl border border-outline-variant/25 bg-surface-container-low/50 p-6 shadow-sm transition-shadow hover:border-surface-tint/30 hover:shadow-md sm:p-7"
                >
                  <span className="font-mono text-xs tracking-widest text-surface-tint">
                    {step.index}
                  </span>
                  <h3 className="mt-4 font-headline-sm text-xl font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-on-surface-variant">
                    {step.body}
                  </p>
                </motion.article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
