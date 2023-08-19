import { SET_CART_ITEM } from "../actionType";

let initialData = {
  cart: JSON.parse(localStorage.getItem('cart')) || []
};

const cartReducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_CART_ITEM:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
export default cartReducer;
