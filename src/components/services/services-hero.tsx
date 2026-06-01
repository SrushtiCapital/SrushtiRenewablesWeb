"use client";

import { PageHero } from "@/components/ui/page-hero";

export function ServicesHero() {
  return (
    <PageHero
      badge="The practice"
      title={
        <>
          Six advisory lines,{" "}
          <span className="serif-italic text-surface-tint">one corridor.</span>
        </>
      }
      description="Srushti Renewables advises promoters, boards, and institutional stakeholders on the full capital-raising lifecycle for cross-border infrastructure, renewable energy, storage, and utility transitions — from earliest structuring view through to drawdown."
    />
  );
}
