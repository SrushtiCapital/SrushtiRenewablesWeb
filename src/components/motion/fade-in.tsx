"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  as?: "section" | "div";
  y?: number;
};

export function FadeIn({
  children,
  className,
  id,
  delay = 0,
  as = "section",
  y = 40,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  const props = {
    ref,
    id,
    initial: { opacity: 0, y },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y },
    transition: { duration: 0.7, delay, ease: easeOut },
    className: cn(className),
  };

  if (as === "div") {
    return <motion.div {...props}>{children}</motion.div>;
  }

  return <motion.section {...props}>{children}</motion.section>;
}
