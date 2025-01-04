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
          <h2 className="text-3xl font-bold text-[#1F2937] mb-8">PROBLEMA</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img 
              src="/lovable-uploads/42cd7ecf-459c-457c-af0c-c7a0087afe74.png" 
              alt="Barragem" 
              className="rounded-lg shadow-lg w-full"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#4B5563] mb-4">Monitoramentos:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Pluviométrico, (precipitação)</li>
                <li>• Fluviométrico, (níveis e vazões dos rios)</li>
                <li>• Limnimétrico, (níveis dos reservatórios)</li>
                <li>• Sedimentométrico, (materiais sólidos presentes na água)</li>
                <li>• Defluência, (vazão após o turbinamento + vazão por dispositivos extravasores)</li>
                <li>• Qualidade da água e</li>
                <li>• Acompanhamento do assoreamento de reservatórios.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Atores Envolvidos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-8">Os Atores Envolvidos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-red-700 text-white p-4 text-center rounded-t-lg">
                <h3 className="text-xl font-semibold">Empreendedores</h3>
              </div>
              <img 
                src="/lovable-uploads/d4835fe8-6772-4d82-8522-a515f7e784ee.png" 
                alt="Empreendedores" 
                className="w-full h-64 object-cover rounded-b-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="bg-red-700 text-white p-4 text-center rounded-t-lg">
                <h3 className="text-xl font-semibold">Órgãos Reguladores</h3>
              </div>
              <img 
                src="/lovable-uploads/d4835fe8-6772-4d82-8522-a515f7e784ee.png" 
                alt="Órgãos Reguladores" 
                className="w-full h-64 object-cover rounded-b-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="bg-red-700 text-white p-4 text-center rounded-t-lg">
                <h3 className="text-xl font-semibold">Sociedade</h3>
              </div>
              <img 
                src="/lovable-uploads/d4835fe8-6772-4d82-8522-a515f7e784ee.png" 
                alt="Sociedade" 
                className="w-full h-64 object-cover rounded-b-lg shadow-lg"
              />
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