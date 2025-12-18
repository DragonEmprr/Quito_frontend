import "./colorselector.css";

export default function ColorSelector({ colors, selectedColor, setSelectedColor }) {
  return (
    <div className="color-selector">
      <h3>Colors</h3>
      <div className="color-options">
        {Object.keys(colors).map(c => (
          <button
            key={c}
            className={`color-btn ${selectedColor === c ? "active" : ""}`}
            onClick={() => setSelectedColor(c)}
          >{c}</button>
        ))}
      </div>
    </div>
  );
}
