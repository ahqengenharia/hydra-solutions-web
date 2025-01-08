import { useState } from "react";
import { ContactInfo } from "@/components/ContactInfo";
import { ActionButtons } from "@/components/ActionButtons";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactDialog } from "@/components/ContactDialog";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#8B5CF6]">
      <ContactInfo />

      {/* Logo */}
      <div className="absolute top-4 left-4 z-20 flex flex-col items-start">
        <img 
          src="lovable-uploads/56035934-50f1-4d36-a35b-b949c705bbdc.png" 
          alt="AHQ Logo" 
          className="h-24 object-contain"
        />
      </div>

      <section className="relative h-screen flex items-center justify-center pt-48">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{
            backgroundImage: `url('lovable-uploads/64bba5c1-728c-458c-ba31-c85d5659ee4d.png')`
          }}
        />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 mt-16">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Soluções Inteligentes para Recursos Hídricos
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white mb-6 max-w-4xl mx-auto">
            Desenvolvemos soluções inovadoras para o monitoramento e gestão de recursos hídricos, 
            integrando tecnologia de ponta com expertise ambiental para garantir a sustentabilidade 
            e eficiência no setor elétrico brasileiro.
          </p>
          <p className="text-sm sm:text-base text-white mb-10 max-w-3xl mx-auto">
            Nossa missão é transformar a gestão de recursos hídricos através de tecnologia avançada 
            e conhecimento especializado, proporcionando soluções que garantam a sustentabilidade e 
            eficiência operacional no setor elétrico.
          </p>
          <ActionButtons onContactClick={() => setIsContactOpen(true)} />
        </div>
      </section>

      <ServicesSection />
      <ContactDialog isOpen={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>
  );
};

export default Index;