import React from "react";
import "./top.css";
import { useNavigate } from "react-router-dom";


export default function Header() {

    const navigate = useNavigate()
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="brand-title">QUITO</h1>
        <h3 className="factory-name">~ RISHU KNITWEAR </h3>
      </div>
      <button className="cart-btn" onClick={() => navigate("/cart")}>
        <span className="cart-icon">🛒</span>
      </button>

    </header>
  );
}
