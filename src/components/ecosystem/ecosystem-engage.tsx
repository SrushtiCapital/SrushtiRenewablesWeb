"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function EcosystemEngage() {
  return (
    <section className="relative overflow-hidden border-b border-outline-variant/20 bg-white py-20 sm:py-28">
      <motion.div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        animate={{
          background: [
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(6,78,59,0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201,162,39,0.08) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(6,78,59,0.06) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-margin-mobile text-center md:px-gutter">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-surface-tint" aria-hidden />
            <span className="font-label-caps text-label-caps tracking-[0.2em] text-surface-tint uppercase">
              Engage
            </span>
            <span className="h-px w-8 bg-surface-tint" aria-hidden />
          </div>

          <h2 className="mt-8 font-headline-lg text-3xl leading-[1.12] font-semibold text-primary sm:text-4xl md:text-5xl">
            The ecosystem is wide.{" "}
            <span className="bg-linear-to-r from-surface-tint via-primary to-[#8a7020] bg-clip-text serif-italic text-transparent">
              The right paths are narrow.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:mt-8 sm:text-base">
            If you are a sponsor exploring how carbon revenue, ESG positioning, and
            insurance-led credit enhancement should be structured into your next capital
            raise — or an institution looking for risk-tested deal flow already aligned
            with these frameworks — let&apos;s talk.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/contact">
              <Button size="lg">Start a conversation →</Button>
            </Link>
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
