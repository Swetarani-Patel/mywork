import React from "react";
import Navbar from "./Components/Navbar";
import Task from "./Components/Task";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Task />
    </div>
  );
}

export default App;
