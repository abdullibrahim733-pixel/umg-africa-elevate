import { motion } from "framer-motion";
import { Rocket, Globe, TrendingUp } from "lucide-react";

const Vision = () => (
  <section id="vision" className="section-padding bg-black text-white relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
    </div>
    
    <div className="container-enterprise relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <Globe className="text-accent" size={14} />
            <span className="text-xs font-semibold text-white/80 tracking-wider uppercase">
              Our Vision
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 leading-tight">
            Building the infrastructure of{" "}
            <span className="text-accent">Africa's economic future</span>
          </h2>

          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            We are building systems that power the next generation of African businesses — 
            from construction to commerce. Every platform we create connects industries, 
            enables growth, and drives economic empowerment across the continent.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Innovation",
                desc: "Pioneering solutions built for African challenges"
              },
              {
                icon: Globe,
                title: "Scale",
                desc: "Expanding impact across borders and industries"
              },
              {
                icon: TrendingUp,
                title: "Growth",
                desc: "Empowering businesses to reach their potential"
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <item.icon className="text-accent mx-auto mb-4" size={32} />
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Vision;
