// components/Projects.js
import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {BiWorld} from 'react-icons/bi'

const Projects = () => {
  return (
    <section className="project-list" id="project">
      <h1 className="subtitle">Recent <span>Projects</span></h1>
      <div className="project-container">
        <div className="project">
          <img src="plantorder.png" alt="" />
          <div className="project-detail">
            <div className="heading">
              <h2>Plant Order</h2>
              <div>
                <a href="#"><i className='bx bxl-github'> <FaGithub/> </i></a>
                <a href="#" id="live-btn"><i className='bx bx-world'> <BiWorld/> </i></a>
              </div>
            </div>
            <p><span>PlantOrder is an online platform for ordering a wide variety of plants.</span></p>
            <div id="tech-stack">
              <img src="html.png" alt="" />
              <img src="css.png" alt="" />
              <img src="javascript.png" alt="" />
            </div>
          </div>
        </div>

        <div className="project">
          <img src="plantorder.png" alt="" />
          <div className="project-detail">
            <div className="heading">
              <h2>Overstock</h2>
              <div>
                <a href="#"><i className='bx bxl-github'> <FaGithub/> </i></a>
                <a href="#" id="live-btn"><i className='bx bx-world'> <BiWorld/> </i></a>
              </div>
            </div>
            <p><span>Overstock is an user-friendly platform for discounted, high-quality furniture with intuitive search and seamless checkout.</span></p>
            <div id="tech-stack">
              <img src="html.png" alt="" />
              <img src="css.png" alt="" />
              <img src="javascript.png" alt="" />
            </div>
          </div>
        </div>

        <div className="project">
          <img src="plantorder.png" alt="" />
          <div className="project-detail">
            <div className="heading">
              <h2>Plant Order</h2>
              <div>
                <a href="#"><i className='bx bxl-github'> <FaGithub/> </i></a>
                <a href="#" id="live-btn"><i className='bx bx-world'> <BiWorld/> </i></a>
              </div>
            </div>
            <p><span>PlantOrder is an online platform for ordering a wide variety of plants.</span></p>
            <div id="tech-stack">
              <img src="html.png" alt="" />
              <img src="css.png" alt="" />
              <img src="javascript.png" alt="" />
            </div>
          </div>
        </div>

        <div className="project">
          <img src="plantorder.png" alt="" />
          <div className="project-detail">
            <div className="heading">
              <h2>Plant Order</h2>
              <div>
                <a href="#"><i className='bx bxl-github'> <FaGithub/> </i></a>
                <a href="#" id="live-btn"><i className='bx bx-world'> <BiWorld/> </i></a>
              </div>
            </div>
            <p><span>PlantOrder is an online platform for ordering a wide variety of plants.</span></p>
            <div id="tech-stack">
              <img src="html.png" alt="" />
              <img src="css.png" alt="" />
              <img src="javascript.png" alt="" />
            </div>
          </div>
        </div>

        <div className="project">
          <img src="plantorder.png" alt="" />
          <div className="project-detail">
            <div className="heading">
              <h2>Plant Order</h2>
              <div>
                <a href="#"><i className='bx bxl-github'> <FaGithub/> </i></a>
                <a href="#" id="live-btn"><i className='bx bx-world'> <BiWorld/> </i></a>
              </div>
            </div>
            <p><span>PlantOrder is an online platform for ordering a wide variety of plants.</span></p>
            <div id="tech-stack">
              <img src="html.png" alt="" />
              <img src="css.png" alt="" />
              <img src="javascript.png" alt="" />
            </div>
          </div>
        </div>

        <div className="project">
          <img src="plantorder.png" alt="" />
          <div className="project-detail">
            <div className="heading">
              <h2>Plant Order</h2>
              <div>
                <a href="#"><i className='bx bxl-github'> <FaGithub/> </i></a>
                <a href="#" id="live-btn"><i className='bx bx-world'> <BiWorld/> </i></a>
              </div>
            </div>
            <p><span>PlantOrder is an online platform for ordering a wide variety of plants.</span></p>
            <div id="tech-stack">
              <img src="html.png" alt="" />
              <img src="css.png" alt="" />
              <img src="javascript.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <a href="#">See More &gt;&gt;</a>
    </section>
  );
}

export default Projects;
