import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { TravelingGradient } from "@/components/landing/traveling-gradient";
import { SectorSection } from "@/components/sectors/sector-section";
import { SECTORS } from "@/components/sectors/sectors-data";
import { SectorsAdjacent } from "@/components/sectors/sectors-adjacent";
import { SectorsHero } from "@/components/sectors/sectors-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sectors | Srushti Renewables",
  description:
    "Capital-intensive, regulated infrastructure and energy sectors across the UK–India corridor — renewables, real estate, ports, and agriculture.",
};

export default function SectorsPage() {
  return (
    <>
      <TravelingGradient />

      <div className="relative z-10 min-h-screen overflow-x-hidden bg-white text-on-surface">
        <Header />
        <main className="bg-white">
          <SectorsHero />
          <div className="bg-white">
            {SECTORS.map((sector) => (
              <SectorSection key={sector.id} sectorId={sector.id} />
            ))}
          </div>
          {/* <SectorsAdjacent /> */}
          <FinalCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
