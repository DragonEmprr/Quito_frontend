// TermsAndConditions.jsx
import React from "react";
import "./terms_and_conditions.css";

export default function TermsAndConditions() {
  return (
    <main className="tc-container">
      <div className="tc-wrapper">
        <h1 className="tc-title">Terms & Conditions</h1>
        <p className="tc-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="tc-section">
          <h2>Introduction</h2>
          <p>
            These Terms & Conditions govern the use of the website operated by
            <strong> Quito</strong>, an India-based business engaged in the
            manufacturing and sale of women’s woollen garments. By accessing or
            using our website, you agree to be bound by these terms.
          </p>
        </section>

        <section className="tc-section">
          <h2>Use of Website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a
            manner that does not infringe the rights of others or disrupt the
            operation of the website.
          </p>
        </section>

        <section className="tc-section">
          <h2>Products & Availability</h2>
          <p>
            All products listed on the website are subject to availability. We
            reserve the right to modify or discontinue any product without
            prior notice.
          </p>
        </section>

        <section className="tc-section">
          <h2>Pricing & Payment Method</h2>
          <p>
            All prices displayed on the website are in Indian Rupees (INR) and
            inclusive of applicable taxes unless stated otherwise. Currently,
            we offer <strong>Cash on Delivery (COD)</strong> as the only
            payment method. Payment is collected at the time of delivery.
          </p>
        </section>

        <section className="tc-section">
          <h2>Order Confirmation & Cancellation</h2>
          <p>
            Orders placed on the website are subject to confirmation. We
            reserve the right to cancel any order in cases such as product
            unavailability, incorrect pricing, or delivery constraints.
          </p>
        </section>

        <section className="tc-section">
          <h2>Shipping & Delivery</h2>
          <p>
            We aim to process and dispatch orders within a reasonable timeframe.
            Delivery timelines may vary based on location, courier partners, or
            unforeseen circumstances.
          </p>
        </section>

        <section className="tc-section">
          <h2>Returns & Refunds</h2>
          <p>
            Returns, if accepted, are processed in accordance with our Returns
            Policy. Since payments are made via COD, refunds (if applicable)
            will be handled through an alternative method communicated to the
            customer.
          </p>
        </section>

        <section className="tc-section">
          <h2>Intellectual Property</h2>
          <p>
            All content on this website including text, images, logos, and
            designs is the intellectual property of Quito and may not be used
            without prior written permission.
          </p>
        </section>

        <section className="tc-section">
          <h2>Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect or consequential damages
            arising from the use of this website or our products.
          </p>
        </section>

        <section className="tc-section">
          <h2>Governing Law</h2>
          <p>
            These Terms & Conditions shall be governed by and interpreted in
            accordance with the laws of India.
          </p>
        </section>

        <section className="tc-section">
          <h2>Contact</h2>
          <p>
            For any questions regarding these Terms & Conditions, please contact
            us at <strong>support@getquito.com</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}
