import { motion } from "framer-motion";
import { Cpu, Shield, TrendingUp, Zap } from "lucide-react";

const products = [
  {
    name: "Lisha Node 1",
    tagline: "Intelligent Poultry Feeding Automation",
    features: [
      "Automated chicken feeding system",
      "Integrated edge AI for feeding optimization",
      "Designed for reliability in harsh environments",
    ],
    icon: Cpu,
    color: "from-red-500 to-orange-500",
    glow: "hover:shadow-red-500/20",
  },
  {
    name: "KukuPlus App & Kit",
    tagline: "Smart Poultry Protection System",
    features: [
      "Safeguards against theft",
      "Protection from harsh weather conditions",
      "Smart monitoring and real-time alerts",
    ],
    icon: Shield,
    color: "from-blue-500 to-cyan-500",
    glow: "hover:shadow-blue-500/20",
  },
];

const Products = () => (
  <section id="products" className="section-padding bg-background relative overflow-hidden">
    {/* Background accent */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

    <div className="container-enterprise relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <div className="red-accent-line mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Products</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Purpose-built solutions for Africa's agricultural and industrial sectors.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-14">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className={`group relative border border-border/60 rounded-2xl p-8 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-2xl ${p.glow}`}
          >
            {/* Glow effect on hover */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            {/* Icon */}
            <motion.div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-6 shadow-lg`}
              whileHover={{ rotate: -5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p.icon className="text-white" size={26} />
            </motion.div>

            <h3 className="font-heading font-bold text-xl mb-1">{p.name}</h3>
            <p className="text-muted-foreground text-sm mb-6">{p.tagline}</p>

            <ul className="space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                  <Zap size={14} className="text-primary flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Bottom scan line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
          </motion.div>
        ))}
      </div>

      {/* Impact metric */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl p-10 text-center bg-gradient-to-br from-primary/10 to-orange-500/5 border border-primary/20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <TrendingUp className="text-primary mx-auto mb-4" size={40} />
        </motion.div>
        <p className="text-5xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 mb-2">10+</p>
        <p className="font-heading font-semibold text-xl mb-2">Poultry Keepers Impacted and Growing</p>
        <p className="text-muted-foreground">Scaling impact across the continent, one system at a time.</p>
      </motion.div>
    </div>
  </section>
);

export default Products;
