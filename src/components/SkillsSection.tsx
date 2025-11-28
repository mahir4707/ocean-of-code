import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { FileCode, Coffee, FileType, Database, BarChart } from "lucide-react";
=======
import { FileCode, Coffee, FileType, Database } from "lucide-react";
import underwaterBg from "@/assets/underwater-ocean.jpg";
>>>>>>> 662f545c50d9a2a8260a60e486ed829e4c91ca32

const skills = [
  {
    name: "C",
    icon: FileCode,
    level: 90,
    description: "System programming and performance optimization",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Java",
    icon: Coffee,
    level: 60,
    description: "Object-oriented programming and enterprise solutions",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Python",
    icon: FileType,
    level: 86,
    description: "Data analysis, automation, and scripting",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "SQL",
    icon: Database,
    level: 90,
    description: "Database design, queries, and optimization",
    color: "from-cyan-500 to-teal-500",
  },
  {
    name: "Data Analysis",
    icon: BarChart,
    level: 95,
    description: "Data cleaning, visualization, and statistical analysis",
    color: "from-cyan-500 to-teal-500",
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
      className="min-h-screen py-20 px-6 relative overflow-hidden depth-fade"
      style={{
        backgroundImage: `url(${underwaterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Underwater gradient overlay - shallow water */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/40 via-blue-900/60 to-blue-950/70 z-0" />
      
      {/* Light caustics effect */}
      <div className="absolute inset-0 opacity-20 animate-water-ripple z-0"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, rgba(100, 220, 255, 0.3) 0%, transparent 50%),
                       radial-gradient(ellipse at 70% 40%, rgba(100, 220, 255, 0.2) 0%, transparent 50%)`,
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
            Technical Expertise
          </h2>
          <p className="text-cyan-200/90 text-lg max-w-2xl mx-auto underwater-text">
            Specialized skills in data science, machine learning, and software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-md bg-cyan-950/30 border border-cyan-500/20 p-6 rounded-xl hover:shadow-[0_0_30px_rgba(100,220,255,0.3)] transition-all duration-300 group hover:border-cyan-400/40"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(100,220,255,0.3)]"
                    style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-cyan-100 underwater-text">
                      {skill.name}
                    </h3>
                    <p className="text-cyan-200/80 text-sm mb-4">{skill.description}</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-cyan-300/70">Proficiency</span>
                    <span className="text-sm font-semibold text-cyan-300 underwater-text">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-cyan-950/50 rounded-full h-2 overflow-hidden border border-cyan-500/20">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full rounded-full shadow-[0_0_10px_rgba(100,220,255,0.5)]"
                      style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                    >
                      <div className={`h-full bg-gradient-to-r ${skill.color} rounded-full`} />
                    </motion.div>
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
