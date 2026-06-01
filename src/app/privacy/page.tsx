import { PrivacyStatement } from "@/components/legal/privacy-statement";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { TravelingGradient } from "@/components/landing/traveling-gradient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Srushti Renewables",
  description:
    "Privacy Notice for Srushti Renewables Ltd — how we collect, use, and protect your personal data under UK GDPR.",
};

export default function PrivacyPage() {
  return (
    <>
      <TravelingGradient />

      <div className="relative z-10 min-h-screen bg-white text-on-surface">
        <Header />
        <main className="bg-white">
          <PrivacyStatement />
        </main>
        <Footer />
      </div>
    </>
  );
}
