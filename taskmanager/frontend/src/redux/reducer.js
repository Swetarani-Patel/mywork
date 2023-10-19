import {
  DELETE_TODO,
  GET_ALL_TODOS,
  TOGGLE_THEME,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "./actionType";

const initialTheme = "light";

export const todosReducers = (
  state = { tasks: [], theme: initialTheme },
  action
) => {
  switch (action.type) {
    case GET_ALL_TODOS:
      return { ...state, tasks: action.payload };

    case TOGGLE_TODO:
      const updatedTasks = state.tasks.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, status: !todo.status }
          : todo
      );
      return { ...state, tasks: updatedTasks };

    case UPDATE_TODO:
      const updatedTasks1 = state.tasks.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
      return { ...state, tasks: updatedTasks1 };

    case DELETE_TODO:
      const updatedTasksAfterDelete = state.tasks.filter(
        (todo) => todo._id !== action.payload._id
      );
      return { ...state, tasks: updatedTasksAfterDelete };

    case TOGGLE_THEME:
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };

    default:
      return state;
  }
};
