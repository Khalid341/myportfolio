// src/components/About.js
import React from 'react';
import backend from '../assets/backend.png';
import frontend from '../assets/frontend.png';
import appDevelopment from '../assets/android.png'; // Import the new icon
import './App.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        To obtain a full-time position as a Software Engineer, or any related position where my knowledge, skills, and abilities will be effectively utilized.
      </p>
      <div className="skills">
        <div>
          <img src={backend} alt="Backend Developer" className="icon" />
          <p>Backend Developer</p>
        </div>
        <div>
          <img src={frontend} alt="Frontend Developer" className="icon" />
          <p>Frontend Developer</p>
        </div>
        <div>
          <img src={appDevelopment} alt="Application Development" className="icon" /> {/* New skill */}
          <p>Application Development</p>
        </div>
      </div>
    </section>
  );
}

export default About;
