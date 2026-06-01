import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest",
  {
    variants: {
      variant: {
        default: "text-on-surface-variant",
        accent: "text-secondary",
        muted: "text-outline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> & {
    dot?: boolean;
  };

export function Badge({
  className,
  variant,
  dot = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-secondary" />
      )}
      {children}
    </span>
  );
}
