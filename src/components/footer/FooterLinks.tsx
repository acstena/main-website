import React from "react";
import Link from "next/link";

export default function FooterLinks() {
  return (
    <>
      {/* Col 2: Engineering Solutions */}
      <div>
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.95rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "1.2rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Engineering & AI
        </div>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
          <li>
            <Link href="/voice-ai" style={{ color: "inherit", textDecoration: "none" }}>
              Conversational Voicebots (Twilio / WebRTC)
            </Link>
          </li>
          <li>
            <Link href="/voice-ai" style={{ color: "inherit", textDecoration: "none" }}>
              Enterprise RAG Chatbots & Vector Search
            </Link>
          </li>
          <li>
            <Link href="/services" style={{ color: "inherit", textDecoration: "none" }}>
              Custom Web CRM & Cloud Portals
            </Link>
          </li>
          <li>
            <Link href="/services" style={{ color: "inherit", textDecoration: "none" }}>
              Rapid 3-Week Next.js MVPs
            </Link>
          </li>
          <li>
            <Link href="/services" style={{ color: "inherit", textDecoration: "none" }}>
              Logistics & Fleet Telematics Apps
            </Link>
          </li>
          <li>
            <Link href="/services" style={{ color: "inherit", textDecoration: "none" }}>
              Meditation, Audio & Wellness Apps
            </Link>
          </li>
        </ul>
      </div>

      {/* Col 3: Design & Motion */}
      <div>
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.95rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "1.2rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Design & Motion
        </div>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
          <li>
            <Link href="/services" style={{ color: "inherit", textDecoration: "none" }}>
              Figma UI/UX Systems & Prototypes
            </Link>
          </li>
          <li>
            <Link href="/services" style={{ color: "inherit", textDecoration: "none" }}>
              Adobe Animate 2D Vector Animations
            </Link>
          </li>
          <li>
            <Link href="/services" style={{ color: "inherit", textDecoration: "none" }}>
              Canva Brand Kits & Presentation Decks
            </Link>
          </li>
          <li>
            <Link href="/portfolio" style={{ color: "inherit", textDecoration: "none" }}>
              Interactive Case Studies & Outcomes
            </Link>
          </li>
          <li>
            <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>
              NFC Digital Business Cards & Collateral
            </Link>
          </li>
        </ul>
      </div>

      {/* Col 4: Small Business 'Go Digital' & SEO */}
      <div>
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.95rem",
            fontWeight: 700,
            color: "var(--accent-emerald)",
            marginBottom: "1.2rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Go Digital & SEO
        </div>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
          <li>
            <Link href="/seo-growth" style={{ color: "inherit", textDecoration: "none" }}>
              Small Business Digital Transformation
            </Link>
          </li>
          <li>
            <Link href="/seo-growth" style={{ color: "inherit", textDecoration: "none" }}>
              Commercial Intent Keyword Clustering
            </Link>
          </li>
          <li>
            <Link href="/seo-growth" style={{ color: "inherit", textDecoration: "none" }}>
              Core Web Vitals & 99+ PageSpeed
            </Link>
          </li>
          <li>
            <Link href="/seo-growth" style={{ color: "inherit", textDecoration: "none" }}>
              Schema.org JSON-LD Structured Data
            </Link>
          </li>
          <li>
            <Link href="/planner" style={{ color: "inherit", textDecoration: "none" }}>
              Architecture & Sprint Planner
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
