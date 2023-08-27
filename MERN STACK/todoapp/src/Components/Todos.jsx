import React, { useEffect } from 'react'
import { getAllTodos } from './redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import TodoItems from './TodoItems'
function Todos() {
    const dispatch = useDispatch()
    const storedData = useSelector((state)=>state.todos)
    useEffect(()=>{
   dispatch(getAllTodos())
    },[])
  return (
    <ul className='todoitems-div'>
     {
        storedData.map((ele)=>{
            return <TodoItems key={ele._id} ele={ele}/>
        })
     }
    </ul>
  )
}

export default Todos
