function TodoItem({ todo, toggleTodo, deleteTodo }) {
  function sendId() {
    toggleTodo(todo.id);
  }

  return (
    <div data-testid="todo-item" className="todo-item">
      <p>{todo.title}</p>
      <p>{todo.status ? "Completed" : "Not Completed"}</p>
      <button className="toggle" onClick={sendId}>
        TOGGLE
      </button>{" "}
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button className="delete" onClick={() => deleteTodo(todo.id)}>
        DELETE
      </button>
    </div>
  );
}

export default TodoItem;
