// src/components/Skills.js
import React from 'react';
import htmlIcon from '../images/html.png';
import cssIcon from '../images/css.png';
import javaIcon from '../images/java.png';
import pythonIcon from '../images/python.png';
import sqlIcon from '../images/sql.png';
import flutterIcon from '../images/flutter.svg';



function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div>
          <img src={htmlIcon} alt="HTML" className="icon" />
          <p>HTML</p>
        </div>
        <div>
          <img src={cssIcon} alt="CSS" className="icon" />
          <p>CSS</p>
        </div>
        <div>
          <img src={javaIcon} alt="Java" className="icon" />
          <p>Java</p>
        </div>
        <div>
          <img src={pythonIcon} alt="Python" className="icon" />
          <p>Python</p>
        </div>
        <div>
          <img src={sqlIcon} alt="SQL" className="icon" />
          <p>SQL</p>
        </div>
        <div>
          <img src={flutterIcon} alt="Flutter" className="icon" />
          <p>Flutter</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
