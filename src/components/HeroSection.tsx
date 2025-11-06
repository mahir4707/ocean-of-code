import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImage from "@/assets/hero-iceberg.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 200,
        opacity: 0.3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>

      {/* Enhanced Larger and Brighter Sun */}
      <div className="absolute top-12 right-1/4 w-64 h-64 bg-yellow-100/50 rounded-full blur-3xl"></div>
      <div className="absolute top-8 right-1/4 w-48 h-48 bg-yellow-50/60 rounded-full blur-2xl"></div>
      <div className="absolute top-10 right-1/4 w-32 h-32 bg-white/40 rounded-full blur-xl"></div>
      
      {/* Sunlight reflection on water */}
      <div className="absolute top-1/3 right-1/4 w-96 h-2 bg-yellow-100/20 rounded-full blur-2xl transform rotate-12"></div>

      {/* Single DISCIPLINE Text - Centered, Top Half Visible */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: '-15%' }}>
        <h1
          className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-black tracking-wider select-none"
          style={{
            color: "rgba(255, 255, 255, 0.25)",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          DISCIPLINE
        </h1>
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 text-center px-6">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-2xl">
          <span className="block text-gradient" style={{ textShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}>
            Hello, Deep Thinker.
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
          Dive into a world of creativity, discipline, and innovation
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
