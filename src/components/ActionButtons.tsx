
import { Button } from "@/components/ui/button";
import { Phone, Info, Database, Leaf, Globe, Users, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface ActionButtonsProps {
  onContactClick: () => void;
}

export const ActionButtons = ({ onContactClick }: ActionButtonsProps) => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Conheça mais sobre nosso trabalho</DialogTitle>
          </DialogHeader>
          <div className="relative pt-[56.25%] w-full">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://drive.google.com/file/d/1_Y7_oN7Je0rEUAjv4W89gwoclOvZP4zZ/preview" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>

      <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap max-w-6xl mx-auto px-4">
        <Button 
          variant="secondary"
          className="text-lg px-8 py-6 bg-white text-[#8B5CF6] hover:bg-gray-100 hover:scale-105 transition-all duration-200 w-full sm:w-64"
          onClick={() => {
            setShowVideo(true);
            navigate('/saiba-mais');
          }}
        >
          <Info className="mr-2" />
          Saiba Mais
        </Button>
        
        <Button 
          variant="outline"
          className="text-lg px-8 py-6 border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 hover:border-blue-300 hover:text-blue-300 hover:scale-105 transition-all duration-200 w-full sm:w-64"
          onClick={() => navigate('/software-recursos')}
        >
          <Database className="mr-2" />
          Softwares e Recursos
        </Button>

        <Button 
          variant="outline"
          className="text-lg px-8 py-6 border-2 border-green-400 text-green-400 hover:bg-green-400/10 hover:border-green-300 hover:text-green-300 hover:scale-105 transition-all duration-200 w-full sm:w-64"
          onClick={() => navigate('/programas-ambientais')}
        >
          <Leaf className="mr-2" />
          Programas Ambientais
        </Button>

        <Button 
          variant="outline"
          className="text-lg px-8 py-6 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-300 hover:text-cyan-300 hover:scale-105 transition-all duration-200 w-full sm:w-64"
          onClick={() => navigate('/servicos-online')}
        >
          <Globe className="mr-2" />
          Serviços Online
        </Button>

        <Button 
          variant="outline"
          className="text-lg px-8 py-6 border-2 border-orange-400 text-orange-400 hover:bg-orange-400/10 hover:scale-105 transition-all duration-200 w-full sm:w-64"
          onClick={() => navigate('/cadastro')}
        >
          <MessageSquare className="mr-2" />
          Fale Conosco
        </Button>

        <Button 
          variant="outline"
          className="text-lg px-8 py-6 border-2 border-blue-300 text-blue-300 hover:bg-blue-300/10 hover:scale-105 transition-all duration-200 w-full sm:w-64"
          onClick={() => navigate('/equipe')}
        >
          <Users className="mr-2" />
          Nossa Equipe
        </Button>
      </div>
    </>
  );
};
