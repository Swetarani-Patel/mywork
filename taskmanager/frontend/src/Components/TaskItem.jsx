import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  toggleTask,
  updateTask,
  updateTodo,
} from "../redux/action";
import "./TaskItem.css";

import { RxCross2 } from "react-icons/rx";

const TaskItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const editRef = useRef(null);

  const onToggleTask = () => {
    dispatch(toggleTask(item._id));
  };

  const [task, setTask] = useState({
    title: item.title,
    description: item.description,
    status: item.status,
  });

  const handleTodoData = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const onSaveClick = () => {
    dispatch(updateTask(item._id, task));
    setEditing(false);
  };

  const onDeleteTask = () => {
    dispatch(deleteTask(item._id));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (editRef.current && !editRef.current.contains(event.target)) {
        setEditing(false);
      }
    };

    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing]);

  return (
    <tr>
      <td>{index}</td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td> {item.status ? "Completed" : "Pending"}</td>
      <td>
        <input type="checkbox" checked={item.status} onChange={onToggleTask} />
      </td>
      <td>
        <button
          onClick={() => setEditing(true)}
          style={{ backgroundColor: "orange" }}
        >
          Edit
        </button>
      </td>
      <td>
        <button onClick={onDeleteTask}>Delete</button>
      </td>

      {isEditing && (
        <div className="modal">
          <div
            ref={editRef}
            className={`modal-content ${isEditing ? "show" : ""}`}
          >
            <RxCross2
              className="cross-icon"
              onClick={() => {
                setEditing(false);
              }}
            />
            <h2>Edit Task</h2>

            <input
              type="text"
              value={task.title}
              name="title"
              onChange={handleTodoData}
              placeholder="Edit Title"
            />
            <input
              type="text"
              name="description"
              value={task.description}
              onChange={handleTodoData}
              placeholder="Edit Description"
            />
            <button onClick={onSaveClick}>Save</button>
          </div>
        </div>
      )}
    </tr>
  );
};

export default TaskItem;
