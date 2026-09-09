import React from "react";
import Link from "next/link";
import { Cpu } from "lucide-react";
import { siteConfig } from "@/data/seoKeywords";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/ui/BrandIcons";
import Logo from "@/components/ui/Logo";
import FooterLinks from "./FooterLinks";
import KeywordIndex from "./KeywordIndex";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        background: "#080c16",
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
            <div style={{ marginBottom: "1.2rem" }}>
              <Logo size={36} theme="dark" />
            </div>

            <p style={{ fontSize: "0.88rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Premier digital solutions studio building 24/7 AI phone receptionists, custom web portals, field mobile apps, modern website designs, and custom animations that help businesses scale.
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
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#cbd5e1",
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
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#cbd5e1",
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
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#cbd5e1",
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
            color: "#64748b",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "2rem",
          }}
        >
          <div>
            &copy; {currentYear} acstena Studio. All rights reserved. Precision-engineered with Next.js & GSAP.
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem 1.5rem" }}>
            <Link href="/services" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Privacy & IP Security
            </Link>
            <Link href="/contact" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Terms of Engineering
            </Link>
            <Link href="/planner" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Service Level Agreement (SLA)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
