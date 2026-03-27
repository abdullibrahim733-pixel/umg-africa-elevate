import { motion } from "framer-motion";
import ibrahimPhoto from "@/assets/WhatsApp Image 2026-02-23 at 21.22.18.jpeg";
import abdullazizPhoto from "@/assets/Abdullaziz.jpeg";
import shedrakPhoto from "@/assets/shedrak.png";
import rajabuPhoto from "@/assets/rajabu.jpeg";
import mercyPhoto from "@/assets/mercy.png";

const team = [
  {
    name: "Ibrahim Abdull",
    role: "CEO",
    title: "Chief Executive Officer",
    photo: ibrahimPhoto,
  },
  {
    name: "Abdullaziz Kassim",
    role: "COO",
    title: "Chief Operations Officer",
    photo: abdullazizPhoto,
  },
  {
    name: "Merciana",
    role: "CFO",
    title: "Chief Financial Officer",
    photo: mercyPhoto,
  },
  {
    name: "Shedrak Isaya",
    role: "CDO",
    title: "Chief Design Officer",
    photo: shedrakPhoto,
  },
  {
    name: "Rajabu Ally",
    role: "CME",
    title: "Chief Mechanics Officer",
    photo: rajabuPhoto,
  },
];

const Team = () => (
  <section id="team" className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 grid-bg pointer-events-none" />
    
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
          Our Team
        </h2>
        <p className="text-foreground/60 max-w-xl mx-auto text-lg">
          Building Africa's digital future with vision and expertise
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="group text-center p-6 rounded-2xl bg-secondary/30 border border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 cursor-pointer"
          >
            <div className="relative">
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent/20 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-1">{member.name}</h3>
            <p className="text-accent text-sm font-bold mb-1">{member.role}</p>
            <p className="text-sm text-foreground/50">{member.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
