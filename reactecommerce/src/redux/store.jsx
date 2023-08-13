import { applyMiddleware, legacy_createStore as createrStore } from "redux";
import productReducer from "./productReducer";
import thunk from "redux-thunk";

 let myStore = createrStore(productReducer, applyMiddleware(thunk))
 export default myStore;
