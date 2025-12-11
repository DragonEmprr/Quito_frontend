import { useState } from "react";
import "./productimage.css";

export default function ProductImage({ img, name }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="image-section">
        <img
          src={img}
          alt={name}
          className="main-product-image"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* Fullscreen Modal */}
      {open && (
        <div className="img-modal" onClick={() => setOpen(false)}>
          <img src={img} alt={name} className="modal-image" />
        </div>
      )}
    </>
  );
}
