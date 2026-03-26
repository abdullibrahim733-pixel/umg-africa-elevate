import { motion } from "framer-motion";
import { Monitor, ShoppingBag, Truck, CreditCard } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Digital Platforms",
    description: "Building scalable web and mobile applications that solve real business challenges."
  },
  {
    icon: ShoppingBag,
    title: "Marketplace Systems",
    description: "Creating connected B2B and B2C marketplaces that bring buyers and sellers together."
  },
  {
    icon: Truck,
    title: "Logistics Integration",
    description: "Streamlining supply chains with modern tracking, routing, and delivery solutions."
  },
  {
    icon: CreditCard,
    title: "Fintech Enablement",
    description: "Integrating secure payment solutions and financial tools into everyday commerce."
  },
];

const Services = () => (
  <section id="services" className="section-padding bg-background relative overflow-hidden">
    <div className="container-enterprise relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="orange-accent-line mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
          What We Do
        </h2>
        <p className="text-foreground/60 max-w-xl mx-auto text-lg">
          Comprehensive solutions for Africa's digital transformation
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group text-center p-8 rounded-2xl bg-secondary/30 border border-transparent hover:border-accent/20 card-hover"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
              <service.icon className="text-accent group-hover:text-white transition-colors" size={28} />
            </div>
            <h3 className="font-heading font-bold text-lg mb-3">{service.title}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
