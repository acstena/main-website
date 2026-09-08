import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { SolutionOption } from "@/types";

interface YieldDashboardProps {
  solution: SolutionOption;
  teamIndex: number;
  effectiveWeeks: number;
}

export default function YieldDashboard({
  solution,
  teamIndex,
  effectiveWeeks,
}: YieldDashboardProps) {
  return (
    <div
      className="glass-card"
      style={{
        padding: "clamp(1.5rem, 2.5vw, 2.5rem)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "rgba(10, 15, 28, 0.9)",
        border: "1px solid rgba(16, 185, 129, 0.3)",
        boxShadow: "0 15px 45px rgba(0, 0, 0, 0.7)",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--accent-emerald)",
              }}
            >
              Engineering Scope
            </div>
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginTop: "0.2rem",
              }}
            >
              {solution.label}
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              Deployment Window
            </div>
            <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--accent-cyan)" }}>
              ~{effectiveWeeks} Sprints
            </div>
          </div>
        </div>

        {/* Operational Transformation Metric (Zero Prices) */}
        <div
          style={{
            padding: "1.5rem",
            borderRadius: "var(--radius-md)",
            background:
              "linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(0, 240, 255, 0.08) 100%)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            marginBottom: "1.75rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "0.82rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--accent-emerald)",
            }}
          >
            Target Operational Transformation
          </div>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)",
              fontWeight: 800,
              color: "#34d399",
              margin: "0.5rem 0",
            }}
          >
            {solution.efficiencyGain}
          </div>
          <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
            {solution.adminHoursSaved} by eliminating manual bottlenecks
          </div>
        </div>

        {/* Recommended Stack */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--text-muted)",
              marginBottom: "0.5rem",
            }}
          >
            Tailored Tech Architecture
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {solution.techRecommendation.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "0.75rem",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "6px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "var(--accent-cyan)",
                  fontFamily: "monospace",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* SEO Advantage */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
            padding: "0.85rem 1rem",
            borderRadius: "var(--radius-md)",
            background: "rgba(0, 240, 255, 0.05)",
            border: "1px solid rgba(0, 240, 255, 0.15)",
            marginBottom: "2rem",
          }}
        >
          <TrendingUp
            size={18}
            color="var(--accent-cyan)"
            style={{ flexShrink: 0, marginTop: "0.2rem" }}
          />
          <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
            <strong style={{ color: "var(--text-primary)" }}>
              SEO & Google Ranking Advantage:
            </strong>{" "}
            {solution.searchAdvantage}
          </div>
        </div>
      </div>

      <Link
        href={`#contact?solution=${solution.id}&team=${teamIndex}`}
        className="btn-primary"
        style={{
          width: "100%",
          padding: "1rem",
          fontSize: "1rem",
          background: "linear-gradient(135deg, #10b981 0%, #00f0ff 100%)",
          boxShadow: "0 0 30px rgba(16, 185, 129, 0.35)",
        }}
      >
        <span>Lock In This Sprint With Our Engineers</span>
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}
