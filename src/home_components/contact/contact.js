import React, { useState } from "react";
import "./contact.css";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/send_feedback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setStatus("Message sent successfully!");
      form.reset();
    } catch (err) {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" required />
        <input name="email" placeholder="Your Email" />
        <textarea name="message" placeholder="Your Message" required />
        <button disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
}
