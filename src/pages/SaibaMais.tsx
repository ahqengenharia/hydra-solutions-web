import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SaibaMais = () => {
  const navigate = useNavigate();
  const videoUrl = "https://drive.google.com/file/d/1B2galv6bSUhwJamfT5uRQ28Y-6U_anoE/preview";

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

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-4xl font-bold text-[#8B5CF6] mb-8">
          Quem Somos
        </h1>

        {/* Video Section */}
        <div className="w-full aspect-video mb-12 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={videoUrl}
            allow="autoplay"
            className="w-full h-full"
            allowFullScreen
          />
        </div>

        <div className="space-y-16">
          {/* Missão, Visão e Valores */}
          <section className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-[#8B5CF6] mb-4">Nossa Missão</h2>
              <p className="text-gray-700 leading-relaxed">
                Fornecer soluções técnicas e consultoria especializada para otimizar o uso dos recursos hídricos, 
                considerando os aspectos técnicos, ambientais e sociais relacionados.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-[#8B5CF6] mb-4">Nossa Visão</h2>
              <p className="text-gray-700 leading-relaxed">
                Ser a empresa de engenharia referência em serviços de análise de informações hídricas, 
                auxiliando organizações a tomarem decisões informadas e sustentáveis sobre o uso da água.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-[#8B5CF6] mb-4">Nossos Valores</h2>
              <p className="text-gray-700 leading-relaxed">
                Tecnologia, inovação, eficiência, sustentabilidade e compromisso com a sociedade.
              </p>
            </div>
          </section>

          {/* Nossos Serviços */}
          <section>
            <h2 className="text-3xl font-bold text-[#8B5CF6] mb-8">Nossos Serviços</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Gestão de Recursos Hídricos</h3>
                <p className="text-gray-700">
                  Análise de dados de monitoramento, estudos hidrológicos e apoio à tomada de decisão.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Engenharia Ambiental</h3>
                <p className="text-gray-700">
                  Estudos e implantação de programas ambientais, análise de qualidade da água e efluentes.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Capacitação Profissional</h3>
                <p className="text-gray-700">
                  Treinamentos e workshops para o mercado de águas e energia.
                </p>
              </div>
            </div>
          </section>

          {/* Nosso Diferencial */}
          <section>
            <h2 className="text-3xl font-bold text-[#8B5CF6] mb-8">Nosso Diferencial</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Tecnologia e Inovação</h3>
                <p className="text-gray-700">
                  Utilizamos inteligência artificial, aprendizado de máquina, computação em nuvem e ciência 
                  de dados para obter informações hídricas confiáveis e em tempo hábil.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Expertise em Recursos Hídricos</h3>
                <p className="text-gray-700">
                  Nossa equipe multidisciplinar possui amplo conhecimento em engenharia ambiental, hidrologia 
                  e química, gerando soluções criativas e eficazes.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Foco no Cliente</h3>
                <p className="text-gray-700">
                  Nosso objetivo é auxiliar organizações a tomarem decisões informadas e sustentáveis sobre o 
                  uso da água, promovendo a eficiência e a preservação dos recursos hídricos.
                </p>
              </div>
            </div>
          </section>

          {/* Impacto da Informação Hídrica */}
          <section>
            <h2 className="text-3xl font-bold text-[#8B5CF6] mb-8">Impacto da Informação Hídrica</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Segurança de Ativos</h3>
                <p className="text-gray-700">
                  Informações hídricas confiáveis garantem a segurança e a integridade dos seus ativos de 
                  geração de energia.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Eficiência Operacional</h3>
                <p className="text-gray-700">
                  Otimize o uso da água e reduza custos operacionais com base em dados precisos e em tempo real.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Tomada de Decisão Assertiva</h3>
                <p className="text-gray-700">
                  Tome decisões informadas sobre o uso dos recursos hídricos, promovendo a sustentabilidade 
                  do seu negócio.
                </p>
              </div>
            </div>
          </section>

          {/* Nossos Clientes */}
          <section>
            <h2 className="text-3xl font-bold text-[#8B5CF6] mb-8">Nossos Clientes</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Setor Elétrico</h3>
                <p className="text-gray-700">
                  Soluções para geração de energia hidrelétrica.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Saneamento Básico</h3>
                <p className="text-gray-700">
                  Serviços de análise e gestão de recursos hídricos.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Indústria</h3>
                <p className="text-gray-700">
                  Consultoria em química e tratamento de efluentes.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Meio Ambiente</h3>
                <p className="text-gray-700">
                  Estudos e programas ambientais em bacias hidrográficas.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SaibaMais;
