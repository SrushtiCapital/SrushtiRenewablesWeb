import { EcosystemConnect } from "@/components/ecosystem/ecosystem-connect";
import { ECOSYSTEM_PILLARS } from "@/components/ecosystem/ecosystem-data";
import { EcosystemEngage } from "@/components/ecosystem/ecosystem-engage";
import { EcosystemHero } from "@/components/ecosystem/ecosystem-hero";
import { EcosystemPillarShowcase } from "@/components/ecosystem/ecosystem-pillar-showcase";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { TravelingGradient } from "@/components/landing/traveling-gradient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecosystem | Srushti Renewables",
  description:
    "UK sustainable finance ecosystem — carbon markets, ESG ratings, and insurance-led credit enhancement for cross-border infrastructure mandates.",
};

export default function EcosystemPage() {
  return (
    <>
      <TravelingGradient />

      <div className="relative z-10 min-h-screen overflow-x-hidden bg-white text-on-surface">
        <Header />
        <main className="bg-white">
          <EcosystemHero />
          {ECOSYSTEM_PILLARS.map((pillar) => (
            <EcosystemPillarShowcase key={pillar.id} pillar={pillar} />
          ))}
          <EcosystemConnect />
          {/* <EcosystemEngage /> */}
                    <FinalCta />

        </main>
        <Footer />
      </div>
    </>
  );
}
