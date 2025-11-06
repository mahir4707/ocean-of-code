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
              d="M12 2L4 8L12 14L20 8L12 2Z" 
              fill="url(#icebergGradient)" 
              opacity="0.9"
            />
            <path 
              d="M4 16L12 22L20 16" 
              fill="url(#icebergGradient)" 
              opacity="0.6"
            />
            <defs>
              <linearGradient id="icebergGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
              className="w-6 h-6 relative z-10" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="12" cy="18" rx="8" ry="4" fill="url(#jellyfishGradient)" opacity="0.3"/>
              <path 
                d="M12 4C14 4 16 6 16 9C16 12 14 14 12 18C10 14 8 12 8 9C8 6 10 4 12 4Z" 
                fill="url(#jellyfishGradient)" 
                opacity="0.8"
              />
              <path d="M10 18L9 22M12 18L12 22M14 18L15 22" stroke="url(#jellyfishGradient)" strokeWidth="1.5" opacity="0.6"/>
              <defs>
                <linearGradient id="jellyfishGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
