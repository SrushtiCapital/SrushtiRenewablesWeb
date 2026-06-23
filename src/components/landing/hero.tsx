"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { easeOut } from "@/lib/motion";

export const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAESMW0fVzhbdIrjQNdbIYD6sr4CGA2WujmSwECZADZh0y3e1-9SRB-IRTY7vpmHHP6z7gqa8NeEOTcg08KRuvNT9TqScUhQAdDCNqrSra9ERnsiTA-wmE1oBMm4ynVZgEoqSRVoh7rebGH2zT10-3dB-H_waX2Kh-AY2QYgVLZ9HVTh8JgTgrVIjMIIAOrpWVWCFACN5USBLueydVymM77e0xPNn6uP55W1Mb9HjJvFviDbTMPHwFmSygwfRL6x4MGTLGtpgKLY4I";

const stats = [
  { value: "5GW", label: "CLEAN ENERGY TARGET BY 2030" },
  { value: "$3.2B", label: "CAPITAL UNDER ADVISORY" },
  { value: "14+", label: "INSTITUTIONAL COUNTERPARTIES" },
  {
    value: (
      <>
        UK <span className="text-secondary">↔</span> IN
      </>
    ),
    label: "CROSS-BORDER FOCUS",
  },
];

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-svh overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: easeOut }}
      >
        <Image
          src={HERO_IMAGE}
          alt="Renewable energy infrastructure at sunrise"
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-container-max flex-col justify-center px-margin-mobile pt-24 pb-44 md:px-gutter md:pt-28 md:pb-48">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: easeOut }}
            className="mb-8"
          >
            <Badge dot>
              OPERATING ACROSS THE UK — INDIA - AFRICA CORRIDOR
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: easeOut }}
            className="mb-8 font-headline-xl text-headline-xl leading-tight text-primary"
          >
            Institutional capital, <br />
            built for the{" "}
            <span className="serif-italic gold-highlight">
              India/Africa infrastructure
            </span>{" "}
            decade.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: easeOut }}
            className="mb-12 max-w-2xl font-body-lg text-body-lg text-on-surface-variant"
          >
            Srushti Renewables is a{" "}
            <span className="font-bold">cross-border capital advisory</span>{" "}
            bridging UK and European development finance institutions, ECAs, and
            institutional lenders with India&apos;s largest infrastructure,
            energy, and real estate platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6, ease: easeOut }}
            className="flex flex-wrap gap-4"
          >
            <Button
              className="bg-primary text-white"
              onClick={() => router.push("/services")}
            >
              Explore our practice{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Button>
            <Button variant="outline" onClick={() => router.push("/contact")}>Speak with us</Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 z-20 border-t border-outline-variant/30 bg-background/85 backdrop-blur-md">
        <div className="mx-auto w-full max-w-container-max px-margin-mobile py-8 md:px-gutter md:py-10">
          <Stagger
            className="grid grid-cols-2 gap-gutter md:grid-cols-4"
            stagger={0.1}
            delay={0.8}
          >
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="cursor-default"
                >
                  <div className="font-headline-lg text-headline-lg text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-label-caps text-label-caps text-on-surface-variant">
                    {stat.label}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
