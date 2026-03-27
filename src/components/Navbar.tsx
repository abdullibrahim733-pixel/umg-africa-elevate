import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.jpg";

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
      className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
    >
      <div
        className={`flex items-center justify-between gap-6 px-4 md:px-6 ${
          scrolled ? "py-2 md:py-2.5" : "py-3 md:py-3.5"
        } rounded-full border border-black/10 dark:border-white/10 bg-background/80 backdrop-blur-2xl shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-all duration-500 ${
          scrolled ? "shadow-[0_16px_40px_rgba(0,0,0,0.35)]" : ""
        }`}
      >
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-10 md:h-11 w-auto overflow-hidden rounded-lg">
            <img 
              src={logoImg} 
              alt="UMG Africa" 
              className="h-full w-auto object-contain"
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
            className="md:hidden mt-3 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-background/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
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
