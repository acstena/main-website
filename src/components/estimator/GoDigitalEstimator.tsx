"use client";

import React, { useState } from "react";
import { Cpu } from "lucide-react";
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
          "linear-gradient(180deg, rgba(248,250,252,0) 0%, rgba(241,245,249,0.8) 50%, rgba(248,250,252,0) 100%)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 3.5rem" }}>
          <Badge variant="emerald" icon={<Cpu size={14} />} style={{ marginBottom: "1rem" }}>
            Interactive Project Planner
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
              Plan Your Solution & Estimated Timeline
            </span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Select what you want to build below to see recommended features, estimated launch timelines, and the real-world efficiency gains you can expect for your business.
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
            effectiveWeeks={effectiveWeeks}
          />
        </div>
      </div>
    </section>
  );
}
