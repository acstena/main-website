import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";
import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";

export const metadata: Metadata = {
  title: "Client Case Studies & Commercial Impact",
  description:
    "Explore real-world engineering case studies by acstena: Autonomous AI voice receptionists, custom freight CRMs, offline-first mobile apps, and institutional design systems.",
  alternates: {
    canonical: "https://acstena.com/portfolio",
  },
};

const highImpactHighlights = [
  { metric: "0%", label: "Missed Inbound Phone Calls (Healthcare Clinic Network)" },
  { metric: "45s", label: "Quote Generation Time (Down from 45 min in Freight CRM)" },
  { metric: "99.98%", label: "Offline Telemetry Sync Reliability (Fleet Logistics App)" },
  { metric: "85,000+", label: "Active Mobile Subscribers (PulseMind Wellness App)" },
];

export default function PortfolioPage() {
  return (
    <main style={{ paddingTop: "7.5rem", paddingBottom: "5rem" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 3.5rem" }}>
          <Badge icon={<Trophy size={14} />} style={{ marginBottom: "1rem" }}>
            Real Client Results
          </Badge>
          <h1
            style={{
              fontSize: "clamp(2.3rem, 4.5vw, 3.6rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Case Studies In Action:{" "}
            <span className="gradient-text-cyan-violet">
              Measurable Business Impact
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            See how our custom digital solutions replace slow manual spreadsheets, capture missed phone calls, and help businesses scale smoothly and profitably.
          </p>
        </div>

        {/* Aggregate Commercial Proof Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginBottom: "4.5rem",
          }}
        >
          {highImpactHighlights.map((item) => (
            <div
              key={item.label}
              className="glass-card"
              style={{
                padding: "1.75rem 1.5rem",
                textAlign: "center",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  color: "var(--accent-cyan)",
                  marginBottom: "0.4rem",
                }}
              >
                {item.metric}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Interactive Case Studies Component */}
        <PortfolioShowcase />

        {/* Bottom Consultation Banner */}
        <div
          className="glass-card"
          style={{
            marginTop: "4.5rem",
            padding: "clamp(2rem, 4vw, 3.5rem)",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)",
            border: "1px solid rgba(99, 102, 241, 0.2)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <Badge icon={<Sparkles size={14} />} style={{ marginBottom: "1rem" }}>
            Start Your Transformation
          </Badge>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Ready To Achieve Similar Results For Your Business?
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
            Speak directly with our team to map out what you need, get a free project roadmap, and discuss your launch timeline.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">
              <span>Book Free Strategy Call</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/planner" className="btn-secondary">
              <span>Explore Project Planner</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
