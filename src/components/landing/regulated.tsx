"use client";

import { motion } from "framer-motion";
import {
  RegulatoryFrameworkPanel,
  type RegulatoryFramework,
} from "@/components/landing/regulatory-framework-panel";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { easeOut } from "@/lib/motion";

const frameworks: RegulatoryFramework[] = [
  {
    region: "United Kingdom",
    jurisdiction: "UK",
    icon: "account_balance",
    title: "UK regulatory framework",
    accent: "uk",
    items: [
      { name: "Financial Conduct Authority", code: "FCA" },
      { name: "UK Companies Act", code: "2006" },
      { name: "Sustainable Finance Disclosure", code: "SFDR" },
    ],
    footnote:
      "Appointed Representative pathway in progress. Regulated activities conducted via appropriately authorised firms where required.",
  },
  {
    region: "India",
    jurisdiction: "IN",
    icon: "public",
    title: "India regulatory framework",
    accent: "india",
    items: [
      { name: "RBI — ECB Master Directions", code: "RBI" },
      { name: "DPIIT / FEMA Regulations", code: "FEMA" },
      { name: "SEBI requirements", code: "SEBI" },
      { name: "Income Tax & DTAAs", code: "ITA" },
    ],
    footnote:
      "Structuring aligned to live caps, pricing, and reporting norms — coordinated with external counsel where needed.",
  },
];

const trustPills = ["FCA pathway", "RBI / FEMA", "Cross-border ready"];

export function Regulated() {
  return (
    <FadeIn
      id="regulated"
      className="relative overflow-hidden px-margin-mobile py-section-padding md:px-gutter"
    >
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-primary-fixed/25 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-secondary-fixed/30 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-container-max">
        <div className="mb-12 max-w-3xl">
         

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.55, ease: easeOut }}
            className="mb-6 font-headline-lg text-headline-lg leading-[1.15] text-primary"
          >
            Regulated,{" "}
            <span className="serif-italic bg-gradient-to-r from-primary-container via-surface-tint to-secondary bg-clip-text text-transparent">
              both sides.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14, duration: 0.5, ease: easeOut }}
            className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant"
          >
            UK and India frameworks, one advisory thread — every structure
            reconciled to live caps, pricing, and reporting before you go to
            market.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {frameworks.map((framework, index) => (
            <RegulatoryFrameworkPanel
              key={framework.jurisdiction}
              framework={framework}
              index={index}
            />
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
