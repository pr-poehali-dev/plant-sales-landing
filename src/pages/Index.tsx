import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import DeliverySection from "@/components/DeliverySection";
import PlantCatalog from "@/components/PlantCatalog";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsSection />
      <DeliverySection />
      <PlantCatalog />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Index;
