import React, { useEffect } from 'react'
import { deleteTodo, getAllTodos } from './redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import TodoItems from './TodoItems'
import Tabs from './Tabs'
import { ACTIVE_TODOS, ALL_TODOS, DONE_TODOS } from './redux/type'
function Todos() {
    const dispatch = useDispatch()
    const storedData = useSelector((state)=>state.todos)
    const currentTab = useSelector((state) => state.currentTab)
    console.log(storedData);
    useEffect(()=>{
   dispatch(getAllTodos())
    },[])

    const getTodos = ()=>{
      if(currentTab === ALL_TODOS){
        return storedData;
      }else if(currentTab === ACTIVE_TODOS){
        return storedData.filter(todo => !todo.done)
      }else if(currentTab === DONE_TODOS){
        return storedData.filter(todo => todo.done)
      }
    }

    const removeDoneTodos = ()=>{
      storedData.forEach(({done, _id})=>{
        if(done){
          dispatch(deleteTodo(_id))
        }
      })
        
    }
  return (
    <ul className='todoitems-div'>
    <div className='tabs'>
    <Tabs currentTab={currentTab}/>
    {
      storedData.some(todo => {
        console.log(todo.done, "done")
        return todo.done}) ? (
        <button onClick={removeDoneTodos} className='button clear'>Remove Done Todos</button>
      ) : ""
    }
    </div>
     {
       
      getTodos().map((ele)=>{
            return <TodoItems key={ele._id} ele={ele}/>
        })
     }
    </ul>
  )
}

export default Todos
