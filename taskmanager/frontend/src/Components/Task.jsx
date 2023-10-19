import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";
import { getAllTasks } from "../redux/action";
import "./Task.css";

const Task = () => {
  const { tasks } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  useEffect(() => {
    setData(tasks);
  }, [tasks]);

  const handleStatus = (e) => {
    if (e.target.value === "Pending") {
      const PendingArray = tasks.filter((ele) => ele.status === false);
      setData(PendingArray);
    } else if (e.target.value === "Completed") {
      const CompletedArray = tasks.filter((ele) => ele.status === true);
      setData(CompletedArray);
    } else {
      setData(tasks);
    }
  };

  return (
    <div className="task-container">
      <TaskInput />
      <div className="table-container">
        <select onChange={handleStatus} className="status">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
        <table className="task-table">
          <thead>
            <tr>
              <th>SN</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Toggle Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <TaskItem key={index} item={item} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task;
