// components/Home.js
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    const typed = new Typed('.text', {
      strings: ['Full Stack Web Developer', 'Problem Solver', 'Continuous Learner'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1 className="name">Swetarani Patel</h1>
        <h3>and I'm <span className="text"></span></h3>
        <div className="home-sci">
          <a href="https://www.linkedin.com/in/swetarani-patel-211697232/" target="_blank" style={{ '--i': 7 }}><FaLinkedin /></a>
          <a href="https://github.com/Swetarani-Patel" target="_blank" style={{ '--i': 8 }}><FaGithub /></a>
          <a href="mailto:swetaranipatel7@gmail.com" style={{ '--i': 9 }}><FaEnvelope /></a>
          <a href="https://www.instagram.com/swetaaapatel/" target="_blank" style={{ '--i': 10 }}><FaInstagram /></a>
          <a href="https://wa.me/9937610707" target="_blank" style={{ '--i': 11 }}><FaWhatsapp /></a>
        </div>
        <a href="#about" className="btn-box">More About Me</a>
      </div>
      <div className="outer">
        <span></span>
        <span></span>
        <img className="image" src="sweet.png" alt="" />
      </div>
    </section>
  );
}

export default Home;
