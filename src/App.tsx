import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Blog } from "./pages/Blog";
import { BlogDetail } from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";
import { ServicesProvider } from "./contexts/ServicesContext";
import { ServicesModal } from "./components/ServicesModal";
import { useServices } from "./contexts/ServicesContext";

const queryClient = new QueryClient();

const AppContent = () => {
  const { selectedService, isModalOpen, closeServiceModal } = useServices();
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ServicesModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeServiceModal}
      />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ServicesProvider>
        <AppContent />
      </ServicesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
