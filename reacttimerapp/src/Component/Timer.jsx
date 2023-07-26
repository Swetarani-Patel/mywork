import React, { useState, useEffect, useRef } from "react";

const CustomTimer = () => {
  const [currentTimeValue, setCurrentTimeValue] = useState(null);
  const [fixedTimeValue, setFixedTimeValue] = useState(10);
  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    inputRef.current.focus();

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }

  function startCustomTimer() {
    if (!isRunning) {
      setIsRunning(true);
      clearInterval(timerRef.current);
      if (currentTimeValue === null) {
        setCurrentTimeValue(fixedTimeValue);
      }
      if (currentTimeValue === 0) {
        setCurrentTimeValue(fixedTimeValue);
      }
      timerRef.current = setInterval(() => {
        setCurrentTimeValue((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
  }

  function stopCustomTimer() {
    setIsRunning(false);
    clearInterval(timerRef.current);
  }

  function resetCustomTimer() {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setCurrentTimeValue(null);
    setFixedTimeValue(10);
  }

  function handleFixedTimeChange(e) {
    setIsRunning(false);
    if (currentTimeValue !== null) {
      setCurrentTimeValue(null);
    }
    setFixedTimeValue(parseInt(e.target.value));
  }

  return (
    <div className="timer-container">
      <input
        type="number"
        value={fixedTimeValue}
        onChange={handleFixedTimeChange}
        ref={inputRef}
        className="timer-input"
      />
      <br />
      <h1 className="timer-display">{formatTime(currentTimeValue)}</h1>
      <button className="timer-button" onClick={startCustomTimer}>
        START
      </button>
      <button className="timer-button" onClick={stopCustomTimer}>
        STOP
      </button>
      <button className="timer-button" onClick={resetCustomTimer}>
        RESET
      </button>
    </div>
  );
};

export default CustomTimer;
