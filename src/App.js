import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Register  from "./Pages/Register";
import ListClass from "./Pages/ListClass";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/home/:number" element={<ListClass />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
