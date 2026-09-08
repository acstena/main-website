import React from "react";
import type { Metadata } from "next";
import { Sparkles, MessageSquare, ShieldCheck } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Book A Technical Discovery Consultation",
  description:
    "Schedule a direct consultation with acstena's senior AI and software architects. Get a comprehensive technical specification, architecture design, and milestone delivery plan within 24 hours.",
  alternates: {
    canonical: "https://acstena.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: "7.5rem", paddingBottom: "5rem" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
          <Badge icon={<MessageSquare size={14} />} style={{ marginBottom: "1rem" }}>
            Direct Senior Engineering Access
          </Badge>
          <h1
            style={{
              fontSize: "clamp(2.3rem, 4.5vw, 3.6rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Start Your Digital Project:{" "}
            <span className="gradient-text-cyan-violet">
              Technical Discovery Consultation
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            No high-pressure sales pitches. You will speak directly with our lead full-stack and AI systems architects to scope your architecture, deliverables, and launch timeline.
          </p>
        </div>

        {/* Contact Form & Direct Channels Component */}
        <ContactSection />
      </div>
    </main>
  );
}
