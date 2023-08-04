import React, { useEffect, useState } from "react";
import { getcartItem } from "../api/api";
import CartItem from "./CartItem";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getcartItem(setCart);
  }, []);

  return (
    <div>
      {cart.length > 0 &&
        cart.map((elm) => (
          <CartItem key={elm.id} elm={elm} setCart={setCart} />
        ))}
    </div>
  );
}

export default Cart;
