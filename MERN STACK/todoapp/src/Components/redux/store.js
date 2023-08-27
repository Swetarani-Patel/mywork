import {combineReducers, legacy_createStore as createrStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux';
import { todosReducers } from './reducers/todoreducers';
const reducer = combineReducers({
    todos:todosReducers
})
const middleware = [thunk]

const store = createrStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
     )

     export default store;