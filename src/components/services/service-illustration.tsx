"use client";

import { cn } from "@/lib/utils";

export type IllustrationVariant =
  | "fdi"
  | "ecb"
  | "holdco"
  | "modelling"
  | "greenbond"
  | "institutional";

export function ServiceIllustration({
  variant,
  className,
}: {
  variant: IllustrationVariant;
  className?: string;
}) {
  return (
    <div
      className={cn("pointer-events-none w-full opacity-95", className)}
      aria-hidden
    >
      <svg
        viewBox="0 0 320 180"
        fill="none"
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dotted world map */}
        <circle
          cx="100"
          cy="95"
          r="58"
          stroke="#bfc9c3"
          strokeWidth="1"
          strokeDasharray="3 5"
          opacity="0.7"
        />
        <ellipse
          cx="100"
          cy="88"
          rx="34"
          ry="38"
          fill="#064e3b"
          fillOpacity="0.08"
        />

        {/* Gold connection arc over scene */}
        <path
          d="M 28 118 Q 100 42 200 78"
          stroke="#c9a227"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        <circle cx="28" cy="118" r="3" fill="#c9a227" />
        <circle cx="200" cy="78" r="2" fill="#c9a227" fillOpacity="0.5" />

        {/* Cityscape + renewables (FDI-style base for all, simplified per variant) */}
        <g opacity="0.9">
          <rect
            x="118"
            y="108"
            width="14"
            height="42"
            fill="#064e3b"
            fillOpacity="0.35"
          />
          <rect
            x="136"
            y="92"
            width="18"
            height="58"
            fill="#2b6954"
            fillOpacity="0.4"
          />
          <rect
            x="158"
            y="100"
            width="12"
            height="50"
            fill="#064e3b"
            fillOpacity="0.3"
          />
          <rect
            x="174"
            y="112"
            width="16"
            height="38"
            fill="#2b6954"
            fillOpacity="0.35"
          />
          <rect
            x="194"
            y="118"
            width="10"
            height="32"
            fill="#064e3b"
            fillOpacity="0.28"
          />

          {(variant === "fdi" || variant === "greenbond") && (
            <>
              <path
                d="M 228 130v-22M234 118v34M240 124v28"
                stroke="#2b6954"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <rect
                x="248"
                y="128"
                width="28"
                height="16"
                rx="1"
                stroke="#6f5c2c"
                strokeWidth="1"
                fill="#fae0a4"
                fillOpacity="0.2"
              />
            </>
          )}

          {variant === "ecb" && (
            <path
              d="M 230 140h70M242 128v24M258 132v16"
              stroke="#707974"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          )}

          {variant === "holdco" && (
            <>
              <rect
                x="228"
                y="108"
                width="22"
                height="34"
                stroke="#064e3b"
                strokeWidth="1"
                fill="#b0f0d6"
                fillOpacity="0.15"
              />
              <rect
                x="256"
                y="114"
                width="18"
                height="28"
                stroke="#6f5c2c"
                strokeWidth="1"
                fill="#fae0a4"
                fillOpacity="0.15"
              />
            </>
          )}

          {variant === "modelling" && (
            <>
              <rect x="228" y="118" width="10" height="28" fill="#064e3b" fillOpacity="0.3" />
              <rect x="244" y="106" width="10" height="40" fill="#2b6954" fillOpacity="0.4" />
              <rect x="260" y="122" width="10" height="24" fill="#6f5c2c" fillOpacity="0.3" />
            </>
          )}

          {variant === "institutional" && (
            <>
              <circle cx="238" cy="128" r="10" stroke="#064e3b" strokeWidth="1" />
              <circle cx="262" cy="122" r="8" stroke="#6f5c2c" strokeWidth="1" />
              <circle cx="282" cy="130" r="7" stroke="#2b6954" strokeWidth="1" />
              <path
                d="M248 126h10M270 124h8"
                stroke="#bfc9c3"
                strokeWidth="1"
                strokeDasharray="2 4"
              />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}
