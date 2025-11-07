import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import underwaterBg from "@/assets/underwater-ocean.jpg";

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
      className="min-h-screen py-20 px-6 relative overflow-hidden depth-fade"
      style={{
        backgroundImage: `url(${underwaterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Underwater gradient overlay - deepest water */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/95 via-slate-950/97 to-black/98 z-0" />
      
      {/* Almost no light */}
      <div className="absolute inset-0 opacity-5 z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, rgba(100, 220, 255, 0.1) 0%, transparent 20%)`,
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
            Get In Touch
          </h2>
          <p className="text-cyan-200/60 text-lg max-w-2xl mx-auto underwater-text">
            Let's connect and discuss how we can work together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="backdrop-blur-md bg-black/40 border border-cyan-500/20 p-8 rounded-xl shadow-[0_0_40px_rgba(100,220,255,0.15)]">
              <h3 className="text-2xl font-bold text-cyan-100 underwater-text mb-6">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cyan-200/80 mb-2 underwater-text">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-cyan-950/30 border-cyan-500/30 text-cyan-100 placeholder:text-cyan-400/40 focus:border-cyan-400/60"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cyan-200/80 mb-2 underwater-text">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-cyan-950/30 border-cyan-500/30 text-cyan-100 placeholder:text-cyan-400/40 focus:border-cyan-400/60"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cyan-200/80 mb-2 underwater-text">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    className="bg-cyan-950/30 border-cyan-500/30 text-cyan-100 placeholder:text-cyan-400/40 focus:border-cyan-400/60"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-[0_0_20px_rgba(100,220,255,0.3)] hover:shadow-[0_0_30px_rgba(100,220,255,0.5)] text-white underwater-text"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 relative z-10">
              <a
                href="mailto:mahirsama68@gmail.com"
                className="backdrop-blur-md bg-black/30 border border-cyan-500/20 p-6 rounded-xl group hover:shadow-[0_0_30px_rgba(100,220,255,0.2)] transition-all duration-300 hover:border-cyan-400/40 block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(100,220,255,0.4)]">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-100 underwater-text mb-1">Email</h4>
                    <p className="text-cyan-200/70">mahirsama68@gmail.com</p>
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/mahir-sama-7432902a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-md bg-black/30 border border-cyan-500/20 p-6 rounded-xl group hover:shadow-[0_0_30px_rgba(100,220,255,0.2)] transition-all duration-300 hover:border-cyan-400/40 block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(100,220,255,0.4)]">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-100 underwater-text mb-1">LinkedIn</h4>
                    <p className="text-cyan-200/70">mahir-sama-7432902a5</p>
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/mahir4707"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-md bg-black/30 border border-cyan-500/20 p-6 rounded-xl group hover:shadow-[0_0_30px_rgba(100,220,255,0.2)] transition-all duration-300 hover:border-cyan-400/40 block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(100,220,255,0.4)]">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-100 underwater-text mb-1">GitHub</h4>
                    <p className="text-cyan-200/70">mahir4707</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Back to Surface Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(100,220,255,0.4)] hover:shadow-[0_0_40px_rgba(100,220,255,0.6)] transition-all duration-300 hover:scale-110 z-40 border border-cyan-400/30"
        >
          <ArrowUp className="w-5 h-5 text-white animate-bounce" />
        </motion.button>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-cyan-500/10 text-center relative z-10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded animate-wave"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded animate-wave" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded animate-wave" style={{ animationDelay: "0.4s" }}></div>
          </div>
          <p className="text-cyan-300/60 underwater-text">
            © 2024 Data Science Portfolio. All rights reserved.
          </p>
          <p className="text-cyan-400/40 text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ContactSection;
