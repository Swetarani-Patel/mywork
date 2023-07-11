// components/Contact.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { BiSolidSend } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
const Contact = () => {
  return (
    <section className="contact" id="Contact">
      <div className="contact-text">
        <h2>Contact <span>Me</span></h2>
        <h4>Let's work Together</h4>
        <p>Thank you for visiting my portfolio! I'm excited to connect and collaborate with you. Whether you have a project in mind, a question, or just want to say hello, feel free to reach out to me using the contact details below. I look forward to hearing from you!</p>
        <div className="contact-list">
          <li><i className='bx bxs-send'> <BiSolidSend/> &nbsp;</i>swetaranipatel@gmail.com</li>
          <li><i className='bx bxs-phone'><BsFillTelephoneFill/> &nbsp;</i>+919937610707</li>
        </div>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/swetarani-patel-211697232/" target="_blank"><i className='bx bxl-linkedin-square' > <FaLinkedin /></i></a>
          <a href="https://github.com/Swetarani-Patel" target="_blank"><i className='bx bxl-github'> <FaGithub /></i></a>
          <a href="https://wa.me/9937610707" target="_blank"><i className='bx bxl-whatsapp' > <FaWhatsapp/></i></a>
          <a href="https://twitter.com/PatelSweta46105" target="_blank"><i className='bx bxl-twitter'><FaTwitter/> </i></a>
        </div>
      </div>
      <div className="contact-form">
        <form action="">
          <input type="text" placeholder="Enter Your Name" required />
          <input type="email" placeholder="Enter Your Email" required />
          <input type="text" placeholder="Enter Your Subject" />
          <textarea name="" id="" cols="40" rows="10" placeholder="Enter Your Message"></textarea>
          <input type="submit" value="Submit" className="send" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
