import { ContactChannels } from "@/components/contact/contact-channels";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactHero } from "@/components/contact/contact-hero";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { TravelingGradient } from "@/components/landing/traveling-gradient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Srushti Renewables",
  description:
    "Reach Srushti Renewables for sponsor enquiries, institutional introductions, and cross-border capital advisory on the UK–India corridor.",
};

export default function ContactPage() {
  return (
    <>
      <TravelingGradient />

      <div className="relative z-10 min-h-screen overflow-x-hidden bg-white text-on-surface">
        <Header />
        <main className="bg-white">
          <ContactHero />
          <section className="border-b border-outline-variant/20 bg-white">
            <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 px-margin-mobile py-14 md:grid-cols-12 md:gap-14 md:px-gutter md:py-20 lg:gap-16 lg:py-24">
              <div className="md:col-span-5 lg:col-span-4">
                <ContactChannels />
              </div>
              <div className="md:col-span-7 lg:col-span-8">
                <ContactForm />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
