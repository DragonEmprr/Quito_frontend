import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Sidebar */}
      <nav className={`sidebar ${open ? "open" : ""}`}>
        <h1 className="logo">QUITO</h1>

        <div className="side-links">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/#products" onClick={() => setOpen(false)}>Collection</Link>
          <Link to="/#about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/#location" onClick={() => setOpen(false)}>Location</Link>
          <Link to="/#contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/cart" onClick={() => setOpen(false)}>Cart</Link>
        </div>
      </nav>

      {/* Overlay when open */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
}