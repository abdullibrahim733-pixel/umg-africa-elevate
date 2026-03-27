export const siteConfig = {
  name: "UMG Africa",
  legalName: "Ukingo Mechatronics Group Africa",
  defaultTitle: "UMG Africa | Mechatronics & Industrial Automation Startup in Africa",
  defaultDescription:
    "UMG Africa builds advanced mechatronics, AI, and industrial automation systems tailored for African industries, construction, and agriculture. Based in Arusha, Tanzania.",
  siteUrl: import.meta.env.VITE_SITE_URL || "https://umgafrica.org",
  ogImage: "/projects/earth_scourge.png",
  twitterHandle: "@UMGAfrica",
  contactEmail: "info@umgafrica.org",
  location: {
    city: "Arusha",
    country: "Tanzania",
    region: "Arusha"
  },
  areaServed: ["Tanzania", "East Africa", "Africa"]
};

export const resolveUrl = (path?: string) => {
  if (!path) return siteConfig.siteUrl;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (!siteConfig.siteUrl) return path;
  try {
    return new URL(path, siteConfig.siteUrl).toString();
  } catch {
    return path;
  }
};

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.siteUrl,
  logo: resolveUrl("/favicon.png"),
  email: siteConfig.contactEmail,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.region,
    addressCountry: siteConfig.location.country
  },
  areaServed: siteConfig.areaServed,
  description: siteConfig.defaultDescription
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.defaultDescription
});

export const getProjectSchema = (project: {
  name: string;
  description: string;
  url: string;
  image?: string;
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.name,
  description: project.description,
  url: project.url,
  image: project.image,
  about: project.category,
  creator: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl
  }
});
