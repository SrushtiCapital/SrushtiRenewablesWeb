"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/motion";
import { TeamMemberPhoto } from "./team-member-photo";
import type { TeamMember } from "./team-data";

type TeamMemberCardProps = {
  member: TeamMember;
  index?: number;
  muted?: boolean;
};

export function TeamMemberCard({
  member,
  index = 0,
  muted = false,
}: TeamMemberCardProps) {
  const bio = member.bio
    ? Array.isArray(member.bio)
      ? member.bio[0]
      : member.bio
    : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: easeOut }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300",
        muted
          ? "border-outline-variant/25 bg-white shadow-[0_8px_32px_rgba(6,78,59,0.06)] hover:border-surface-tint/35 hover:shadow-[0_16px_48px_rgba(6,78,59,0.1)]"
          : "border-outline-variant/25 bg-white shadow-[0_6px_28px_rgba(6,78,59,0.05)] hover:border-primary/20 hover:shadow-[0_14px_40px_rgba(6,78,59,0.09)]",
      )}
    >
      <div className="relative aspect-[5/6] overflow-hidden bg-surface-container-low">
        <TeamMemberPhoto
          name={member.name}
          image={member.image}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-label-caps text-[10px] tracking-[0.16em] text-surface-tint uppercase sm:text-label-caps">
          {member.role}
        </p>
        <h3 className="mt-2 font-headline-sm text-lg font-semibold text-primary sm:text-xl">
          {member.name}
        </h3>
        {bio && (
          <p className="mt-3 flex-1 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
            {bio}
          </p>
        )}
      </div>
    </motion.article>
  );
}
