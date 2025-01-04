import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, MapPin, Info, Database, Leaf, Globe, Users, MessageSquare } from "lucide-react";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#8B5CF6]">
      {/* Contact Info */}
      <div className="absolute top-4 right-4 text-sm text-white text-right z-20">
        <div className="flex items-center justify-end gap-2 mb-2">
          <Phone className="h-4 w-4" />
          <div>
            <p>19 3278 1159</p>
            <p>11 98616-2105</p>
            <p>12 98826 7109</p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <MapPin className="h-4 w-4" />
          <p>Rua Benedito Urbano, 403<br />CEP 37502-462</p>
        </div>
      </div>

      {/* Logo and CNPJ */}
      <div className="absolute top-4 left-4 z-20 flex flex-col items-start">
        <img 
          src="lovable-uploads/56035934-50f1-4d36-a35b-b949c705bbdc.png" 
          alt="AHQ Logo" 
          className="h-24 object-contain"
        />
        <p className="text-white text-sm mt-2">CNPJ: 48.776.846.0001-44</p>
      </div>

      {/* Hero Section */}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Button 
              variant="secondary"
              className="text-lg px-8 py-6 bg-white text-[#8B5CF6] hover:bg-gray-100 w-64"
              onClick={() => navigate('/saiba-mais')}
            >
              <Info className="mr-2" />
              Saiba Mais
            </Button>
            <Button 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 hover:border-blue-300 hover:text-blue-300 w-64"
              onClick={() => navigate('/software-recursos')}
            >
              <Database className="mr-2" />
              Softwares e Recursos
            </Button>
            <Button 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-green-400 text-green-400 hover:bg-green-400/10 hover:border-green-300 hover:text-green-300 w-64"
              onClick={() => setIsContactOpen(true)}
            >
              <Leaf className="mr-2" />
              Programas Ambientais
            </Button>
            <Button 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-300 hover:text-cyan-300 w-64"
              onClick={() => setIsContactOpen(true)}
            >
              <Globe className="mr-2" />
              Serviços Online
            </Button>
            <Button 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-orange-400 text-orange-400 hover:bg-orange-400/10 w-64"
              onClick={() => navigate('/cadastro')}
            >
              <MessageSquare className="mr-2" />
              Fale Conosco
            </Button>
            <Button 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-blue-300 text-blue-300 hover:bg-blue-300/10 w-64"
              onClick={() => navigate('/equipe')}
            >
              <Users className="mr-2" />
              Nossa Equipe
            </Button>
          </div>
        </div>
      </section>

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

      {/* Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Entre em Contato</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nome
              </label>
              <input
                id="name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                placeholder="Seu nome"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                placeholder="seu@email.com"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensagem
              </label>
              <textarea
                id="message"
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                placeholder="Sua mensagem"
              />
            </div>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setIsContactOpen(false)}
            >
              Enviar Mensagem
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
