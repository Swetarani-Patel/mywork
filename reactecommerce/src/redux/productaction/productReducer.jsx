import { SET_PRODUCTS } from "../actionType";

let initData = {
  product: [],
};
const productReducer = (state = initData, action) => {
  if (action.type === SET_PRODUCTS) {
    return { ...state, product: action.payload };
  }
  return state;
};
export default productReducer;
