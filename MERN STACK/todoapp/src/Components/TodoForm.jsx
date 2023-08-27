import React, { useState } from 'react'
import { addNewTodo } from './redux/actions'
import { useDispatch } from 'react-redux';

function TodoForm() {
  const[user, setUser] = useState("");
  const dispatch = useDispatch()
  
  const handleUserData = (e)=>{
    e.preventDefault();
    dispatch(addNewTodo(user))
    setUser('');
  }
  const onInputChange = (e)=>{
  setUser(e.target.value);
  }
  return (
    <form className='form' onSubmit={handleUserData}>
    <input type="text" value={user} placeholder='Enter new Todo...' className='input' onChange={onInputChange}/>
    </form>
  )
}

export default TodoForm
