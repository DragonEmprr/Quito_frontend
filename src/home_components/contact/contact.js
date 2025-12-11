import React from "react";
import { email } from "../../data/shopinfo";

import "./contact.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const message = e.target.message.value;

          window.location.href = `mailto:${email}?subject=${
            "Enquiry from " + name
          }&body=${message}`;
        }}
      >
        <input name="name" placeholder="Your Name" required />
        <input name="email" placeholder="Your Email" />
        <textarea name="message" placeholder="Your Message" required />
        <button>Send Message</button>
      </form>
    </section>
  );
}
