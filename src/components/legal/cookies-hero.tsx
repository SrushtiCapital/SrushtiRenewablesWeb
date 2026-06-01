"use client";

import { PageHero } from "@/components/ui/page-hero";

export function CookiesHero() {
  return (
    <PageHero
      badge="Legal"
      title={
        <>
          Cookies{" "}
          <span className="serif-italic text-surface-tint">Policy.</span>
        </>
      }
      description="This Policy explains what cookies are, what cookies this site sets, and how you can control them. We have deliberately built this site to set as few cookies as practical."
    />
  );
}
