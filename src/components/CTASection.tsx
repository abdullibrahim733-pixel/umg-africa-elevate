import { motion } from "framer-motion";
import { ArrowRight, Users, Rocket, Handshake } from "lucide-react";

const CTASection = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 grid-bg pointer-events-none" />
    
    <div className="container-enterprise relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
          Ready to Build the Future?
        </h2>
        <p className="text-foreground/60 text-lg mb-10">
          Join us in transforming Africa's digital landscape. Whether you're a potential partner, 
          investor, or collaborator, we'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300"
          >
            Partner With UMG Africa
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            Explore Projects
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-border">
          {[
            { icon: Users, label: "Partners", value: "10+" },
            { icon: Rocket, label: "Projects", value: "3+" },
            { icon: Handshake, label: "Industries", value: "4+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="text-accent mx-auto mb-3" size={24} />
              <p className="text-2xl font-heading font-bold text-accent">{stat.value}</p>
              <p className="text-sm text-foreground/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
