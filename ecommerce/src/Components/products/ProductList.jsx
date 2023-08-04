

import React from "react";
import { addToCart } from "../api/api";
import "./ProductList.css"; 

function ProductList({ ele }) {
  return (
    <div className="product-card">
      <img src={ele.image} alt={ele.title} className="product-image" />
      <h3 className="product-title">{ele.title}</h3>
      <p className="product-category">{ele.category}</p>
      <p className="product-price">${ele.price}</p>
      <button onClick={() => addToCart(ele)} className="add-to-cart-btn">
        Add To Cart
      </button>
    </div>
  );
}

export default ProductList;
