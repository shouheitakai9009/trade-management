import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { DemoSection } from "../components/DemoSection";
import { BenefitsSection } from "../components/BenefitsSection";
import { CtaSection } from "../components/CtaSection";
import { Footer } from "../components/Footer";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#1E222D] text-[#D1D4DC] font-sans">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <BenefitsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
