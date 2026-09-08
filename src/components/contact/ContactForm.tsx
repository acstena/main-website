"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { ContactFormData } from "@/types";

const availableServices = [
  "AI Voicebot & Chatbot",
  "Web CRM & Cloud MVP",
  "Mobile App (Logistics/Wellness)",
  "Figma UI/UX Design System",
  "Adobe Animate 2D Motion",
  "Canva Brand Kit & Collateral",
  "Go Digital & Technical SEO",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "$10,000 - $25,000",
    timeline: "Within 2 - 4 Weeks",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([
    "AI Voicebot & Chatbot",
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div
        className="glass-card"
        style={{
          padding: "clamp(2rem, 4vw, 3.5rem)",
          textAlign: "center",
          borderRadius: "var(--radius-xl)",
          border: "1px solid rgba(16, 185, 129, 0.3)",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "rgba(16, 185, 129, 0.15)",
            border: "2px solid var(--accent-emerald)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <CheckCircle2 size={36} color="var(--accent-emerald)" />
        </div>
        <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.75rem" }}>
          Consultation Request Dispatched!
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            maxWidth: "460px",
            margin: "0 auto 2rem",
          }}
        >
          Thank you, {formData.name}. Our lead systems architect has received your project parameters and will send over a detailed technical roadmap to <strong>{formData.email}</strong> within 24 hours.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-secondary">
          Submit Another Project Inquiry
        </button>
      </div>
    );
  }

  return (
    <div
      className="glass-card"
      style={{
        padding: "clamp(1.75rem, 3vw, 2.75rem)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid rgba(0, 240, 255, 0.25)",
        boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>
          Project Scope & Architecture Intake
        </div>

        {/* Service Pills Selection */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "0.6rem",
            }}
          >
            Select Services Required
          </label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {availableServices.map((srv) => {
              const isSelected = selectedServices.includes(srv);
              return (
                <button
                  type="button"
                  key={srv}
                  onClick={() => toggleService(srv)}
                  style={{
                    padding: "0.4rem 0.85rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border: isSelected
                      ? "1px solid var(--accent-cyan)"
                      : "1px solid var(--border-subtle)",
                    background: isSelected
                      ? "rgba(0, 240, 255, 0.15)"
                      : "rgba(255, 255, 255, 0.03)",
                    color: isSelected
                      ? "var(--accent-cyan)"
                      : "var(--text-secondary)",
                  }}
                >
                  {srv}
                </button>
              );
            })}
          </div>
        </div>

        {/* Name & Email */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "1.25rem",
          }}
          className="form-row-2"
        >
          <div>
            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Morgan"
              className="form-control-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
              Work Email *
            </label>
            <input
              type="email"
              required
              placeholder="alex@company.com"
              className="form-control-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        {/* Company & Timeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "1.25rem",
          }}
          className="form-row-2"
        >
          <div>
            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
              Company / Website
            </label>
            <input
              type="text"
              placeholder="e.g. Acme Health Logistics"
              className="form-control-input"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
              Target Timeline
            </label>
            <select
              className="form-control-select"
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            >
              <option value="Immediate (1-2 Weeks)">Immediate (1-2 Weeks)</option>
              <option value="Within 2 - 4 Weeks">Within 2 - 4 Weeks</option>
              <option value="Within 1 - 2 Months">Within 1 - 2 Months</option>
              <option value="Exploring Feasibility">Exploring Feasibility</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div style={{ marginBottom: "1.75rem" }}>
          <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
            Project Details & Existing Operational Bottlenecks
          </label>
          <textarea
            rows={4}
            required
            placeholder="Briefly describe what you're looking to build (e.g. We need an AI voicebot to handle after-hours patient intake, or a custom Next.js CRM to replace our Excel logs)..."
            className="form-control-textarea"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary"
          style={{ width: "100%", padding: "1rem", fontSize: "1rem" }}
        >
          {isSubmitting ? (
            <span>Synthesizing Requirements...</span>
          ) : (
            <>
              <span>Submit Project Scoping Request</span>
              <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
