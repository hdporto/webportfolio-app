import React from "react";
import djangoProject from "../img/djangohome.png";
import dormitoryProject from "../img/dormitoryjava.png";
import javascriptProject from "../img/javascriptProject.png";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>JavaScript Dormitory Collaborative Project</h3>
          <img
            src={javascriptProject}
            alt="JavaScript Dormitory Collaborative Project"
            className="project-img"
          />
        </div>
        <div className="project-item">
          <h3>Java Dormitory Project</h3>
          <img
            src={dormitoryProject}
            alt="Java Dormitory Project"
            className="project-img"
          />
        </div>
        <div className="project-item">
          <h3>Django Inventory App with Charts</h3>
          <img
            src={djangoProject}
            alt="Django Inventory App with Charts"
            className="project-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
