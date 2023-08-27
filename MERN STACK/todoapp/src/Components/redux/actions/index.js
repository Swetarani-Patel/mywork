import axios from 'axios'
import { ADD_NEW_TODO, GET_ALL_TODOS } from '../type'
const API_URL = 'http://localhost:8000'

export const addNewTodo = (data)=> async (dispatch)=>{
   try{
    const res = await axios.post(`${API_URL}/todos`, {data})
   //  console.log("res", res);
    dispatch({type: ADD_NEW_TODO, payload: res.data})
   }catch(error){
    console.log('erorr while calling addnewtodo API',error.message )
   }
}

export const getAllTodos = ()=> async (dispatch)=>{
   try{
    const res = await axios.get(`${API_URL}/todos`)
   //  console.log("res", res);
    dispatch({type: GET_ALL_TODOS, payload: res.data})
   }catch(error){
    console.log('erorr while calling getAllTodos API',error.message )
   }
}

export const toggleTodo = (id)=> async (dispatch)=>{
   try{
      const res = await axios.get(`${API_URL}/todos/${id}`)
      console.log("res", res);
      dispatch({type: GET_ALL_TODOS, payload: res.data})
     }catch(error){
      console.log('erorr while calling toggleTodo API',error.message )
     }
}