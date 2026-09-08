export const siteConfig = {
  name: "AuraDigital | Premier AI, Web & Mobile Engineering Studio",
  shortName: "AuraDigital",
  description:
    "Award-winning digital solutions engineering studio. We build custom conversational AI voicebots, enterprise CRM web applications, high-performance logistics & wellness mobile apps, Figma UI/UX, and Adobe Animate motion graphics for startups and growing businesses ready to Go Digital.",
  url: "https://auradigital.io",
  ogImage: "https://auradigital.io/images/hero_digital_matrix.jpg",
  author: "AuraDigital Engineering",
  email: "contact@auradigital.io",
  phone: "+1 (800) 555-AURA",
  keywords: [
    // Core Commercial Keywords
    "custom AI voicebot development",
    "conversational AI chatbot agency",
    "hire AI voicebot developer",
    "enterprise CRM web development",
    "rapid MVP development company",
    "Next.js full stack web developer",
    "custom logistics mobile app development",
    "meditation wellness app development",
    "fleet tracking mobile app development",
    "Figma UI UX design services",
    "Adobe Animate 2D motion graphics",
    "Canva branding and marketing assets",
    "go digital small business digital transformation",
    "technical SEO and search ranking agency",
    "high conversion landing page development",
    "B2B SaaS product development",
    "voice AI customer service automation",
    "real-time fleet management software"
  ],
  links: {
    github: "https://github.com/auradigital",
    linkedin: "https://linkedin.com/company/auradigital",
    twitter: "https://twitter.com/auradigital_tech",
  },
};

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://auradigital.io/#service",
      "name": "AuraDigital Solutions Studio",
      "url": "https://auradigital.io",
      "logo": "https://auradigital.io/images/hero_digital_matrix.jpg",
      "image": "https://auradigital.io/images/hero_digital_matrix.jpg",
      "description": siteConfig.description,
      "priceRange": "$$$",
      "telephone": siteConfig.phone,
      "email": siteConfig.email,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "areaServed": "Global",
      "serviceType": [
        "AI Voicebot & Chatbot Development",
        "Full-Stack Web & CRM Development",
        "Mobile App Development (Logistics & Wellness)",
        "Figma UI/UX & Design Systems",
        "Adobe Animate Motion Graphics",
        "Small Business Digital Transformation & SEO"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Engineering & Creative Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conversational AI Voicebots & Chatbots",
              "description": "Production-grade voicebots on WebRTC, Twilio, OpenAI Realtime, and ElevenLabs delivering 24/7 zero-latency customer support and automated appointment scheduling."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise Web Applications & Cloud MVPs",
              "description": "High-velocity Next.js web apps, custom CRM platforms, and client portals built to replace fragile spreadsheets and scale business operations."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Logistics & Wellness Mobile App Development",
              "description": "Cross-platform iOS and Android applications with live GPS telemetry, audio soundscape engines, and conversational AI interfaces."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Figma UI/UX Design & Adobe Animate Motion",
              "description": "Pixel-perfect Figma design systems, Canva branding collateral, and interactive Adobe Animate 2D vector animations engineered for high conversion."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://auradigital.io/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why should small and mid-sized businesses Go Digital today?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Going digital eliminates manual paperwork, cuts operational overhead by up to 60%, captures leads 24/7 through AI voicebots, and secures dominant Google search rankings through optimized technical web architecture."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can a custom CRM or MVP be developed and launched?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using our battle-tested Next.js and cloud microservices architecture, rapid MVPs and custom CRM portals typically launch to production within 2 to 4 weeks with full security, database migrations, and responsive UI."
          }
        },
        {
          "@type": "Question",
          "name": "Can your AI voicebots integrate directly into our phone line and CRM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our AI voicebots integrate natively with Twilio SIP trunking, WebRTC browsers, HubSpot, Salesforce, and custom PostgreSQL databases with sub-800ms natural conversational latency."
          }
        },
        {
          "@type": "Question",
          "name": "What industries do you build mobile applications for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in mission-critical logistics & fleet tracking (GPS, offline routing, dispatch), health & wellness/meditation platforms (spatial audio, biometric sync, daily streaks), and on-demand service apps."
          }
        }
      ]
    }
  ]
};
