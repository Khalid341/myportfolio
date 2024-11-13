import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Graduation Project</h3>
          <p>Developed a platform for education and care for children and students from primary to secondary school</p>
          <a href="https://github.com/Khalid341/Graduation-Project-Care-" target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Note App</h3>
          <p>Note-taking</p>
          <a href="https://github.com/Khalid341/Note-App-Flutter" target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Flutter sqlite</h3>
          <p>App use sqlite operation</p>
          <a href="https://github.com/Khalid341/flutter_sqlite_example" target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Vocabulary Learn Any Time</h3>
          <p>App to learn English by scheduling words at the time you want to receive a notification</p>
          <a href="https://github.com/Khalid341/Vocabulary-Learn-Any-Time" target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
        </div>
      </div>
      <div className="more-projects">
        <a href="https://github.com/Khalid341" target="_blank" rel="noopener noreferrer" className="btn-more">More Projects on GitHub</a>
      </div>
    </section>
  );
}

export default Projects;
