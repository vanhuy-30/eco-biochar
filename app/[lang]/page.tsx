import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale } from "@/content/types";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Intro } from "@/components/layout/Intro";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ProductionProcess } from "@/components/sections/ProductionProcess";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";
import { WhyEcoBiochar } from "@/components/sections/WhyEcoBiochar";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <Intro t={t.intro} company={t.brand.company} slogan={t.brand.slogan} />
      <Header locale={lang} common={t.common} nav={t.nav} cta={t.primaryCta} brand={t.brand} />
      <main id="noi-dung" tabIndex={-1} className="outline-none">
        <HeroSection t={t.hero} brand={t.brand} productAlt={t.products.imageAlt} />
        <BrandStorySection t={t.story} logoAlt={t.brand.logoAlt} />
        <ProductShowcase t={t.products} close={t.common.close} />
        <ProductionProcess t={t.process} />
        <ApplicationsSection t={t.applications} />
        <WhyEcoBiochar t={t.why} />
        <PartnershipSection t={t.partnership} />
        <FAQSection t={t.faq} />
        <ContactSection t={t.contact} />
      </main>
      <Footer locale={lang} t={t} />
    </>
  );
}
