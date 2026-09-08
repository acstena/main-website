"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
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

  const availableServices = [
    "AI Voicebot & Chatbot",
    "Web CRM & Cloud MVP",
    "Mobile App (Logistics/Wellness)",
    "Figma UI/UX Design System",
    "Adobe Animate 2D Motion",
    "Canva Brand Kit & Collateral",
    "Go Digital & Technical SEO",
  ];

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

  return (
    <section
      id="contact"
      className="section-spacing"
      style={{
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
          }}
          className="contact-layout-grid"
        >
          {/* Left Column: Context & Value */}
          <div style={{ maxWidth: "560px" }}>
            <div className="badge-pill" style={{ marginBottom: "1rem" }}>
              <Sparkles size={14} />
              <span>Direct Engineering Consultation</span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              Let&apos;s Build Your Solution:{" "}
              <span className="gradient-text-cyan-violet">
                Book A Technical Discovery Sprint
              </span>
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              No high-pressure sales reps. You will speak directly with our senior full-stack and AI systems architects to map your technical requirements, architecture, and timeline.
            </p>

            {/* Guarantees */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                marginBottom: "3rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.85rem",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(0, 240, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Zap size={18} color="var(--accent-cyan)" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                    24-Hour Scoping Proposal
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      marginTop: "0.2rem",
                    }}
                  >
                    Receive a comprehensive technical specification, architecture diagram, and fixed milestone budget within 1 business day.
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.85rem",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(16, 185, 129, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={18} color="var(--accent-emerald)" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                    100% Intellectual Property Ownership
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      marginTop: "0.2rem",
                    }}
                  >
                    All source code, Figma design files, Canva assets, and database schemas belong entirely to you with zero vendor lock-in.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "var(--radius-md)",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "0.75rem",
                }}
              >
                Direct Contact Channels
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Mail size={16} color="var(--accent-cyan)" />
                  <span>architect@auradigital.io</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Phone size={16} color="var(--accent-emerald)" />
                  <span>+1 (800) 555-AURA (Direct or Voicebot Test)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Intake Form */}
          <div
            className="glass-card"
            style={{
              padding: "clamp(1.75rem, 3vw, 2.75rem)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid rgba(0, 240, 255, 0.25)",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7)",
            }}
          >
            {submitted ? (
              <div
                style={{
                  padding: "3rem 1.5rem",
                  textAlign: "center",
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
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    marginBottom: "0.75rem",
                  }}
                >
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
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Submit Another Project Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                  }}
                >
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
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
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

                {/* Name & Email Row */}
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
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-md)",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-md)",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Company & Phone */}
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
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Company / Website
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Health Logistics"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-md)",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-md)",
                        background: "#0d1322",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    >
                      <option value="Immediate (1-2 Weeks)">Immediate (1-2 Weeks)</option>
                      <option value="Within 2 - 4 Weeks">Within 2 - 4 Weeks</option>
                      <option value="Within 1 - 2 Months">Within 1 - 2 Months</option>
                      <option value="Exploring Feasibility">Exploring Feasibility</option>
                    </select>
                  </div>
                </div>

                {/* Project Message */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Project Details & Existing Operational Bottlenecks
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe what you're looking to build (e.g. We need an AI voicebot to handle after-hours patient intake, or a custom Next.js CRM to replace our Excel logs)..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-md)",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    padding: "1rem",
                    fontSize: "1rem",
                  }}
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
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
        @media (max-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
