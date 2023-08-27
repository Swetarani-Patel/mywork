import React from "react";
import { TiDelete } from 'react-icons/ti'
import { AiTwotoneEdit } from 'react-icons/ai'

function TodoItems({ ele }) {
  return (
    <li className="task" onClick={()=>{toggleTodo}}>
      <span className="task-text">{ele.data}</span>
      <span className="task-icons">
        <TiDelete className="delete-icon" />
        <AiTwotoneEdit className="edit-icon" />
      </span>
    </li>
  );
}

export default TodoItems;
