import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { User, Edit, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  role: string;
  bio: string;
  image: string;
  contact: string;
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
      bio: "Doutor em Engenharia Hidráulica com mais de 15 anos de experiência em gestão de recursos hídricos e projetos hidroelétricos.",
      image: "",
      contact: "mailto:carlos.silva@ahqconsultoria.com.br",
    },
    {
      id: 2,
      name: "Dra. Ana Santos",
      title: "Mestre em Gestão Ambiental",
      role: "Coordenadora de Projetos Ambientais",
      bio: "Especialista em avaliação de impacto ambiental e sustentabilidade em projetos hidroelétricos, com mestrado em Gestão Ambiental.",
      image: "",
      contact: "mailto:ana.santos@ahqconsultoria.com.br",
    },
    {
      id: 3,
      name: "Eng. Roberto Oliveira",
      title: "Especialista em Automação",
      role: "Especialista em Sistemas de Monitoramento",
      bio: "Engenheiro com especialização em sistemas automatizados de monitoramento e controle de barragens.",
      image: "",
      contact: "mailto:roberto.oliveira@ahqconsultoria.com.br",
    },
    {
      id: 4,
      name: "Dra. Marina Costa",
      title: "Doutora em Ciência de Dados",
      role: "Analista de Dados Hídricos",
      bio: "Doutora em Ciência de Dados aplicada a recursos hídricos, especialista em modelagem hidrológica e previsão de vazões.",
      image: "",
      contact: "mailto:marina.costa@ahqconsultoria.com.br",
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
                <div className="flex-1">
                  {editingId === member.id && editingField === 'name' ? (
                    <div className="space-y-2">
                      <Input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="font-semibold"
                      />
                      <Button onClick={() => handleSave(member.id, 'name')} size="sm">
                        Salvar
                      </Button>
                    </div>
                  ) : (
                    <CardTitle 
                      className="text-xl cursor-pointer hover:text-blue-600"
                      onClick={() => handleEdit(member, 'name')}
                    >
                      {member.name}
                    </CardTitle>
                  )}
                  
                  {editingId === member.id && editingField === 'title' ? (
                    <div className="space-y-2">
                      <Input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <Button onClick={() => handleSave(member.id, 'title')} size="sm">
                        Salvar
                      </Button>
                    </div>
                  ) : (
                    <p 
                      className="text-sm text-blue-600 cursor-pointer hover:text-blue-800"
                      onClick={() => handleEdit(member, 'title')}
                    >
                      {member.title}
                    </p>
                  )}
                  
                  {editingId === member.id && editingField === 'role' ? (
                    <div className="space-y-2">
                      <Input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <Button onClick={() => handleSave(member.id, 'role')} size="sm">
                        Salvar
                      </Button>
                    </div>
                  ) : (
                    <p 
                      className="text-sm text-gray-600 cursor-pointer hover:text-gray-800"
                      onClick={() => handleEdit(member, 'role')}
                    >
                      {member.role}
                    </p>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {editingId === member.id && editingField === 'bio' ? (
                  <div className="space-y-4">
                    <Textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <Button onClick={() => handleSave(member.id, 'bio')} className="w-full">
                      Salvar
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-600">{member.bio}</p>
                    <Button
                      variant="outline"
                      onClick={() => handleEdit(member, 'bio')}
                      className="w-full"
                    >
                      Editar Currículo
                    </Button>
                  </div>
                )}
                <div className="mt-4 flex justify-center">
                  <QRCodeSVG
                    value={member.contact}
                    size={128}
                    level="H"
                    includeMargin={true}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipe;