import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { profile } from "../data/profile";

function NeuralNetwork() {
  const nodes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: 5 + (i % 6) * 18 + (Math.random() * 5 - 2.5),
    y: 5 + Math.floor(i / 6) * 22 + (Math.random() * 5 - 2.5),
    delay: i * 0.15,
    size: 0.3 + Math.random() * 0.4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <radialGradient id="nodeGrad">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#6366f1" />
          </radialGradient>
        </defs>
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((target, j) => {
            const dist = Math.sqrt((node.x - target.x) ** 2 + (node.y - target.y) ** 2);
            if (dist > 25) return null;
            return (
              <motion.line
                key={`${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={target.x}
                y2={target.y}
                stroke="url(#lineGrad)"
                strokeWidth="0.08"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.05, 0.3, 0.05] }}
                transition={{ duration: 4, delay: (i + j) * 0.08, repeat: Infinity, ease: "easeInOut" }}
              />
            );
          })
        )}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="url(#nodeGrad)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 3, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern" />
      <NeuralNetwork />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-8"
        >
          <Sparkles size={14} className="text-primary-light" />
          <span className="text-sm text-text-secondary">AI • Data Science • Education • Research</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-text-secondary mb-6 max-w-3xl mx-auto"
        >
          {profile.headline}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold gradient-text mb-6"
        >
          {profile.tagline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-text-secondary text-lg max-w-2xl mx-auto mb-10"
        >
          {profile.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-xl hover:opacity-90 transition-all flex items-center gap-2"
          >
            Let's Work Together
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border border-border text-text-primary font-medium rounded-xl hover:bg-white/5 hover:border-border-light transition-all"
          >
            Explore My Work
          </a>
        </motion.div>

        {/* Brand narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-3 sm:gap-6"
        >
          {["Learn", "Build", "Research", "Innovate"].map((step, i) => (
            <div key={step} className="flex items-center gap-3 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-primary/30 flex items-center justify-center text-xs sm:text-sm font-medium text-primary-light bg-primary/5">
                  {i + 1}
                </div>
                <span className="text-xs sm:text-sm text-text-muted mt-2">{step}</span>
              </div>
              {i < 3 && (
                <div className="w-6 sm:w-12 h-px bg-gradient-to-r from-primary/30 to-accent/30 mb-6" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-primary-light rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
