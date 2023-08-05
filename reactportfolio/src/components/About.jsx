import React from 'react';
import img from './../Assets/sweet.png';
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <div className="outer2">
          <span></span>
          <span></span>
          <img className="image" src={img} alt="sweta" />
        </div>
      </div>
      <div className="about-text">
        <h2>About <span>Me</span></h2>
        <h4>Full Stack Web Developer</h4>
        <p>
          Hey there! I'm Swetarani Patel, a passionate full stack web developer specializing in HTML, CSS, JavaScript, React, and Node.js. I create dynamic user interfaces and pixel-perfect layouts that integrate with robust back-end functionality.
          With extensive experience in front-end development, I utilize React to build responsive and scalable applications. On the server side, I work with Node.js to develop powerful back-end solutions, including RESTful APIs using Express.js and databases like MongoDB and MySQL.
        </p>
        <a download href={require("./../Assets/SWETARANI PATEL (1).pdf")} className="btn-box">
  Download CV
</a>
      </div>
    </section>
  );
}

export default About;
