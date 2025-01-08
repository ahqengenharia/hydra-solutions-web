import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicosOnline = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#8B5CF6] flex flex-col items-center justify-center relative">
      <Button
        variant="ghost"
        className="absolute top-4 left-4 text-white hover:bg-white/20"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="mr-2" />
        Voltar
      </Button>
      <h1 className="text-5xl font-bold text-white text-center">
        EM DESENVOLVIMENTO
      </h1>
    </div>
  );
};

export default ServicosOnline;