import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Clock, CheckCircle2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import GoDigitalEstimator from "@/components/estimator/GoDigitalEstimator";

export const metadata: Metadata = {
  title: "Interactive Solution Planner & Launch Timeline",
  description:
    "Plan your digital project with acstena. Select your solution to see recommended features, launch timelines, and the efficiency gains you can expect for your business.",
  alternates: {
    canonical: "https://acstena.com/planner",
  },
};

const sprintProcess = [
  {
    step: "01",
    title: "Discovery & Strategy Plan",
    duration: "Days 1 - 3",
    description: "We understand your goals, map your customer journey, and outline exactly what we will build for you.",
  },
  {
    step: "02",
    title: "Design & System Build",
    duration: "Weeks 1 - 2",
    description: "We build your custom software, AI assistant, or mobile app, sharing progress updates and interactive previews.",
  },
  {
    step: "03",
    title: "Testing & Live Launch",
    duration: "Weeks 2 - 3",
    description: "We test everything thoroughly across phones and computers, train your team, and launch smoothly.",
  },
];

export default function PlannerPage() {
  return (
    <main style={{ paddingTop: "7.5rem", paddingBottom: "5rem" }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 3.5rem" }}>
          <Badge icon={<Cpu size={14} />} style={{ marginBottom: "1rem" }}>
            Project Planning Tool
          </Badge>
          <h1
            style={{
              fontSize: "clamp(2.3rem, 4.5vw, 3.6rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Plan Your Digital Solution &{" "}
            <span className="gradient-text-emerald">
              Estimated Launch Timeline
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Select the type of solution your business needs below to calculate recommended features, estimated turnaround times, and the direct business benefits you can expect.
          </p>
        </div>

        {/* Interactive Sprint & Architecture Planner Component */}
        <GoDigitalEstimator />

        {/* Sprint Delivery Lifecycle */}
        <div style={{ marginTop: "5rem" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem" }}>
            <Badge variant="emerald" icon={<Clock size={14} />} style={{ marginBottom: "1rem" }}>
              Clear 3-Step Process
            </Badge>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
              How We Work With You From Start To Launch
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
              No confusing agency bureaucracy. Clear milestones, weekly progress reviews, and working software delivered on schedule.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {sprintProcess.map((p) => (
              <div
                key={p.step}
                className="glass-card"
                style={{
                  padding: "2rem",
                  borderRadius: "var(--radius-lg)",
                  position: "relative",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "rgba(16, 185, 129, 0.25)",
                    fontFamily: "var(--font-heading)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {p.step}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--accent-emerald)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "0.4rem",
                  }}
                >
                  {p.duration}
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
