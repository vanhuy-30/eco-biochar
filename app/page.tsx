import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ProductionProcess } from "@/components/sections/ProductionProcess";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";
import { WhyEcoBiochar } from "@/components/sections/WhyEcoBiochar";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="noi-dung" tabIndex={-1} className="outline-none">
        <HeroSection />
        <BrandStorySection />
        <ProductShowcase />
        <ProductionProcess />
        <ApplicationsSection />
        <WhyEcoBiochar />
        <PartnershipSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
