import express from 'express';
import { addTodo, getTodos, toggletodoDone } from '../controller/todocontroller.js';

const route = express.Router();

route.post('/todos', addTodo);
route.get('/todos', getTodos);
route.get('/todos:id', toggletodoDone);
export default route;