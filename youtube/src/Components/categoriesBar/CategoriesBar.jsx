import React, { useState } from "react";
import './categoriesBar.scss';
const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];

export default function CategoriesBar() {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => {
        return (
          <span
            onClick={() => handleClick(value)}
            key={i}
            className={activeElement === value ? "active" : ""}
          >
            {value}
          </span>
        );
      })}
    </div>
  );
}

