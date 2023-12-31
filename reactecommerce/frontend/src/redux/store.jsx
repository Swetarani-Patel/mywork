import { applyMiddleware, combineReducers, legacy_createStore as createrStore } from "redux";
import productReducer from "./productaction/productReducer"
import thunk from "redux-thunk";
import cartReducer from "./cartAction/cartReducer";
import { authreducer } from "./authaction/authReducer";

const rootReducer = combineReducers({
    product:productReducer,
    cart:cartReducer,
    auth:authreducer
})
 let myStore = createrStore(rootReducer, applyMiddleware(thunk))
 export default myStore;
