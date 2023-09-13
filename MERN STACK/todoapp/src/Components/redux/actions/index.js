import axios from 'axios'
import { ADD_NEW_TODO, GET_ALL_TODOS, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from '../type'
const API_URL = 'https://todoooo-server.onrender.com'
//cnfgnghn


export const addNewTodo = (data)=> async (dispatch)=>{
   try{
    const res = await axios.post(`${API_URL}/todos`, {data})
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
      // console.log("res", res);
      dispatch({type: TOGGLE_TODO, payload: res.data})
     }catch(error){
      console.log('erorr while calling toggleTodo API',error.message )
     }
}

export const updateTodo = (id, data)=> async (dispatch)=>{
   try{
      // console.log('updateTodo action dispatched'); 
      const res = await axios.put(`${API_URL}/todos/${id}`, {data})
      // console.log("res", res);
      dispatch({type: UPDATE_TODO, payload: res.data})
     }catch(error){
      console.log('erorr while calling updateTodo API',error.message )
     }
}

export const deleteTodo = (id) => async (dispatch) => {
   try {
       const res = await axios.delete(`${API_URL}/todos/${id}`);

       dispatch({ type: DELETE_TODO , payload: res.data });
   } catch (error) {
       console.log('Error while calling deleteTodo API ', error.message);
   }
}

export const toggleTab = (tab) => async (dispatch) => {
   dispatch({ type: TOGGLE_TAB, selected: tab })
}