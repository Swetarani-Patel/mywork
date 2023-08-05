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
import img9 from './../Assets/starrating.png';
import img10 from './../Assets/totoo.png'

const projectsData = [

  {
    title: 'Travel and Tour',
    image: img8,
    description: 'Experience the world like never before with our Travel and Tour Website. Explore, plan, and make unforgettable memories with our Travel and Tour Website."',
    techStack: [img2, img3, img7],
    aLink:"https://github.com/Swetarani-Patel/mywork/tree/main/travelapp",
    liveLink:"https://dynamic-chaja-918910.netlify.app/"
  },

  {
    title: 'Plant Order',
    image: img4,
    description: 'PlantOrder is an online platform for ordering a wide variety of plants. Discover the perfect green companions to enhance your living spaces and create a tranquil environment.',
    techStack: [img1, img2, img3],
    aLink:"https://github.com/saurabhWakde/-Plant_Order_Application",
    liveLink:"https://plant-order-website.vercel.app/"
  },
  {
    title: 'Overstock',
    image: img5,
    description: 'Overstock is a user-friendly platform for discounted, high-quality furniture with intuitive search and seamless checkout.',
    techStack: [img1, img2, img3],
    aLink:"https://github.com/RapidKS/OverStock_Project",
    liveLink:"https://radiant-nougat-5767ba.netlify.app/index.html"
  },
  {
    title: 'Birthday App',
    image: img6,
    description: 'The Birthday Reminder App helps you stay organized by tracking upcoming birthdays. Never miss a special day with ease.',
    techStack: [img2, img3, img7],
    aLink:"https://github.com/Swetarani-Patel/mywork/tree/main/birthdayrem",
    liveLink:"https://unique-wisp-0f2b9b.netlify.app/"
  },

  {
    title: 'Todo App',
    image: img10,
    description: 'Interactive Todo list that updates in real-time with each addition, update, or deletion of a task.',
    techStack: [img2, img3, img7],
    aLink:"https://github.com/Swetarani-Patel/mywork/tree/main/reactTodo",
    liveLink:"https://github.com/Swetarani-Patel/mywork/tree/main/travelapp"
  },
  {
    title: 'Star Rating App',
    image: img9,
    description: ' Developed a React ratings app with login/logout, star ratings, and comment management.',
    techStack: [img2, img3, img7],
    aLink:"https://github.com/masai-course/swetarani_patel_pw12_122/tree/master/unit-6/sprint-2/day-2/assignments/starratingreact/masai-cp-problems-1947-1724-JXvefw-8ef1a5e88883f535e2c61c80868ca59d203ae78b",
    liveLink:"https://meek-sunburst-dc104b.netlify.app/"
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
                  <a href={project.aLink}><i className='bx bxl-github'> <FaGithub /> </i></a>
                  <a href={project.liveLink} id="live-btn"><i className='bx bx-world'> <BiWorld /> </i></a>
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
