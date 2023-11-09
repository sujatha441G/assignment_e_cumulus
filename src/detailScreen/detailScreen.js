import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "../App.css";
import { addRemoveButtons } from "../components/addToCartButton";

const ProductDetailScreen = () => {
  const location = useLocation();
  const { state } = location;
  const [zoomed, setZoomed] = useState(false);
  const [detail, setDetails] = useState(state?.productDetails);

  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  function showAlert() {
    alert("Successfully added to cart");
  }

  const addToCart = () => {
    const updated = { ...detail, count: detail.count + 1 };
    setDetails(updated);
  };

  const removeFromCart = () => {
    const updated = detail.count
      ? { ...detail, count: detail.count - 1 }
      : detail;
    setDetails(updated);
  };

  return (
    <div>
      <Link to={"/"} state={{ updatedItems: [detail] }}>
        <button
          style={{
            width: 70,
            height: 30,
            borderRadius: 10,
            borderColor: "white",
            margin: 10,
          }}
        >
          Back
        </button>
      </Link>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Product Detail
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          className={`zoomable-image ${zoomed ? "zoomed" : ""}`}
          onClick={toggleZoom}
        >
          <img src={detail.image} alt={detail.name} width={400} height={200} />
        </div>
        <h2>{detail.name}</h2>
        <p style={{ whiteSpace: "pre-line", display: "flex", lineHeight: 2 }}>
          {detail.description}
        </p>
        <p style={{ fontSize: 16, fontWeight: "600" }}>
          Price: ${detail.count ? detail.price * detail.count : detail.price}
        </p>

        {addRemoveButtons(detail, addToCart, removeFromCart)}
      </div>
    </div>
  );
};

export default ProductDetailScreen;
