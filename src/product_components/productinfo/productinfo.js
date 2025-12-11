import "./productinfo.css";

export default function ProductInfo({ product }) {
  return (
    <div className="details-section">
      <h1>{product.name}</h1>
      <p className="product-desc">{product.desc}</p>
      <p className="product-mrp">
        <strong>MRP: </strong>{product.price}
      </p>
    </div>
  );
}
