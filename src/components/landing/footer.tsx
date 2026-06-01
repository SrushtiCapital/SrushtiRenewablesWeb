"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";
import Image from "next/image";
import { CONTACT_OFFICE } from "../contact/contact-data";
  
const practiceLinks = [
  { label: "Services", href: "/services" },
  { label: "Sectors", href: "/sectors" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];
const capabilityLinks = [
  { label: "FDI Advisory", href: "/services#fdi" },
  { label: "ECB Structuring", href: "/services#ecb" },
  { label: "Offshore HoldCo", href: "/services#holdco" },
  { label: "Green Bonds", href: "/services#greenbond" },
];
const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Modern Slavery", href: "/modern-slavery" },
];

export function Footer() {
  const router = useRouter();

  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-lowest">
      <FadeIn as="div" y={24} className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile py-section-padding md:grid-cols-4 md:px-gutter">
        <motion.div
          className="md:col-span-1"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
         <Image src="/logo.png" alt="Srushti Renewables" width={100} height={100} />
          <p className="mb-6 font-body-sm text-body-sm text-on-surface-variant">
            {CONTACT_OFFICE.heading}
          </p>
          <ul className="mt-2 space-y-1">
          {CONTACT_OFFICE.lines.map((line) => (
            <li key={line} className="text-sm text-on-surface-variant">
              {line}
            </li>
          ))}
        </ul>
        </motion.div>

        {[
          { title: "PRACTICE", links: practiceLinks },
          { title: "CAPABILITIES", links: capabilityLinks },
        ].map((col, colIndex) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: colIndex * 0.1, duration: 0.5 }}
          >
            <h4 className="mb-6 font-label-caps text-label-caps text-primary">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <motion.div whileHover={{ x: 4 }}>
                    <Link
                      href={link.href}
                      className="font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h4 className="mb-6 font-label-caps text-label-caps text-primary">
            OFFICE
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            London, United Kingdom
            <br />
            Mumbai, India
          </p>
          <Button
            size="sm"
            className="mt-8 bg-primary text-white"
            onClick={() => router.push("/contact")}
          >
            Start a mandate →
          </Button>
        </motion.div>
      </FadeIn>

      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-4 border-t border-outline-variant/30 px-margin-mobile py-8 md:flex-row md:px-gutter">
        <div className="font-body-sm text-body-sm text-on-surface-variant">
          © 2024 SRUSHTI RENEWABLES LTD - UK
        </div>
        <div className="flex gap-8">
          {legalLinks.map((link) => (
            <motion.div key={link.label} whileHover={{ y: -2 }}>
              <Link
                href={link.href}
                className="font-label-caps text-label-caps text-on-surface-variant transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}
