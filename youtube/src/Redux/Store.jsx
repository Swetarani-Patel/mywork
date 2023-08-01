import { createStore, applyMiddleware,combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authreducer } from "./reducers/auth.reducer";
import {homeVideosReducer} from "./reducers/video.reducer"

 const rootReducer =  combineReducers({
   auth:authreducer,
   homeVideos: homeVideosReducer
 })

const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store