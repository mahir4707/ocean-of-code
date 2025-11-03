import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-card shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">
          <span className="text-gradient">PORTFOLIO</span>
        </h1>
        
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            CONTACT
          </button>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="glass-card border-accent/30 hover:border-accent hover:glow"
        >
          MENU
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
