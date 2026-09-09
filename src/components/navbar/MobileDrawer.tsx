import React from "react";
import Link from "next/link";

interface MobileDrawerProps {
  isOpen: boolean;
  navLinks: { label: string; href: string }[];
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, navLinks, onClose }: MobileDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="mobile-drawer speech-bubble-enter">
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="mobile-nav-link"
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <Link
        href="/contact"
        onClick={onClose}
        className="btn-primary"
        style={{
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "0.5rem",
          padding: "0.85rem 1.25rem",
          fontSize: "0.95rem",
        }}
      >
        Talk to Us &amp; Book Free Call
      </Link>
    </div>
  );
}
