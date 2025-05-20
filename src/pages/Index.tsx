
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton'; // Novo import

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-co-gray-light">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TargetAudienceSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsAppButton /> {/* Adicionado o botão flutuante */}
    </div>
  );
};

export default Index;
