import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ContactDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactDialog = ({ isOpen, onOpenChange }: ContactDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Entre em Contato</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nome
            </label>
            <input
              id="name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              placeholder="Seu nome"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              placeholder="seu@email.com"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Mensagem
            </label>
            <textarea
              id="message"
              className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              placeholder="Sua mensagem"
            />
          </div>
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => onOpenChange(false)}
          >
            Enviar Mensagem
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};