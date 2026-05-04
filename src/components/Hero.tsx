import { motion } from "framer-motion";
import { ArrowRight, Zap, Settings, Cpu } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
    {/* Video Background */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-20 dark:opacity-30"
        src="https://cdn.pixabay.com/video/2020/05/25/40118-425126131_large.mp4"
      />
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
    </div>

    <div className="absolute inset-0 grid-bg z-0" />
    
    <div className="absolute inset-0 overflow-hidden z-0">
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-black/10 dark:bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Tech Animations */}
      <motion.div
        className="absolute top-[20%] right-[15%] text-accent/20 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Settings size={120} strokeWidth={1} />
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] left-[10%] text-accent/20 hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Cpu size={100} strokeWidth={1} />
      </motion.div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-0" />

    <div className="relative z-10 container-enterprise px-4 md:px-8 pt-24 pb-16 mx-auto">
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
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-6"
        >
          Build <span className="text-accent">Trade</span> Grow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          We are building technology for the growth of Tanzania and Africa managing with mechanics and development of our community.
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
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black bg-background/50 backdrop-blur-sm"
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

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent z-10" />
  </section>
);

export default Hero;
