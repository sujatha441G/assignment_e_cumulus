import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addRemoveButtons } from "./addToCartButton";


const ListCard = ({ rowData, addToCart, removeFromCart}) => {

  return (
    <tr key={rowData.id} style={{ width: "100%", backgroundColor: "#E1E1D9" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "30px",
          marginBottom: "10px",
          backgroundColor: "white",
          boxShadow: "1px 2px 9px #E1E1D9",
        }}
      >
        <img src={rowData.image} width={150} height={150} alt="image" />
        <Link style={{color: 'inherit', textDecoration:'none'}} to={{ pathname: "/Detail" }} state={{ productDetails: rowData }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "flex-start",
            marginLeft: 10,
          }}
        >
          <td style={{ fontSize: 16, fontWeight: "600" }}>
            {rowData.car_name}
          </td>
          <div style={{ fontSize: 14,
           fontWeight: "400" ,
           whiteSpace: 'pre-line', 
           display:'flex',
          justifyContent: 'left',
           alignItems: 'left',
           lineHeight: 2,
}}>
            {rowData.description}
          </div>
        </div>
        </Link>
        <div
          style={{ marginLeft: "auto", display: "flex", flexDirection: "row" }}
        >
          <td
            style={{
              backgroundColor: "#E1E1D9",
              width: 0.5,
              height: 100,
              marginRight: 30,
            }}
          ></td>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <td style={{ fontSize: 16, fontWeight: "600" }}>
              ${rowData.count ? rowData.price * rowData.count : rowData.price}
            </td>
            
            {rowData.count !== 0 ? addRemoveButtons(rowData, addToCart, removeFromCart) :  <button
          style={{
            backgroundColor: "white",
            fontSize: 14,
            fontWeight: "400",
            width: 100,
            height: 30,
            borderRadius:10
          }}
          onClick={() => addToCart(rowData)}
        >
          Add To Cart
        </button>}
          </div>
        </div>
      </div>
    </tr>
    
  );
};

export default ListCard;
