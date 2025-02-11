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
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const currentCount = parseInt(localStorage.getItem('visitCount') || '0');
    setVisitCount(currentCount + 1);
    localStorage.setItem('visitCount', (currentCount + 1).toString());

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#8B5CF6] relative">
      <div className="pt-4">
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-white/98 p-2 rounded-lg shadow-sm">
            <img 
              src="lovable-uploads/2dbb99b7-ea6c-49df-8d15-b6fcbba9660d.png" 
              alt="AHQ Logo" 
              className="h-[40px] w-auto object-contain"
            />
          </div>
        </div>

        <ContactInfo />

        <section className="relative h-screen flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
            style={{
              backgroundImage: `url('lovable-uploads/64bba5c1-728c-458c-ba31-c85d5659ee4d.png')`
            }}
          />
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 mt-32">
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

        <footer className="bg-white/90 p-4 mt-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-auto">
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

            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="text-xl font-mono text-violet-800">
                {format(currentTime, 'dd/MM/yyyy HH:mm:ss')}
              </div>
              <div className="text-sm text-violet-600">
                Visitas: {visitCount}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
