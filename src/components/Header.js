import React from 'react';
import logo from '../assets/logo1.png';
import './App.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
        <a href="#home">
  <img src={logo} alt="Khalid-Logo" />
    </a>

        </div>
        <nav className="navbar">
          <ul>
          <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
