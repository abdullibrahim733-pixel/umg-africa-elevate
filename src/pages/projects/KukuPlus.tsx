import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Wifi, BrainCircuit, Leaf, Users, AlertCircle, TrendingUp, Smartphone, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const KukuPlus = () => {
  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=900&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-transparent" />
          
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
                <span className="px-4 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                  Beta
                </span>
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium">
                  IoT & AI
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                KukuPlus
              </h1>
              <p className="text-xl md:text-2xl text-orange-400 font-medium mb-6">
                Autonomous Smart IoT Chicken Pen Health Monitoring
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
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Activity className="text-orange-400" size={20} />
                  </div>
                  Project Overview
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    KukuPlus represents a paradigm shift in poultry farming across Africa. By deploying an autonomous network of IoT sensors combined with machine learning analytics, we're giving farmers unprecedented visibility into the health and wellbeing of their flocks—24 hours a day, 7 days a week.
                  </p>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    The system monitors critical parameters including temperature, humidity, movement patterns, feeding behavior, and sound signatures that indicate respiratory health. When anomalies are detected, the AI model predicts potential illness before visible symptoms appear, giving farmers the critical window needed for early intervention.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    What makes KukuPlus truly revolutionary is its ability to operate autonomously in environments with limited connectivity. Edge computing allows the system to make real-time decisions locally while syncing data when connections are available, making it viable for rural African farming communities.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <BrainCircuit className="text-orange-400" size={20} />
                  </div>
                  Technology & Global Integration
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Wifi className="w-10 h-10 text-orange-400 mb-4" />
                    <h3 className="font-semibold mb-2">IoT Sensor Network</h3>
                    <p className="text-sm text-foreground/60">
                      Custom-designed sensors monitor temperature, humidity, ammonia levels, and bird movement. Low-power consumption enables battery operation for 6+ months in off-grid environments.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <BrainCircuit className="w-10 h-10 text-orange-400 mb-4" />
                    <h3 className="font-semibold mb-2">ML Health Analytics</h3>
                    <p className="text-sm text-foreground/60">
                      Convolutional neural networks trained on thousands of hours of poultry behavior data detect patterns invisible to human observation, predicting illness up to 48 hours in advance.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Smartphone className="w-10 h-10 text-orange-400 mb-4" />
                    <h3 className="font-semibold mb-2">Mobile App Alerts</h3>
                    <p className="text-sm text-foreground/60">
                      Real-time notifications delivered via SMS and mobile app ensure farmers receive critical alerts regardless of their proximity to the pen. Multi-language support for local adoption.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <AlertCircle className="w-10 h-10 text-orange-400 mb-4" />
                    <h3 className="font-semibold mb-2">Autonomous Monitoring</h3>
                    <p className="text-sm text-foreground/60">
                      Edge AI enables real-time decision-making without cloud connectivity. The system adapts to local conditions and learns farm-specific baselines for more accurate predictions.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Leaf className="text-orange-400" size={20} />
                  </div>
                  Impact on Society
                </h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                    <h3 className="font-semibold mb-2 text-lg">Food Security & Nutrition</h3>
                    <p className="text-foreground/70">
                      Africa faces a growing protein deficit. By reducing poultry mortality rates by up to 40%, KukuPlus helps increase the supply of affordable chicken meat and eggs, directly addressing malnutrition in communities where protein sources are scarce and expensive.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                    <h3 className="font-semibold mb-2 text-lg">Economic Empowerment of Smallholder Farmers</h3>
                    <p className="text-foreground/70">
                      Poultry farming is often the entry point for agricultural entrepreneurship in rural Africa. KukuPlus levels the playing field, giving smallholder farmers access to monitoring technology previously only available to industrial farms, dramatically improving their profitability and livelihood sustainability.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                    <h3 className="font-semibold mb-2 text-lg">Reduced Antibiotic Usage</h3>
                    <p className="text-foreground/70">
                      Early disease detection means antibiotics can be used preventively rather than reactively. This not only reduces costs for farmers but addresses the global challenge of antibiotic resistance—a critical issue in developing regions where antibiotic regulation is challenging.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                    <h3 className="font-semibold mb-2 text-lg">Women in Agriculture</h3>
                    <p className="text-foreground/70">
                      In many African communities, poultry keeping is predominantly women's work. KukuPlus reduces the time burden of manual monitoring, giving women farmers more time for other activities while improving their income potential from healthier, more productive flocks.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                    <h3 className="font-semibold mb-2 text-lg">Sustainable Agriculture</h3>
                    <p className="text-foreground/70">
                      By optimizing feed conversion through better health monitoring and reducing mortality, KukuPlus contributes to sustainable protein production with a lower environmental footprint—fewer birds need to be raised to meet the same nutritional output.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <TrendingUp className="text-orange-400" size={20} />
                  </div>
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    "ML health analytics",
                    "IoT sensor network",
                    "Mobile app alerts",
                    "Autonomous monitoring",
                    "Edge AI processing",
                    "Offline capability",
                    "Real-time notifications",
                    "Multi-pen management",
                    "Growth tracking"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                      <div className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
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
                      <span className="text-yellow-400 font-medium">Beta</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground/60">Category</span>
                      <span>IoT & AI Platform</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground/60">Tech Stack</span>
                      <span>IoT, Edge AI, React</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground/60">Impact</span>
                      <span>40% mortality reduction</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {["ESP32", "TensorFlow Lite", "React Native", "Node.js", "MQTT", "AWS IoT", "PostgreSQL"].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <button
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors"
                    disabled
                  >
                    Coming Soon
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
                to="/projects/earth-scourge"
                className="group p-6 rounded-2xl bg-card border border-border hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <TrendingUp className="text-blue-400" size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-400/20 border border-blue-400/40 text-blue-400 text-xs font-bold">
                    R&D
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Earth-Scourge</h3>
                <p className="text-sm text-foreground/60 mb-4">Swarm Robotics for Weed Removal</p>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
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

export default KukuPlus;
