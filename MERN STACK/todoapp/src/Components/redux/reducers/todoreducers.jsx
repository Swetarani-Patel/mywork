import { ADD_NEW_TODO } from "../type"

export const todosReducers = (state=[], action)=>{
    switch(action.type){
        case ADD_NEW_TODO: 
            return [action.payload, ...state]
        default:
            return state;
    }
}
