import React, { useEffect, useState, useRef } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import Pagination from "./Pagination";

function TodoList() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

  const totallength = useRef(1);

  useEffect(() => {
    getData();
  }, [page, limit]);

  async function getData() {
    setLoading(true);
    setErr(false);
    try {
      let res = await fetch(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos?_page=${page}&_limit=${limit}`
      );
      totallength.current = parseInt(res.headers.get("X-Total-Count"));

      const data = await res.json();
      setTodos(data);
    } catch (error) {
      setErr(true);
    }
    setLoading(false);
  }

  async function addTodo(title) {
    setLoading(true);
    setErr(false);

    try {
      const res = await fetch(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: false,
            title: title,
          }),
        }
      );

      getData();
    } catch (error) {
      setErr(true);
    }
    setLoading(false);
  }

  async function toggleTodo(id) {
    setLoading(true);
    setErr(false);
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      const updatedTodo = { ...todoToUpdate, status: !todoToUpdate.status };
      let res = await fetch(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTodo),
        }
      );

      getData();
    } catch (error) {
      setErr(true);
    }
    setLoading(false);
  }
  async function deleteTodo(id) {
    setLoading(true);
    setErr(false);

    try {
      await fetch(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos/${id}`,
        {
          method: "DELETE",
        }
      );

      getData();
    } catch (error) {
      setErr(true);
    }
    setLoading(false);
  }

  function handleLimitChange(newLimit) {
    setLimit(newLimit);
    setPage(1);
  }
  if (loading) {
    return <h1 data-testid="loading">Loading...</h1>;
  }

  if (err) {
    return <h1 data-testid="err">Something went wrong..</h1>;
  }

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <div className="selectDiv" data-testid="select">
        <select
          data-testid="select"
          value={limit}
          onChange={(e) => handleLimitChange(e.target.value)}
        >
          <option value={3}>3</option>
          <option value={6}>6</option>
          <option value={9}>9</option>
        </select>
      </div>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      <Pagination
        page={page}
        limit={limit}
        totalTodo={totallength.current}
        setPage={setPage}
      />
    </>
  );
}

export default TodoList;
