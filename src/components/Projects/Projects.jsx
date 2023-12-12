import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="title">
        <div className="cname">Projects -</div>
        <div className="project-names">
          <div className="project">
            <img src="Portfolio.jpg" alt="" />
          </div>
          <div className="project">
            <img src="BLOGapp.webp" alt="" />
          </div>
          <div className="project">
            <img src="Farmbank.webp" alt="" />
          </div>
          <div className="project">
            <img src="URL-shortener.png" alt="" />
          </div>
          <div className="project">
            <img src="QR-generator.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
