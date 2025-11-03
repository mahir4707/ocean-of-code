import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Code2, Database, Globe, Blocks, Brain, Terminal } from "lucide-react";

const skills = [
  {
    name: "JavaScript",
    icon: Code2,
    level: 95,
    description: "Full-stack development with modern frameworks",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "Python",
    icon: Terminal,
    level: 90,
    description: "Data science, AI/ML, and automation",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "React",
    icon: Globe,
    level: 95,
    description: "Building interactive and scalable UIs",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "SQL",
    icon: Database,
    level: 85,
    description: "Database design and optimization",
    color: "from-green-400 to-green-600",
  },
  {
    name: "Three.js",
    icon: Blocks,
    level: 80,
    description: "3D graphics and WebGL experiences",
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "AI/ML",
    icon: Brain,
    level: 75,
    description: "Machine learning and neural networks",
    color: "from-pink-400 to-pink-600",
  },
];

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      className="min-h-screen py-20 relative"
      style={{
        background: "linear-gradient(180deg, hsl(var(--ocean-mid)), hsl(var(--ocean-deep)))",
      }}
    >
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Skills & Expertise
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Dive deeper to explore the technologies I've mastered
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card p-6 rounded-2xl hover:glow transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-white/70">{skill.description}</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-white/80 mb-2">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
