"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Sectors", href: "/sectors" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

function isNavActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-outline-variant/30 bg-surface/95 shadow-sm backdrop-blur-lg"
          : "border-outline-variant/20 bg-surface/80 backdrop-blur-md",
      )}
    >
      <nav className="mx-auto flex h-20 w-full max-w-container-max items-center justify-between px-margin-mobile md:px-gutter">
        <Link href="/">
          <Image src="/logo.png" alt="Srushti Renewables" width={100} height={100} />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isNavActive(link.href, pathname);

            return (
              <motion.div
                key={link.label}
                whileHover={{ y: -1 }}
                className="group relative"
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative font-label-caps text-label-caps transition-colors hover:text-primary",
                    active ? "text-primary" : "text-on-surface-variant",
                  )}
                >
                  {link.label}
                </Link>
                <span
                  aria-hidden
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-surface-tint transition-transform duration-250",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="hidden bg-primary text-white sm:inline-flex"
            onClick={() => router.push("/contact")}
          >
            Start a mandate
            <ChevronRightIcon className="h-4 w-4" />
          </Button>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-brand border border-outline-variant/40 md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="material-symbols-outlined text-primary">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-outline-variant/20 md:hidden"
          >
            <div className="flex flex-col gap-1 px-margin-mobile py-4">
              {navLinks.map((link, i) => {
                const active = isNavActive(link.href, pathname);

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-brand border-l-2 px-3 py-3 font-label-caps text-label-caps transition-colors hover:bg-surface-container-low hover:text-primary",
                        active
                          ? "border-surface-tint bg-surface-container-low text-primary"
                          : "border-transparent text-on-surface-variant",
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <Button
                size="sm"
                className="mt-2 w-full bg-primary text-white"
                onClick={() => router.push("/contact")}
              >
                Start a mandate
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
