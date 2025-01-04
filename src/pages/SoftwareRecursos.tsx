import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SoftwareRecursos = () => {
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
        <h1 className="text-4xl font-bold text-[#8B5CF6] mb-12">
          Software e Recursos
        </h1>

        {/* Problema e Monitoramento */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-8">O PROBLEMA QUE VAMOS RESOLVER:</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="w-full">
              <img 
                src="/lovable-uploads/42cd7ecf-459c-457c-af0c-c7a0087afe74.png" 
                alt="Barragem" 
                className="rounded-xl shadow-lg w-full h-auto object-cover max-h-[500px]"
              />
            </div>
            <div className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm">
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consistência de Dados hidrológicos por plataforma SAAS com uso de IA</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Levantamento de DADOS PARA USINAS HIDRELÉTRICAS, SANEAMENTO E CONSTRUÇÃO</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Modelagem de curva chave</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Gestão de Dados para Empreendimentos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Gestão de Ativos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Garantia Física</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Proposta de Valor */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-8">PROPOSTA DE VALOR</h2>
          <img 
            src="/lovable-uploads/2f5e278e-f6a6-4a6e-a81d-2728ba777d74.png" 
            alt="Proposta de Valor" 
            className="w-full rounded-lg shadow-lg mb-8"
          />
        </section>

        {/* Arquitetura do Sistema */}
        <section>
          <h2 className="text-3xl font-bold text-[#1F2937] mb-8">Arquitetura do Sistema</h2>
          <img 
            src="/lovable-uploads/ae164650-a423-4cde-8737-8dcb423ded2a.png" 
            alt="Arquitetura do Sistema" 
            className="w-full rounded-lg shadow-lg"
          />
        </section>
      </div>
    </div>
  );
};

export default SoftwareRecursos;