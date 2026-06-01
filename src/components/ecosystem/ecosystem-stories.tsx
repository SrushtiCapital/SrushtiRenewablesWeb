"use client";

import { useCallback, useEffect, useState } from "react";
import { ECOSYSTEM_PILLARS } from "./ecosystem-data";
import {
  EcosystemChapterNav,
  EcosystemDisclaimer,
  EcosystemPillarShowcase,
} from "./ecosystem-pillar-showcase";

export function EcosystemStories() {
  const [activeId, setActiveId] = useState(ECOSYSTEM_PILLARS[0].id);

  useEffect(() => {
    const sections = ECOSYSTEM_PILLARS.map((p) =>
      document.getElementById(p.id),
    ).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -50% 0px", threshold: [0, 0.2, 0.45] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-container-max grid-cols-1 px-margin-mobile md:px-gutter lg:grid-cols-[220px_1fr] lg:gap-6">
        <div className="hidden lg:block lg:pt-4">
          <EcosystemChapterNav
            pillars={ECOSYSTEM_PILLARS}
            activeId={activeId}
            onSelect={scrollTo}
          />
        </div>

        <div className="min-w-0">
          {ECOSYSTEM_PILLARS.map((pillar) => (
            <EcosystemPillarShowcase key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>

      <EcosystemDisclaimer />
    </div>
  );
}
