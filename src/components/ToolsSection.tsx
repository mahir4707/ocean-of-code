import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FileText, Table, Presentation, BarChart3, PieChart, Bot, Palette, Code2, FileCode2, Database } from "lucide-react";
import underwaterBg from "@/assets/underwater-ocean.jpg";

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
      className="min-h-screen py-20 px-6 relative overflow-hidden depth-fade"
      style={{
        backgroundImage: `url(${underwaterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Underwater gradient overlay - mid depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-950/80 to-slate-900/85 z-0" />
      
      {/* Subtle light rays */}
      <div className="absolute inset-0 opacity-10 animate-water-ripple z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 10%, rgba(100, 220, 255, 0.2) 0%, transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 underwater-text text-cyan-100">
            Professional Tools
          </h2>
          <p className="text-cyan-200/80 text-lg max-w-2xl mx-auto underwater-text">
            Industry-standard tools and technologies I work with
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="backdrop-blur-md bg-slate-900/40 border border-cyan-500/20 p-6 rounded-xl group hover:shadow-[0_0_30px_rgba(100,220,255,0.2)] transition-all duration-300 hover:border-cyan-400/40"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-[0_0_20px_rgba(100,220,255,0.3)]"
                  >
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${tool.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-100 underwater-text group-hover:text-cyan-300 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-cyan-200/70 text-sm">{tool.description}</p>
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
