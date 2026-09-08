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
    <div className="mobile-drawer">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={onClose}
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            textDecoration: "none",
          }}
        >
          {link.label}
        </Link>
      ))}
      <Link
        href="/contact"
        onClick={onClose}
        className="btn-primary"
        style={{ width: "100%", textAlign: "center", marginTop: "0.5rem" }}
      >
        Start Your Digital Project
      </Link>
    </div>
  );
}
