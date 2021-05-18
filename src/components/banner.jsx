import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../css/Banner.css";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Banner-container">
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="banner-content">
        <div className="banner-items">
          <h1>
            Greatest <br></br> Pizza Ever
          </h1>
          <p>Ready in 60 seconds</p>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
