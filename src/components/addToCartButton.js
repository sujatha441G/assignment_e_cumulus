import React, { Component } from "react";

export const addRemoveButtons = (rowData, addToCart, removeFromCart) => {
  return (
    <div key={rowData.id} style={{ margin: 10 }}>
      <button
        style={{
          backgroundColor: "white",
          fontSize: 16,
          fontWeight: "600",
          width: 40,
          height: 30,
          marginRight: 10,
          borderRadius: 5,
        }}
        onClick={() => addToCart(rowData)}
      >
        +
      </button>
      <span>{rowData.count}</span>
      <button
        style={{
          backgroundColor: "white",
          fontSize: 16,
          fontWeight: "600",
          width: 40,
          height: 30,
          marginLeft: 10,
          borderRadius: 5,
        }}
        onClick={() => removeFromCart(rowData)}
      >
        -
      </button>
    </div>
  );
};
