import Hero from "@/components/Hero";
import DeliverySection from "@/components/DeliverySection";
import PlantCatalog from "@/components/PlantCatalog";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DeliverySection />
      <PlantCatalog />
      <ContactSection />
    </div>
  );
};

export default Index;
