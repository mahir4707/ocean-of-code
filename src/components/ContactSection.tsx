import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 relative"
      style={{
        background: "linear-gradient(180deg, hsl(var(--ocean-dark)), #0a0e1a)",
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
            Let's Connect
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Reach out and let's create something amazing together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="glass-card border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="glass-card border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="glass-card border-white/20 text-white placeholder:text-white/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-primary hover:opacity-90"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl hover:glow transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-white/70">contact@portfolio.com</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl hover:glow transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">LinkedIn</h4>
                    <p className="text-white/70">linkedin.com/in/yourname</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl hover:glow transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">GitHub</h4>
                    <p className="text-white/70">github.com/yourname</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back to Surface Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <Button
            onClick={scrollToTop}
            size="lg"
            className="glass-card border-accent/30 hover:border-accent hover:glow text-white group"
          >
            <ArrowUp className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Back to Surface
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16 pt-8 border-t border-white/10 relative"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-accent/5 to-transparent animate-wave"></div>
          </div>
          <p className="text-white/80 text-lg mb-3 font-medium relative z-10" style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }}>
            Made by Mahir — Crafted with Depth and Creativity
          </p>
          <p className="text-white/50 relative z-10">
            © 2025 Portfolio. Built with discipline and creativity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
