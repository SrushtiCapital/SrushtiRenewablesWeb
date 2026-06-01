"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { CookiesHero } from "./cookies-hero";
import { CookiesMeta } from "./cookies-meta";
import {
  COOKIES_BROWSER_LINKS,
  COOKIES_SECTIONS,
} from "./cookies-data";
import { StickyTocAside } from "./sticky-toc-aside";
import type { LegalListItem, LegalSection } from "./types";

const NAV_ITEMS = COOKIES_SECTIONS.map((s) => ({
  id: s.id,
  tier: s.tier,
  title: s.title,
}));

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);
const SCROLL_OFFSET = 112;

const linkClass =
  "text-surface-tint underline decoration-surface-tint/30 underline-offset-4 transition-colors hover:text-primary";

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

function isRichListItem(item: LegalListItem): item is { label: string; text: string } {
  return typeof item === "object";
}

function renderParagraph(text: string, section: LegalSection) {
  if (section.id === "what-are-cookies") {
    return (
      <p className="font-body-md text-body-md leading-[1.75] text-on-surface-variant">
        Cookies are small text files that websites place on your device when you
        visit them. They are used to make websites work more efficiently, to
        remember your preferences across visits, and to provide information to
        the website operator about how the site is used. Cookies cannot run
        programs or deliver viruses to your device.
        <br />
        <br />
        For general background on cookies, see{" "}
        <a
          href="https://en.wikipedia.org/wiki/HTTP_cookie"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Wikipedia: HTTP cookie
        </a>{" "}
        or the ICO&apos;s guidance at{" "}
        <a
          href="https://ico.org.uk"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          ico.org.uk
        </a>
        .
      </p>
    );
  }

  if (section.id === "cookies-set") {
    if (text.includes("does not set any cookies of its own")) {
      return (
        <p className="font-body-md text-body-md leading-[1.75] text-on-surface-variant">
          This website is built as a static site and, in its current
          configuration,{" "}
          <strong className="font-semibold text-primary">
            does not set any cookies of its own
          </strong>
          . We do not currently run analytics, advertising, or session tracking
          tooling.
        </p>
      );
    }

    if (text.includes("Google Privacy Policy")) {
      return (
        <p className="font-body-md text-body-md leading-[1.75] text-on-surface-variant">
          The Google Fonts service we use to render typography may set its own
          cookies when fonts are requested; this is governed by the{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Google Privacy Policy
          </a>
          .
        </p>
      );
    }
  }

  if (section.id === "controlling" && text.includes("Ctrl + Shift + Del")) {
    return (
      <p className="font-body-md text-body-md leading-[1.75] text-on-surface-variant">
        You can prevent the setting of cookies by adjusting the settings on your
        browser. Most major browsers allow you to refuse all cookies, accept only
        certain cookies, or be notified when a site attempts to set a cookie. You
        can also remove existing cookies in most browsers by pressing{" "}
        <strong className="font-semibold text-primary">Ctrl + Shift + Del</strong>{" "}
        on your keyboard.
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
      <p className="font-mono text-xs tracking-[0.12em] text-surface-tint">
        {section.tier}
      </p>
      <h2 className="mt-3 font-headline-lg text-2xl leading-tight font-semibold text-primary sm:text-3xl">
        {section.title}
      </h2>

      <div className="mt-6 space-y-4">
        {section.paragraphs?.map((paragraph, pIndex) => (
          <div key={paragraph.slice(0, 40)}>
            {renderParagraph(paragraph, section)}
            {section.id === "controlling" && pIndex === 0 && (
              <div className="mt-4 space-y-3">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Browser-specific guidance:
                </p>
                <ul className="space-y-3 rounded-xl border border-outline-variant/15 bg-surface-container-low/40 p-5 sm:p-6">
                  {COOKIES_BROWSER_LINKS.map((browser) => (
                    <li
                      key={browser.href}
                      className="flex gap-3 font-body-md text-body-md leading-[1.7] text-on-surface-variant"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-surface-tint"
                        aria-hidden
                      />
                      <a
                        href={browser.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {browser.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {section.list && (
          <ul className="space-y-3 rounded-xl border border-outline-variant/15 bg-surface-container-low/40 p-5 sm:p-6">
            {section.list.map((item) => (
              <li
                key={
                  isRichListItem(item)
                    ? item.label
                    : item.slice(0, 48)
                }
                className="flex gap-3 font-body-md text-body-md leading-[1.7] text-on-surface-variant"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-surface-tint"
                  aria-hidden
                />
                {isRichListItem(item) ? (
                  <span>
                    <strong className="font-semibold text-primary">
                      {item.label}
                    </strong>
                    {" — "}
                    {item.text}
                  </span>
                ) : (
                  <span>{item}</span>
                )}
              </li>
            ))}
          </ul>
        )}

        {section.footerNote && section.id === "changes" && (
          <p className="rounded-xl border border-outline-variant/15 bg-surface-container-low/30 px-5 py-4 font-body-md text-body-md leading-[1.75] text-on-surface-variant italic sm:px-6">
            For any questions about this Cookies Policy, please see our{" "}
            <Link href="/privacy" className={`${linkClass} not-italic`}>
              Privacy Policy
            </Link>{" "}
            or{" "}
            <Link href="/contact" className={`${linkClass} not-italic`}>
              contact us
            </Link>
            .
          </p>
        )}
      </div>
    </motion.section>
  );
}

export function CookiesStatement() {
  const [activeId, setActiveId] = useActiveSection(SECTION_IDS);
  const navigateToSection = (id: string) => scrollToSection(id, setActiveId);

  return (
    <>
      <CookiesHero />
      <CookiesMeta />

      <section
        id="statement-document"
        className="relative overflow-visible border-t border-outline-variant/20 bg-surface-container-low/30 px-margin-mobile py-10 md:px-gutter md:py-14 lg:py-16"
      >
        <div className="mx-auto max-w-container-max">
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
                  <span className="mt-0.5 block max-w-[140px] leading-snug">
                    {item.title}
                  </span>
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
              footerLink={{ href: "/privacy", label: "Privacy Policy" }}
            />

            <article className="min-w-0 flex-1 rounded-2xl border border-outline-variant/25 bg-white shadow-[0_12px_48px_rgba(6,78,59,0.07)] ring-1 ring-black/[0.02]">
              <div className="border-b border-outline-variant/15 bg-surface-container-low/40 px-6 py-5 sm:px-8 sm:py-6 md:px-10">
                <p className="font-label-caps text-label-caps tracking-widest text-surface-tint uppercase">
                  Full policy
                </p>
                <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  Six sections covering cookies on this site and how to control
                  them.
                </p>
              </div>

              <div className="space-y-0 px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
                {COOKIES_SECTIONS.map((section, index) => (
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
