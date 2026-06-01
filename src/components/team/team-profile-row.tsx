"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/motion";
import { TeamMemberPhoto } from "./team-member-photo";
import type { TeamMember } from "./team-data";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.67v-8.66h2.67v8.66zM7 8.34a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 10H15.7v-4.2c0-1 0-2.3-1.4-2.3s-1.62 1.1-1.62 2.23v4.27H10V9.68h2.55v1.18h.04a2.8 2.8 0 0 1 2.51-1.38c2.69 0 3.18 1.77 3.18 4.07v4.79z" />
    </svg>
  );
}

type TeamProfileRowProps = {
  member: TeamMember;
  delay?: number;
  variant?: "featured" | "compact";
};

export function TeamProfileRow({
  member,
  delay = 0,
  variant = "featured",
}: TeamProfileRowProps) {
  const bios = member.bio
    ? Array.isArray(member.bio)
      ? member.bio
      : [member.bio]
    : [];
  const isSquare = member.imageAspect === "square";
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <FadeIn
      as="div"
      delay={delay}
      y={24}
      className={cn(
        isFeatured &&
          "overflow-hidden rounded-3xl border border-outline-variant/25 bg-white p-6 shadow-[0_12px_48px_rgba(6,78,59,0.07)] sm:p-8 md:p-10",
        isCompact &&
          "h-full rounded-2xl border border-outline-variant/25 bg-white p-5 shadow-sm transition-shadow hover:shadow-[0_12px_40px_rgba(6,78,59,0.08)] sm:p-6",
      )}
    >
      <div
        className={cn(
          "grid grid-cols-1 items-center gap-8",
          isFeatured && "md:grid-cols-[minmax(240px,340px)_1fr] md:gap-12 lg:gap-16",
          isCompact && "gap-6 md:grid-cols-1",
        )}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
          className={cn(
            "relative overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-low ring-1 ring-black/[0.03]",
            isFeatured && !isSquare && "aspect-[3/4] max-w-[340px] shadow-[0_20px_60px_rgba(6,78,59,0.12)]",
            isFeatured && isSquare && "aspect-square max-w-[280px]",
            isCompact && "aspect-square w-full max-w-none shadow-[0_8px_30px_rgba(6,78,59,0.08)]",
          )}
        >
          <TeamMemberPhoto
            name={member.name}
            image={member.image}
            sizes={
              isFeatured
                ? "(max-width: 768px) 100vw, 340px"
                : "(max-width: 768px) 100vw, 280px"
            }
            initialsClassName={isCompact ? "text-3xl" : "text-4xl"}
          />
        </motion.div>

        <div className={cn("flex flex-col", isCompact ? "justify-start" : "justify-center")}>
          <p className="font-label-caps text-label-caps tracking-[0.14em] text-surface-tint uppercase">
            {member.role}
          </p>
          <h3
            className={cn(
              "mt-2 font-semibold text-primary",
              isFeatured
                ? "font-headline-md text-headline-md sm:text-3xl"
                : "font-headline-sm text-xl sm:text-2xl",
            )}
          >
            {member.name}
          </h3>
          {bios.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className={cn(
                "leading-relaxed text-on-surface-variant",
                isFeatured
                  ? "mt-4 font-body-md text-body-md"
                  : "mt-3 font-body-sm text-body-sm",
              )}
            >
              {paragraph}
            </p>
          ))}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-surface-tint/30 bg-surface-tint/5 px-4 py-2 font-body-sm text-body-sm font-medium text-surface-tint transition-colors hover:border-surface-tint hover:bg-surface-tint/10 hover:text-primary"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </FadeIn>
  );
}
