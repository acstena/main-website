"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Search,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  ShieldCheck,
  Target,
  Globe,
  ArrowRight,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Why should small and local businesses Go Digital today?",
    answer:
      "When a business relies on manual paper logs or spreadsheets, up to 40% of inbound leads are missed after business hours. Going digital replaces these gaps with 24/7 AI voicebots, automates client onboarding through custom web portals, and unlocks dominant organic search rankings on Google so customers find you before competitors.",
  },
  {
    question: "How does your technical SEO architecture guarantee top Google rankings?",
    answer:
      "Unlike generic website builders, our Next.js App Router applications are server-rendered with zero render-blocking bloat, achieving 98+ Google PageSpeed and sub-second Time to First Byte (TTFB). We inject rich Schema.org JSON-LD structured data (ProfessionalService, FAQPage, OfferCatalog) so search engine crawlers immediately index your services for high-intent commercial keywords and Voice Search queries.",
  },
  {
    question: "How fast can an AI voicebot or custom CRM MVP be deployed?",
    answer:
      "Our rapid engineering sprints deliver fully functional, production-grade MVPs and custom CRM web apps within 2 to 4 weeks. AI voicebots with Twilio telephony and live CRM sync are deployed in as little as 10 business days.",
  },
  {
    question: "Can an AI voicebot completely replace our front-desk phone reception?",
    answer:
      "Our AI voicebots handle 100% of routine inquiries, schedule appointments directly into your calendar, verify insurance or customer details, and immediately escalate complex high-stakes calls to human personnel with a complete live transcript.",
  },
  {
    question: "Do you provide end-to-end Figma UI/UX design and Canva brand collateral?",
    answer:
      "Yes. Every build starts with high-fidelity Figma design systems using auto-layout tokens and interactive prototypes. We also provide reusable Canva brand kits, digital NFC business cards, and 60fps Adobe Animate motion graphics for your social media and presentations.",
  },
];

export default function SeoTransformation() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section
      id="seo-growth"
      className="section-spacing"
      style={{ position: "relative" }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto 3.5rem",
          }}
        >
          <div className="badge-pill-emerald" style={{ marginBottom: "1rem" }}>
            <TrendingUp size={14} />
            <span>Search Dominance & Digital Transformation</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            How Small Businesses{" "}
            <span className="gradient-text-emerald">
              Go Digital & Outrank Market Competitors
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Organic search ranking is not magic—it is uncompromising engineering.
            We eliminate render-blocking bloat, structure your data with deep Schema.org microdata,
            and automate your business operations so you capture and convert traffic 24 hours a day.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4.5rem",
          }}
        >
          <div className="glass-card" style={{ padding: "1.75rem" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "rgba(0, 240, 255, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <Zap size={22} color="var(--accent-cyan)" />
            </div>
            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.6rem" }}>
              1. 99+ Core Web Vitals
            </h3>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              Sub-second First Contentful Paint (FCP) and near-zero layout shift.
              Google prioritizes ultra-fast, lightweight Next.js architectures over sluggish traditional WordPress templates.
            </p>
          </div>

          <div className="glass-card" style={{ padding: "1.75rem" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "rgba(16, 185, 129, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <Target size={22} color="var(--accent-emerald)" />
            </div>
            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.6rem" }}>
              2. Commercial Intent Targeting
            </h3>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              Laser-focused keyword architectures matching transactional searches:
              “hire voicebot developer”, “custom CRM builder for SMB”, “logistics fleet mobile app”.
            </p>
          </div>

          <div className="glass-card" style={{ padding: "1.75rem" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "rgba(139, 92, 246, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <Globe size={22} color="var(--accent-violet)" />
            </div>
            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.6rem" }}>
              3. Schema.org Microdata
            </h3>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              Complete semantic JSON-LD graph linking ProfessionalServices, OfferCatalogs, and FAQs. Guarantees Google Rich Answer cards and voice search answers.
            </p>
          </div>

          <div className="glass-card" style={{ padding: "1.75rem" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "rgba(245, 158, 11, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <ShieldCheck size={22} color="var(--accent-amber)" />
            </div>
            <h3 style={{ fontSize: "1.15rem", marginBottom: "0.6rem" }}>
              4. 24/7 AI Lead Capture
            </h3>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              Ranking #1 on Google is worthless if visitors bounce or call an unanswered line. Our embedded AI voicebots and interactive intake funnels lock in leads immediately.
            </p>
          </div>
        </div>

        {/* Side-by-Side Comparison Table */}
        <div
          className="glass-card"
          style={{
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            marginBottom: "4.5rem",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <h3
            style={{
              fontSize: "1.4rem",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Comparison: The Legacy Way vs. The Modern Digital Standard
          </h3>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "600px",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "1rem",
                      color: "var(--text-muted)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    Business Operational Factor
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "1rem",
                      color: "#f87171",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    Legacy SMB (Spreadsheets & Voicemail)
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "1rem",
                      color: "var(--accent-emerald)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    Engineered by AuraDigital
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    Phone Lead Ingestion
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <XCircle size={16} color="#ef4444" />
                      <span>Voicemail (42% abandoned after 5 PM)</span>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      color: "var(--text-primary)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <CheckCircle2 size={16} color="var(--accent-emerald)" />
                      <span>Sub-800ms AI Voicebot (100% answered 24/7)</span>
                    </div>
                  </td>
                </tr>

                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    Operational Pipeline
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <XCircle size={16} color="#ef4444" />
                      <span>Clunky Google Sheets / Excel silos</span>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      color: "var(--text-primary)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <CheckCircle2 size={16} color="var(--accent-emerald)" />
                      <span>Custom Next.js & Supabase CRM Kanban</span>
                    </div>
                  </td>
                </tr>

                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    Google SERP Visibility
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <XCircle size={16} color="#ef4444" />
                      <span>Page 4-10 (Slow WordPress, no microdata)</span>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      color: "var(--text-primary)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <CheckCircle2 size={16} color="var(--accent-emerald)" />
                      <span>Top 3 Rankings + Google Answer Rich Cards</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    Mobile Accessibility
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <XCircle size={16} color="#ef4444" />
                      <span>Desktop web only or broken mobile layout</span>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      color: "var(--text-primary)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <CheckCircle2 size={16} color="var(--accent-emerald)" />
                      <span>Offline-first React Native / Mobile PWA</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions: Digital Engineering & SEO
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
          >
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  borderRadius: "var(--radius-md)",
                  border:
                    openFaqIndex === idx
                      ? "1px solid var(--accent-cyan)"
                      : "1px solid var(--border-subtle)",
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: "100%",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    color: "var(--text-primary)",
                    cursor: "pointer",
                    textAlign: "left",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp size={20} color="var(--accent-cyan)" />
                  ) : (
                    <ChevronDown size={20} color="var(--text-muted)" />
                  )}
                </button>

                {openFaqIndex === idx && (
                  <div
                    style={{
                      padding: "0 1.5rem 1.5rem",
                      fontSize: "0.92rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                      paddingTop: "1rem",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
