import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

// Code-split secondary routes so the initial load only ships the homepage bundle
const Practice = lazy(() => import("./pages/Practice"));
const Atelier = lazy(() => import("./pages/Atelier"));
const Concierge = lazy(() => import("./pages/Concierge"));
const BeforeAfter = lazy(() => import("./pages/BeforeAfter"));
const MeetUs = lazy(() => import("./pages/MeetUs"));
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));

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
            <Route path="/practice" element={<Practice />} />
            <Route path="/services" element={<Atelier />} />
            <Route path="/services/:serviceId" element={<Atelier />} />
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
