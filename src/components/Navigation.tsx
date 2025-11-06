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
        <h1 className="text-2xl font-bold tracking-wider flex items-center gap-3">
          <svg 
            className="w-8 h-8" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 2L2 7L12 12L22 7L12 2Z" 
              fill="url(#waveGradient)" 
              opacity="0.8"
            />
            <path 
              d="M2 17L12 22L22 17" 
              stroke="url(#waveGradient)" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
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

        <div className="w-10 h-10 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-full animate-pulse"></div>
            <svg 
              className="w-6 h-6 relative z-10 animate-wave" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M2 12C2 12 5 8 8 12C11 16 13 8 16 12C19 16 22 12 22 12" 
                stroke="url(#compassGradient)" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="compassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
