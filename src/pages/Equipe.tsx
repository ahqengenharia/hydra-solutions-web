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
      name: "Wagner Tristão Vargas",
      title: "Analista Desenvolvedor de Sistemas",
      role: "Web – C# Sql Server",
      bio: "Analista Desenvolvedor de Sistemas especializado em desenvolvimento Web com C# e SQL Server.",
      image: "public/lovable-uploads/979cbb10-ddb9-4165-a9cf-4ac7bd86e394.png",
      contact: "(11) 99322-2853",
      qrCodeImage: "public/lovable-uploads/96dea9b3-b51f-4ecd-9237-b89dd197e68f.png"
    },
    {
      id: 2,
      name: "Luís Gustavo Alves de Lima",
      title: "Engenheiro Ambiental",
      role: "Cofundador da AHQ ENGENHARIA LTDA",
      bio: "Engenheiro Ambiental formado pela UNIFEI (2007). Cofundador da AHQ ENGENHARIA LTDA. MBA em gestão de projetos e saneamento ambiental. linkedin.com/in/luis-gustavo-lima-92491133",
      image: "public/lovable-uploads/2dab84c5-2c95-44e2-968d-e36452183cbc.png",
      contact: "(12) 98826-7109",
      qrCodeImage: "public/lovable-uploads/5b04de97-a4f9-451a-b03d-09ca4759eec9.png"
    },
    {
      id: 3,
      name: "Kauan Casemiro",
      title: "Tecnologia em Análise e Desenvolvimento de Sistemas",
      role: "Cursando Anhanguera (2021)",
      bio: "Cursando Tecnologia em Análise e Desenvolvimento de Sistemas pela Anhanguera (2021)",
      image: "public/lovable-uploads/676d7ff5-29b6-4d87-b508-68710d90e36d.png",
      contact: "(11) 91702-7356",
      qrCodeImage: "public/lovable-uploads/33966ab6-04cc-49af-b0b3-70e62331b4a2.png"
    },
    {
      id: 4,
      name: "Fabiano Alves de Lima",
      title: "Engenheiro Hídrico",
      role: "Fundador da AHQ ENGENHARIA LTDA",
      bio: "Engenheiro Hídrico formado pela UNIFEI (2007). Fundador da AHQ ENGENHARIA LTDA. Especializado em recursos hídricos voltados para o setor elétrico. linkedin.com/in/fabiano-alves-de-lima-23432435",
      image: "public/lovable-uploads/ab6600fc-fa87-43ea-93a7-be5954410309.png",
      contact: "(11) 98616-2105",
      qrCodeImage: "public/lovable-uploads/9f09d792-1ced-4efd-af4b-626c92be5ffb.png"
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