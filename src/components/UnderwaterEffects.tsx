import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const UnderwaterEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Initialize particles
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particlesRef.current.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 220, 255, ${particle.opacity})`;
        ctx.fill();

        // Update position
        particle.y -= particle.speed;
        particle.x += Math.sin(particle.y * 0.01) * 0.5;

        // Reset when particle goes off screen
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <>
      {/* Canvas for floating particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Light rays */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute top-0 w-32 h-full opacity-20 animate-light-ray"
            style={{
              left: `${20 + i * 20}%`,
              background: `linear-gradient(to bottom, rgba(100, 220, 255, 0.4) 0%, transparent 60%)`,
              transform: `skewX(-10deg)`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Bubbles */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-white/30 animate-bubble-rise"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Fish silhouettes */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={`fish-${i}`}
            className="absolute animate-fish-swim opacity-20"
            style={{
              top: `${20 + i * 25}%`,
              animationDelay: `${i * 7}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          >
            <svg
              width="60"
              height="30"
              viewBox="0 0 60 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 15C2 15 10 5 25 5C35 5 45 10 52 15C45 20 35 25 25 25C10 25 2 15 2 15Z"
                fill="currentColor"
                className="text-cyan-300"
              />
              <circle cx="20" cy="12" r="2" fill="white" opacity="0.6" />
              <path
                d="M52 15L58 10L58 20L52 15Z"
                fill="currentColor"
                className="text-cyan-300"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Swaying plants */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-5 h-32">
        {[...Array(8)].map((_, i) => (
          <div
            key={`plant-${i}`}
            className="absolute bottom-0 w-2 animate-sway origin-bottom opacity-30"
            style={{
              left: `${i * 12 + 5}%`,
              height: `${60 + Math.random() * 60}px`,
              background: `linear-gradient(to top, hsl(var(--underwater-deep)), transparent)`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default UnderwaterEffects;
