import React from "react";
import ContactDirectInfo from "./ContactDirectInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="section-spacing" style={{ position: "relative" }}>
      <div className="container">
        <div className="contact-layout-grid">
          <ContactDirectInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
