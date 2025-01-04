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
              Desenvolver e implementar soluções inovadoras para otimizar o uso de recursos hídricos no setor elétrico, promovendo a sustentabilidade e eficiência operacional.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#8B5CF6] mb-4">
              Serviços Especializados
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>Monitoramento em tempo real de recursos hídricos</li>
              <li>Análise e gestão de dados hidrológicos</li>
              <li>Consultoria técnica especializada</li>
              <li>Desenvolvimento de software personalizado</li>
              <li>Treinamento e capacitação de equipes</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#8B5CF6] mb-4">
              Benefícios
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium text-[#8B5CF6] mb-2">
                  Para o Setor Elétrico
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Otimização da geração de energia</li>
                  <li>Redução de custos operacionais</li>
                  <li>Maior eficiência no uso dos recursos</li>
                  <li>Tomada de decisão baseada em dados</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#8B5CF6] mb-2">
                  Para o Meio Ambiente
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Uso sustentável dos recursos hídricos</li>
                  <li>Preservação dos ecossistemas</li>
                  <li>Redução do impacto ambiental</li>
                  <li>Gestão responsável da água</li>
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