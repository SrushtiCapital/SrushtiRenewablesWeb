import { TeamFinalCta } from "@/components/team/team-final-cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { TravelingGradient } from "@/components/landing/traveling-gradient";
import { TEAM_GROUPS } from "@/components/team/team-data";
import { TeamHero } from "@/components/team/team-hero";
import { TeamSection } from "@/components/team/team-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Srushti Renewables",
  description:
    "The Srushti Renewables team — leadership, technology experts, and India operations.",
};

export default function TeamPage() {
  return (
    <>
      <TravelingGradient />

      <div className="relative z-10 min-h-screen overflow-x-hidden bg-white text-on-surface">
        <Header />
        <main className="bg-white">
          <TeamHero />
          {TEAM_GROUPS.map((group, index) => (
            <TeamSection key={group.id} group={group} index={index} />
          ))}
          <TeamFinalCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
