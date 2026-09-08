"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  DollarSign,
  Clock,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

interface Option {
  id: string;
  label: string;
  sublabel: string;
  sprintWeeks: number;
  monthlySavings: number;
  techRecommendation: string[];
  searchAdvantage: string;
}

const solutionOptions: Option[] = [
  {
    id: "ai-voicebot",
    label: "Autonomous AI Voicebot & Telephony",
    sublabel: "24/7 call answering, instant appointment scheduling & CRM sync",
    sprintWeeks: 2,
    monthlySavings: 3800,
    techRecommendation: ["OpenAI Realtime API", "Twilio SIP Trunking", "Deepgram STT", "FastAPI"],
    searchAdvantage: "Schema VoiceSearch microdata + zero missed phone lead conversions",
  },
  {
    id: "web-crm",
    label: "Custom Web CRM & Operations Portal",
    sublabel: "Retire manual spreadsheets into unified cloud kanban & automated pipeline",
    sprintWeeks: 3,
    monthlySavings: 5200,
    techRecommendation: ["Next.js 16", "PostgreSQL", "Supabase", "Prisma ORM", "Tailwind"],
    searchAdvantage: "Sub-second TTFB, 99+ Core Web Vitals, enterprise SSL security",
  },
  {
    id: "mobile-app",
    label: "Enterprise Mobile App (Logistics / Wellness)",
    sublabel: "Offline-first GPS tracking, spatial audio, or conversational mobile AI",
    sprintWeeks: 4,
    monthlySavings: 6500,
    techRecommendation: ["React Native / Flutter", "Mapbox SDK", "SQLite", "Firebase"],
    searchAdvantage: "App Store Optimization (ASO) + deep-link Google indexation",
  },
  {
    id: "design-motion",
    label: "Figma UI/UX & Adobe Animate Motion",
    sublabel: "Atomic design tokens, Canva brand collateral, and 60fps vector web animation",
    sprintWeeks: 2,
    monthlySavings: 2900,
    techRecommendation: ["Figma 5.0 Tokens", "Adobe Animate Canvas", "Canva Brand Kit", "GSAP"],
    searchAdvantage: "+80% dwell time reduction in bounce rates directly lifting SERP rank",
  },
  {
    id: "omnichannel-godigital",
    label: "Full 'Go Digital' Enterprise Suite",
    sublabel: "Turnkey combination: AI Voicebot + Next.js CRM + Mobile App + Technical SEO",
    sprintWeeks: 5,
    monthlySavings: 11400,
    techRecommendation: ["Next.js App Router", "OpenAI Realtime", "Supabase", "React Native", "Schema.org"],
    searchAdvantage: "Complete SERP dominance for commercial & local transaction keywords",
  },
];

const teamSizes = [
  { label: "Solo / Founder (1-3)", multiplier: 0.8 },
  { label: "Growing SMB (4-20)", multiplier: 1.2 },
  { label: "Established Business (21-75)", multiplier: 2.1 },
  { label: "Enterprise Scale (75+)", multiplier: 3.5 },
];

export default function GoDigitalEstimator() {
  const [selectedSolution, setSelectedSolution] = useState<Option>(
    solutionOptions[0]
  );
  const [selectedTeamIndex, setSelectedTeamIndex] = useState<number>(1);
  const [urgencySprint, setUrgencySprint] = useState<"standard" | "accelerated">(
    "standard"
  );

  const teamMultiplier = teamSizes[selectedTeamIndex].multiplier;
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
        <div
          style={{
            textAlign: "center",
            maxWidth: "820px",
            margin: "0 auto 3.5rem",
          }}
        >
          <div className="badge-pill-emerald" style={{ marginBottom: "1rem" }}>
            <Calculator size={14} />
            <span>Interactive ROI & Sprint Calculator</span>
          </div>
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
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Stop losing thousands every month to manual admin, missed phone inquiries, and invisible search rankings. Select your digital transformation target below to view your engineering sprint and financial upside.
          </p>
        </div>

        {/* Calculator Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
          }}
          className="estimator-container-grid"
        >
          {/* Left: Input Selectors */}
          <div
            className="glass-card"
            style={{
              padding: "clamp(1.5rem, 2.5vw, 2.5rem)",
            }}
          >
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
                color: "var(--text-primary)",
              }}
            >
              1. Choose Your Digital Transformation Solution
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
                marginBottom: "2rem",
              }}
            >
              {solutionOptions.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setSelectedSolution(opt)}
                  style={{
                    padding: "1rem 1.25rem",
                    borderRadius: "var(--radius-md)",
                    border:
                      selectedSolution.id === opt.id
                        ? "1px solid var(--accent-emerald)"
                        : "1px solid var(--border-subtle)",
                    background:
                      selectedSolution.id === opt.id
                        ? "rgba(16, 185, 129, 0.1)"
                        : "rgba(255, 255, 255, 0.02)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color:
                          selectedSolution.id === opt.id
                            ? "var(--text-primary)"
                            : "var(--text-secondary)",
                      }}
                    >
                      {opt.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        marginTop: "0.2rem",
                      }}
                    >
                      {opt.sublabel}
                    </div>
                  </div>
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      border:
                        selectedSolution.id === opt.id
                          ? "5px solid var(--accent-emerald)"
                          : "2px solid var(--text-muted)",
                      flexShrink: 0,
                      marginLeft: "1rem",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Team Size Selection */}
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: "1rem",
                color: "var(--text-primary)",
              }}
            >
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
              {teamSizes.map((t, idx) => (
                <button
                  key={t.label}
                  onClick={() => setSelectedTeamIndex(idx)}
                  style={{
                    padding: "0.75rem",
                    borderRadius: "var(--radius-md)",
                    border:
                      selectedTeamIndex === idx
                        ? "1px solid var(--accent-cyan)"
                        : "1px solid var(--border-subtle)",
                    background:
                      selectedTeamIndex === idx
                        ? "rgba(0, 240, 255, 0.12)"
                        : "rgba(255, 255, 255, 0.03)",
                    color:
                      selectedTeamIndex === idx
                        ? "var(--accent-cyan)"
                        : "var(--text-secondary)",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  {t.label}
                </button>
              ))}
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
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  Accelerated Priority Sprint
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  Dedicated engineering pod for 30% faster launch
                </div>
              </div>
              <button
                onClick={() =>
                  setUrgencySprint(
                    urgencySprint === "standard" ? "accelerated" : "standard"
                  )
                }
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

          {/* Right: Calculated Yield Dashboard */}
          <div
            className="glass-card"
            style={{
              padding: "clamp(1.5rem, 2.5vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "rgba(10, 15, 28, 0.9)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              boxShadow: "0 15px 45px rgba(0, 0, 0, 0.7)",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
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
                      color: "var(--accent-emerald)",
                    }}
                  >
                    Engineering Estimate
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      marginTop: "0.2rem",
                    }}
                  >
                    {selectedSolution.label}
                  </div>
                </div>

                <div
                  style={{
                    textAlign: "right",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    Deployment Window
                  </div>
                  <div
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 800,
                      color: "var(--accent-cyan)",
                    }}
                  >
                    ~{effectiveWeeks} Sprints
                  </div>
                </div>
              </div>

              {/* Annualized Cost Recovery */}
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "var(--radius-md)",
                  background:
                    "linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(0, 240, 255, 0.08) 100%)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  marginBottom: "1.75rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--accent-emerald)",
                  }}
                >
                  Projected Annual Cost Recovery & Recaptured Revenue
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                    fontWeight: 800,
                    color: "#34d399",
                    margin: "0.5rem 0",
                  }}
                >
                  ${annualSavings.toLocaleString()}
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "var(--text-muted)",
                    }}
                  >
                    /year
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  Based on ${calculatedSavings.toLocaleString()}/mo in avoided manual payroll & recovered missed leads
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
                  Tailored Tech Architecture
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                  }}
                >
                  {selectedSolution.techRecommendation.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.25rem 0.6rem",
                        borderRadius: "6px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "var(--accent-cyan)",
                        fontFamily: "monospace",
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
                  background: "rgba(0, 240, 255, 0.05)",
                  border: "1px solid rgba(0, 240, 255, 0.15)",
                  marginBottom: "2rem",
                }}
              >
                <TrendingUp
                  size={18}
                  color="var(--accent-cyan)"
                  style={{ flexShrink: 0, marginTop: "0.2rem" }}
                />
                <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>
                    SEO & Google Ranking Advantage:
                  </strong>{" "}
                  {selectedSolution.searchAdvantage}
                </div>
              </div>
            </div>

            {/* Lock in Sprint Button */}
            <Link
              href={`#contact?solution=${selectedSolution.id}&team=${selectedTeamIndex}`}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "1rem",
                fontSize: "1rem",
                background: "linear-gradient(135deg, #10b981 0%, #00f0ff 100%)",
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.35)",
              }}
            >
              <span>Lock In This Sprint With Our Engineers</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .estimator-container-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
