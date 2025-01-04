import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cadastro from "./pages/Cadastro";
import Equipe from "./pages/Equipe";
import SaibaMais from "./pages/SaibaMais";
import SoftwareRecursos from "./pages/SoftwareRecursos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/saiba-mais" element={<SaibaMais />} />
          <Route path="/software-recursos" element={<SoftwareRecursos />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;