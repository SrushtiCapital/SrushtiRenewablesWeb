"use client";

import { PageHero } from "@/components/ui/page-hero";

export function ContactHero() {
  return (
    <PageHero
      badge="Contact"
      title={
        <>
          Start a{" "}
          <span className="serif-italic text-surface-tint">conversation.</span>
        </>
      }
      description="Whether you are a sponsor structuring your next raise or an institution reviewing corridor deal flow — reach us directly. We respond to substantive enquiries within two business days."
    />
  );
}
