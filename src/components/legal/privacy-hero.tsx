"use client";

import { PageHero } from "@/components/ui/page-hero";

export function PrivacyHero() {
  return (
    <PageHero
      badge="Legal"
      title={
        <>
          Privacy{" "}
          <span className="serif-italic text-surface-tint">Policy.</span>
        </>
      }
      description="This Privacy Notice explains how Srushti Renewables Ltd collects, uses, stores, and protects your personal data when you visit our website, engage with our advisory services, or otherwise interact with us. In this Notice, “customers” or “you” refers to individuals whose personal data we process."
    />
  );
}
