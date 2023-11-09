import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import ListCard from "../components/listCard";

function CartScreen() {
  const location = useLocation();
  const { state } = location;
  const [cart, setCart] = useState(
    state.cartItems.filter((data) => data.count !== 0)
  );

  const getCartTotal = (item) => {
    var sum = item.reduce((a, b) => {
      return a + b.price * b.count;
    }, 0);
    setTotalCart(sum);
  };
  const [totalCart, setTotalCart] = useState(
    cart.reduce((a, b) => {
      return a + b.price * b.count;
    }, 0)
  );

  const addToCart = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, count: item.count + 1 } : item
    );
    setCart(updatedCart);
    getCartTotal(updatedCart);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart
      .map((item) =>
        item.id === product.id
          ? { ...item, count: item.count && item.count - 1 }
          : item
      )
      .filter((item) => item.count > 0);

    setCart(updatedCart);
    getCartTotal(updatedCart);
  };

  const renderTableData = () => {
    return cart.map((product, index) => {
      return (
        <ListCard
          key={index}
          rowData={product}
          addToCart={(product) => addToCart(product)}
          removeFromCart={(product) => removeFromCart(product)}
        />
      );
    });
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Link to={"/"} state={{ updatedItems: cart }}>
          <button
            style={{
              width: 70,
              height: 30,
              borderRadius: 10,
              borderColor: "white",
            }}
          >
            Back
          </button>
        </Link>
        <h1>Your Cart</h1>
      </div>
      <div>
        {cart.length > 0 ? (
          <table className="App">
            <tbody>{renderTableData()}</tbody>
          </table>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {"Your Cart is Empty"}
          </div>
        )}
      </div>
      {cart.length > 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 30,
          }}
        >
          <td style={{ fontWeight: 800, fontSize: 16 }}>Total: ${totalCart}</td>
          <button
            style={{
              backgroundColor: "green",
              height: 40,
              width: 100,
              borderColor: "green",
              color: "white",
              borderRadius: 10,
            }}
          >
            {"Check Out"}
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default CartScreen;
