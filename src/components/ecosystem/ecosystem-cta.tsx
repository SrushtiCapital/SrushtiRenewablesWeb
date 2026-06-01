"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { easeOut } from "@/lib/motion";

export function EcosystemCta() {
  return (
    <section className="relative overflow-hidden border-t border-outline-variant/20 bg-white">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-70"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(43,105,84,0.08) 0%, transparent 55%)",
            "radial-gradient(circle at 80% 50%, rgba(201,162,39,0.08) 0%, transparent 55%)",
            "radial-gradient(circle at 20% 50%, rgba(43,105,84,0.08) 0%, transparent 55%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-container-max px-margin-mobile py-20 text-center md:px-gutter md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-3">
            <span className="h-px w-8 bg-outline-variant/50" aria-hidden />
            <span className="font-label-caps text-[10px] tracking-[0.2em] text-outline uppercase">
              Engage
            </span>
            <span className="h-px w-8 bg-outline-variant/50" aria-hidden />
          </div>

          <h2 className="mt-8 font-headline-lg text-3xl leading-[1.1] font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
            The ecosystem is wide.
            <br />
            <span className="serif-italic bg-linear-to-r from-surface-tint via-[#6f8a72] to-[#8a7020] bg-clip-text text-transparent">
              The right paths are narrow.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:mt-8 sm:text-base">
            If you are a sponsor exploring how carbon revenue, ESG positioning,
            and insurance-led credit enhancement should be structured into your next
            capital raise — or an institution looking for risk-tested deal flow
            already aligned with these frameworks — let&apos;s talk.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">Start a conversation →</Button>
            <Link href="/services">
              <Button variant="outline" size="lg">
                Practice overview
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
