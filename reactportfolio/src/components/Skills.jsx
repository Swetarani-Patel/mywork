import React from 'react';
import img1 from './../Assets/html.png';
import img2 from './../Assets/css.png';
import img3 from './../Assets/javascript.png';
import img4 from './../Assets/java.png';
import img5 from './../Assets/react.png';
import img6 from './../Assets/redux.png';
import img7 from './../Assets/chakra-ui.png';
import img8 from './../Assets/mongodb.png';
import img9 from './../Assets/node-js.png';
import img10 from './../Assets/github_git_hub_logo_icon_132878.png';
import img11 from './../Assets/bootstrap.png';
import img12 from './../Assets/express.png';

const skillsData = [
  {
    title: 'HTML',
    image: img1,
  },
  {
    title: 'CSS',
    image: img2,
  },
  {
    title: 'JavaScript',
    image: img3,
  },
  {
    title: 'Java',
    image: img4,
  },
  {
    title: 'React.js',
    image: img5,
  },
  {
    title: 'Redux',
    image: img6,
  },
  {
    title: 'Chakra UI',
    image: img7,
  },
  {
    title: 'Mongo DB',
    image: img8,
  },
  {
    title: 'Node.js',
    image: img9,
  },
  {
    title: 'Github',
    image: img10,
  },
  {
    title: 'Bootstrap',
    image: img11,
  },
  {
    title: 'Express.js',
    image: img12,
  },
];
const Skills = () => {
  return (
    <section className="skill-list" id="skill">
      <h1 className="subtitle">My <span>Skills</span></h1>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.image} alt={skill.title} />
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
