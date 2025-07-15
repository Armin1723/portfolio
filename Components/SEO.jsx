import Head from "next/head";

const SEO = ({
  title = "Uzair Alam - Full Stack Developer in Lucknow | Web Development Expert | React, Node.js, JavaScript | MERN Stack Developer",
  description = "Uzair Alam is a skilled full stack developer based in Lucknow, specializing in modern web development, React, Node.js, and innovative digital solutions.",
  image = "https://uzairalam.me/assets/profile.png",
  url = "https://uzairalam.me",
  type = "website",
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Uzair Alam",
    jobTitle: "Full Stack Developer",
    description:
      "Skilled full stack developer specializing in modern web development, React, Node.js, and innovative digital solutions.",
    url: "https://uzairalam.me",
    image: "https://uzairalam.me/images/uzair-alam-profile.jpg",
    email: "contact@uzairalam.me",
    telephone: "+91-8858128030",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: "Digicrowd Solution",
    },
    alumniOf: {
      "@type": "Organization",
      name: "University of Lucknow",
    },
    knowsAbout: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "MERN Stack",
      "Express.js",
      "Tailwind CSS",
      "Electron.js",
      "Redux",
      "Websockets",
      "Database Design",
      "API Development",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
    ],
    sameAs: [
      "https://www.linkedin.com/in/uzair1723", 
      "https://github.com/Armin1723", 
      "https://twitter.com/robertdrowninjr", 
    ],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Uzair Alam - Web Development Services",
    description:
      "Professional web development services including full stack development, frontend, backend, and custom web applications.",
    provider: {
      "@type": "Person",
      name: "Uzair Alam",
    },
    areaServed: {
      "@type": "City",
      name: "Lucknow",
      containedInPlace: {
        "@type": "State",
        name: "Uttar Pradesh",
        containedInPlace: {
          "@type": "Country",
          name: "India",
        },
      },
    },
    serviceType: "Web Development",
    url: "https://uzairalam.me",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Uzair Alam Portfolio",
    alternateName: "Uzair Alam Developer Portfolio",
    url: "https://uzairalam.me",
    description:
      "Portfolio website of Uzair Alam, a full stack developer from Lucknow",
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      name: "Uzair Alam",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://uzairalam.me/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Uzair Alam, developer, Lucknow, full stack developer, web developer, React developer, Node.js, JavaScript, frontend, backend, Uttar Pradesh, Next.js, TypeScript"
      />
      <meta name="author" content="Uzair Alam" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Lucknow" />
      <meta name="geo.position" content="26.8467;80.9462" />
      <meta name="ICBM" content="26.8467, 80.9462" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Uzair Alam Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </Head>
  );
};

export default SEO;
