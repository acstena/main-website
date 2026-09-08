"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  TrendingUp,
  Cpu,
  Mic,
  LayoutDashboard,
  Truck,
  ArrowRight,
  CheckCircle2,
  Zap,
  PhoneCall,
} from "lucide-react";

type VisualMode = "voice-ai" | "web-crm" | "mobile-logistics";

export default function HeroVisual() {
  const [activeMode, setActiveMode] = useState<VisualMode>("voice-ai");

  return (
    <div className="hero-visual-wrapper">
      {/* Interactive Command Cockpit Console */}
      <div className="hero-cockpit-stage">
        {/* Top Window Header / Mac Dots & Live Status */}
        <div className="cockpit-top-header">
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.72rem",
                color: "#64748b",
                fontFamily: "monospace",
                display: "inline-block",
              }}
            >
              acstena://core-engine/live-telemetry
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.25rem 0.65rem",
              borderRadius: "9999px",
              background: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#34d399",
            }}
          >
            <div className="pulse-dot" style={{ width: "6px", height: "6px" }} />
            <span>Telemetry Online • 280ms</span>
          </div>
        </div>

        {/* Mode Selector Tabs inside Console */}
        <div className="cockpit-tabs-row">
          <button
            onClick={() => setActiveMode("voice-ai")}
            className={`cockpit-tab-pill ${activeMode === "voice-ai" ? "active" : ""}`}
          >
            <Mic size={14} />
            <span>Voice AI Telephony</span>
          </button>
          <button
            onClick={() => setActiveMode("web-crm")}
            className={`cockpit-tab-pill ${activeMode === "web-crm" ? "active" : ""}`}
          >
            <LayoutDashboard size={14} />
            <span>Web CRM MVP</span>
          </button>
          <button
            onClick={() => setActiveMode("mobile-logistics")}
            className={`cockpit-tab-pill ${activeMode === "mobile-logistics" ? "active" : ""}`}
          >
            <Truck size={14} />
            <span>Mobile Logistics</span>
          </button>
        </div>

        {/* Cockpit Main Display Stage */}
        <div className="cockpit-display-area">
          {/* Ambient Holographic Matrix Background */}
          <div className="cockpit-bg-image-wrapper">
            <Image
              src="/images/hero_digital_matrix.jpg"
              alt="acstena Digital Matrix Core"
              fill
              sizes="(max-width: 768px) 100vw, 650px"
              priority
              style={{ objectFit: "cover", opacity: 0.28 }}
            />
            <div className="cockpit-gradient-overlay" />
          </div>

          {/* Mode 1: Voice AI Telephony View */}
          {activeMode === "voice-ai" && (
            <div className="cockpit-mode-content speech-bubble-enter">
              {/* Call Status Badge */}
              <div className="cockpit-call-banner">
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div className="cockpit-phone-pulse">
                    <PhoneCall size={15} color="#10b981" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "#94a3b8" }}>Inbound Call Stream • Active</div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#f8fafc" }}>
                      +1 (800) 555-ACSTENA • Dental Clinic Intake
                    </div>
                  </div>
                </div>

                {/* Animated Voice Waveform */}
                <div className="equalizer-container" style={{ height: "18px" }}>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="equalizer-bar active" style={{ height: `${8 + (i % 4) * 4}px` }} />
                  ))}
                </div>
              </div>

              {/* Dialogue Transcript Bubble */}
              <div className="cockpit-dialogue-bubble">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
                  <Bot size={15} color="var(--accent-cyan)" />
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--accent-cyan)", textTransform: "uppercase" }}>
                    Autonomous AI Voicebot (280ms Latency)
                  </span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "#f8fafc", lineHeight: 1.5, margin: 0 }}>
                  &ldquo;Hello! I have booked your root canal consultation for Thursday at 2:30 PM with Dr. Vance. I&apos;ve sent a calendar invite and SMS confirmation to your mobile number.&rdquo;
                </p>
              </div>

              {/* Real-time Extracted Telemetry Payload Chips */}
              <div className="cockpit-chips-grid">
                <div className="cockpit-hud-chip">
                  <div className="chip-label">Intent Classification</div>
                  <div className="chip-val" style={{ color: "var(--accent-emerald)" }}>Emergency Appointment (99.4% conf)</div>
                </div>
                <div className="cockpit-hud-chip">
                  <div className="chip-label">CRM Database Write</div>
                  <div className="chip-val" style={{ color: "var(--accent-cyan)" }}>Postgres EHR &bull; Synced Instant</div>
                </div>
              </div>
            </div>
          )}

          {/* Mode 2: Web CRM Platform View */}
          {activeMode === "web-crm" && (
            <div className="cockpit-mode-content speech-bubble-enter">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "#94a3b8" }}>ApexFlow Cloud Architecture</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#f8fafc" }}>
                    Live Kanban Pipeline & Real-Time Telemetry
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    padding: "0.2rem 0.55rem",
                    borderRadius: "6px",
                    background: "rgba(99, 102, 241, 0.15)",
                    border: "1px solid rgba(99, 102, 241, 0.3)",
                    color: "#818cf8",
                    fontFamily: "monospace",
                  }}
                >
                  Next.js 16 + Supabase
                </span>
              </div>

              {/* Mini Kanban Columns */}
              <div className="cockpit-kanban-row">
                <div className="kanban-mini-col">
                  <div className="kanban-col-title">Inbound Leads (18)</div>
                  <div className="kanban-mini-card">
                    <div className="card-title">Apex Logistics Corp</div>
                    <div className="card-sub">Quote: $4,200/mo &bull; High Match</div>
                  </div>
                </div>
                <div className="kanban-mini-col">
                  <div className="kanban-col-title">Sprint Active (4)</div>
                  <div className="kanban-mini-card active-card">
                    <div className="card-title">OmniVoice Telephony</div>
                    <div className="card-sub">Twilio SIP Trunk &bull; Deploying</div>
                  </div>
                </div>
              </div>

              <div className="cockpit-chips-grid" style={{ marginTop: "1rem" }}>
                <div className="cockpit-hud-chip">
                  <div className="chip-label">Operational Speed</div>
                  <div className="chip-val" style={{ color: "var(--accent-cyan)" }}>+310% Pipeline Velocity</div>
                </div>
                <div className="cockpit-hud-chip">
                  <div className="chip-label">Spreadsheet Retirement</div>
                  <div className="chip-val" style={{ color: "var(--accent-emerald)" }}>14 Excel Files &rarr; 1 Cloud Portal</div>
                </div>
              </div>
            </div>
          )}

          {/* Mode 3: Mobile Logistics View */}
          {activeMode === "mobile-logistics" && (
            <div className="cockpit-mode-content speech-bubble-enter">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "#94a3b8" }}>FleetPulse Mobile Telematics</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#f8fafc" }}>
                    Offline-First Geofence & Routing Engine
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    padding: "0.2rem 0.55rem",
                    borderRadius: "6px",
                    background: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    color: "#34d399",
                    fontFamily: "monospace",
                  }}
                >
                  React Native + SQLite
                </span>
              </div>

              {/* Telematics Coordinates Display */}
              <div
                style={{
                  padding: "0.85rem 1rem",
                  borderRadius: "10px",
                  background: "rgba(15, 23, 42, 0.85)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#94a3b8" }}>
                  <span>Vehicle Telemetry: Truck #408</span>
                  <span style={{ color: "var(--accent-emerald)" }}>GPS Signal: Excellent</span>
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#f8fafc", marginTop: "0.25rem", fontFamily: "monospace" }}>
                  41.8781° N, 87.6298° W &bull; Speed: 58 MPH &bull; I-90 Corridor
                </div>
              </div>

              <div className="cockpit-chips-grid">
                <div className="cockpit-hud-chip">
                  <div className="chip-label">Offline Reliability</div>
                  <div className="chip-val" style={{ color: "var(--accent-emerald)" }}>99.98% Local Cache Sync</div>
                </div>
                <div className="cockpit-hud-chip">
                  <div className="chip-label">Fuel Route Savings</div>
                  <div className="chip-val" style={{ color: "var(--accent-cyan)" }}>28% Mileage Reduction</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cockpit Footer HUD / Tech Stack & Deep Link */}
        <div className="cockpit-bottom-footer">
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" }}>
            <span className="cockpit-tech-pill">Next.js 16</span>
            <span className="cockpit-tech-pill">OpenAI Realtime</span>
            <span className="cockpit-tech-pill">Twilio WebRTC</span>
            <span className="cockpit-tech-pill">Supabase</span>
          </div>

          <Link
            href="/voice-ai"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "var(--accent-cyan)",
              textDecoration: "none",
            }}
          >
            <span>Full Simulator Cockpit</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
