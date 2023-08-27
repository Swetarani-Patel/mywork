import { request } from "express";
import Todo from "../model/Todo.js";

export const addTodo = async (req, res) => {
   try{
      const newTodo = await Todo.create({
         data: req.body.data,
         createdAt: Date.now()
        })
         await newTodo.save(); 
        return res.status(200).json(newTodo);
   }catch(error){
     return res.status(500).json(error.message)
   }
 }

 export const getTodos = async (req, res)=>{
  try{
    const todos = await Todo.find({}).sort({'createdAt': -1})// sort by descending order
      return res.status(200).json(todos);
 }catch(error){
   return res.status(500).json(error.message)
 }
 }


 export const toggletodoDone = async (req, res)=>{
  try{
     const todoRef = await Todo.findById(req.params.id)
     const todoo = await Todo.findOneAndUpdate(
      { _id: req.params.id},
      { done: !todoRef.done}
     )
     await newTodo.save(); 
      return res.status(200).json(todoo);
 }catch(error){
   return res.status(500).json(error.message)
 }
 }