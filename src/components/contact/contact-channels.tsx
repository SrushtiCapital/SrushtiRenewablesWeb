"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CONTACT_CHANNELS,
  CONTACT_EMAIL,
  CONTACT_INDIA_OFFICE,
  CONTACT_OFFICE,
} from "./contact-data";

export function ContactChannels() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
      className="min-w-0"
    >
      <p className="font-mono text-[10px] tracking-[0.18em] text-outline uppercase">
        Direct routes
      </p>

      <ul className="mt-6 divide-y divide-outline-variant/20">
        {CONTACT_CHANNELS.map((channel) => (
          <li key={channel.id} className="py-5 first:pt-0 last:pb-0">
            <p className="font-headline-sm text-base font-semibold text-primary sm:text-lg">
              {channel.label}
            </p>
            <Link
              href={`mailto:${CONTACT_EMAIL}${channel.subjectTag ? `?subject=${encodeURIComponent(channel.subjectTag)}` : ""}`}
              className="mt-2 inline-block text-sm text-surface-tint underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              {CONTACT_EMAIL}
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
              {channel.hint}
            </p>
            {channel.subjectTag ? (
              <span className="mt-3 inline-flex rounded px-2 py-0.5 font-mono text-[9px] tracking-wider text-outline uppercase ring-1 ring-outline-variant/30">
                {channel.subjectTag}
              </span>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="mt-10 border-t border-outline-variant/20 pt-8">
        <p className="font-mono text-[10px] tracking-[0.18em] text-outline uppercase">
          Office
        </p>
        <p className="mt-3 font-headline-sm text-base font-semibold text-primary">
          {CONTACT_OFFICE.heading}
        </p>
        <ul className="mt-2 space-y-1">
          {CONTACT_OFFICE.lines.map((line) => (
            <li key={line} className="text-sm text-on-surface-variant">
              {line}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 border-t border-outline-variant/20 pt-8">
        <p className="font-mono text-[10px] tracking-[0.18em] text-outline uppercase">
          Office
        </p>
        <p className="mt-3 font-headline-sm text-base font-semibold text-primary">
          {CONTACT_INDIA_OFFICE.heading}
        </p>
        <ul className="mt-2 space-y-1">
          {CONTACT_INDIA_OFFICE.lines.map((line) => (
            <li key={line} className="text-sm text-on-surface-variant">
              {line}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-xs leading-relaxed text-outline italic">
        All mandate discussions are treated as confidential. We do not circulate
        sponsor materials without explicit consent.
      </p>
    </motion.aside>
  );
}
