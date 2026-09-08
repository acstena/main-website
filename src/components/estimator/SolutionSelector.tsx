import React from "react";
import { SolutionOption, TeamSizeOption } from "@/types";

interface SolutionSelectorProps {
  solutions: SolutionOption[];
  selectedSolution: SolutionOption;
  onSelectSolution: (solution: SolutionOption) => void;
  teamSizes: TeamSizeOption[];
  selectedTeamIndex: number;
  onSelectTeamIndex: (index: number) => void;
  urgencySprint: "standard" | "accelerated";
  onToggleUrgency: () => void;
}

export default function SolutionSelector({
  solutions,
  selectedSolution,
  onSelectSolution,
  teamSizes,
  selectedTeamIndex,
  onSelectTeamIndex,
  urgencySprint,
  onToggleUrgency,
}: SolutionSelectorProps) {
  return (
    <div className="glass-card" style={{ padding: "clamp(1.5rem, 2.5vw, 2.5rem)" }}>
      <div style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.25rem", color: "var(--text-primary)" }}>
        1. Choose Your Digital Transformation Solution
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
        {solutions.map((opt) => {
          const isSelected = selectedSolution.id === opt.id;
          return (
            <div
              key={opt.id}
              onClick={() => onSelectSolution(opt)}
              className={`estimator-option-item ${isSelected ? "selected" : ""}`}
            >
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: isSelected ? "var(--text-primary)" : "var(--text-secondary)",
                  }}
                >
                  {opt.label}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                  {opt.sublabel}
                </div>
              </div>
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  border: isSelected
                    ? "5px solid var(--accent-emerald)"
                    : "2px solid var(--text-muted)",
                  flexShrink: 0,
                  marginLeft: "1rem",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Team Size Selection */}
      <div style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>
        2. Select Your Business Size
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "0.75rem",
          marginBottom: "2rem",
        }}
      >
        {teamSizes.map((t, idx) => {
          const isSelected = selectedTeamIndex === idx;
          return (
            <button
              key={t.label}
              onClick={() => onSelectTeamIndex(idx)}
              style={{
                padding: "0.75rem",
                borderRadius: "var(--radius-md)",
                border: isSelected
                  ? "1px solid var(--accent-cyan)"
                  : "1px solid var(--border-subtle)",
                background: isSelected
                  ? "rgba(0, 240, 255, 0.12)"
                  : "rgba(255, 255, 255, 0.03)",
                color: isSelected
                  ? "var(--accent-cyan)"
                  : "var(--text-secondary)",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: 600,
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Sprint Velocity Toggle */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 1.25rem",
          borderRadius: "var(--radius-md)",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid var(--border-subtle)",
        }}
      >
        <div>
          <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)" }}>
            Accelerated Priority Sprint
          </div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
            Dedicated engineering pod for 30% faster launch
          </div>
        </div>
        <button
          onClick={onToggleUrgency}
          style={{
            padding: "0.4rem 0.9rem",
            borderRadius: "9999px",
            fontSize: "0.78rem",
            fontWeight: 700,
            cursor: "pointer",
            border:
              urgencySprint === "accelerated"
                ? "1px solid var(--accent-amber)"
                : "1px solid var(--border-subtle)",
            background:
              urgencySprint === "accelerated"
                ? "rgba(245, 158, 11, 0.2)"
                : "transparent",
            color:
              urgencySprint === "accelerated"
                ? "var(--accent-amber)"
                : "var(--text-secondary)",
          }}
        >
          {urgencySprint === "accelerated" ? "ACTIVE" : "ENABLE"}
        </button>
      </div>
    </div>
  );
}
