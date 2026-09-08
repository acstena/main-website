"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { simulatorScenarios } from "@/data/simulatorData";
import { Scenario } from "@/types";
import Badge from "@/components/ui/Badge";
import ScenarioTabs from "./ScenarioTabs";
import ConversationPane from "./ConversationPane";
import TelemetryPane from "./TelemetryPane";

export default function VoicebotSimulator() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(
    simulatorScenarios[0]
  );
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && currentStepIndex < selectedScenario.dialog.length - 1) {
      timer = setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, 2600);
    } else if (currentStepIndex >= selectedScenario.dialog.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStepIndex, selectedScenario]);

  const handleSelectScenario = (sc: Scenario) => {
    setSelectedScenario(sc);
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  const handleStartSimulation = () => {
    setCurrentStepIndex(0);
    setIsPlaying(true);
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  const accumulatedData: Record<string, string> = {};
  for (let i = 0; i <= currentStepIndex; i++) {
    const data = selectedScenario.dialog[i].extractedData;
    if (data) Object.assign(accumulatedData, data);
  }

  return (
    <section
      id="voice-ai"
      className="section-spacing"
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, rgba(5,7,12,0) 0%, rgba(10,14,24,0.5) 50%, rgba(5,7,12,0) 100%)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem" }}>
          <Badge icon={<Sparkles size={14} />} style={{ marginBottom: "1rem" }}>
            Interactive Production Demo
          </Badge>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Experience Live Autonomous AI:{" "}
            <span className="gradient-text-cyan-violet">Voicebots & Intelligent Agents</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Test our sub-800ms conversational telephony engine. Watch how natural voice speech is transcribed, processed, and written to external CRMs and databases in real time without human intervention.
          </p>
        </div>

        <ScenarioTabs
          scenarios={simulatorScenarios}
          selectedId={selectedScenario.id}
          onSelect={handleSelectScenario}
        />

        {/* Simulator Cockpit */}
        <div className="glass-card simulator-cockpit">
          {/* Top Bar */}
          <div className="simulator-topbar">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: isPlaying ? "var(--accent-emerald)" : "#64748b",
                  boxShadow: isPlaying ? "0 0 12px var(--accent-emerald)" : "none",
                }}
              />
              <div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  {selectedScenario.title}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  Target: {selectedScenario.industry}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
              <span className="tech-tag" style={{ color: "var(--accent-cyan)" }}>
                Latency: ~280ms
              </span>
              <span className="tech-tag" style={{ color: "var(--accent-emerald)" }}>
                STT: Deepgram Nova-2
              </span>
              <span className="tech-tag" style={{ color: "var(--accent-violet)" }}>
                TTS: ElevenLabs Turbo
              </span>
            </div>
          </div>

          <div className="simulator-inner-grid">
            <ConversationPane
              dialog={selectedScenario.dialog}
              currentStepIndex={currentStepIndex}
            />
            <TelemetryPane
              accumulatedData={accumulatedData}
              isPlaying={isPlaying}
              currentStepIndex={currentStepIndex}
              onStartSimulation={handleStartSimulation}
              onPauseSimulation={() => setIsPlaying(false)}
              onReset={handleReset}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
