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

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1
          className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-black tracking-wider opacity-10 select-none"
          style={{
            color: "rgba(255, 255, 255, 0.1)",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          DISCIPLINE
        </h1>
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 text-center px-6">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-2xl">
          Welcome to the
          <span className="block mt-2 text-gradient">Deep End</span>
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
