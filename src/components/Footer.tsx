import React from "react";
import Link from "next/link";
import { Cpu, Globe, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/seoKeywords";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "rgba(5, 7, 12, 0.95)",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Col 1: Brand & Identity */}
          <div style={{ maxWidth: "340px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #00f0ff, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Cpu size={18} color="#05070c" strokeWidth={2.5} />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  letterSpacing: "-0.02em",
                }}
              >
                AURA<span style={{ color: "var(--accent-cyan)" }}>DIGITAL</span>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              Premier digital engineering studio specializing in autonomous AI voicebots, enterprise CRM web applications, high-performance logistics & wellness mobile apps, Figma UI/UX, and Adobe Animate motion graphics.
            </p>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                }}
                aria-label="GitHub Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                }}
                aria-label="LinkedIn Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                }}
                aria-label="Twitter / X Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

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
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
              }}
            >
              <li>
                <Link href="#voice-ai" style={{ color: "inherit", textDecoration: "none" }}>
                  Conversational Voicebots (Twilio / WebRTC)
                </Link>
              </li>
              <li>
                <Link href="#voice-ai" style={{ color: "inherit", textDecoration: "none" }}>
                  Enterprise RAG Chatbots & Vector Search
                </Link>
              </li>
              <li>
                <Link href="#web-crm" style={{ color: "inherit", textDecoration: "none" }}>
                  Custom Web CRM & Cloud Portals
                </Link>
              </li>
              <li>
                <Link href="#web-crm" style={{ color: "inherit", textDecoration: "none" }}>
                  Rapid 3-Week Next.js MVPs
                </Link>
              </li>
              <li>
                <Link href="#mobile-apps" style={{ color: "inherit", textDecoration: "none" }}>
                  Logistics & Fleet Telematics Apps
                </Link>
              </li>
              <li>
                <Link href="#mobile-apps" style={{ color: "inherit", textDecoration: "none" }}>
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
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
              }}
            >
              <li>
                <Link href="#design-motion" style={{ color: "inherit", textDecoration: "none" }}>
                  Figma UI/UX Systems & Prototypes
                </Link>
              </li>
              <li>
                <Link href="#design-motion" style={{ color: "inherit", textDecoration: "none" }}>
                  Adobe Animate 2D Vector Animations
                </Link>
              </li>
              <li>
                <Link href="#design-motion" style={{ color: "inherit", textDecoration: "none" }}>
                  Canva Brand Kits & Presentation Decks
                </Link>
              </li>
              <li>
                <Link href="#design-motion" style={{ color: "inherit", textDecoration: "none" }}>
                  Interactive HTML5 Canvas & Lottie Micro-Interactions
                </Link>
              </li>
              <li>
                <Link href="#design-motion" style={{ color: "inherit", textDecoration: "none" }}>
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
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
              }}
            >
              <li>
                <Link href="#seo-growth" style={{ color: "inherit", textDecoration: "none" }}>
                  Small Business Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="#seo-growth" style={{ color: "inherit", textDecoration: "none" }}>
                  Commercial Intent Keyword Clustering
                </Link>
              </li>
              <li>
                <Link href="#seo-growth" style={{ color: "inherit", textDecoration: "none" }}>
                  Core Web Vitals & 99+ PageSpeed
                </Link>
              </li>
              <li>
                <Link href="#seo-growth" style={{ color: "inherit", textDecoration: "none" }}>
                  Schema.org JSON-LD Structured Data
                </Link>
              </li>
              <li>
                <Link href="#estimator" style={{ color: "inherit", textDecoration: "none" }}>
                  Calculate Your Project ROI
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Keyword Index Bar */}
        <div
          style={{
            padding: "1.5rem",
            borderRadius: "var(--radius-md)",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid var(--border-subtle)",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--text-muted)",
              marginBottom: "0.75rem",
            }}
          >
            Target Commercial Keywords & Index
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
            }}
          >
            {siteConfig.keywords.map((k) => (
              <span
                key={k}
                style={{
                  padding: "0.2rem 0.6rem",
                  borderRadius: "4px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "2rem",
          }}
        >
          <div>
            &copy; {currentYear} AuraDigital Solutions Studio. All rights reserved. Precision-engineered with Next.js & GSAP.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="#services" style={{ color: "inherit", textDecoration: "none" }}>
              Privacy & IP Security
            </Link>
            <Link href="#contact" style={{ color: "inherit", textDecoration: "none" }}>
              Terms of Engineering
            </Link>
            <Link href="#estimator" style={{ color: "inherit", textDecoration: "none" }}>
              Service Level Agreement (SLA)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
