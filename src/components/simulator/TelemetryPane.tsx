import React from "react";
import {
  CheckCircle2,
  PhoneCall,
  PhoneOff,
  RotateCcw,
  Volume2,
} from "lucide-react";

interface TelemetryPaneProps {
  accumulatedData: Record<string, string>;
  isPlaying: boolean;
  currentStepIndex: number;
  onStartSimulation: () => void;
  onPauseSimulation: () => void;
  onReset: () => void;
}

export default function TelemetryPane({
  accumulatedData,
  isPlaying,
  currentStepIndex,
  onStartSimulation,
  onPauseSimulation,
  onReset,
}: TelemetryPaneProps) {
  const dataKeys = Object.keys(accumulatedData);

  return (
    <div className="telemetry-side-pane">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            fontSize: "0.82rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "var(--accent-emerald)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <CheckCircle2 size={16} />
          <span>Customer Information Automatically Captured & Scheduled</span>
        </div>
      </div>

      {/* Payload Key-Value Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
          gap: "0.75rem",
          marginBottom: "1.5rem",
        }}
      >
        {dataKeys.length === 0 ? (
          <div
            style={{
              gridColumn: "1 / -1",
              padding: "1.5rem",
              textAlign: "center",
              color: "var(--text-muted)",
              fontSize: "0.85rem",
              background: "rgba(255,255,255,0.02)",
              borderRadius: "var(--radius-md)",
              border: "1px dashed var(--border-subtle)",
            }}
          >
            Click &ldquo;Simulate Live Call&rdquo; below to watch how customer details are captured and confirmed...
          </div>
        ) : (
          Object.entries(accumulatedData).map(([key, value]) => (
            <div
              key={key}
              style={{
                padding: "0.6rem 0.85rem",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                }}
              >
                {key}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#f8fafc",
                  fontWeight: 600,
                  marginTop: "0.15rem",
                }}
              >
                {value}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Action Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {!isPlaying ? (
            <button
              onClick={onStartSimulation}
              className="btn-primary"
              style={{
                padding: "0.6rem 1.4rem",
                fontSize: "0.88rem",
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                border: "none",
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.35)",
              }}
            >
              <PhoneCall size={16} />
              <span>{currentStepIndex > 0 ? "Replay Simulation" : "Simulate Live Call"}</span>
            </button>
          ) : (
            <button
              onClick={onPauseSimulation}
              className="btn-secondary"
              style={{
                padding: "0.6rem 1.4rem",
                fontSize: "0.88rem",
                borderColor: "#ef4444",
                color: "#f87171",
              }}
            >
              <PhoneOff size={16} />
              <span>Pause Call</span>
            </button>
          )}

          <button
            onClick={onReset}
            className="btn-secondary"
            style={{ padding: "0.6rem 1rem", fontSize: "0.88rem" }}
            title="Reset Dialogue"
          >
            <RotateCcw size={16} />
          </button>
        </div>

        {/* Dynamic Voice AI Audio Waveform Visualizer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.4rem 0.85rem",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="equalizer-container">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`equalizer-bar ${isPlaying ? "active" : ""}`}
                style={{
                  height: isPlaying ? undefined : "5px",
                }}
              />
            ))}
          </div>
          <span style={{ fontSize: "0.78rem", color: isPlaying ? "var(--accent-emerald)" : "#94a3b8", fontWeight: 600 }}>
            {isPlaying ? "AI Assistant Answering (Live)" : "Voice Engine Ready"}
          </span>
        </div>
      </div>
    </div>
  );
}
