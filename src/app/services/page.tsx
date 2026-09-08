import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ServicesMatrix from "@/components/services/ServicesMatrix";

export const metadata: Metadata = {
  title: "Digital Engineering Solutions & Capabilities",
  description:
    "Explore acstena's full-spectrum engineering capabilities: Autonomous AI Voicebots, Next.js Web CRMs, Fleet Logistics & Wellness Mobile Apps, Figma Design Systems, and Adobe Animate Motion.",
  alternates: {
    canonical: "https://acstena.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: "7.5rem", paddingBottom: "5rem" }}>
      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 3rem" }}>
          <Badge icon={<Layers size={14} />} style={{ marginBottom: "1rem" }}>
            Comprehensive Digital Capabilities
          </Badge>
          <h1
            style={{
              fontSize: "clamp(2.3rem, 4.5vw, 3.5rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Full-Spectrum Digital Solutions:{" "}
            <span className="gradient-text-cyan-violet">
              AI, Web, Mobile & Creative Engineering
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            From low-latency conversational AI voice receptionists to mission-critical logistics apps and 60fps Adobe Animate vector motion—every system is engineered for scalability and zero operational drag.
          </p>
        </div>

        {/* Full Interactive Filterable Services Matrix */}
        <ServicesMatrix />

        {/* Bottom CTA Card */}
        <div
          className="glass-card"
          style={{
            padding: "clamp(2rem, 4vw, 3.5rem)",
            marginTop: "4rem",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)",
            border: "1px solid rgba(99, 102, 241, 0.2)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <Badge icon={<Sparkles size={14} />} style={{ marginBottom: "1rem" }}>
            Tailored Engineering Scopes
          </Badge>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Ready To Architecture Your Custom Solution?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            Plan your technical delivery sprint, choose your engineering stack, or consult directly with our senior full-stack architects.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/planner" className="btn-primary">
              <span>Launch Sprint Planner</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              <span>Book Technical Discovery</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
