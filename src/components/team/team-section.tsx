"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import { TeamMemberCard } from "./team-member-card";
import { TeamProfileRow } from "./team-profile-row";
import { TeamTierHeader } from "./team-tier-header";
import type { TeamGroup } from "./team-data";

type TeamSectionProps = {
  group: TeamGroup;
  index: number;
};

export function TeamSection({ group, index }: TeamSectionProps) {
  const [lead, ...rest] = group.members;

  return (
    <FadeIn
      id={group.id}
      delay={index * 0.05}
      className={cn(
        "relative border-t border-outline-variant/20",
        group.muted
          ? "bg-gradient-to-b from-surface-container-low via-surface-container-low/80 to-surface-container-low/40"
          : "bg-white",
      )}
    >
      {group.muted && (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(6,78,59,0.04),transparent)]"
          aria-hidden
        />
      )}

      <div className="relative mx-auto max-w-container-max px-margin-mobile py-14 md:px-gutter md:py-20 lg:py-24">
        <TeamTierHeader
          tier={group.tier}
          title={group.title}
          description={group.description}
          muted={group.muted}
        />

        {group.layout === "rows" && lead ? (
          <div className="mt-12 space-y-10 md:mt-16 md:space-y-12">
            <TeamProfileRow member={lead} variant="featured" delay={0.05} />
            {rest.length > 0 && (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                {rest.map((member, memberIndex) => (
                  <TeamProfileRow
                    key={`${group.id}-${member.name}`}
                    member={member}
                    variant="compact"
                    delay={0.1 + memberIndex * 0.05}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 md:mt-16">
            {group.members.map((member, memberIndex) => (
              <TeamMemberCard
                key={`${group.id}-${member.name}-${member.role}`}
                member={member}
                index={memberIndex}
                muted={group.muted}
              />
            ))}
          </div>
        )}
      </div>
    </FadeIn>
  );
}
