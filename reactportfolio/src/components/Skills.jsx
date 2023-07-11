// components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section className="skill-list" id="skill">
      <h1 className="subtitle">My <span>Skills</span></h1>
      <div className="skills-container">
        <div className="skill">
          <img src="html.png" alt="" />
          <h3>HTML</h3>
        </div>
        <div className="skill">
          <img src="css.png" alt="" />
          <h3>CSS</h3>
        </div>
        <div className="skill">
          <img src="javascript.png" alt="" />
          <h3>JavaScript</h3>
        </div>
        {/* Add the remaining skills */}
      </div>
    </section>
  );
}

export default Skills;
