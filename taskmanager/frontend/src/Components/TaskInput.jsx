import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask, getAllTasks } from "../redux/action";
import "./TaskInput.css";

function TaskInput() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: false,
  });

  const handleTodoData = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addNewTask(task));
    await dispatch(getAllTasks());
  };

  return (
    <div className="task-input-container">
      <form className="task-input-form" onSubmit={onFormSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add a new Title"
          onChange={handleTodoData}
        />
        <textarea
          name="description"
          cols="30"
          rows="5"
          placeholder="Description"
          onChange={handleTodoData}
        />
        <input type="submit" value="Add a new Task" />
      </form>
    </div>
  );
}

export default TaskInput;
