import {combineReducers, legacy_createStore as createrStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux';
import { todosReducers } from './reducers/todoreducers';
import { tabReducer } from './reducers/tabreducers';
const reducer = combineReducers({
    todos:todosReducers,
    currentTab: tabReducer
})


const store = createrStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunk))
     )

     export default store;