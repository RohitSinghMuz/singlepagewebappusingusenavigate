import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };
  const goToAboutPage = () => {
    navigate("/about");
  };
  const goToServicePage = () => {
    navigate("/service");
  };
  const goToProductPage = () => {
    navigate("/product");
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{ margin: "10px", padding: "10px 20px" }}
          onClick={goToHomePage}
        >
          Home
        </button>
        <button
          style={{ margin: "10px", padding: "10px 20px" }}
          onClick={goToAboutPage}
        >
          About
        </button>
        <button
          style={{ margin: "10px", padding: "10px 20px" }}
          onClick={goToServicePage}
        >
          Service
        </button>
        <button
          style={{ margin: "10px", padding: "10px 20px" }}
          onClick={goToProductPage}
        >
          Product
        </button>
      </div>
    </>
  );
};

export default Header;
