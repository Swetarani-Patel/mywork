// components/Projects.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import img1 from './../Assets/html.png';
import img2 from './../Assets/css.png';
import img3 from './../Assets/javascript.png';
import img4 from './../Assets/plantorder.png';
import img5 from './../Assets/overstock1.png';
import img6 from './../Assets/birthday.png';
import img7 from './../Assets/react.png';
import img8 from './../Assets/travelapp2.png';

const projectsData = [

  {
    title: 'Travel and Tour',
    image: img8,
    description: 'Experience the world like never before with our Travel and Tour Website. Explore, plan, and make unforgettable memories with our Travel and Tour Website."',
    techStack: [img2, img3, img7]
  },

  {
    title: 'Plant Order',
    image: img4,
    description: 'PlantOrder is an online platform for ordering a wide variety of plants. Discover the perfect green companions to enhance your living spaces and create a tranquil environment.',
    techStack: [img1, img2, img3]
  },
  {
    title: 'Overstock',
    image: img5,
    description: 'Overstock is a user-friendly platform for discounted, high-quality furniture with intuitive search and seamless checkout.',
    techStack: [img1, img2, img3]
  },
  {
    title: 'Birthday App',
    image: img6,
    description: 'The Birthday Reminder App helps you stay organized by tracking upcoming birthdays. Never miss a special day with ease.',
    techStack: [img2, img3, img7]
  },

  {
    title: 'Overstock',
    image: 'plantorder.png',
    description: 'Overstock is a user-friendly platform for discounted, high-quality furniture with intuitive search and seamless checkout.',
    techStack: [img1, img2, img3]
  },
  {
    title: 'Overstock',
    image: 'plantorder.png',
    description: 'Overstock is a user-friendly platform for discounted, high-quality furniture with intuitive search and seamless checkout.',
    techStack: [img1, img2, img3]
  },
  
];

const Projects = () => {
  return (
    <section className="project-list" id="project">
      <h1 className="subtitle">Recent <span>Projects</span></h1>
      <div className="project-container">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt="" />
            <div className="project-detail">
              <div className="heading">
                <h2>{project.title}</h2>
                <div>
                  <a href="#"><i className='bx bxl-github'> <FaGithub /> </i></a>
                  <a href="#" id="live-btn"><i className='bx bx-world'> <BiWorld /> </i></a>
                </div>
              </div>
              <p><span>{project.description}</span></p>
              <div id="tech-stack">
                {project.techStack.map((tech, index) => (
                  <img key={index} src={tech} alt="" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="#">See More &gt;&gt;</a>
    </section>
  );
}

export default Projects;
