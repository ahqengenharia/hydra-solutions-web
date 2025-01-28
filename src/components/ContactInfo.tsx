import { Phone, MapPin, Mail } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="absolute top-4 right-4 text-sm text-white text-right z-20">
      <div className="flex items-center justify-end gap-2 mb-2">
        <span className="text-[#FF9933] font-semibold">Contato:</span>
        <Phone className="h-4 w-4" />
        <div>
          <p>11 98616-2105</p>
          <p>12 98826 7109</p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 mb-2">
        <Mail className="h-4 w-4" />
        <p className="text-[#FF9933]">contato@ahqconsultoriaemengenharia.com.br</p>
      </div>
      <div className="flex items-center justify-end gap-2">
        <MapPin className="h-4 w-4" />
        <p>Rua Benedito Urbano, 403<br />CEP 37502-462</p>
      </div>
    </div>
  );
};