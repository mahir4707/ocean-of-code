import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scroll setup
    gsap.to("body", { duration: 0 });
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ToolsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
