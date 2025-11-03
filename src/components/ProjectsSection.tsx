import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import aiDashboard from "@/assets/project-ai-dashboard.jpg";
import oceanExplorer from "@/assets/project-ocean-explorer.jpg";
import ecommerce from "@/assets/project-ecommerce.jpg";
import chatApp from "@/assets/project-chat-app.jpg";

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "Real-time data visualization platform with machine learning insights",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    image: aiDashboard,
  },
  {
    title: "3D Ocean Explorer",
    description: "Interactive WebGL experience showcasing marine ecosystems",
    tags: ["Three.js", "React", "WebGL", "GSAP"],
    image: oceanExplorer,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with payment integration",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: ecommerce,
  },
  {
    title: "Real-Time Chat Application",
    description: "Scalable messaging platform with WebSocket support",
    tags: ["React", "Socket.io", "Redis", "MongoDB"],
    image: chatApp,
  },
];

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      className="min-h-screen py-20 relative"
      style={{
        background: "linear-gradient(180deg, hsl(var(--ocean-deep)), hsl(var(--ocean-dark)))",
      }}
    >
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover treasures from my portfolio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass-card border-accent/30 hover:border-accent text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass-card border-white/30 hover:border-white text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
