import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { resolveUrl, siteConfig } from "@/lib/seo";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  schema?: Record<string, unknown>[];
};

const Seo = ({
  title = siteConfig.defaultTitle,
  description = siteConfig.defaultDescription,
  path,
  image,
  imageAlt = siteConfig.name,
  type = "website",
  noIndex = false,
  schema = []
}: SeoProps) => {
  const location = useLocation();
  const resolvedPath = path ?? location.pathname;
  const url = resolveUrl(resolvedPath);
  const imageUrl = resolveUrl(image || siteConfig.ogImage);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={siteConfig.name} />

      {url ? <link rel="canonical" href={url} /> : null}
      {noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      {url ? <meta property="og:url" content={url} /> : null}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      {siteConfig.twitterHandle ? (
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
      ) : null}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schema.map((entry, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </Helmet>
  );
};

export default Seo;
