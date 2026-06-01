"use client";

import {
  AG_SLIDES,
  ENERGY_SLIDES,
  PORTS_SLIDES,
  REAL_ESTATE_SLIDES,
} from "./showcase-data";
import { SectorCarouselShowcase } from "./sector-carousel-showcase";

export function SectorSection({ sectorId }: { sectorId: string }) {
  switch (sectorId) {
    case "energy":
      return (
        <SectorCarouselShowcase
          id="energy"
          index="01"
          accent="teal"
          badge="/01 — Energy"
          title={
            <>
              Renewable{" "}
              <span className="serif-italic text-surface-tint">energy.</span>
            </>
          }
          description="Solar PV, wind, hybrid solar+storage, and biofuels — utility-scale and C&I, with PPA-backed cash flows. We structure ECB, green-bond, and DFI senior debt against long-tenor offtake for platforms scaling into the GW range."
          slides={ENERGY_SLIDES}
        />
      );
    case "real-estate":
      return (
        <SectorCarouselShowcase
          id="real-estate"
          index="02"
          accent="gold"
          badge="/02 — Real estate"
          title={
            <>
              Real estate &{" "}
              <span className="serif-italic text-[#8a7020]">mixed-use.</span>
            </>
          }
          description="Tier-1 commercial and mixed-use platforms — we structure offshore equity, ECB senior, and mezzanine against pre-leased cash flows with institutional covenant discipline."
          slides={REAL_ESTATE_SLIDES}
        />
      );
    case "ports":
      return (
        <SectorCarouselShowcase
          id="ports"
          index="03"
          accent="violet"
          badge="/03 — Ports & logistics"
          title={
            <>
              Ports, logistics &{" "}
              <span className="serif-italic text-violet-700">
                transport infrastructure.
              </span>
            </>
          }
          description="Operational capital for greenfield berths, concession frameworks, and multimodal corridors — EPC equity, ECA-backed debt, and DFI participation across long-gestation port assets."
          slides={PORTS_SLIDES}
        />
      );
    case "agriculture":
      return (
        <SectorCarouselShowcase
          id="agriculture"
          index="04"
          accent="green"
          badge="/04 — Agriculture"
          title={
            <>
              Carbon-neutral agriculture &{" "}
              <span className="serif-italic text-emerald-700">food.</span>
            </>
          }
          description="Sustainable agricultural processing, cold-chain logistics, and carbon-neutral food platforms — linking EU ESG capital with Indian operating assets through SLLs, blended finance, and FDI."
          slides={AG_SLIDES}
        />
      );
    default:
      return null;
  }
}
