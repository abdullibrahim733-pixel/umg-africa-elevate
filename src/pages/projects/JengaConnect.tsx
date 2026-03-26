import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building2, Users, TrendingUp, Globe, Zap, Shield, BarChart3, Handshake, Package, Truck, Download, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const JengaConnect = () => {
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
            style={{ backgroundImage: "url('/projects/jenga_connect.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent" />
          
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
                <span className="px-4 py-1.5 rounded-full bg-green-400/20 border border-green-400/40 text-green-400 text-xs font-bold uppercase tracking-wider">
                  Live
                </span>
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium">
                  Featured Project
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                Jenga Connect
              </h1>
              <p className="text-xl md:text-2xl text-orange-400 font-medium mb-6">
                Digital Marketplace for Construction
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
                    <Globe className="text-orange-400" size={20} />
                  </div>
                  Project Overview
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    Jenga Connect is a revolutionary digital marketplace that transforms how construction materials are traded across Africa. By bridging the gap between hardware stores, suppliers, and builders, we've created an ecosystem where commerce flows seamlessly, inventory is transparent, and opportunities are accessible to all.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    Built on cutting-edge technology, our platform leverages real-time data synchronization and AI-powered matching algorithms to connect the right suppliers with the right buyers at the right time. What started as a solution to local procurement challenges has evolved into a continental platform reshaping construction commerce.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Zap className="text-orange-400" size={20} />
                  </div>
                  Global Integration & Technology
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Package className="w-10 h-10 text-orange-400 mb-4" />
                    <h3 className="font-semibold mb-2">Real-Time Inventory Sync</h3>
                    <p className="text-sm text-foreground/60">
                      Cloud-based inventory management with live updates across all connected suppliers, eliminating stock discrepancies and enabling instant order fulfillment.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <BarChart3 className="w-10 h-10 text-orange-400 mb-4" />
                    <h3 className="font-semibold mb-2">AI Supplier Matching</h3>
                    <p className="text-sm text-foreground/60">
                      Machine learning algorithms analyze requirements, location, pricing, and delivery capacity to recommend optimal suppliers for each transaction.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Truck className="w-10 h-10 text-orange-400 mb-4" />
                    <h3 className="font-semibold mb-2">Logistics Integration</h3>
                    <p className="text-sm text-foreground/60">
                      Integrated delivery tracking and route optimization connecting with local logistics providers for seamless last-mile delivery across urban and rural areas.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Shield className="w-10 h-10 text-orange-400 mb-4" />
                    <h3 className="font-semibold mb-2">Secure Transactions</h3>
                    <p className="text-sm text-foreground/60">
                      Escrow-based payment protection ensuring funds are only released upon verified delivery, building trust in digital construction commerce.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <TrendingUp className="text-orange-400" size={20} />
                  </div>
                  Impact on Society
                </h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500">
                    <h3 className="font-semibold mb-2 text-lg">Economic Empowerment</h3>
                    <p className="text-foreground/70">
                      Jenga Connect empowers small and medium hardware stores by giving them access to a broader customer base. Local businesses that once competed only within their neighborhoods now participate in regional trade, driving economic growth in underserved communities.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500">
                    <h3 className="font-semibold mb-2 text-lg">Employment & Skills Development</h3>
                    <p className="text-foreground/70">
                      The platform creates direct employment in logistics, customer service, and digital literacy roles. Additionally, we're building a training ecosystem that upskills construction workers and small business owners in digital commerce tools.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500">
                    <h3 className="font-semibold mb-2 text-lg">Infrastructure Development</h3>
                    <p className="text-foreground/70">
                      By streamlining material procurement, we reduce construction delays and costs. This directly contributes to faster infrastructure development—homes, schools, hospitals, and roads—creating a multiplier effect on community development.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500">
                    <h3 className="font-semibold mb-2 text-lg">Reducing Material Waste</h3>
                    <p className="text-foreground/70">
                      Better inventory visibility means fewer over-orders and material spoilage. Our platform contributes to sustainable construction by reducing waste that typically ends up in African landfills.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Building2 className="text-orange-400" size={20} />
                  </div>
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    "Real-time inventory synchronization",
                    "AI-powered supplier matching",
                    "Order tracking & management",
                    "Secure escrow payments",
                    "Mobile-first design",
                    "Multi-currency support",
                    "Delivery logistics integration",
                    "Analytics dashboard",
                    "Verified supplier ratings"
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
                      <span className="text-green-400 font-medium">Live</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground/60">Category</span>
                      <span>E-commerce Platform</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href="https://jenga-connect.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors"
                  >
                    Visit Platform
                    <ArrowRight size={16} />
                  </a>
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
            <div className="p-8 rounded-3xl bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-transparent border border-orange-500/30 mb-16">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                    <Smartphone className="text-orange-400" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Download Jenga Connect App</h3>
                    <p className="text-foreground/60">Get the Android app and start trading construction materials today</p>
                  </div>
                </div>
                <a
                  href="/apps/jenga-connect.apk"
                  download="JengaConnect.apk"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  <Download size={20} />
                  Download APK
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-heading font-bold mb-8">Other Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/projects/kukuplus"
                className="group p-6 rounded-2xl bg-card border border-border hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Users className="text-orange-400" size={24} />
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

export default JengaConnect;
