
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

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
}

export const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div className="space-y-4">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-20 w-20">
          {member.image ? (
            <AvatarImage src={member.image} alt={member.name} />
          ) : (
            <AvatarFallback>
              <User className="h-10 w-10" />
            </AvatarFallback>
          )}
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-xl">{member.name}</CardTitle>
          <p className="text-sm text-blue-600">{member.title}</p>
          <p className="text-sm text-gray-600">{member.role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-600">{member.bio}</p>
        </div>
        <div className="mt-4 flex justify-center">
          {member.qrCodeImage && (
            <img 
              src={member.qrCodeImage} 
              alt="QR Code" 
              className="w-32 h-32"
            />
          )}
        </div>
      </CardContent>
    </div>
  );
};
