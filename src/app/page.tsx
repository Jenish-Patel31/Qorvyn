import { HeroSection } from "@/components/sections/HeroSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { EngagementModelsSection } from "@/components/sections/EngagementModelsSection";

import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { DevelopmentProcessSection } from "@/components/sections/DevelopmentProcessSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PreFooterCTA, Footer } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-[#020617]">
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <EngagementModelsSection />

      <WhyChooseUsSection />
      <DevelopmentProcessSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
      <PreFooterCTA />
      <Footer />
    </main>
  );
}
