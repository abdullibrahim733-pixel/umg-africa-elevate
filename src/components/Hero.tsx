import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
    <div className="absolute inset-0 grid-bg" />
    
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

    <div className="relative container-enterprise px-4 md:px-8 pt-24 pb-16 mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
        >
          <Zap className="text-accent" size={14} />
          <span className="text-xs font-semibold text-accent tracking-wider uppercase">
            Building Africa's Digital Future
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
        >
          Building Africa's{" "}
          <span className="text-accent">Next Generation</span>
          <br />
          of Digital Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          UMG Africa is a technology-driven company creating solutions that connect industries, 
          empower businesses, and transform how Africa builds, trades, and grows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-accent transition-all duration-300 dark:bg-accent dark:text-black dark:hover:bg-accent/90"
          >
            View Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Partner With Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-12 mt-20 pt-8 border-t border-border/50"
        >
          {[
            { value: "3+", label: "Active Projects" },
            { value: "10+", label: "Industry Partners" },
            { value: "1000+", label: "Businesses Empowered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold text-accent">{stat.value}</p>
              <p className="text-sm text-foreground/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
  </section>
);

export default Hero;
