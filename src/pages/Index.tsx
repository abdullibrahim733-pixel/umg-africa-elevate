import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Vision from "@/components/Vision";
import Team from "@/components/Team";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { getOrganizationSchema, getWebSiteSchema, siteConfig } from "@/lib/seo";

const Index = () => (
  <>
    <Seo
      title={siteConfig.defaultTitle}
      description={siteConfig.defaultDescription}
      path="/"
      schema={[getOrganizationSchema(), getWebSiteSchema()]}
    />
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Services />
    <Vision />
    <Team />
    <CTASection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
