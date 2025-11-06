import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import carSales from "@/assets/project-car-sales.jpg";
import amazonSales from "@/assets/project-amazon-sales.jpg";
import sqlAnalytics from "@/assets/project-sql-analytics.jpg";
import imdbDashboard from "@/assets/project-imdb-dashboard.jpg";
import weatherApp from "@/assets/project-weather-app.jpg";
import textSummarizer from "@/assets/project-text-summarizer.jpg";
import openaiChatbot from "@/assets/project-openai-chatbot.jpg";
import changeMaker from "@/assets/project-change-maker.jpg";

const projects = [
  {
    title: "Car Sales Dashboard",
    description:
      "Interactive visualization showing car sales performance, brand trends, and KPIs",
    tags: ["Tableau", "Data Visualization", "Analytics", "SQL"],
    image: carSales,
    demoLink: "https://1drv.ms/x/c/dd2009471861d147/EVqXQaReDDJEpzFjl6AlPU0BinQDX8x3Dt0clSbVT_YpQg?e=LUk264",
    codeLink: "https://github.com/mahir4707/Car-Sales-Dashboard",
  },
  {
    title: "Amazon Sales Dashboard",
    description: "Analytics dashboard tracking product categories, sales growth, and revenue patterns",
    tags: ["Power BI", "Sales Analytics", "Business Intelligence"],
    image: amazonSales,
    demoLink: "https://1drv.ms/x/c/dd2009471861d147/EdxuWn6eX9xHsXXqQGJLok0BfSp_MpPqkhiJV3fafRmWDw?e=jDknt1",
    codeLink: "https://github.com/mahir4707/Amazon-Sales-Dashboard",
  },
  {
    title: "Customer Insights & Analytics Using SQL",
    description: "Data-driven insights and trend analysis using SQL queries and visualization tools",
    tags: ["SQL", "Data Analysis", "PostgreSQL", "Python"],
    image: sqlAnalytics,
    demoLink: "#",
    codeLink: "https://github.com/mahir4707/SQL-Project",
  },
  {
    title: "IMDB Movies Interactive Dashboard – Tableau Project",
    description: "Dashboard visualizing movie ratings, genres, and revenues",
    tags: ["Tableau", "Data Visualization", "Entertainment Analytics"],
    image: imdbDashboard,
    demoLink: "https://public.tableau.com/app/profile/mahir.sama/viz/IMDB_movies_Dashboard/IMDbMoviesdashboard?publish=yes",
    codeLink: "https://github.com/mahir4707/Tableau-Dashboard",
  },
  {
    title: "Weather App using API",
    description: "Dynamic real-time weather tracker fetching live data using weather APIs",
    tags: ["API", "JavaScript", "Weather Data", "Real-time"],
    image: weatherApp,
    demoLink: "https://mahir4707.github.io/weather-app/",
    codeLink: "https://github.com/mahir4707/weather-app",
  },
  {
    title: "Text Summarizer using API",
    description: "Web tool that condenses text using NLP API",
    tags: ["NLP", "API", "AI", "Text Processing"],
    image: textSummarizer,
    demoLink: "#",
    codeLink: "https://github.com/mahir4707/Text-summarizer",
  },
  {
    title: "OpenAI Chatbot",
    description: "Interactive AI chatbot built with OpenAI API for Q&A and assistance",
    tags: ["OpenAI", "Chatbot", "AI", "NLP"],
    image: openaiChatbot,
    demoLink: "https://github.com/mahir4707/OpenAI-Chatbot",
    codeLink: "https://github.com/mahir4707/OpenAI-Chatbot",
  },
  {
    title: "Change Maker Game",
    description: "Game concept solving the change-making problem using dynamic programming visualization",
    tags: ["Game Dev", "Algorithms", "Dynamic Programming", "Visualization"],
    image: changeMaker,
    demoLink: "https://mahir4707.github.io/change-maker-game/",
    codeLink: "https://github.com/mahir4707/change-maker-game",
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
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass-card border-white/30 hover:border-white text-white"
                    onClick={() => window.open(project.codeLink, '_blank')}
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
