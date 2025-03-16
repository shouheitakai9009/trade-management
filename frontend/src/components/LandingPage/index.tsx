import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { DemoSection } from "./DemoSection";
import { BenefitsSection } from "./BenefitsSection";
import { CtaSection } from "./CtaSection";
import { Footer } from "./Footer";

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
