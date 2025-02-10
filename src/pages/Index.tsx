
import { useState, useEffect } from "react";
import { ContactInfo } from "@/components/ContactInfo";
import { ActionButtons } from "@/components/ActionButtons";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactDialog } from "@/components/ContactDialog";
import { format } from "date-fns";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visitCount, setVisitCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Update clock every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Increment visit counter
    const currentCount = parseInt(localStorage.getItem('visitCount') || '0');
    setVisitCount(currentCount + 1);
    localStorage.setItem('visitCount', (currentCount + 1).toString());

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#8B5CF6]">
      {/* Header with Clock and Visit Counter */}
      <div className="fixed top-0 left-0 right-0 bg-white/90 p-4 flex justify-between items-center z-30 shadow-lg">
        <div className="flex items-center space-x-8">
          {/* Site Map Navigation */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Mapa do Site</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink 
                      className="cursor-pointer hover:bg-violet-100 p-2 rounded"
                      onClick={() => navigate('/')}
                    >
                      Início
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      className="cursor-pointer hover:bg-violet-100 p-2 rounded"
                      onClick={() => navigate('/saiba-mais')}
                    >
                      Saiba Mais
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      className="cursor-pointer hover:bg-violet-100 p-2 rounded"
                      onClick={() => navigate('/software-recursos')}
                    >
                      Softwares e Recursos
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      className="cursor-pointer hover:bg-violet-100 p-2 rounded"
                      onClick={() => navigate('/programas-ambientais')}
                    >
                      Programas Ambientais
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      className="cursor-pointer hover:bg-violet-100 p-2 rounded"
                      onClick={() => navigate('/servicos-online')}
                    >
                      Serviços Online
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      className="cursor-pointer hover:bg-violet-100 p-2 rounded"
                      onClick={() => navigate('/equipe')}
                    >
                      Nossa Equipe
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Clock and Visit Counter */}
        <div className="flex items-center space-x-8">
          <div className="text-xl font-mono text-violet-800">
            {format(currentTime, 'dd/MM/yyyy HH:mm:ss')}
          </div>
          <div className="text-sm text-violet-600">
            Visitas: {visitCount}
          </div>
        </div>
      </div>

      {/* Add padding to account for fixed header */}
      <div className="pt-20">
        <ContactInfo />

        {/* Logo with improved visibility */}
        <div className="absolute top-24 left-4 z-20 flex flex-col items-start">
          <div className="bg-white/95 p-6 rounded-lg shadow-lg">
            <img 
              src="lovable-uploads/56035934-50f1-4d36-a35b-b949c705bbdc.png" 
              alt="AHQ Logo" 
              className="h-40 w-auto object-contain"
            />
          </div>
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
    </div>
  );
};

export default Index;

