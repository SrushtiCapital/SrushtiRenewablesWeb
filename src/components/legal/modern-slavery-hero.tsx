"use client";

import { PageHero } from "@/components/ui/page-hero";

export function ModernSlaveryHero() {
  return (
    <PageHero
      badge="Legal"
      title={
        <>
          Modern Slavery{" "}
          <span className="serif-italic text-surface-tint">Statement.</span>
        </>
      }
      description="Srushti Renewables Ltd has zero tolerance for slavery, human trafficking, forced labour, or any abuse of human rights — within our own organisation, in our supply chain, or in the businesses we advise. This Statement explains how we operationalise that position."
    />
  );
}
