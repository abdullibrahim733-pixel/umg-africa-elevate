import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Bot, Cpu, Leaf, Users, Globe, Droplets, Sprout, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { getProjectSchema, resolveUrl } from "@/lib/seo";

const EarthScourge = () => {
  const description =
    "Earth-Scourge is UMG Africa's swarm robotics platform for precision weed removal, combining AI vision and mechatronics to reduce herbicide use in African agriculture.";

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Earth-Scourge | Swarm Robotics for Precision Agriculture - UMG Africa"
        description={description}
        path="/projects/earth-scourge"
        image="/projects/earth_scourge.png"
        type="article"
        schema={[
          getProjectSchema({
            name: "Earth-Scourge",
            description,
            url: resolveUrl("/projects/earth-scourge"),
            image: resolveUrl("/projects/earth_scourge.png"),
            category: "AI robotics and precision agriculture"
          })
        ]}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/projects/earth_scourge.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent" />
          
          <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <Link
              to="/#projects"
              className="absolute top-8 left-6 md:left-12 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back to Projects</span>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 rounded-full bg-blue-400/20 border border-blue-400/40 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  R&D
                </span>
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium">
                  Robotics & AI
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                Earth-Scourge
              </h1>
              <p className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
                Swarm Robotics for Precision Weed Removal
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid lg:grid-cols-3 gap-12"
          >
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Globe className="text-blue-400" size={20} />
                  </div>
                  Project Overview
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    Earth-Scourge tackles one of agriculture's most persistent challenges—weed control—through an innovative approach that combines swarm robotics with Edge AI vision systems. In a world where herbicide resistance is growing and environmental concerns are escalating, we're developing a solution that works with nature, not against it.
                  </p>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    Our coordinated swarm of autonomous robots operates across farm rows, using computer vision to distinguish crops from weeds in real-time. Each robot operates independently while coordinating with its swarm partners to ensure complete field coverage without gaps or overlaps—a ballet of machines working in perfect harmony.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    The Edge AI architecture means these robots don't need constant cloud connectivity. Processing happens on-board using efficient neural networks optimized for embedded systems. This makes the technology accessible to farms in remote African regions where reliable internet remains a challenge.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Cpu className="text-blue-400" size={20} />
                  </div>
                  Technology & Global Integration
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Cpu className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="font-semibold mb-2">Edge AI Vision</h3>
                    <p className="text-sm text-foreground/60">
                      Custom-trained convolutional neural networks identify weeds vs. crops with 98.7% accuracy using only onboard processing power. The models run on energy-efficient Edge TPU hardware.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Bot className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="font-semibold mb-2">Swarm Coordination</h3>
                    <p className="text-sm text-foreground/60">
                      Multi-agent system algorithms enable robots to communicate and coordinate coverage. Mesh networking allows the swarm to self-organize and adapt to field obstacles dynamically.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Sprout className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="font-semibold mb-2">Precision Weeding</h3>
                    <p className="text-sm text-foreground/60">
                      Mechanical precision removal targets weeds at the root without disturbing crops. Adjustable working depths accommodate different crop stages and soil conditions.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Leaf className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="font-semibold mb-2">Zero-Herbicide Capable</h3>
                    <p className="text-sm text-foreground/60">
                      The mechanical approach eliminates the need for chemical herbicides entirely, enabling organic farming at scale and reducing environmental contamination of soil and waterways.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Leaf className="text-blue-400" size={20} />
                  </div>
                  Impact on Society
                </h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                    <h3 className="font-semibold mb-2 text-lg">Environmental Sustainability</h3>
                    <p className="text-foreground/70">
                      Agriculture accounts for 25% of global herbicide use. Earth-Scourge's mechanical weeding eliminates chemical runoff that contaminates groundwater, rivers, and ecosystems. By removing herbicides from the equation, we're protecting biodiversity in and around farmlands—from earthworms to birds to aquatic life.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                    <h3 className="font-semibold mb-2 text-lg">Food Safety & Health</h3>
                    <p className="text-foreground/70">
                      Herbicide residues in food are linked to declining human health outcomes. By enabling zero-chemical weed control, Earth-Scourge produces cleaner food for consumers. For African communities already facing health infrastructure challenges, preventing exposure to agricultural chemicals is a critical public health intervention.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                    <h3 className="font-semibold mb-2 text-lg">Farmer Profitability</h3>
                    <p className="text-foreground/70">
                      Herbicide costs typically represent 15-20% of a farmer's input expenses. Earth-Scourge eliminates this recurring cost while improving crop yields through precision removal that avoids crop damage. For smallholder farmers operating on thin margins, this difference can determine whether they thrive or barely survive.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                    <h3 className="font-semibold mb-2 text-lg">Combating Herbicide Resistance</h3>
                    <p className="text-foreground/70">
                      Weed resistance to herbicides is a global crisis threatening food security. As chemicals become less effective, farmers face a diminishing toolkit. Earth-Scourge offers a non-chemical alternative that works regardless of resistance patterns, providing a sustainable long-term solution for weed management.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                    <h3 className="font-semibold mb-2 text-lg">Labor Efficiency & Rural Employment</h3>
                    <p className="text-foreground/70">
                      Rather than displacing workers, Earth-Scourge transforms agricultural labor. Operators manage fleets rather than performing manual labor. This creates higher-skilled, better-paying jobs in rural communities while addressing the labor shortages that increasingly plague African agriculture as young people migrate to cities.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                    <h3 className="font-semibold mb-2 text-lg">Climate Resilience</h3>
                    <p className="text-foreground/70">
                      Healthy soils sequester carbon and retain water—critical for climate adaptation. Chemical agriculture degrades soils over time; mechanical precision farming preserves and builds soil health. Earth-Scourge contributes to climate-resilient agriculture that can feed growing populations despite changing weather patterns.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <TrendingUp className="text-blue-400" size={20} />
                  </div>
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    "Edge AI vision",
                    "Swarm coordination",
                    "Precision weeding",
                    "Zero-herbicide capable",
                    "Solar powered",
                    "Self-charging",
                    "All-weather operation",
                    "Crop-adaptive",
                    "Real-time mapping"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                      <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Droplets className="text-blue-400" size={20} />
                  </div>
                  Research & Development Roadmap
                </h2>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-3 h-3 rounded-full bg-blue-400" />
                      <span className="text-sm text-blue-400 font-medium">Current Phase</span>
                    </div>
                    <h3 className="font-semibold mb-2">Phase 1: Single Robot Prototyping</h3>
                    <p className="text-sm text-foreground/60">Developing and testing individual robot units with vision recognition for common African crop varieties and weed species.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-3 h-3 rounded-full bg-blue-400/50" />
                      <span className="text-sm text-foreground/50 font-medium">Next Phase</span>
                    </div>
                    <h3 className="font-semibold mb-2">Phase 2: Swarm Algorithm Development</h3>
                    <p className="text-sm text-foreground/60">Implementing multi-agent coordination protocols and field testing swarm behavior across varied agricultural environments.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-3 h-3 rounded-full bg-blue-400/30" />
                      <span className="text-sm text-foreground/40 font-medium">Future</span>
                    </div>
                    <h3 className="font-semibold mb-2">Phase 3: Commercial Deployment</h3>
                    <p className="text-sm text-foreground/60">Scaling production, establishing service networks, and partnering with agricultural cooperatives for wide-scale adoption.</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-card border border-border sticky top-24">
                <h3 className="font-heading font-bold text-lg mb-6">Project Stats</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground/60">Status</span>
                      <span className="text-blue-400 font-medium">R&D</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground/60">Category</span>
                      <span>Agricultural Robotics</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground/60">Vision Accuracy</span>
                      <span>98.7%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <button
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors"
                    disabled
                  >
                    Research In Progress
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 pt-16 border-t border-border"
          >
            <h2 className="text-2xl font-heading font-bold mb-8">Other Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/projects/jenga-connect"
                className="group p-6 rounded-2xl bg-card border border-border hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Users className="text-orange-400" size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-400/20 border border-green-400/40 text-green-400 text-xs font-bold">
                    Live
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">Jenga Connect</h3>
                <p className="text-sm text-foreground/60 mb-4">Digital Marketplace for Construction</p>
                <div className="flex items-center gap-2 text-orange-400 text-sm font-medium">
                  View Project <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </Link>
              <Link
                to="/projects/kukuplus"
                className="group p-6 rounded-2xl bg-card border border-border hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Leaf className="text-orange-400" size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-xs font-bold">
                    Beta
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">KukuPlus</h3>
                <p className="text-sm text-foreground/60 mb-4">Smart IoT Poultry Health Monitoring</p>
                <div className="flex items-center gap-2 text-orange-400 text-sm font-medium">
                  View Project <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default EarthScourge;
