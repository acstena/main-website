import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCaseStudy } from "@/types";
import Badge from "@/components/ui/Badge";

export default function CaseStudyCard({ project }: { project: ProjectCaseStudy }) {
  const statColors = [
    "var(--accent-cyan)",
    "var(--accent-emerald)",
    "var(--accent-violet)",
    "var(--accent-amber)",
  ];

  return (
    <div
      className="glass-card portfolio-detail-grid"
      style={{
        padding: "clamp(1.5rem, 3vw, 3rem)",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "2.5rem",
        alignItems: "center",
        border: "1px solid rgba(0, 240, 255, 0.2)",
        boxShadow: "0 20px 45px rgba(15, 23, 42, 0.08), 0 0 25px rgba(0, 240, 255, 0.06)",
      }}
    >
      {/* Left Column: Details */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
          <Badge>{project.category}</Badge>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            {project.clientIndustry}
          </span>
        </div>

        <h3 style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.3rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
          {project.title}
        </h3>

        <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
          {project.summary}
        </p>

        {/* Challenge & Solution */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "2rem" }}>
          <div
            style={{
              padding: "1rem 1.25rem",
              borderRadius: "var(--radius-md)",
              background: "rgba(239, 68, 68, 0.05)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#f87171",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "0.3rem",
              }}
            >
              The Operational Drag (Before)
            </div>
            <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
              {project.challenge}
            </div>
          </div>

          <div
            style={{
              padding: "1rem 1.25rem",
              borderRadius: "var(--radius-md)",
              background: "rgba(16, 185, 129, 0.05)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--accent-emerald)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "0.3rem",
              }}
            >
              The Digital Architecture (Delivered)
            </div>
            <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
              {project.solution}
            </div>
          </div>
        </div>

        {/* Quantifiable Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {project.stats.map((st, i) => (
            <div
              key={st.label}
              style={{
                padding: "0.85rem 1rem",
                borderRadius: "var(--radius-md)",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: statColors[i % statColors.length],
                }}
              >
                {st.value}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>
                {st.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "2rem" }}>
          {project.tags.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>

        <Link href="#contact" className="btn-primary">
          <span>Commission Similar Architecture</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Right Column: Visual Mockup */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4 / 3",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(5,7,12,0.05) 0%, rgba(5,7,12,0.5) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "1rem",
            padding: "0.4rem 0.85rem",
            borderRadius: "9999px",
            background: "rgba(10, 14, 26, 0.85)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            fontSize: "0.75rem",
            color: "var(--text-primary)",
            fontWeight: 600,
          }}
        >
          Verified Production Snapshot
        </div>
      </div>
    </div>
  );
}
