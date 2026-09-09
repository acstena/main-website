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
        padding: "clamp(1.25rem, 3vw, 2.5rem)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "rgba(255, 255, 255, 0.95)",
        border: "1px solid rgba(16, 185, 129, 0.3)",
        boxShadow: "0 15px 45px rgba(15, 23, 42, 0.06)",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
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
                color: "#059669",
              }}
            >
              Selected Solution
            </div>
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#0f172a",
                marginTop: "0.2rem",
              }}
            >
              {solution.label}
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              Estimated Launch Time
            </div>
            <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0284c7" }}>
              ~{effectiveWeeks} Weeks
            </div>
          </div>
        </div>

        {/* Operational Transformation Metric (Zero Prices) */}
        <div
          style={{
            padding: "1.25rem",
            borderRadius: "var(--radius-md)",
            background:
              "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(2, 132, 199, 0.06) 100%)",
            border: "1px solid rgba(16, 185, 129, 0.25)",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#059669",
            }}
          >
            Expected Business Result
          </div>
          <div
            key={solution.id}
            className="metric-pop-enter"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.5rem, 3.2vw, 2.2rem)",
              fontWeight: 800,
              color: "#059669",
              margin: "0.4rem 0",
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
            Included Capabilities &amp; Features
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {solution.techRecommendation.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "0.75rem",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "6px",
                  background: "rgba(2, 132, 199, 0.06)",
                  border: "1px solid rgba(2, 132, 199, 0.2)",
                  color: "#0284c7",
                  fontWeight: 600,
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
            background: "rgba(2, 132, 199, 0.05)",
            border: "1px solid rgba(2, 132, 199, 0.15)",
            marginBottom: "2rem",
          }}
        >
          <TrendingUp
            size={18}
            color="#0284c7"
            style={{ flexShrink: 0, marginTop: "0.2rem" }}
          />
          <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
            <strong style={{ color: "#0f172a" }}>
              Business Growth Advantage:
            </strong>{" "}
            {solution.searchAdvantage}
          </div>
        </div>
      </div>

      <Link
        href={`/contact?solution=${solution.id}&team=${teamIndex}`}
        className="btn-primary"
        style={{
          width: "100%",
          padding: "0.9rem",
          fontSize: "0.95rem",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <span>Discuss This Solution For Your Business</span>
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}
