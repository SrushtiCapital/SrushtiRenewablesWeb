"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-xl transition-colors", {
  variants: {
    variant: {
      glass:
        "glass-card border border-outline-variant/30 hover:border-secondary",
      solid:
        "border border-outline-variant/30 bg-white shadow-sm hover:border-primary/30",
      elevated:
        "border border-white/50 bg-surface-container/50 shadow-lg backdrop-blur-sm",
      gradient:
        "bg-gradient-to-r from-primary to-primary-container text-white shadow-lg",
      dashed:
        "border-2 border-dashed border-primary bg-white text-center",
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-10",
    },
  },
  defaultVariants: {
    variant: "glass",
    padding: "lg",
  },
});

export type CardProps = HTMLMotionProps<"div"> &
  VariantProps<typeof cardVariants>;

export function Card({
  className,
  variant,
  padding,
  children,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(cardVariants({ variant, padding }), "group", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mb-8 flex items-start justify-between", className)}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "mb-4 font-headline-sm text-headline-sm text-primary",
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("font-body-sm text-body-sm text-on-surface-variant", className)}
      {...props}
    />
  );
}
