import React from "react";
import "./refund_cancellation.css";

export default function RefundCancellationPolicy() {
  return (
    <div className="policy-container">
      <h1>Refund & Cancellation Policy</h1>

      <p className="last-updated">Last updated: December 2025</p>

      <section>
        <h2>1. Order Cancellation</h2>
        <p>
          Orders can be cancelled within 24 hours of placing the order, provided
          the order has not yet been shipped. Once the order is shipped, it
          cannot be cancelled.
        </p>
      </section>

      <section>
        <h2>2. Refund Policy</h2>
        <p>
          Refunds are applicable only in cases where the product received is
          damaged, defective, or incorrect. Customers must notify us within
          48 hours of delivery with valid proof.
        </p>
      </section>

      <section>
        <h2>3. Refund Processing</h2>
        <p>
          Once the return request is approved, refunds will be processed within
          7–10 business days. Refunds will be credited to the original payment
          method used during purchase.
        </p>
      </section>

      <section>
        <h2>4. Non-Refundable Items</h2>
        <p>
          Products that are used, damaged due to misuse, or returned without
          original packaging are not eligible for refunds.
        </p>
      </section>

      <section>
        <h2>5. Shipping Charges</h2>
        <p>
          Shipping charges are non-refundable unless the return is due to a
          mistake from our side.
        </p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>
          For refund or cancellation requests, please contact us at
          <strong> support@yourfactory.com</strong> with your order details.
        </p>
      </section>
    </div>
  );
}
