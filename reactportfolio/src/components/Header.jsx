import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const handleMenuClick = () => {
    document.querySelector(".navbar").classList.add("nav-show");
    document.querySelector(".bx-menu").classList.add("hide-menu");
    document.querySelector(".fa-xmark").classList.add("show-cross");
  };

  const handleCrossClick = () => {
    document.querySelector(".navbar").classList.remove("nav-show");
    document.querySelector(".bx-menu").classList.remove("hide-menu");
    document.querySelector(".fa-xmark").classList.remove("show-cross");
  };

  const handleNavbarClick = () => {
    document.querySelector(".navbar").classList.remove("nav-show");
    document.querySelector(".bx-menu").classList.remove("hide-menu");
    document.querySelector(".fa-xmark").classList.remove("show-cross");
  };

  return (
    <header className="header">
      <a href="#" className="logo">Portfo<span id="io">lio.</span></a>
      <FiMenu className="bx bx-menu" onClick={handleMenuClick} />
      <FiX className="fa-solid fa-xmark" onClick={handleCrossClick} />
      <nav className="navbar" onClick={handleNavbarClick}>
        <a href="#home" style={{ '--i': 1 }}>Home</a>
        <a href="#about" style={{ '--i': 2 }}>About</a>
        <a href="#skill" style={{ '--i': 3 }}>Skill</a>
        <a href="#project" style={{ '--i': 4 }}>Projects</a>
        <a href="#Contact" style={{ '--i': 5 }}>Contact</a>
        <a href={require("./../Assets/SWETARANI PATEL (1).pdf")} target="_blank" style={{ '--i': 6 }}>Resume</a>
      </nav>
    </header>
  );
}

export default Header;
