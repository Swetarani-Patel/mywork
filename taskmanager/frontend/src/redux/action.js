import axios from "axios";
import {
  DELETE_TODO,
  GET_ALL_TODOS,
  TOGGLE_THEME,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "./actionType";
const API_URL = "https://taskmanager-ftxf.onrender.com";

export const addNewTask = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/tasks`, data);
  } catch (error) {
    console.log("erorr while calling addnewtodo API", error.message);
  }
};

export const getAllTasks = (status) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/tasks`);
    dispatch({ type: GET_ALL_TODOS, payload: res.data });
  } catch (error) {
    console.log("erorr while calling getAllTodos API", error.message);
  }
};

export const toggleTask = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/tasks/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log("erorr while calling toggleTodo API", error.message);
  }
};

export const updateTask = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/tasks/${id}`, data);
    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log("erorr while calling updateTodo API", error.message);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/tasks/${id}`);

    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling deleteTodo API", error.message);
  }
};

export const switchTheme = () => (dispatch) => {
  try {
    dispatch({ type: TOGGLE_THEME });
  } catch (error) {
    console.log("Error while calling switchTheme API", error.message);
  }
};
