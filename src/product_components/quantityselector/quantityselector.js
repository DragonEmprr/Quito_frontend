import "./quantityselector.css";

export default function QuantitySelector({ quantity, setQuantity }) {
  return (
    <div className="quantity-selector">
      <h3>Quantity</h3>
      <div className="quantity-box">
        <button onClick={() => quantity > 0 && setQuantity(quantity - 1)}>−</button>
        <span>{quantity}</span>
        <button onClick={() => quantity < 10 && setQuantity(quantity + 1)}>+</button>
      </div>
    </div>
  );
}
