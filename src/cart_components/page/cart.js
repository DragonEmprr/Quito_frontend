import React, { useEffect, useState } from "react";
import "./cart.css";
import { removeFromCart, updateQuantity } from "../../utils/cartutils";
import { apiurl } from "../../data/shopinfo";
import { useNavigate } from "react-router-dom";

export default function CartPage() {

  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState({});

  // Load cart from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("factory_cart")) || [];
    setCartItems(cart);
  }, []);

  // Save cart to localStorage whenever updated
  useEffect(() => {

    if (cartItems.length === 0) { return; }
    localStorage.setItem("factory_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Fetch product details
  useEffect(() => {
    async function fetchProducts() {
      const temp = {};
      for (const item of cartItems) {
        const res = await fetch(`${apiurl}/product/${item.id}`);
        const data = await res.json();
        temp[item.id] = data;
      }
      setProducts(temp);
    }

    if (cartItems.length > 0) fetchProducts();
  }, [cartItems]);

  // Extract numeric price
  function extractNumber(priceString) {
    return Number(priceString.replace(/[₹,]/g, ""));
  }

  // Update quantity
  function updateQty(item, change) {
    const updated = cartItems.map((c) => {
      if (c.id === item.id && c.color === item.color && c.size === item.size) {
        return { ...c, quantity: Math.max(1, c.quantity + change) };
      }
      return c;
    });

    setCartItems(updated);
    updateQuantity(item.id, item.color, item.size, item.quantity + change);
  }

  // Remove item
  function removeItem(item) {
    const updated = cartItems.filter(
      (c) =>
        !(
          c.id === item.id &&
          c.color === item.color &&
          c.size === item.size
        )
    );
    setCartItems(updated);
    removeFromCart(item.id, item.color, item.size);
  }

  const totalCartPrice = cartItems.reduce((sum, it) => {
    const p = products[it.id];
    if (!p) return sum;
    return sum + extractNumber(p.price) * it.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      <div className="cart-list">
        {cartItems.map((item, idx) => {
          const product = products[item.id];
          if (!product)
            return <div key={idx} className="cart-row loading">Loading...</div>;

          const unitPrice = extractNumber(product.price);
          const total = unitPrice * item.quantity;

          return (
            <div className="cart-row" key={idx}>
              <img
                className="cart-img"
                src={product.colors[item.color]}
                alt={product.name}
                onClick={() => navigate(`/product/${item.id}`, {state: {color: item.color, size: item.size, number: item.quantity}})}
              />

              <div className="cart-info">
                <h2>{product.name}</h2>
                <p><strong>Color:</strong> {item.color}</p>
                <p><strong>Size:</strong> {item.size}</p>

                {/* QUANTITY CONTROLS */}
                <div className="quantity-controls">
                  <button onClick={() => updateQty(item, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQty(item, +1)}>+</button>
                </div>

                <p className="price-line">
                  <strong>Price:</strong> {product.price} * {item.quantity}
                </p>
              </div>

              <div className="cart-total">
                <h3>₹{total.toLocaleString()}</h3>
                <button className="remove-btn" onClick={() => removeItem(item)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* PROCEED TO CHECKOUT BUTTON */}
      {cartItems.length > 0 && (
        <div className="checkout-bar">
          <h2>Total: ₹{totalCartPrice.toLocaleString()}</h2>
          <button className="checkout-btn" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}
