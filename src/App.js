import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Parent from "./props/Parent";
import Product from "./Product";
import Service from "./Service";
import Stateclass from "./stateinclass/Stateclass";
import Statefunction from "./stateinfunction/Statefunction";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
