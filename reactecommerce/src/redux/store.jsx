import { legacy_createStore as createrStore } from "redux";
import productReducer from "./productReducer";
 let myStore = createrStore(productReducer)
 export default myStore;
