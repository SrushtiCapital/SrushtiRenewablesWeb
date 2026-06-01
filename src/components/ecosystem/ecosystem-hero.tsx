"use client";

import { PageHero } from "@/components/ui/page-hero";

export function EcosystemHero() {
  return (
    <PageHero
      badge="UK sustainable finance · Ecosystem"
      title={
        <>
          The market we{" "}
          <span className="serif-italic text-surface-tint">sit inside.</span>
        </>
      }
      description="We operate within the UK and European sustainable-finance ecosystem — carbon markets, ESG ratings, and insurers — so sponsors access the right counterparties with a risk-tested, institutionally legible mandate."
    />
  );
}
