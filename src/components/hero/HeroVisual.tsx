"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bot,
  Mic,
  LayoutDashboard,
  Truck,
  ArrowRight,
  PhoneCall,
  Activity,
  Layers,
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Zap,
  ShieldCheck,
} from "lucide-react";

type VisualMode = "voice-ai" | "web-crm" | "mobile-logistics";

export default function HeroVisual() {
  const [activeMode, setActiveMode] = useState<VisualMode>("voice-ai");

  return (
    <div className="hero-visual-wrapper">
      {/* Ambient background glow */}
      <div className="hero-ambient-glow" />

      {/* Luminous Interactive Solution Showcase */}
      <div className="hero-cockpit-stage">
        {/* Top Control Bar with Segmented Switcher */}
        <div className="cockpit-top-header">
          <div className="cockpit-status-badge">
            <div className="pulse-dot" style={{ width: "7px", height: "7px" }} />
            <span>Live Interactive Preview</span>
          </div>

          {/* Segmented Mode Tabs (Obsidian active pill for 'a little dark' sleek contrast) */}
          <div className="cockpit-tabs-row">
            <button
              onClick={() => setActiveMode("voice-ai")}
              className={`cockpit-tab-pill ${activeMode === "voice-ai" ? "active" : ""}`}
              type="button"
            >
              <Mic size={14} />
              <span className="tab-label-full">AI Phone Receptionist</span>
              <span className="tab-label-short">AI Phone</span>
            </button>
            <button
              onClick={() => setActiveMode("web-crm")}
              className={`cockpit-tab-pill ${activeMode === "web-crm" ? "active" : ""}`}
              type="button"
            >
              <LayoutDashboard size={14} />
              <span className="tab-label-full">Custom Web Portal &amp; CRM</span>
              <span className="tab-label-short">Web Portal</span>
            </button>
            <button
              onClick={() => setActiveMode("mobile-logistics")}
              className={`cockpit-tab-pill ${activeMode === "mobile-logistics" ? "active" : ""}`}
              type="button"
            >
              <Truck size={14} />
              <span className="tab-label-full">Operations Mobile App</span>
              <span className="tab-label-short">Mobile App</span>
            </button>
          </div>

          <div className="cockpit-timing-tag">
            <Zap size={13} color="#059669" />
            <span>Launch in 2-4 Weeks</span>
          </div>
        </div>

        {/* Cockpit Main Display Stage (Strictly Fixed 280px Height & Zero Layout Shift) */}
        <div className="cockpit-display-area">
          {/* Mode 1: Voice AI Telephony View */}
          {activeMode === "voice-ai" && (
            <div className="cockpit-card-body speech-bubble-enter">
              {/* Call Header Banner */}
              <div className="cockpit-panel-banner">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div className="cockpit-phone-pulse">
                    <PhoneCall size={16} color="#059669" />
                  </div>
                  <div>
                    <div className="banner-subtext">
                      Live Inbound Patient Call • Answering Concurrently
                    </div>
                    <div className="banner-title">
                      Metro Health Dental Practice
                    </div>
                  </div>
                </div>

                {/* Animated Voice Equalizer */}
                <div className="equalizer-container">
                  <div className="equalizer-bar" style={{ height: "14px" }} />
                  <div className="equalizer-bar" style={{ height: "24px" }} />
                  <div className="equalizer-bar" style={{ height: "12px" }} />
                  <div className="equalizer-bar" style={{ height: "20px" }} />
                  <div className="equalizer-bar" style={{ height: "15px" }} />
                  <div className="equalizer-bar" style={{ height: "22px" }} />
                </div>
              </div>

              {/* Dialogue Transcript Bubble */}
              <div className="cockpit-dialogue-bubble">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
                  <Bot size={15} color="#0284c7" />
                  <span className="bubble-speaker">
                    AI Voice Receptionist (Human-Natural Speech)
                  </span>
                </div>
                <p className="bubble-text">
                  &ldquo;Good morning David! I have reserved your dental consultation for tomorrow, Thursday at 9:30 AM with Dr. Harris. I just sent an instant calendar invite and confirmation SMS to your mobile phone.&rdquo;
                </p>
              </div>

              {/* Real-time Extracted Telemetry Chips */}
              <div className="cockpit-chips-grid">
                <div className="cockpit-hud-chip">
                  <div className="chip-label">Automated Booking</div>
                  <div className="chip-val" style={{ color: "#059669" }}>
                    ✓ Thursday 9:30 AM (Google/Outlook Calendar Synced)
                  </div>
                </div>
                <div className="cockpit-hud-chip">
                  <div className="chip-label">Client Communication</div>
                  <div className="chip-val" style={{ color: "#0284c7" }}>
                    ✓ SMS Confirmation & Map Directions Dispatched
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mode 2: Web CRM Platform View */}
          {activeMode === "web-crm" && (
            <div className="cockpit-card-body speech-bubble-enter">
              {/* Web CRM Header */}
              <div className="cockpit-panel-banner">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div className="cockpit-phone-pulse" style={{ background: "rgba(99, 102, 241, 0.12)", borderColor: "rgba(99, 102, 241, 0.25)" }}>
                    <Layers size={16} color="#6366f1" />
                  </div>
                  <div>
                    <div className="banner-subtext">
                      Central Operations & Customer Portal
                    </div>
                    <div className="banner-title">
                      SwiftLane Logistics • Central Cloud Hub
                    </div>
                  </div>
                </div>

                <div className="cockpit-tech-tag">
                  Replaced 14 Excel Sheets
                </div>
              </div>

              {/* Interactive CRM Metric Row */}
              <div className="cockpit-crm-metrics">
                <div className="crm-mini-stat">
                  <div className="crm-stat-value" style={{ color: "#0284c7" }}>45 sec</div>
                  <div className="crm-stat-label">Quote Turnaround</div>
                  <div className="crm-stat-sub">Down from 45 mins on paper</div>
                </div>
                <div className="crm-mini-stat">
                  <div className="crm-stat-value" style={{ color: "#059669" }}>+310%</div>
                  <div className="crm-stat-label">Workflow Velocity</div>
                  <div className="crm-stat-sub">Zero manual data re-entry</div>
                </div>
                <div className="crm-mini-stat">
                  <div className="crm-stat-value" style={{ color: "#6366f1" }}>100%</div>
                  <div className="crm-stat-label">Real-Time Sync</div>
                  <div className="crm-stat-sub">Clients, orders, and invoices</div>
                </div>
              </div>

              {/* Telemetry Chips */}
              <div className="cockpit-chips-grid">
                <div className="cockpit-hud-chip">
                  <div className="chip-label">Digital Client Portal</div>
                  <div className="chip-val" style={{ color: "#059669" }}>
                    ✓ One-Click Digital Signatures & Payments
                  </div>
                </div>
                <div className="cockpit-hud-chip">
                  <div className="chip-label">Production Delivery</div>
                  <div className="chip-val" style={{ color: "#6366f1" }}>
                    ✓ Fully Built & Deployed Live in 3 Sprint Weeks
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mode 3: Mobile Logistics View */}
          {activeMode === "mobile-logistics" && (
            <div className="cockpit-card-body speech-bubble-enter">
              {/* Mobile Logistics Header */}
              <div className="cockpit-panel-banner">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div className="cockpit-phone-pulse" style={{ background: "rgba(16, 185, 129, 0.12)", borderColor: "rgba(16, 185, 129, 0.25)" }}>
                    <Activity size={16} color="#059669" />
                  </div>
                  <div>
                    <div className="banner-subtext">
                      Field Operations Mobile App (iOS & Android)
                    </div>
                    <div className="banner-title">
                      FleetPulse Real-Time Telematics
                    </div>
                  </div>
                </div>

                <div className="cockpit-tech-tag" style={{ color: "#059669", borderColor: "rgba(16, 185, 129, 0.3)" }}>
                  Works 100% Offline
                </div>
              </div>

              {/* Coordinates Preview Box */}
              <div className="cockpit-telematics-box">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: "#475569", fontWeight: 600 }}>
                    Active Delivery Route • Driver #408
                  </span>
                  <span style={{ color: "#059669", fontWeight: 700, fontSize: "0.78rem" }}>
                    ● GPS Connected
                  </span>
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0f172a", marginTop: "0.35rem" }}>
                  North Dallas Commercial Corridor — 18 of 22 Stops Completed
                </div>
              </div>

              {/* Telemetry Chips */}
              <div className="cockpit-chips-grid">
                <div className="cockpit-hud-chip">
                  <div className="chip-label">Offline Reliability</div>
                  <div className="chip-val" style={{ color: "#059669" }}>
                    ✓ Syncs Automatically When Signal Restores
                  </div>
                </div>
                <div className="cockpit-hud-chip">
                  <div className="chip-label">Fleet Efficiency</div>
                  <div className="chip-val" style={{ color: "#0284c7" }}>
                    ✓ 28% Reduction in Route Time & Fuel Costs
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cockpit Footer HUD / Features & Deep Link */}
        <div className="cockpit-bottom-footer">
          <div className="cockpit-features-row">
            <span className="cockpit-feature-tag">
              <CheckCircle2 size={13} color="#059669" />
              100% Code Ownership
            </span>
            <span className="cockpit-feature-tag">
              <CheckCircle2 size={13} color="#059669" />
              Zero Monthly SaaS Lock-In
            </span>
            <span className="cockpit-feature-tag">
              <CheckCircle2 size={13} color="#059669" />
              24/7 Production Support
            </span>
          </div>

          <Link href="/voice-ai" className="cockpit-deep-link">
            <span>Test Live Voice Simulator</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

