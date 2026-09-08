"use client";

import React, { useState, useEffect } from "react";
import {
  Mic,
  MicOff,
  PhoneCall,
  PhoneOff,
  Bot,
  User,
  Sparkles,
  Volume2,
  CheckCircle2,
  RotateCcw,
  Activity,
} from "lucide-react";

interface DialogStep {
  speaker: "agent" | "user";
  text: string;
  extractedData?: Record<string, string>;
}

interface Scenario {
  id: string;
  title: string;
  badge: string;
  industry: string;
  description: string;
  dialog: DialogStep[];
}

const scenarios: Scenario[] = [
  {
    id: "healthcare",
    title: "OmniVoice Clinical Receptionist",
    badge: "Healthcare Voicebot",
    industry: "Dental & Specialty Clinics",
    description:
      "Autonomous 24/7 inbound telephone agent answering patient calls, verifying insurance, and booking appointments directly into EHR calendar.",
    dialog: [
      {
        speaker: "agent",
        text: "Thank you for calling Apex Dental Studio. I'm Elara, the digital care coordinator. How may I help you today?",
      },
      {
        speaker: "user",
        text: "Hi, I have a broken molar and need to schedule an emergency appointment with Dr. Harris for tomorrow morning.",
      },
      {
        speaker: "agent",
        text: "I understand that's uncomfortable. I have an emergency slot tomorrow at 9:30 AM with Dr. Harris. May I have your full name and date of birth?",
        extractedData: {
          Reason: "Emergency broken molar",
          Provider: "Dr. Harris",
          RequestedTime: "Tomorrow 9:30 AM",
        },
      },
      {
        speaker: "user",
        text: "Yes, it's David Miller, born June 14th, 1988.",
      },
      {
        speaker: "agent",
        text: "Got it, David. You're confirmed for tomorrow at 9:30 AM. I've sent a calendar invite and digital intake link to your phone via SMS. Is there anything else I can assist with?",
        extractedData: {
          Patient: "David Miller",
          DOB: "06/14/1988",
          Status: "Confirmed in EHR Calendar",
          Action: "SMS Intake Link Dispatched",
        },
      },
    ],
  },
  {
    id: "logistics",
    title: "FleetPulse Dispatch AI Telephony",
    badge: "Logistics Voicebot",
    industry: "Freight & Carrier Operations",
    description:
      "Automated phone check-in line for long-haul drivers to report transit milestones, trailer status, and automated arrival ETAs without waiting on hold.",
    dialog: [
      {
        speaker: "agent",
        text: "Apex Logistics Automated Dispatch. Please state your Driver ID or trailer number.",
      },
      {
        speaker: "user",
        text: "Driver ID 4082, hauling load 9912.",
      },
      {
        speaker: "agent",
        text: "Welcome back, Marcus. Load 9912 is scheduled for distribution center 4 in Dallas. What is your current mile marker and estimated arrival?",
        extractedData: {
          Driver: "Marcus Vance (#4082)",
          Load: "#9912 (Refrigerated)",
          Destination: "Dallas DC-4",
        },
      },
      {
        speaker: "user",
        text: "Just passed Mile 184 on I-35. Weather is clear, ETA is 18:45 tonight.",
      },
      {
        speaker: "agent",
        text: "Logged: Mile 184, ETA 18:45. Dock bay 14 has been reserved for your unloading window. Stay safe out there!",
        extractedData: {
          Milestone: "I-35 Mile 184",
          RevisedETA: "18:45 CST",
          AssignedDock: "Bay 14",
          TMS_Status: "Auto-Updated in Realtime",
        },
      },
    ],
  },
  {
    id: "saas",
    title: "SaaS Conversational Sales Engineer",
    badge: "B2B CRM Chatbot",
    industry: "Enterprise Software & Startups",
    description:
      "High-intent inbound lead qualifier that conducts conversational discovery, answers technical architecture questions, and schedules executive demos.",
    dialog: [
      {
        speaker: "agent",
        text: "Hello! Looking to scale your business operations or replace legacy spreadsheets? Tell me a bit about your current software setup.",
      },
      {
        speaker: "user",
        text: "We run a 40-person construction firm and are drowning in manual Excel dispatch logs. We need a custom web portal with mobile app access.",
      },
      {
        speaker: "agent",
        text: "That's exactly what our Custom CRM & Mobile stack is built for. We typically build offline-first mobile apps for field crews with a centralized Next.js operational dashboard in 3 weeks. Would you like to review our Construction Case Study?",
        extractedData: {
          CompanySize: "40 employees",
          PainPoint: "Manual Excel spreadsheet gridlock",
          TargetSolution: "Custom Next.js CRM + Offline Mobile App",
        },
      },
      {
        speaker: "user",
        text: "Yes, and I'd like to book a 20-minute scoping call with your lead architect this Thursday.",
      },
      {
        speaker: "agent",
        text: "Perfect! I have slots open Thursday at 2:00 PM and 4:30 PM EST. Which works better for your calendar?",
        extractedData: {
          Intent: "High Commercial (Tier 1 Lead)",
          Action: "Executive Technical Consultation Scheduled",
          LeadScore: "98 / 100",
        },
      },
    ],
  },
];

export default function VoicebotSimulator() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(
    scenarios[0]
  );
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isAudioActive, setIsAudioActive] = useState<boolean>(true);

  // Auto progression simulation
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

  const currentStep = selectedScenario.dialog[currentStepIndex];

  // Aggregate all extracted data up to current step
  const accumulatedData: Record<string, string> = {};
  for (let i = 0; i <= currentStepIndex; i++) {
    const data = selectedScenario.dialog[i].extractedData;
    if (data) {
      Object.assign(accumulatedData, data);
    }
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
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 3.5rem",
          }}
        >
          <div className="badge-pill" style={{ marginBottom: "1rem" }}>
            <Sparkles size={14} />
            <span>Interactive Production Demo</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Experience Live Autonomous AI:{" "}
            <span className="gradient-text-cyan-violet">
              Voicebots & Intelligent Agents
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Test our sub-800ms conversational telephony engine. Watch how natural voice speech is transcribed, processed, and written to external CRMs and databases in real time without human intervention.
          </p>
        </div>

        {/* Scenario Switcher Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          {scenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => handleSelectScenario(sc)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.7rem 1.4rem",
                borderRadius: "var(--radius-md)",
                border:
                  selectedScenario.id === sc.id
                    ? "1px solid var(--accent-cyan)"
                    : "1px solid var(--border-subtle)",
                background:
                  selectedScenario.id === sc.id
                    ? "rgba(0, 240, 255, 0.12)"
                    : "rgba(255, 255, 255, 0.03)",
                color:
                  selectedScenario.id === sc.id
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
                color={
                  selectedScenario.id === sc.id
                    ? "var(--accent-cyan)"
                    : "var(--text-muted)"
                }
              />
              <span>{sc.badge}</span>
            </button>
          ))}
        </div>

        {/* Simulator Cockpit Interface */}
        <div
          className="glass-card"
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            borderRadius: "var(--radius-xl)",
            border: "1px solid rgba(0, 240, 255, 0.25)",
            overflow: "hidden",
            boxShadow:
              "0 20px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(0, 240, 255, 0.1)",
          }}
        >
          {/* Top Control Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1.25rem 1.75rem",
              borderBottom: "1px solid var(--border-subtle)",
              background: "rgba(10, 14, 26, 0.7)",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: isPlaying ? "var(--accent-emerald)" : "#64748b",
                  boxShadow: isPlaying
                    ? "0 0 12px var(--accent-emerald)"
                    : "none",
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {selectedScenario.title}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Target: {selectedScenario.industry}
                </div>
              </div>
            </div>

            {/* Telemetry Chips */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "monospace",
                  padding: "0.3rem 0.65rem",
                  borderRadius: "6px",
                  background: "rgba(0, 240, 255, 0.08)",
                  border: "1px solid rgba(0, 240, 255, 0.2)",
                  color: "var(--accent-cyan)",
                }}
              >
                Latency: ~280ms
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "monospace",
                  padding: "0.3rem 0.65rem",
                  borderRadius: "6px",
                  background: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  color: "var(--accent-emerald)",
                }}
              >
                STT: Deepgram Nova-2
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "monospace",
                  padding: "0.3rem 0.65rem",
                  borderRadius: "6px",
                  background: "rgba(139, 92, 246, 0.08)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  color: "var(--accent-violet)",
                }}
              >
                TTS: ElevenLabs Turbo
              </div>
            </div>
          </div>

          {/* Main Simulator Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
            }}
            className="simulator-inner-grid"
          >
            {/* Conversation Window */}
            <div
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                minHeight: "360px",
                maxHeight: "440px",
                overflowY: "auto",
              }}
            >
              {selectedScenario.dialog
                .slice(0, currentStepIndex + 1)
                .map((step, idx) => {
                  const isAgent = step.speaker === "agent";
                  return (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                        flexDirection: isAgent ? "row" : "row-reverse",
                      }}
                    >
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "10px",
                          background: isAgent
                            ? "linear-gradient(135deg, #00f0ff, #38bdf8)"
                            : "linear-gradient(135deg, #8b5cf6, #d946ef)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: isAgent
                            ? "0 0 15px rgba(0, 240, 255, 0.4)"
                            : "0 0 15px rgba(139, 92, 246, 0.4)",
                        }}
                      >
                        {isAgent ? (
                          <Bot size={20} color="#05070c" />
                        ) : (
                          <User size={20} color="#ffffff" />
                        )}
                      </div>
                      <div
                        style={{
                          maxWidth: "75%",
                          padding: "1rem 1.25rem",
                          borderRadius: isAgent
                            ? "4px 16px 16px 16px"
                            : "16px 4px 16px 16px",
                          background: isAgent
                            ? "rgba(18, 26, 45, 0.9)"
                            : "rgba(35, 25, 60, 0.9)",
                          border: isAgent
                            ? "1px solid rgba(0, 240, 255, 0.25)"
                            : "1px solid rgba(139, 92, 246, 0.25)",
                          fontSize: "0.92rem",
                          color: "var(--text-primary)",
                          lineHeight: 1.6,
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            color: isAgent
                              ? "var(--accent-cyan)"
                              : "var(--accent-violet)",
                            marginBottom: "0.3rem",
                          }}
                        >
                          {isAgent ? "Autonomous AI Agent" : "Customer / Caller"}
                        </div>
                        {step.text}
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Right Pane: Live Telemetry & Extracted CRM State */}
            <div
              style={{
                padding: "2rem",
                background: "rgba(8, 11, 20, 0.6)",
                borderTop: "1px solid var(--border-subtle)",
              }}
              className="simulator-telemetry-pane"
            >
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
                  <span>Real-Time Extracted CRM & Database Payload</span>
                </div>
              </div>

              {/* Payload Key-Value grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                {Object.keys(accumulatedData).length === 0 ? (
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
                    Click &ldquo;Simulate Conversation&rdquo; below to view real-time payload extraction...
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
                          color: "var(--text-primary)",
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
                      onClick={handleStartSimulation}
                      className="btn-primary"
                      style={{
                        padding: "0.6rem 1.4rem",
                        fontSize: "0.88rem",
                      }}
                    >
                      <PhoneCall size={16} />
                      <span>
                        {currentStepIndex > 0
                          ? "Replay Simulation"
                          : "Simulate Live Call"}
                      </span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsPlaying(false)}
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
                    onClick={handleReset}
                    className="btn-secondary"
                    style={{
                      padding: "0.6rem 1rem",
                      fontSize: "0.88rem",
                    }}
                    title="Reset Dialogue"
                  >
                    <RotateCcw size={16} />
                  </button>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                  }}
                >
                  <Volume2 size={16} color="var(--accent-cyan)" />
                  <span>Neural Audio Synthesizer Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .simulator-inner-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
          .simulator-telemetry-pane {
            border-top: none !important;
            border-left: 1px solid var(--border-subtle) !important;
          }
        }
      `}</style>
    </section>
  );
}
