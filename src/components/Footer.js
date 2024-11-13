// src/components/Footer.js
import React from 'react';
import './App.css';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo1.png'; // Replace with your actual logo path

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <h3>Khalid Alharbi</h3>
        </div>

        <div className="footer-links">
          <a href="tel:+966510038905" className="footer-link"><FaPhone /></a>
          <a href="mailto:alhrbi341@gmail.com" className="footer-link"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/khalid-alharbi-91533117b" target="_blank" rel="noopener noreferrer" className="footer-link"><FaLinkedin /></a>
          <a href="https://github.com/Khalid341" target="_blank" rel="noopener noreferrer" className="footer-link"><FaGithub /></a>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2024 Khalid Alharbi. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
