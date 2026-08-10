import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import { lazyWithRetry } from "@/lib/lazyWithRetry";

// Code-split secondary routes so the initial load only ships the homepage bundle

const Atelier = lazyWithRetry(() => import("./pages/Atelier"));
const Concierge = lazyWithRetry(() => import("./pages/Concierge"));
const BeforeAfter = lazyWithRetry(() => import("./pages/BeforeAfter"));
const MeetUs = lazyWithRetry(() => import("./pages/MeetUs"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));
const About = lazyWithRetry(() => import("./pages/About"));


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/meet-us" element={<MeetUs />} />
            
            <Route path="/services" element={<Atelier />} />
            <Route path="/services/:serviceId" element={<Atelier />} />
            <Route path="/about" element={<About />} />
            <Route path="/before-after" element={<BeforeAfter />} />
            <Route path="/concierge" element={<Concierge />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
