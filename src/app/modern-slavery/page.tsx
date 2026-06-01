import { ModernSlaveryStatement } from "@/components/legal/modern-slavery-statement";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { TravelingGradient } from "@/components/landing/traveling-gradient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Slavery Statement | Srushti Renewables",
  description:
    "Srushti Renewables Ltd voluntary Modern Slavery Statement — our position on human rights, supply chain due diligence, and reporting concerns.",
};

export default function ModernSlaveryPage() {
  return (
    <>
      <TravelingGradient />

      <div className="relative z-10 min-h-screen bg-white text-on-surface">
        <Header />
        <main className="bg-white">
          <ModernSlaveryStatement />
        </main>
        <Footer />
      </div>
    </>
  );
}
