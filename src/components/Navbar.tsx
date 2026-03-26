import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/1769963598776.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Vision", href: "#vision" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-enterprise flex items-center justify-between h-20 px-4 md:px-8">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-12 w-auto overflow-hidden rounded-lg">
            <img 
              src={logoImg} 
              alt="UMG Africa" 
              className="h-full w-auto object-contain scale-150 translate-y-[-10%]"
            />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">
            <span className="text-primary">UMG</span> Africa
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300 dark:bg-accent dark:text-black dark:hover:bg-accent/90"
          >
            Partner With Us
          </a>
        </div>

        <div className="md:hidden">
          <button className="p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2 space-y-1">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-foreground/70 hover:text-foreground border-b border-border/50 last:border-0"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block mt-3 px-4 py-2.5 bg-black text-white text-sm font-semibold rounded-full text-center dark:bg-accent dark:text-black"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
