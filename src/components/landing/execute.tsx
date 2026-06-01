"use client";

import { motion } from "framer-motion";
import { ExecutePanel } from "@/components/landing/execute-panel";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { slideFromLeft, slideFromRight } from "@/lib/motion";

const deliverables = [
  {
    num: "01",
    title: "Term sheets & docs",
    text: "Sample term sheets adapted to Indian law and SIAC arbitration.",
  },
  {
    num: "02",
    title: "RBI & AD bank workflow",
    text: "FC-GPR, Form ECB, Form FC-TRS coordination with authorised dealer banks.",
  },
  {
    num: "03",
    title: "Green bond reporting",
    text: "Annual impact reporting for ICMA GBP and CBI-certified issuances.",
  },
];

export function Execute() {
  return (
    <FadeIn
      id="execute"
      className="relative overflow-hidden bg-surface-container-low px-margin-mobile py-section-padding md:px-gutter"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] -translate-x-1/3 translate-y-1/3 rounded-full bg-primary-fixed/12 blur-[90px]" />

      <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideFromLeft}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden />
            <Badge variant="accent">03 / EXECUTE</Badge>
          </div>

          <h2 className="mb-6 max-w-xl font-headline-lg text-headline-lg leading-tight text-primary">
            Documentation,{" "}
            <span className="serif-italic gold-highlight">
              drawdown, and reporting.
            </span>
          </h2>

          <p className="mb-10 max-w-lg font-body-lg text-body-lg text-on-surface-variant">
            The Execute phase is where structure meets documentation — term
            sheets, RBI filings, drawdown conditions precedent, and ongoing
            reporting through the life of the facility.
          </p>

          <div className="space-y-5">
            {deliverables.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + i * 0.08, duration: 0.45 }}
                className="flex gap-5 border-b border-outline-variant/25 pb-5 last:border-0 last:pb-0"
              >
                <span className="font-label-caps text-label-caps text-outline">
                  {item.num}
                </span>
                <div>
                  <h3 className="mb-1 font-body-md font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:sticky lg:top-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideFromRight}
        >
          <ExecutePanel />
        </motion.div>
      </div>
    </FadeIn>
  );
}
