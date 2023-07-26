import Timer from "./Component/Timer";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [showTime, setShowTime] = useState(true);
  return (
    <div className="App">
      {showTime ? <Timer /> : ""}
      <div></div>
      <button onClick={() => setShowTime(!showTime)}>
        {showTime ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;
