import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "We'll be in touch shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container-enterprise relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="orange-accent-line mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Build With Us
            </h2>
            <p className="text-foreground/60 text-lg mb-8">
              Ready to transform your industry with technology? Let's discuss how we can power your growth.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Email</h3>
                  <p className="text-foreground/60">info@umgafrica.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Phone</h3>
                  <p className="text-foreground/60">0783414177</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Location</h3>
                  <p className="text-foreground/60">Arusha, Tanzania</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-2xl border border-border">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  placeholder="Your name"
                  value={form.name}
                  onChange={update("name")}
                  required
                  className="bg-secondary/30 border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  placeholder="you@example.com"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  required
                  className="bg-secondary/30 border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={update("message")}
                  rows={5}
                  required
                  className="bg-secondary/30 border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full btn-primary"
              >
                <span className="flex items-center justify-center gap-2">
                  <Send size={16} />
                  Send Message
                </span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
