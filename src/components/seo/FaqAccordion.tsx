"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqList } from "@/data/faqData";

export default function FaqAccordion() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h3 style={{ fontSize: "1.6rem", marginBottom: "1.5rem", textAlign: "center" }}>
        Frequently Asked Questions: Digital Engineering & SEO
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
        {faqList.map((faq, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div
              key={faq.question}
              className="glass-card"
              style={{
                borderRadius: "var(--radius-md)",
                border: isOpen
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
                {isOpen ? (
                  <ChevronUp size={20} color="var(--accent-cyan)" />
                ) : (
                  <ChevronDown size={20} color="var(--text-muted)" />
                )}
              </button>

              {isOpen && (
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
          );
        })}
      </div>
    </div>
  );
}
