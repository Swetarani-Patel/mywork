import { ADD_NEW_TODO, DELETE_TODO, GET_ALL_TODOS, TOGGLE_TODO, UPDATE_TODO } from "../type"

export const todosReducers = (state=[], action)=>{
    switch(action.type){
        case ADD_NEW_TODO: 
            return [action.payload, ...state]

            case GET_ALL_TODOS: 
            return action.payload

            case TOGGLE_TODO:
                return state.map(todo=>(
                    todo._id === action.payload._id ? {...todo, done: !todo.done} : todo
                ))

                case UPDATE_TODO:
                return state.map(todo=>(
                    todo._id === action.payload._id ? {...todo, data: action.payload.data} : todo
                ))
                case DELETE_TODO:
                    return state.filter(todo => todo._id !== action.payload._id);

                
        default:
            return state;
    }
}
