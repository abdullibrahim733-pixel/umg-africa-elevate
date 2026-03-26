import { motion } from "framer-motion";
import { Cpu, Users, Globe } from "lucide-react";

const About = () => (
  <section id="about" className="section-padding bg-background relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    
    <div className="container-enterprise relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="orange-accent-line mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Who We Are
          </h2>
          <div className="space-y-6 text-foreground/70 text-base md:text-lg leading-relaxed">
            <p>
              UMG Africa is a <span className="text-foreground font-medium">builder of systems</span> — not just products. 
              We focus on solving real-world inefficiencies across industries by combining technology, 
              logistics, and local market understanding.
            </p>
            <p>
              Founded with a vision to transform how Africa builds, trades, and grows, we develop 
              digital platforms and infrastructure solutions that address critical gaps in the continent's 
              economic ecosystem.
            </p>
            <p className="text-foreground font-medium">
              From construction commerce to enterprise solutions, we're building the backbone of 
              Africa's digital economy.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            {
              icon: Cpu,
              title: "Technology First",
              desc: "Building robust, scalable digital platforms"
            },
            {
              icon: Users,
              title: "Local Expertise",
              desc: "Deep understanding of African markets"
            },
            {
              icon: Globe,
              title: "Pan-African Vision",
              desc: "Scaling solutions across the continent"
            },
            {
              icon: Globe,
              title: "Innovation Driven",
              desc: "Solving real problems with modern tools"
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-secondary/50 border border-border card-hover"
            >
              <item.icon className="text-accent mb-4" size={28} />
              <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/60">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
