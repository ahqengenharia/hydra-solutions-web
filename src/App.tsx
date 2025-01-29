import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Cadastro from "./pages/Cadastro";
import Equipe from "./pages/Equipe";
import SaibaMais from "./pages/SaibaMais";
import SoftwareRecursos from "./pages/SoftwareRecursos";
import ServicosOnline from "./pages/ServicosOnline";
import ProgramasAmbientais from "./pages/ProgramasAmbientais";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('App component mounted');
    setIsLoaded(true);
    return () => {
      console.log('App component will unmount');
    };
  }, []);

  if (!isLoaded) {
    console.log('App still loading...');
    return null;
  }

  console.log('Rendering App component');
  
  return (
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
            <Route path="/servicos-online" element={<ServicosOnline />} />
            <Route path="/programas-ambientais" element={<ProgramasAmbientais />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;