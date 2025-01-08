import { Card } from "@/components/ui/card";

export const ServicesSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nossos Serviços e Soluções
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Monitoramento Inteligente
            </h3>
            <p className="text-gray-600">
              Sistema avançado de monitoramento em tempo real para recursos hídricos, 
              utilizando tecnologia IoT e análise de dados para otimizar a gestão hídrica.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Gestão Ambiental
            </h3>
            <p className="text-gray-600">
              Soluções integradas para gestão ambiental, incluindo monitoramento de qualidade 
              da água, vazão e sedimentos, com foco em sustentabilidade.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Consultoria Especializada
            </h3>
            <p className="text-gray-600">
              Assessoria técnica especializada em recursos hídricos, oferecendo suporte 
              para compliance ambiental e otimização de processos.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Soluções Tecnológicas
            </h3>
            <p className="text-gray-600">
              Desenvolvimento e implementação de sistemas personalizados para gestão 
              de recursos hídricos, incluindo automação e análise preditiva.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};