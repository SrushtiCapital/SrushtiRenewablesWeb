import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { TravelingGradient } from "@/components/landing/traveling-gradient";
import { ServiceSection } from "@/components/services/service-section";
import { SERVICE_LINES } from "@/components/services/services-data";
import { ServicesHero } from "@/components/services/services-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Srushti Renewables",
  description:
    "Six advisory lines across FDI, ECB, offshore HoldCo structuring, capital modelling, green bonds, and institutional engagement on the UK–India corridor.",
};

export default function ServicesPage() {
  return (
    <>
      <TravelingGradient />

      <div className="relative z-10 min-h-screen overflow-x-hidden bg-white text-on-surface">
        <Header />
        <main className="bg-white">
          <ServicesHero />
          {SERVICE_LINES.map((service, index) => (
            <ServiceSection key={service.id} service={service} index={index} />
          ))}
          <FinalCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
