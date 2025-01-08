import { Button } from "@/components/ui/button";
import { Phone, Info, Database, Leaf, Globe, Users, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ActionButtonsProps {
  onContactClick: () => void;
}

export const ActionButtons = ({ onContactClick }: ActionButtonsProps) => {
  const navigate = useNavigate();

  return (
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
        onClick={() => navigate('/programas-ambientais')}
      >
        <Leaf className="mr-2" />
        Programas Ambientais
      </Button>
      <Button 
        variant="outline"
        className="text-lg px-8 py-6 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-300 hover:text-cyan-300 w-64"
        onClick={() => navigate('/servicos-online')}
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
  );
};