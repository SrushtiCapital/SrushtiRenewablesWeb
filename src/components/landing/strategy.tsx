"use client";

import { motion } from "framer-motion";
import { CapitalStackDiagram } from "@/components/landing/capital-stack-diagram";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { slideFromLeft, slideFromRight } from "@/lib/motion";
import { cn } from "@/lib/utils";

const bullets = [
  {
    text: "Treaty and substance modelling across UK, DIFC, GIFT IFSC, Mauritius, Singapore",
    template: "dot" as const,
    icon: "public",
  },
  {
    text: "FDI vs ECB vs blended scenario testing against sponsor IRR thresholds",
    template: "border" as const,
    icon: "swap_horiz",
  },
  {
    text: "Hedged all-in cost-of-capital reconciliation, post-swap and post-tax",
    template: "card" as const,
    icon: "account_balance",
  },
];

function StructureBullet({
  text,
  template,
  icon,
  index,
}: (typeof bullets)[number] & { index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.12 + index * 0.1, duration: 0.45 }}
      className={cn(
        template === "dot" && "flex items-start gap-4",
        template === "border" &&
          "flex items-start gap-4 border-l-4 border-primary bg-surface-container-low py-4 pl-5 pr-4 rounded-r-xl",
        template === "card" &&
          "glass-card flex items-start gap-4 rounded-xl border border-outline-variant/30 p-5",
      )}
    >
      {template === "dot" && (
        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
      )}
      {template === "border" && (
        <span className="material-symbols-outlined mt-0.5 text-xl text-primary">
          {icon}
        </span>
      )}
      {template === "card" && (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <span className="material-symbols-outlined text-primary">{icon}</span>
        </span>
      )}
      <span
        className={cn(
          "font-body-md leading-relaxed text-on-surface-variant",
          template !== "dot" && "flex-1",
          template === "dot" && "text-on-surface",
        )}
      >
        {text}
      </span>
    </motion.li>
  );
}

export function Strategy() {
  return (
    <FadeIn
      id="structure"
      className="relative overflow-hidden bg-white px-margin-mobile py-section-padding md:px-gutter"
    >
      <div className="pointer-events-none absolute top-1/2 right-0 h-[480px] w-[480px] -translate-y-1/2 translate-x-1/3 rounded-full bg-primary-fixed/8 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] -translate-x-1/4 translate-y-1/4 rounded-full bg-secondary-fixed/15 blur-[80px]" />

      <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideFromLeft}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <Badge variant="accent">01 / STRUCTURE</Badge>
          </div>

          <h2 className="mb-6 max-w-xl font-headline-md text-headline-md leading-tight text-primary">
            From sponsor balance sheet to{" "}
            <span className="serif-italic gold-highlight">
              institutional-ready
            </span>{" "}
            stack.
          </h2>

          <p className="mb-10 max-w-lg font-body-md text-body-md text-on-surface-variant">
            Every mandate starts with a structuring view: holdco geography,
            debt-equity blend, currency exposure, treaty position, and exit
            pathway. We build the structure that the lender will fund — not the
            other way around.
          </p>

          <ul className="space-y-4">
            {bullets.map((item, i) => (
              <StructureBullet key={item.text} {...item} index={i} />
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideFromRight}
        >
          <CapitalStackDiagram />
        </motion.div>
      </div>
    </FadeIn>
  );
}
