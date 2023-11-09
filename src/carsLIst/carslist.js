import React, { useEffect, useState } from "react";
import TableData from "../mocks/data";
import { icons } from "../mocks/icons";
import { Link, useLocation } from "react-router-dom";
import ListCard from "../components/listCard";

const CarsList = () => {
  const location = useLocation();
  const { state } = location;
  const [tableData, setTableData] = useState(TableData);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updatedResult = tableData.map((item) => {
      const hasItem =
        state?.updatedItems &&
        state?.updatedItems.find((item1) => item1.id == item.id);
      if (hasItem) {
        return hasItem;
      }
      return item;
    });

    reloadTable(updatedResult);
  }, [state]);

  const addToCart = (product) => {
    const updatedCart = tableData.map((item) =>
      item.id === product.id ? { ...item, count: item.count + 1 } : item
    );
    reloadTable(updatedCart);
  };

  const removeFromCart = (product) => {
    const updatedCart = tableData.map((item) =>
      item.id === product.id
        ? { ...item, count: item.count && item.count - 1 }
        : item
    );
    reloadTable(updatedCart);
  };

  const reloadTable = (data) => {
    setTableData(data);
    getCartCount(data);
  };

  const getCartCount = (updatedCartValue) => {
    const count = updatedCartValue.reduce((ac, cb) => ac + cb.count, 0);
    setCartCount(count);
  };

  const renderHeader = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 50,
          marginRight: 50,
        }}
      >
        <h2>Find Your Car Here</h2>
        <Link to={{ pathname: "/Cart" }} state={{ cartItems: tableData }}>
          <div>
            <div
              style={{
                backgroundColor: "red",
                position: "absolute",
                marginLeft: 25,
                height: 30,
                width: 30,
                borderRadius: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <td style={{ color: "white", fontSize: 14, fontWeight: 600 }}>
                {tableData.length ? cartCount : 0}
              </td>
            </div>
            <img src={icons.CART_IMAGE} width={30} height={30}></img>
          </div>
        </Link>
      </div>
    );
  };

  const renderTableData = () => {
    return tableData.map((product, index) => {
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
    <div style={{ margin: 30 }}>
      {renderHeader()}
      <table className="App">
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};

export default CarsList;
