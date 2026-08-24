export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WB Tech Labs",
    "url": "https://wbtechlabs.com",
    "logo": "https://wbtechlabs.com/logo.png",
    "description": "Deep Tech B2B Consulting. Experts in Edge AI, Hardware Security, Cloud IoT, and ECU Tuning.",
    "founder": {
      "@type": "Person",
      "name": "Fernando Benites"
    },
    "makesOffer": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Edge AI & FPGA (PdMaaS)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Robótica & CNC" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ciberseguridad Edge" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud IoT & OT" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ECU Tuning B2B" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Consultoría I+D & Prototipado 3D" } }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}