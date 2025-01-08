import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TeamMemberCard } from "@/components/TeamMemberCard";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  role: string;
  bio: string;
  image: string;
  contact: string;
  qrCodeImage?: string;
}

const Equipe = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: "Dr. Carlos Silva",
      title: "Doutor em Engenharia Hidráulica",
      role: "Diretor de Engenharia Hídrica",
      bio: "Doutor em Engenharia Hidráulica com mais de 15 anos de experiência em gestão de recursos hídricos e projetos hidroelétricos. Especialista em modelagem hidráulica e hidrológica, com foco em otimização de sistemas hídricos e avaliação de impactos ambientais.",
      image: "",
      contact: "carlos.silva@ahqconsultoria.com.br",
    },
    {
      id: 2,
      name: "Dra. Ana Santos",
      title: "Mestre em Gestão Ambiental",
      role: "Coordenadora de Projetos Ambientais",
      bio: "Especialista em avaliação de impacto ambiental e sustentabilidade em projetos hidroelétricos, com mestrado em Gestão Ambiental. Possui vasta experiência em licenciamento ambiental e desenvolvimento de programas de monitoramento ambiental.",
      image: "",
      contact: "ana.santos@ahqconsultoria.com.br",
    },
    {
      id: 3,
      name: "Eng. Roberto Oliveira",
      title: "Especialista em Automação",
      role: "Especialista em Sistemas de Monitoramento",
      bio: "Engenheiro com especialização em sistemas automatizados de monitoramento e controle de barragens. Experiência em implementação de sistemas SCADA e desenvolvimento de soluções para monitoramento em tempo real.",
      image: "",
      contact: "roberto.oliveira@ahqconsultoria.com.br",
    },
    {
      id: 4,
      name: "Dra. Marina Costa",
      title: "Doutora em Ciência de Dados",
      role: "Analista de Dados Hídricos",
      bio: "Doutora em Ciência de Dados aplicada a recursos hídricos, especialista em modelagem hidrológica e previsão de vazões. Desenvolve análises avançadas utilizando machine learning para otimização de recursos hídricos.",
      image: "",
      contact: "marina.costa@ahqconsultoria.com.br",
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (member: TeamMember, field: string) => {
    setEditingId(member.id);
    setEditingField(field);
    setEditText(member[field as keyof TeamMember] as string);
  };

  const handleSave = (id: number, field: string) => {
    setTeamMembers(members =>
      members.map(member =>
        member.id === id ? { ...member, [field]: editText } : member
      )
    );
    setEditingId(null);
    setEditingField(null);
    toast({
      title: "Atualizado com sucesso",
      description: "As alterações foram salvas.",
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setTeamMembers(members =>
          members.map(member =>
            member.id === id ? { ...member, image: reader.result as string } : member
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleQRCodeUpload = async (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setTeamMembers(members =>
          members.map(member =>
            member.id === id ? { ...member, qrCodeImage: reader.result as string } : member
          )
        );
        toast({
          title: "QR Code atualizado",
          description: "O QR Code foi atualizado com sucesso.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-4 left-4">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>
      </div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Nossa Equipe
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map(member => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <TeamMemberCard
                member={member}
                editingId={editingId}
                editingField={editingField}
                editText={editText}
                onEdit={handleEdit}
                onSave={handleSave}
                onEditText={setEditText}
                onImageUpload={handleImageUpload}
                onQRCodeUpload={handleQRCodeUpload}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipe;