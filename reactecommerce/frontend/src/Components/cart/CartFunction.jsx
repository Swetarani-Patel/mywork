
export const updateCartQuantity = (itemId, increment, cart, setCart) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        item.quantity += increment;
        item.quantity = Math.max(item.quantity, 1);
      }
      return item;
    });

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  export const removeCartItem = (itemId, cart, setCart)=>{
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    console.log(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  export const getCouponCode = (coupon, setDiscount)=>{
    console.log(coupon)
    if(coupon.code === 'SWETA@123'){
      setDiscount(0.3)
    }
  }

 
   