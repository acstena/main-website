import React from "react";
import type { Metadata } from "next";
import { Sparkles, MessageSquare, ShieldCheck } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us & Book A Free Discovery Call",
  description:
    "Get in touch with the acstena team. Tell us about your project to receive a personalized proposal, working demonstration, and clear delivery timeline within 24 hours.",
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
            Free Project Consultation
          </Badge>
          <h1
            style={{
              fontSize: "clamp(2.3rem, 4.5vw, 3.6rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Let&apos;s Build Your Solution:{" "}
            <span className="gradient-text-cyan-violet">
              Book A Free Discovery Call
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            No high-pressure sales pitches or confusing technical jargon. Speak directly with our builders to discuss your goals, explore features, and receive an exact timeline and plan.
          </p>
        </div>

        {/* Contact Form & Direct Channels Component */}
        <ContactSection />
      </div>
    </main>
  );
}
