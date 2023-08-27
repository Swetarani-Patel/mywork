import express from 'express';
import { addTodo } from '../controller/todocontroller.js';

const route = express.Router();

route.post('/todos', addTodo);

export default route;