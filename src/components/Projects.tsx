import { motion } from "framer-motion";
import { ArrowRight, Cpu, Bot, Layers, Sparkles, Wifi, BrainCircuit, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Jenga Connect",
    tagline: "Digital Marketplace for Construction",
    description:
      "A digital marketplace connecting hardware stores, suppliers, and builders — simplifying construction commerce across Africa with real-time inventory and AI-powered supplier matching.",
    status: "Live",
    statusColor: "bg-green-400",
    image: "/projects/jenga_connect.png",
    features: ["Real-time inventory sync", "Supplier matching", "Order tracking"],
    icons: [Layers, Smartphone],
    accent: "#f97316",
    featured: true,
  },
  {
    name: "KukuPlus",
    tagline: "Autonomous Smart IoT Chicken Pen Health Monitoring",
    description:
      "An autonomous smart IoT system that monitors poultry health in real-time using machine learning models and a mobile app — enabling healthier flocks and higher yields for African farmers.",
    status: "Beta",
    statusColor: "bg-yellow-400",
    // Using a reliable Unsplash photo for poultry/farm IoT
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=900&q=80",
    features: ["ML health analytics", "IoT sensor network", "Mobile app alerts", "Autonomous monitoring"],
    icons: [Wifi, BrainCircuit],
    accent: "#fb923c",
    featured: false,
  },
  {
    name: "Earth-Scourge",
    tagline: "Swarm Robotics for Precision Weed Removal",
    description:
      "A coordinated swarm of autonomous robots powered by Edge AI that identifies and removes weeds from farm rows — reducing herbicide use and boosting crop yields sustainably.",
    status: "R&D",
    statusColor: "bg-blue-400",
    image: "/projects/earth_scourge.png",
    features: ["Edge AI vision", "Swarm coordination", "Precision weeding", "Zero-herbicide capable"],
    icons: [Bot, Cpu],
    accent: "#60a5fa",
    featured: false,
  },
];

const Projects = () => (
  <section id="projects" className="section-padding bg-secondary/30 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

    <div className="container-enterprise relative z-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="orange-accent-line mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Our Projects</h2>
        <p className="text-foreground/60 max-w-xl mx-auto text-lg">
          Real solutions addressing real challenges across Africa
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Featured – Jenga Connect (full-width top) */}
        {projects
          .filter((p) => p.featured)
          .map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="lg:col-span-2 group relative rounded-3xl overflow-hidden min-h-[420px] card-hover"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              {/* Dark overlay + gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `radial-gradient(ellipse at 80% 50%, ${project.accent}33 0%, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                {/* Featured badge */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
                  <Sparkles size={13} style={{ color: project.accent }} />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">Featured</span>
                </div>

                {/* Icons row */}
                <div className="flex items-center gap-3 mb-4">
                  {project.icons.map((Icon, idx) => (
                    <div
                      key={idx}
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${project.accent}22`, border: `1px solid ${project.accent}44` }}
                    >
                      <Icon size={20} style={{ color: project.accent }} />
                    </div>
                  ))}
                  <span
                    className="ml-2 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 text-white"
                    style={{ background: `${project.accent}33`, border: `1px solid ${project.accent}66` }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${project.statusColor}`} />
                    {project.status}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">{project.name}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: project.accent }}>
                  {project.tagline}
                </p>
                <p className="text-white/75 mb-6 max-w-xl text-base leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 text-xs font-medium rounded-full text-white/90"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 font-semibold text-sm group/link transition-colors"
                  style={{ color: project.accent }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = project.accent)}
                >
                  View Project
                  <ArrowRight className="group-hover/link:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}

        {/* Non-featured projects */}
        {projects
          .filter((p) => !p.featured)
          .map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.15 }}
              className="group relative rounded-3xl overflow-hidden min-h-[380px] card-hover"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  background: `radial-gradient(ellipse at 50% 100%, ${project.accent}44 0%, transparent 65%)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-7">
                {/* Status badge */}
                <div className="absolute top-5 right-5">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 text-white"
                    style={{ background: "rgba(0,0,0,0.5)", border: `1px solid ${project.accent}55`, backdropFilter: "blur(8px)" }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${project.statusColor}`} />
                    {project.status}
                  </span>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-2 mb-4">
                  {project.icons.map((Icon, idx) => (
                    <div
                      key={idx}
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: `${project.accent}22`, border: `1px solid ${project.accent}44` }}
                    >
                      <Icon size={17} style={{ color: project.accent }} />
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-heading font-bold text-white mb-1">{project.name}</h3>
                <p className="text-xs font-semibold mb-3" style={{ color: project.accent }}>
                  {project.tagline}
                </p>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.features.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 text-xs font-medium rounded-full text-white/85"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 font-semibold text-sm group/link transition-colors"
                  style={{ color: project.accent }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = project.accent)}
                >
                  View Project
                  <ArrowRight className="group-hover/link:translate-x-1 transition-transform" size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  </section>
);

export default Projects;
