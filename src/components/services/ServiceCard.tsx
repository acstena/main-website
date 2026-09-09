import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/types";
import {
  Bot,
  Mic,
  LayoutDashboard,
  Truck,
  HeartPulse,
  PenTool,
  Sparkles,
  Film,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Code2,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Mic: <Mic size={22} color="var(--accent-cyan)" />,
  Bot: <Bot size={22} color="var(--accent-cyan)" />,
  LayoutDashboard: <LayoutDashboard size={22} color="#38bdf8" />,
  Truck: <Truck size={22} color="var(--accent-emerald)" />,
  HeartPulse: <HeartPulse size={22} color="#ec4899" />,
  Figma: <PenTool size={22} color="#a855f7" />,
  Sparkles: <Sparkles size={22} color="var(--accent-amber)" />,
  Film: <Film size={22} color="#f43f5e" />,
  TrendingUp: <TrendingUp size={22} color="var(--accent-emerald)" />,
};

export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="glass-card service-card">
      <div className="service-card-body">
        <div>
          {/* Card Top Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {iconMap[service.iconName] || <Code2 size={22} />}
            </div>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                padding: "0.25rem 0.65rem",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.06)",
                color: "var(--text-secondary)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              {service.badge}
            </span>
          </div>

          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
              lineHeight: 1.3,
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--accent-cyan)",
              fontWeight: 500,
              marginBottom: "1rem",
            }}
          >
            {service.tagline}
          </p>

          <p
            style={{
              fontSize: "0.92rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
            }}
          >
            {service.description}
          </p>

          {/* Deliverables Checklist */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--text-muted)",
                marginBottom: "0.75rem",
              }}
            >
              What We Deliver
            </div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {service.deliverables.map((d, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.6rem",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    color="var(--accent-emerald)"
                    style={{ flexShrink: 0, marginTop: "0.2rem" }}
                  />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Footer */}
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "1.25rem",
            }}
          >
            {service.techStack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div
            style={{
              padding: "0.85rem 1rem",
              borderRadius: "var(--radius-md)",
              background: "rgba(16, 185, 129, 0.06)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "var(--accent-emerald)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "0.2rem",
              }}
            >
              Your Business Result
            </div>
            <div
              style={{
                fontSize: "0.83rem",
                color: "var(--text-primary)",
                fontWeight: 500,
              }}
            >
              {service.businessImpact}
            </div>
          </div>

          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.88rem",
              fontWeight: 600,
              color: "var(--accent-cyan)",
              textDecoration: "none",
            }}
          >
            <span>Discuss This Solution</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
