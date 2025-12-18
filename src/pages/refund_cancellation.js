import React from "react";
import "./refund_cancellation.css";

export default function RefundCancellationPolicy() {
  return (
    <main className="policy-container">
      <h1>Refund & Cancellation Policy</h1>

      <p className="last-updated">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section>
        <h2>Order Cancellation</h2>
        <p>
          Order cancellation requests must be sent explicitly via email to
          <strong> support@getquito.com</strong> within <strong>24 hours</strong>
          of placing the order. The email must include the order number and
          registered contact details.
        </p>
        <p>
          Cancellation requests will be considered only if the order has not
          yet been shipped. Once the order is shipped, it cannot be cancelled.
        </p>
      </section>


      <section>
        <h2>Refund Eligibility</h2>
        <p>
          Refunds are applicable only if the product received is damaged,
          defective, or incorrect. Customers must notify us within
          <strong> 48 hours of delivery</strong>.
        </p>
      </section>

      <section>
        <h2>Proof Requirement</h2>
        <p>
          To process a refund request, customers are required to provide
          a clear <strong>unboxing video</strong> recorded at the time of
          opening the package. The video must clearly show the product,
          packaging, and the issue being reported. Requests without valid
          video proof may not be accepted.
        </p>
      </section>

      <section>
        <h2>Refund Processing</h2>
        <p>
          Once the refund request is reviewed and approved, the refund
          will be processed within <strong>7-10 business days</strong>.
          Since payments are made via Cash on Delivery (COD), refunds (if
          applicable) will be issued through an alternative method such as
          bank transfer or UPI, as communicated to the customer.
        </p>
      </section>

      <section>
        <h2>Non-Refundable Cases</h2>
        <p>
          Products that are used, damaged due to customer misuse, returned
          without original packaging, or reported without the required
          unboxing video proof are not eligible for refunds.
        </p>
      </section>

      <section>
        <h2>Shipping Charges</h2>
        <p>
          Shipping charges are non-refundable unless the return is due to
          an error or defect from our side.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          For refund or cancellation requests, please contact us at
          <strong> support@getquito.com</strong> with your order details
          and required proof.
        </p>
      </section>
    </main>
  );
}
