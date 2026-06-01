"use client";

import { PageHero } from "@/components/ui/page-hero";

export function SectorsHero() {
  return (
    <PageHero
      badge="Sector coverage"
      title={
        <>
          Capital intensive,{" "}
          <span className="serif-italic text-surface-tint">regulated,</span>{" "}
          <span className="serif-italic text-surface-tint">real.</span>
        </>
      }
      description="We focus where the corridor delivers — infrastructure and energy sectors with long-tenor offtake, regulatory predictability, and institutional-grade risk profile. No discretionary consumer plays, no early-stage exposure."
    />
  );
}
