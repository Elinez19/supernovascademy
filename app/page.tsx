import { Navbar } from "@/components/custom/landing-page/navbar/navbar";
import { HeroSection } from "@/components/custom/landing-page/hero-sections/hero-section";
import { LogoSection } from "@/components/custom/landing-page/logo-sections/logo-section-7";
import TestimonialsSection from "@/components/custom/landing-page/testimonials-sections/testimonials-section-1";
import { CardsGrid } from "@/components/custom/landing-page/cards/cards-grid";
import { FeatureSection } from "@/components/custom/landing-page/feature-sections/feature-section-9";
import { StatsSection } from "@/components/custom/landing-page/stats-sections/stats-section-4";
import { PricingSection } from "@/components/custom/landing-page/pricing-sections/pricing-section-3";
import { FaqSection } from "@/components/custom/landing-page/faq-sections/faq-section-2";
import { Footer } from "@/components/custom/landing-page/footers/footer-section";

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LogoSection />
      <TestimonialsSection />
      <CardsGrid />
      <FeatureSection />
      <StatsSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
