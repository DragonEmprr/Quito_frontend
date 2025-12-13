import React, { useState } from "react";
import "./checkout.css";

import { apiurl } from "../../data/shopinfo";
import { clearCart } from "../../utils/cartutils";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function placeOrder() {
    const { name, address, phone, email } = form;

    if (!name || !address || !phone || !email) {
      setError("Please fill all the fields before placing the order.");
      return;
    }

    setError("");
    setSuccess("");

    // Load cart from localStorage
    const cart = JSON.parse(localStorage.getItem("factory_cart")) || [];

    const body = {
      customer_details: form,
      cart: cart,
      payment_method: "Cash on Delivery",
    };

    try {
      const res = await fetch(`${apiurl}/order_confirmation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Order placed successfully!");
        localStorage.removeItem("factory_cart"); // clearing cart after order
      } else {
        setError(data.message || "Failed to place order.");
        return;
      }
    } catch (err) {
      setError("Server error while placing your order.");
      return;
    }

    clearCart();
    navigate("/");
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-form">

        <label>
          Full Name
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Address
          <textarea
            name="address"
            placeholder="House No, Street, City, Pincode"
            value={form.address}
            onChange={handleChange}
          ></textarea>
        </label>

        <label>
          Phone Number
          <input
            type="text"
            name="phone"
            placeholder="9876543210"
            value={form.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
          />
        </label>

        <h2>Payment Method</h2>

        <div className="payment-option">
          <input type="radio" checked readOnly />
          Cash on Delivery (COD)
        </div>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button className="place-order-btn" onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}
