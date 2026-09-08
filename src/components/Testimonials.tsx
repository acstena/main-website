"use client";

import React from "react";
import { Star, Quote, CheckCircle2, Sparkles } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  metric: string;
  tag: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Ronald Vance",
    role: "Chief Medical Officer",
    company: "Metro Health Dental Clinics",
    quote:
      "Our 4 clinical locations were bleeding after-hours emergency bookings. AuraDigital built an autonomous AI voice receptionist integrated into our EHR. We went from 42% missed calls to zero, capturing 1,420 extra patient bookings every month.",
    metric: "0% Missed Calls (was 42%)",
    tag: "AI Telephony & Voicebot",
  },
  {
    name: "Samantha Reed",
    role: "VP of Freight Operations",
    company: "SwiftLane Logistics",
    quote:
      "We were drowning in Google Sheets and lost rate cards. The custom Next.js CRM portal AuraDigital built transformed our brokerage. Quote turnarounds dropped from 45 minutes to 45 seconds, and pipeline velocity jumped over 300%.",
    metric: "45s Quote Dispatch (was 45m)",
    tag: "Custom Web CRM & Cloud MVP",
  },
  {
    name: "Marcus Sterling",
    role: "Director of Fleet Telematics",
    company: "Midwest Cargo Network",
    quote:
      "Our drivers work across rural dead zones. The offline-first React Native mobile app they built never drops data. Background GPS telemetry and signature scanning work flawlessly under all conditions.",
    metric: "28% Fuel Route Efficiency",
    tag: "Mobile App Development",
  },
  {
    name: "Elena Rostova",
    role: "Managing Partner",
    company: "Veloce Capital",
    quote:
      "From pixel-perfect Figma design tokens to liquid-smooth 60fps Adobe Animate interactive motion graphics, the execution was world-class. Our seed roadshow closed $4.8M ahead of schedule.",
    metric: "$4.8M Capital Secured",
    tag: "Figma UI/UX & Adobe Animate",
  },
];

export default function Testimonials() {
  return (
    <section
      className="section-spacing"
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, rgba(5,7,12,0) 0%, rgba(10,14,26,0.6) 50%, rgba(5,7,12,0) 100%)",
      }}
    >
      <div className="container">
        <div
          style={{
            textAlign: "center",
            maxWidth: "750px",
            margin: "0 auto 3.5rem",
          }}
        >
          <div className="badge-pill" style={{ marginBottom: "1rem" }}>
            <Sparkles size={14} />
            <span>Verified Client Impact</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Trusted By Founders &{" "}
            <span className="gradient-text-cyan-violet">
              Operations Directors
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Real results delivered for businesses that refused to let outdated legacy software dictate their bottom line.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                {/* 5-star rating */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#f59e0b"
                      color="#f59e0b"
                    />
                  ))}
                  <span
                    style={{
                      marginLeft: "0.5rem",
                      fontSize: "0.75rem",
                      color: "var(--accent-cyan)",
                      fontWeight: 600,
                    }}
                  >
                    5.0 Verified Review
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div>
                {/* Metric Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "6px",
                    background: "rgba(16, 185, 129, 0.08)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--accent-emerald)",
                    marginBottom: "1.25rem",
                  }}
                >
                  <CheckCircle2 size={14} />
                  <span>{t.metric}</span>
                </div>

                {/* Author Info */}
                <div
                  style={{
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {t.role} • {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
