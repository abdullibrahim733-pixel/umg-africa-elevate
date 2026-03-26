import { Linkedin, Twitter, Mail } from "lucide-react";
import logoImg from "@/assets/1769963598776.png";

const Footer = () => (
  <footer className="bg-black text-white py-16 px-4 md:px-8 relative overflow-hidden">
    <div className="container-enterprise relative z-10">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2 mb-4">
            <div className="h-12 w-auto overflow-hidden rounded-lg">
              <img 
                src={logoImg} 
                alt="UMG Africa" 
                className="h-full w-auto object-contain scale-150 translate-y-[-10%]"
              />
            </div>
            <span className="font-heading font-bold text-xl">
              <span className="text-primary">UMG</span> Africa
            </span>
          </a>
          <p className="text-white/60 max-w-sm leading-relaxed">
            Building Africa's next generation of digital infrastructure. 
            Connecting industries, empowering businesses, transforming growth.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Projects", "Services", "Vision", "Contact"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-accent transition-colors text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} UMG Africa. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
