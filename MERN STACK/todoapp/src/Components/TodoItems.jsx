import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { AiTwotoneEdit } from "react-icons/ai";
import { toggleTodo, updateTodo, deleteTodo} from "./redux/actions";
import { useDispatch } from "react-redux";

function TodoItems({ ele }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(ele.data);

  const onFormSubmit = (e)=>{
    e.preventDefault();
    setEdit(prevState => !prevState)
    dispatch(updateTodo(ele._id, text))
  }
  return (
    <li
      className="task"
      onClick={() => {
        dispatch(toggleTodo(ele._id));
      }}
      style={{ textDecoration: ele.done ? "line-through" : "" }}
    >
      <span style={{ display: edit ? "none" : "" }} className="task-text">
        {ele.data}
      </span>
      <form style={{ display: edit ? "inline" : "none" }} onSubmit={onFormSubmit}>
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => {
            setText(e.target.value);
          }}
         
        />
      </form>
      <span className="task-icons">
        <AiTwotoneEdit
          className="edit-icon"
          onClick={() => setEdit((prevState) => !prevState)}
        />
        <TiDelete className="delete-icon" onClick={()=>{dispatch(deleteTodo(ele._id))}}/>
      </span>
    </li>
  );
}

export default TodoItems;
