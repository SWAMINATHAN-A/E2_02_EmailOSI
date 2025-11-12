import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./pages/Introduction";
import VideoIntro from "./pages/VideoIntro";
import Layer7 from "./pages/Layer7";
import Layer6 from "./pages/Layer6";
import Layer5 from "./pages/Layer5";
import Layer4 from "./pages/Layer4";
import Layer3 from "./pages/Layer3";
import Layer2 from "./pages/Layer2";
import Layer1 from "./pages/Layer1";
import ReversePath from "./pages/ReversePath";
import Simulation from "./pages/Simulation";
import Credits from "./pages/Credits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/video-intro" element={<VideoIntro />} />
          <Route path="/layer-7" element={<Layer7 />} />
          <Route path="/layer-6" element={<Layer6 />} />
          <Route path="/layer-5" element={<Layer5 />} />
          <Route path="/layer-4" element={<Layer4 />} />
          <Route path="/layer-3" element={<Layer3 />} />
          <Route path="/layer-2" element={<Layer2 />} />
          <Route path="/layer-1" element={<Layer1 />} />
          <Route path="/reverse-path" element={<ReversePath />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
