import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";
import { switchTheme } from "../redux/action";

function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const toggleThemeHandler = () => {
    dispatch(switchTheme());
  };

  return (
    <div className={`navbar ${theme}`}>
      <span className="brand">Task Manager</span>
      <button className="theme-switcher" onClick={toggleThemeHandler}>
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
}

export default Navbar;
