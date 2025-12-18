import React from "react";
import "./privacy_policy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-updated">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="privacy-section">
        <h2>Introduction</h2>
        <p>
          This Privacy Policy applies to the website operated by
          <strong> Quito</strong>, an India-based business engaged in the
          manufacturing and sale of women's woollen garments.
        </p>
        <p>
          We value your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and
          safeguard your data when you visit or make a purchase from our website.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Cookies and Tracking</h2>
        <p>
          Our website may use cookies and similar technologies to enhance user
          experience and analyze website traffic. You can control cookie
          preferences through your browser settings.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Information We Collect</h2>
        <ul>
          <li>Personal details such as name, email address, phone number, and delivery address</li>
          <li>Order and transaction details</li>
          <li>Technical information like IP address, browser type, and device information</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To process and deliver your orders</li>
          <li>To communicate order updates and support requests</li>
          <li>To improve our website, products, and services</li>
          <li>To comply with legal and regulatory requirements</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>Sharing of Information</h2>
        <p>
          We do not sell or rent your personal data. Your information may be
          shared only with trusted third parties such as payment gateways,
          logistics partners, or legal authorities when required.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          data against unauthorized access, alteration, disclosure, or
          destruction.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Your Rights</h2>
        <p>
          You have the right to access, update, or request deletion of your
          personal information. You may contact us at any time for such requests.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Governing Law</h2>
        <p>
          This Privacy Policy shall be governed by and construed in accordance
          with the laws of India.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle
          your data, you may contact us at
          <strong> support@getquito.com</strong>.
        </p>
      </section>
    </div>
  );
}