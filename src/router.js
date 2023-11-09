import React from 'react';
import { Route, Routes } from "react-router-dom";
import CarsList from './carsLIst/carslist';
import Cart from './cart/cart';
import DetailScreen from './detailScreen/detailScreen'

function RouterClass() {
  return (
    <div>
    <Routes>
      <Route path="/" Component={CarsList} />
      <Route path="/Cart" Component={Cart} />
      <Route path="/Detail" Component={DetailScreen} />
  </Routes>
  </div>
  );
}

export default RouterClass;