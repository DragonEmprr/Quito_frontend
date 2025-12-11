import "./sizeselector.css";

export default function SizeSelector({ sizes, selectedSize, setSelectedSize }) {
  return (
    <div className="size-selector">
      <h3>Available Sizes</h3>
      <div className="size-options">
        {sizes.map(size => (
          <button
            key={size}
            className={`size-btn ${selectedSize === size ? "selected-size" : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
