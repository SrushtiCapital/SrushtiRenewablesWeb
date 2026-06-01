"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 font-bold transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-sm hover:shadow-xl",
        outline:
          "border border-primary bg-transparent text-primary backdrop-blur-sm hover:bg-white/50",
        ghost:
          "border-b border-primary bg-transparent px-0 py-2 text-primary hover:opacity-70",
        inverse:
          "bg-white text-primary shadow-lg hover:bg-secondary-fixed",
        inverseOutline:
          "border border-white/30 bg-transparent text-white backdrop-blur-sm hover:bg-white/10",
      },
      size: {
        sm: "rounded-brand px-6 py-2 font-body-sm text-body-sm",
        md: "rounded-brand px-8 py-4 font-body-md text-body-md",
        lg: "rounded-brand px-10 py-4 font-body-md text-body-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = HTMLMotionProps<"button"> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
