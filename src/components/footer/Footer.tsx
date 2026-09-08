import React from "react";
import Link from "next/link";
import { Cpu } from "lucide-react";
import { siteConfig } from "@/data/seoKeywords";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/ui/BrandIcons";
import FooterLinks from "./FooterLinks";
import KeywordIndex from "./KeywordIndex";

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
          {/* Brand & Identity */}
          <div style={{ maxWidth: "340px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
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
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.35rem", letterSpacing: "-0.03em" }}>
                acstena<span style={{ color: "var(--accent-cyan)" }}>.</span>
              </div>
            </div>

            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
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
                <GithubIcon size={18} />
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
                <LinkedinIcon size={18} />
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
                <TwitterXIcon size={18} />
              </a>
            </div>
          </div>

          <FooterLinks />
        </div>

        <KeywordIndex />

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
