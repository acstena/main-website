import React from "react";
import { Activity } from "lucide-react";
import { Scenario } from "@/types";

interface ScenarioTabsProps {
  scenarios: Scenario[];
  selectedId: string;
  onSelect: (scenario: Scenario) => void;
}

export default function ScenarioTabs({
  scenarios,
  selectedId,
  onSelect,
}: ScenarioTabsProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0.75rem",
        marginBottom: "2.5rem",
      }}
    >
      {scenarios.map((sc) => {
        const isSelected = selectedId === sc.id;
        return (
          <button
            key={sc.id}
            onClick={() => onSelect(sc)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.7rem 1.4rem",
              borderRadius: "var(--radius-md)",
              border: isSelected
                ? "1px solid var(--accent-cyan)"
                : "1px solid var(--border-subtle)",
              background: isSelected
                ? "rgba(0, 240, 255, 0.12)"
                : "rgba(255, 255, 255, 0.03)",
              color: isSelected
                ? "var(--text-primary)"
                : "var(--text-secondary)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            <Activity
              size={16}
              color={isSelected ? "var(--accent-cyan)" : "var(--text-muted)"}
            />
            <span>{sc.badge}</span>
          </button>
        );
      })}
    </div>
  );
}
