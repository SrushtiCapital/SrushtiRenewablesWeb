"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ModernSlaveryHero } from "./modern-slavery-hero";
import { ModernSlaveryMeta } from "./modern-slavery-meta";
import { MODERN_SLAVERY_SECTIONS, type LegalSection } from "./modern-slavery-data";

const NAV_ITEMS = MODERN_SLAVERY_SECTIONS.map((s) => ({
  id: s.id,
  tier: s.tier,
  title: s.title,
}));

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

const linkClass =
  "text-surface-tint underline decoration-surface-tint/30 underline-offset-4 transition-colors hover:text-primary";

const SCROLL_OFFSET = 112;

function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const updateActive = () => {
      let current = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET) {
          current = id;
        }
      }

      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [sectionIds]);

  return [activeId, setActiveId] as const;
}

function scrollToSection(id: string, setActiveId: (id: string) => void) {
  setActiveId(id);
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

import { StickyTocAside } from "./sticky-toc-aside";

function renderParagraph(text: string, section: LegalSection) {
  if (section.id === "reporting" && text.includes("contacting us")) {
    const [before, after] = text.split("contacting us");
    return (
      <p className="font-body-md text-body-md leading-[1.75] text-on-surface-variant">
        {before}
        <Link href="/contact" className={linkClass}>
          contacting us
        </Link>
        {after}
      </p>
    );
  }

  if (
    section.id === "reporting" &&
    text.includes("gov.uk/government/collections/modern-slavery")
  ) {
    return (
      <p className="font-body-md text-body-md leading-[1.75] text-on-surface-variant">
        For information on the UK Modern Slavery Act 2015, see{" "}
        <a
          href="https://www.gov.uk/government/collections/modern-slavery"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          gov.uk/government/collections/modern-slavery
        </a>
        . The UK Modern Slavery Helpline can be reached on{" "}
        <strong className="font-semibold text-primary">08000 121 700</strong>.
      </p>
    );
  }

  return (
    <p className="font-body-md text-body-md leading-[1.75] text-on-surface-variant">
      {text}
    </p>
  );
}

function StatementSection({
  section,
  index,
}: {
  section: LegalSection;
  index: number;
}) {
  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.5, delay: index * 0.03, ease: easeOut }}
      className={cn(
        "scroll-mt-32",
        index > 0 && "border-t border-outline-variant/15 pt-10 md:pt-12",
        index === 0 && "pt-0",
      )}
    >
      {/* <p className="font-mono text-xs tracking-[0.12em] text-surface-tint uppercase">
        {section.tier}
      </p> */}
      <h2 className="mt-3 font-headline-lg text-2xl leading-tight font-semibold text-primary sm:text-3xl">
        {section.title}
      </h2>

      <div className="mt-6 space-y-4">
        {section.paragraphs?.map((paragraph) => (
          <div key={paragraph.slice(0, 40)}>{renderParagraph(paragraph, section)}</div>
        ))}

        {section.list && (
          <ul className="space-y-3 rounded-xl border border-outline-variant/15 bg-surface-container-low/40 p-5 sm:p-6">
            {section.list.map((item) => (
              <li
                key={item.slice(0, 48)}
                className="flex gap-3 font-body-md text-body-md leading-[1.7] text-on-surface-variant"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-surface-tint"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {section.footerNote && section.id === "review" && (
          <p className="rounded-xl border border-outline-variant/15 bg-surface-container-low/30 px-5 py-4 font-body-md text-body-md leading-[1.75] text-on-surface-variant italic sm:px-6">
            For questions about this Statement or to raise a concern in confidence,
            please{" "}
            <Link href="/contact" className={`${linkClass} not-italic`}>
              contact us
            </Link>
            .
          </p>
        )}

        {section.footerNote && section.id !== "review" && (
          <p className="font-body-md text-body-md leading-[1.75] text-on-surface-variant">
            {section.footerNote}
          </p>
        )}
      </div>
    </motion.section>
  );
}

export function ModernSlaveryStatement() {
  const [activeId, setActiveId] = useActiveSection(SECTION_IDS);

  const navigateToSection = (id: string) => scrollToSection(id, setActiveId);

  return (
    <>
      <ModernSlaveryHero />
      <ModernSlaveryMeta />

      {/* Document — TOC on the left, sticky only while this section scrolls */}
      <section
        id="statement-document"
        className="relative overflow-visible border-t border-outline-variant/20 bg-surface-container-low/30 px-margin-mobile py-10 md:px-gutter md:py-14 lg:py-16"
      >
        <div className="mx-auto max-w-container-max">
          {/* Mobile / tablet jump links */}
          <div className="mb-6 rounded-2xl border border-outline-variant/25 bg-white p-4 shadow-sm lg:hidden">
            <p className="mb-3 font-label-caps text-label-caps tracking-widest text-surface-tint uppercase">
              Table of contents
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {NAV_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateToSection(item.id)}
                  className={cn(
                    "shrink-0 rounded-lg border px-3 py-2 text-left text-xs transition-colors",
                    activeId === item.id
                      ? "border-surface-tint/40 bg-surface-tint/10 font-medium text-primary"
                      : "border-outline-variant/30 bg-surface-container-low/30 text-on-surface-variant hover:border-surface-tint/30",
                  )}
                >
                  <span className="block font-mono text-[10px] text-surface-tint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-0.5 block max-w-[140px] leading-snug">{item.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-12">
            <StickyTocAside
              sectionId="statement-document"
              items={NAV_ITEMS}
              activeId={activeId}
              onNavigate={navigateToSection}
            />

            <article className="min-w-0 flex-1 rounded-2xl border border-outline-variant/25 bg-white shadow-[0_12px_48px_rgba(6,78,59,0.07)] ring-1 ring-black/[0.02]">
              <div className="border-b border-outline-variant/15 bg-surface-container-low/40 px-6 py-5 sm:px-8 sm:py-6 md:px-10">
                <p className="font-label-caps text-label-caps tracking-widest text-surface-tint uppercase">
                  Full statement
                </p>
                <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  Seven sections covering our position, operations, and reporting.
                </p>
              </div>

              <div className="space-y-0 px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
                {MODERN_SLAVERY_SECTIONS.map((section, index) => (
                  <StatementSection
                    key={section.id}
                    section={section}
                    index={index}
                  />
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
