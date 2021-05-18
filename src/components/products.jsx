import React from "react";
import "../css/Products.css";

const Productus = ({ heading, data }) => {
  return (
    <div className="products-container">
      <h1>{heading}</h1>
      <div className="products">
        {data.map((product, index) => {
          return (
            <div className="card" key={index}>
              <img src={product.img} alt={product.alt} />
              <div className="product-info">
                <h2 className="product-title">{product.name}</h2>
                <p className="product-desc">{product.desc}</p>
                <p className="product-price">{product.price}</p>
                <button>{product.button}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productus;
