import { legacy_createStore as createrStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { todosReducers } from "./reducer";

const store = createrStore(todosReducers, applyMiddleware(thunk));

export default store;
