import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { User, Edit, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const Equipe = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: "Dr. Carlos Silva",
      role: "Diretor de Engenharia Hídrica",
      bio: "Doutor em Engenharia Hidráulica com mais de 15 anos de experiência em gestão de recursos hídricos e projetos hidroelétricos.",
      image: "",
    },
    {
      id: 2,
      name: "Dra. Ana Santos",
      role: "Coordenadora de Projetos Ambientais",
      bio: "Especialista em avaliação de impacto ambiental e sustentabilidade em projetos hidroelétricos, com mestrado em Gestão Ambiental.",
      image: "",
    },
    {
      id: 3,
      name: "Eng. Roberto Oliveira",
      role: "Especialista em Sistemas de Monitoramento",
      bio: "Engenheiro com especialização em sistemas automatizados de monitoramento e controle de barragens.",
      image: "",
    },
    {
      id: 4,
      name: "Dra. Marina Costa",
      role: "Analista de Dados Hídricos",
      bio: "Doutora em Ciência de Dados aplicada a recursos hídricos, especialista em modelagem hidrológica e previsão de vazões.",
      image: "",
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (member: TeamMember) => {
    setEditingId(member.id);
    setEditText(member.bio);
  };

  const handleSave = (id: number) => {
    setTeamMembers(members =>
      members.map(member =>
        member.id === id ? { ...member, bio: editText } : member
      )
    );
    setEditingId(null);
    toast({
      title: "Currículo atualizado",
      description: "As alterações foram salvas com sucesso.",
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const file = e.target.files?.[0];
    if (file) {
      // Simulating image upload - in a real app, you'd upload to a server
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
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    {member.image ? (
                      <AvatarImage src={member.image} alt={member.name} />
                    ) : (
                      <AvatarFallback>
                        <User className="h-10 w-10" />
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <label
                    htmlFor={`image-${member.id}`}
                    className="absolute bottom-0 right-0 p-1 bg-white rounded-full shadow-lg cursor-pointer"
                  >
                    <input
                      type="file"
                      id={`image-${member.id}`}
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, member.id)}
                    />
                    <Edit className="h-4 w-4 text-gray-500" />
                  </label>
                </div>
                <div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-sm text-blue-600">{member.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                {editingId === member.id ? (
                  <div className="space-y-4">
                    <Textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <Button
                      onClick={() => handleSave(member.id)}
                      className="w-full"
                    >
                      Salvar
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-600">{member.bio}</p>
                    <Button
                      variant="outline"
                      onClick={() => handleEdit(member)}
                      className="w-full"
                    >
                      Editar Currículo
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipe;
