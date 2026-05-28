import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import BuilderPortal from "./pages/BuilderPortal.tsx";
import TechStack from "./pages/TechStack.tsx";
import ObsidianGuide from "./pages/ObsidianGuide.tsx";
import MarkdownGuide from "./pages/MarkdownGuide.tsx";
import TeachingSpec from "./pages/TeachingSpec.tsx";
import LessonTemplate from "./pages/LessonTemplate.tsx";
import ThinkingEssence from "./pages/ThinkingEssence.tsx";
import FiveMinSOP from "./pages/FiveMinSOP.tsx";
import ProjectsMatrix from "./pages/ProjectsMatrix.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/builder" element={<BuilderPortal />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/learn/obsidian" element={<ObsidianGuide />} />
          <Route path="/learn/markdown" element={<MarkdownGuide />} />
          <Route path="/teaching-spec" element={<TeachingSpec />} />
          <Route path="/lesson-template" element={<LessonTemplate />} />
          <Route path="/thinking/essence" element={<ThinkingEssence />} />
          <Route path="/playbook/5min-sop" element={<FiveMinSOP />} />
          <Route path="/projects" element={<ProjectsMatrix />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
