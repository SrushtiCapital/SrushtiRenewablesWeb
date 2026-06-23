import { AboutHero } from "@/components/about/about-hero";
import { AboutMission } from "@/components/about/about-mission";
import { AboutPrinciples } from "@/components/about/about-principles";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { TravelingGradient } from "@/components/landing/traveling-gradient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Srushti Renewables",
  description:
    "A specialist cross-border capital advisory firm focused on the UK–India-Africa corridor — enabling 5 GW of clean energy infrastructure by 2030.",
};

export default function AboutPage() {
  return (
    <>
      <TravelingGradient />

      <div className="relative z-10 min-h-screen overflow-x-hidden bg-white text-on-surface">
        <Header />
        <main className="bg-white">
          <AboutHero />
          <AboutMission />
          <AboutPrinciples />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
