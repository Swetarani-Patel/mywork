import { applyMiddleware, combineReducers, legacy_createStore as createrStore } from "redux";
import productReducer from "./productaction/productReducer"
import thunk from "redux-thunk";
import cartReducer from "./cartAction/cartReducer";

const rootReducer = combineReducers({
    product:productReducer,
    cart:cartReducer
})
 let myStore = createrStore(rootReducer, applyMiddleware(thunk))
 export default myStore;
