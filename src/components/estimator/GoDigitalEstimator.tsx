"use client";

import React, { useState } from "react";
import { Calculator } from "lucide-react";
import { solutionOptions, teamSizeOptions } from "@/data/estimatorData";
import { SolutionOption } from "@/types";
import Badge from "@/components/ui/Badge";
import SolutionSelector from "./SolutionSelector";
import YieldDashboard from "./YieldDashboard";

export default function GoDigitalEstimator() {
  const [selectedSolution, setSelectedSolution] = useState<SolutionOption>(
    solutionOptions[0]
  );
  const [selectedTeamIndex, setSelectedTeamIndex] = useState<number>(1);
  const [urgencySprint, setUrgencySprint] = useState<"standard" | "accelerated">(
    "standard"
  );

  const teamMultiplier = teamSizeOptions[selectedTeamIndex].multiplier;
  const calculatedSavings = Math.round(
    selectedSolution.monthlySavings * teamMultiplier
  );
  const annualSavings = calculatedSavings * 12;
  const effectiveWeeks =
    urgencySprint === "accelerated"
      ? Math.max(1.5, selectedSolution.sprintWeeks * 0.7)
      : selectedSolution.sprintWeeks;

  return (
    <section
      id="estimator"
      className="section-spacing"
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, rgba(5,7,12,0) 0%, rgba(14,20,38,0.6) 50%, rgba(5,7,12,0) 100%)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 3.5rem" }}>
          <Badge variant="emerald" icon={<Calculator size={14} />} style={{ marginBottom: "1rem" }}>
            Interactive ROI & Sprint Calculator
          </Badge>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Ready To Go Digital?{" "}
            <span className="gradient-text-emerald">
              Calculate Your Exact ROI & Timeline
            </span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Stop losing thousands every month to manual admin, missed phone inquiries, and invisible search rankings. Select your digital transformation target below to view your engineering sprint and financial upside.
          </p>
        </div>

        <div className="estimator-layout-grid">
          <SolutionSelector
            solutions={solutionOptions}
            selectedSolution={selectedSolution}
            onSelectSolution={setSelectedSolution}
            teamSizes={teamSizeOptions}
            selectedTeamIndex={selectedTeamIndex}
            onSelectTeamIndex={setSelectedTeamIndex}
            urgencySprint={urgencySprint}
            onToggleUrgency={() =>
              setUrgencySprint(
                urgencySprint === "standard" ? "accelerated" : "standard"
              )
            }
          />
          <YieldDashboard
            solution={selectedSolution}
            teamIndex={selectedTeamIndex}
            calculatedSavings={calculatedSavings}
            annualSavings={annualSavings}
            effectiveWeeks={effectiveWeeks}
          />
        </div>
      </div>
    </section>
  );
}
