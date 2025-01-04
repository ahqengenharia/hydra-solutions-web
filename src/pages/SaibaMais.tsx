import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SaibaMais = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Button
        variant="ghost"
        className="m-4"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="mr-2" />
        Voltar
      </Button>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#8B5CF6] mb-8">
          Soluções Inteligentes para Recursos Hídricos
        </h1>

        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#8B5CF6] mb-4">
              Nossa Missão
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A AHQ Soluções Ambientais é uma empresa especializada em consultoria ambiental, com foco em recursos hídricos e monitoramento ambiental. Nossa missão é fornecer soluções inovadoras e sustentáveis para o setor elétrico, garantindo a conformidade ambiental e a otimização dos recursos naturais.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#8B5CF6] mb-4">
              Nossos Serviços
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>Monitoramento hidrológico e sedimentométrico</li>
              <li>Estudos de viabilidade ambiental</li>
              <li>Licenciamento ambiental</li>
              <li>Gestão de recursos hídricos</li>
              <li>Desenvolvimento de sistemas de monitoramento</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#8B5CF6] mb-4">
              Diferenciais
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium text-[#8B5CF6] mb-2">
                  Expertise Técnica
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Equipe altamente qualificada</li>
                  <li>Tecnologia de ponta</li>
                  <li>Metodologias inovadoras</li>
                  <li>Experiência comprovada</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#8B5CF6] mb-2">
                  Compromisso com Resultados
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Atendimento personalizado</li>
                  <li>Soluções sob medida</li>
                  <li>Suporte contínuo</li>
                  <li>Excelência em serviços</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SaibaMais;