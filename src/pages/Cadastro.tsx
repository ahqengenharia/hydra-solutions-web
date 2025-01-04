import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Cadastro = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulário enviado!",
      description: "Entraremos em contato em breve.",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Fale Conosco
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              id="nome"
              type="text"
              required
              className="mt-1"
              placeholder="Digite seu nome completo"
            />
          </div>
          
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              required
              className="mt-1"
              placeholder="Digite seu e-mail"
            />
          </div>
          
          <div>
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              type="tel"
              required
              className="mt-1"
              placeholder="(XX) XXXXX-XXXX"
            />
          </div>
          
          <div>
            <Label htmlFor="empresa">Empresa</Label>
            <Input
              id="empresa"
              type="text"
              required
              className="mt-1"
              placeholder="Nome da sua empresa"
            />
          </div>
          
          <div>
            <Label htmlFor="mensagem">Mensagem</Label>
            <textarea
              id="mensagem"
              required
              className="mt-1 w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Digite sua mensagem"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;