import React from "react";
import { Bot, User } from "lucide-react";
import { DialogStep } from "@/types";

interface ConversationPaneProps {
  dialog: DialogStep[];
  currentStepIndex: number;
}

export default function ConversationPane({
  dialog,
  currentStepIndex,
}: ConversationPaneProps) {
  const visibleSteps = dialog.slice(0, currentStepIndex + 1);

  return (
    <div className="conversation-scroll-pane">
      {visibleSteps.map((step, idx) => {
        const isAgent = step.speaker === "agent";
        return (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              flexDirection: isAgent ? "row" : "row-reverse",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: isAgent
                  ? "linear-gradient(135deg, #00f0ff, #38bdf8)"
                  : "linear-gradient(135deg, #8b5cf6, #d946ef)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: isAgent
                  ? "0 0 15px rgba(0, 240, 255, 0.4)"
                  : "0 0 15px rgba(139, 92, 246, 0.4)",
              }}
            >
              {isAgent ? (
                <Bot size={20} color="#05070c" />
              ) : (
                <User size={20} color="#ffffff" />
              )}
            </div>

            <div
              style={{
                maxWidth: "75%",
                padding: "1rem 1.25rem",
                borderRadius: isAgent
                  ? "4px 16px 16px 16px"
                  : "16px 4px 16px 16px",
                background: isAgent
                  ? "rgba(18, 26, 45, 0.9)"
                  : "rgba(35, 25, 60, 0.9)",
                border: isAgent
                  ? "1px solid rgba(0, 240, 255, 0.25)"
                  : "1px solid rgba(139, 92, 246, 0.25)",
                fontSize: "0.92rem",
                color: "var(--text-primary)",
                lineHeight: 1.6,
              }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: isAgent ? "var(--accent-cyan)" : "var(--accent-violet)",
                  marginBottom: "0.3rem",
                }}
              >
                {isAgent ? "Autonomous AI Agent" : "Customer / Caller"}
              </div>
              {step.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
