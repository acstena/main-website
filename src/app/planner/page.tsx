import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Clock, CheckCircle2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import GoDigitalEstimator from "@/components/estimator/GoDigitalEstimator";

export const metadata: Metadata = {
  title: "Interactive Architecture & Sprint Planner",
  description:
    "Plan your software engineering sprint with acstena. Select your digital solution to view recommended tech stacks, delivery sprint windows, and operational efficiency gains.",
  alternates: {
    canonical: "https://acstena.com/planner",
  },
};

const sprintProcess = [
  {
    step: "01",
    title: "Technical Discovery & Architecture Spec",
    duration: "Sprint Days 1 - 3",
    description: "Deep dive into your operational bottlenecks, database schema design, and integration touchpoints.",
  },
  {
    step: "02",
    title: "Rapid Full-Stack Core Engineering",
    duration: "Sprint Weeks 1 - 2",
    description: "Production build of voice agent telephony pipelines, Next.js server actions, or mobile offline caching engines.",
  },
  {
    step: "03",
    title: "UAT, Security Audit & Cloud Launch",
    duration: "Sprint Weeks 2 - 3",
    description: "Automated regression testing, Core Web Vitals audit, carrier telephony verification, and seamless go-live.",
  },
];

export default function PlannerPage() {
  return (
    <main style={{ paddingTop: "7.5rem", paddingBottom: "5rem" }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 3.5rem" }}>
          <Badge icon={<Cpu size={14} />} style={{ marginBottom: "1rem" }}>
            Engineering Scoping Engine
          </Badge>
          <h1
            style={{
              fontSize: "clamp(2.3rem, 4.5vw, 3.6rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Plan Your Digital Architecture &{" "}
            <span className="gradient-text-emerald">
              Deployment Sprints
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Configure your digital transformation target below to calculate recommended engineering stacks, deployment sprint timelines, and measurable operational transformation metrics.
          </p>
        </div>

        {/* Interactive Sprint & Architecture Planner Component */}
        <GoDigitalEstimator />

        {/* Sprint Delivery Lifecycle */}
        <div style={{ marginTop: "5rem" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem" }}>
            <Badge variant="emerald" icon={<Clock size={14} />} style={{ marginBottom: "1rem" }}>
              Predictable Agile Velocity
            </Badge>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
              How Our Rapid Sprints Operate
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
              No bloated enterprise agency bureaucracy. Senior engineers shipping working production software every single week.
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
