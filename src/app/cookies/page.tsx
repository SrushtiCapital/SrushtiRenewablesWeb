import { CookiesStatement } from "@/components/legal/cookies-statement";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { TravelingGradient } from "@/components/landing/traveling-gradient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | Srushti Renewables",
  description:
    "Cookies Policy for srushtirenewables.co.uk — what cookies this site sets and how you can control them.",
};

export default function CookiesPage() {
  return (
    <>
      <TravelingGradient />

      <div className="relative z-10 min-h-screen bg-white text-on-surface">
        <Header />
        <main className="bg-white">
          <CookiesStatement />
        </main>
        <Footer />
      </div>
    </>
  );
}
