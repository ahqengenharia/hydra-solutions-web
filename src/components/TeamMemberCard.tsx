import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Edit } from "lucide-react";

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

interface TeamMemberCardProps {
  member: TeamMember;
  editingId: number | null;
  editingField: string | null;
  editText: string;
  onEdit: (member: TeamMember, field: string) => void;
  onSave: (id: number, field: string) => void;
  onEditText: (text: string) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  onQRCodeUpload: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

export const TeamMemberCard = ({
  member,
  editingId,
  editingField,
  editText,
  onEdit,
  onSave,
  onEditText,
  onImageUpload,
  onQRCodeUpload
}: TeamMemberCardProps) => {
  return (
    <div className="space-y-4">
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
              onChange={(e) => onImageUpload(e, member.id)}
            />
            <Edit className="h-4 w-4 text-gray-500" />
          </label>
        </div>
        <div className="flex-1">
          {editingId === member.id && editingField === 'name' ? (
            <div className="space-y-2">
              <Input
                value={editText}
                onChange={(e) => onEditText(e.target.value)}
                className="font-semibold"
              />
              <Button onClick={() => onSave(member.id, 'name')} size="sm">
                Salvar
              </Button>
            </div>
          ) : (
            <CardTitle 
              className="text-xl cursor-pointer hover:text-blue-600"
              onClick={() => onEdit(member, 'name')}
            >
              {member.name}
            </CardTitle>
          )}
          
          {editingId === member.id && editingField === 'title' ? (
            <div className="space-y-2">
              <Input
                value={editText}
                onChange={(e) => onEditText(e.target.value)}
              />
              <Button onClick={() => onSave(member.id, 'title')} size="sm">
                Salvar
              </Button>
            </div>
          ) : (
            <p 
              className="text-sm text-blue-600 cursor-pointer hover:text-blue-800"
              onClick={() => onEdit(member, 'title')}
            >
              {member.title}
            </p>
          )}
          
          {editingId === member.id && editingField === 'role' ? (
            <div className="space-y-2">
              <Input
                value={editText}
                onChange={(e) => onEditText(e.target.value)}
              />
              <Button onClick={() => onSave(member.id, 'role')} size="sm">
                Salvar
              </Button>
            </div>
          ) : (
            <p 
              className="text-sm text-gray-600 cursor-pointer hover:text-gray-800"
              onClick={() => onEdit(member, 'role')}
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
              onChange={(e) => onEditText(e.target.value)}
              className="min-h-[100px]"
            />
            <Button onClick={() => onSave(member.id, 'bio')} className="w-full">
              Salvar
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-600">{member.bio}</p>
            <Button
              variant="outline"
              onClick={() => onEdit(member, 'bio')}
              className="w-full"
            >
              Editar Currículo
            </Button>
          </div>
        )}
        <div className="mt-4 flex flex-col items-center gap-2">
          {member.qrCodeImage ? (
            <img 
              src={member.qrCodeImage} 
              alt="QR Code" 
              className="w-32 h-32"
            />
          ) : (
            <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <p className="text-sm text-gray-500">Sem QR Code</p>
            </div>
          )}
          <label
            htmlFor={`qrcode-${member.id}`}
            className="cursor-pointer text-sm text-blue-600 hover:text-blue-800"
          >
            <input
              type="file"
              id={`qrcode-${member.id}`}
              className="hidden"
              accept="image/*"
              onChange={(e) => onQRCodeUpload(e, member.id)}
            />
            Upload QR Code
          </label>
        </div>
      </CardContent>
    </div>
  );
};