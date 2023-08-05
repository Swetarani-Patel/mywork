import { useRef } from "react";
function AddTodo({ addTodo }) {
  const todoinput = useRef("");

  function sendInput() {
    addTodo(todoinput.current);
  }

  return (
    <div data-testid="add-todo" className="add-todo">
      <input
        type="text"
        placeholder="Add a new Todo"
        onChange={(event) => (todoinput.current = event.target.value)}
      />
      <button onClick={sendInput}>ADD TODO</button>
    </div>
  );
}

export default AddTodo;
