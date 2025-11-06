import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FileText, Table, Presentation, BarChart3, PieChart, Bot, Palette, Code2, FileCode2, Database } from "lucide-react";

const tools = [
  {
    name: "Microsoft Word",
    icon: FileText,
    description: "Document creation and editing",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Excel",
    icon: Table,
    description: "Data analysis and spreadsheet management",
    color: "from-green-500 to-green-600",
  },
  {
    name: "PowerPoint",
    icon: Presentation,
    description: "Presentation design and storytelling",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Tableau",
    icon: BarChart3,
    description: "Data visualization and business analytics",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Power BI",
    icon: PieChart,
    description: "Interactive dashboards and insights",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "ChatGPT",
    icon: Bot,
    description: "AI-powered writing and coding assistance",
    color: "from-teal-500 to-emerald-500",
  },
  {
    name: "Canva",
    icon: Palette,
    description: "Graphic design and content creation",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Lovable",
    icon: Code2,
    description: "AI-powered web design tool",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "VS Code",
    icon: FileCode2,
    description: "Code editing and development platform",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    description: "Advanced relational database and query management",
    color: "from-blue-600 to-indigo-600",
  },
];

const ToolsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="tools"
      className="min-h-screen py-20 relative"
      style={{
        background: "linear-gradient(180deg, hsl(var(--ocean-deep)), hsl(var(--ocean-dark)))",
      }}
    >
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-accent/15 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
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
            Tools
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Professional tools that power productivity and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.05, y: -15 }}
                className="glass-card p-6 rounded-2xl hover:glow transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${tool.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-white/70">{tool.description}</p>
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

export default ToolsSection;
