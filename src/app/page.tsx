import { Execute } from "@/components/landing/execute";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Outreach } from "@/components/landing/outreach";
import { Practice } from "@/components/landing/practice";
import { Regulated } from "@/components/landing/regulated";
import { Strategy } from "@/components/landing/strategy";
import { TravelingGradient } from "@/components/landing/traveling-gradient";

export default function Home() {
  return (
    <>
      <TravelingGradient />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Practice />
          <Strategy />
          <Outreach />
          <Execute />
          <Regulated />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
