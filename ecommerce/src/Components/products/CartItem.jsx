

import React from 'react';
import { removeItem } from '../api/api';
import './CartItem.css'; 

function CartItem({ elm, setCart }) {
  return (
    <div className="cart-item">
      <img src={elm.image} alt="" className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{elm.title}</h3>
        <p className="cart-item-category">{elm.category}</p>
        <p className="cart-item-price">${elm.price}</p>
      </div>
      <button onClick={() => removeItem(elm.id, setCart)} className="cart-item-remove-btn">
        Remove
      </button>
    </div>
  );
}

export default CartItem;
