// TermsAndConditions.jsx
import React from "react";
import "./terms_and_conditions.css";

export default function TermsAndConditions() {
  return (
    <div className="tc-container">
      <div className="tc-wrapper">
        <h1 className="tc-title">Terms & Conditions</h1>
        <p className="tc-updated">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="tc-section">
          <h2>1. Introduction</h2>
          <p>
            By accessing or using our website, you agree to be bound by these
            Terms and Conditions. If you do not agree, please do not use our
            services.
          </p>
        </section>

        <section className="tc-section">
          <h2>2. Use of Website</h2>
          <p>
            You agree to use this website only for lawful purposes and not engage
            in any activity that may harm or disrupt the website.
          </p>
        </section>

        <section className="tc-section">
          <h2>3. Products & Services</h2>
          <p>
            All products and services are subject to availability. We reserve
            the right to modify or discontinue any service without notice.
          </p>
        </section>

        <section className="tc-section">
          <h2>4. Pricing & Payments</h2>
          <p>
            Prices may change at any time. We are not responsible for any
            incorrect pricing displayed due to technical errors.
          </p>
        </section>

        <section className="tc-section">
          <h2>5. Intellectual Property</h2>
          <p>
            All content on this website including text, images, and logos is our
            intellectual property and may not be reused without permission.
          </p>
        </section>

        <section className="tc-section">
          <h2>6. Limitation of Liability</h2>
          <p>
            We are not liable for any indirect or consequential damages arising
            from the use of this website.
          </p>
        </section>

        <section className="tc-section">
          <h2>7. Governing Law</h2>
          <p>
            These terms are governed by and interpreted in accordance with the
            laws of India.
          </p>
        </section>

        <section className="tc-section">
          <h2>8. Contact</h2>
          <p>
            If you have any questions regarding these Terms & Conditions, please
            contact us through the details provided on the website.
          </p>
        </section>
      </div>
    </div>
  );
}

