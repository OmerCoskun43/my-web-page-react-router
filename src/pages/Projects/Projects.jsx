import React from "react";
import "./Projects.scss";
import img1 from "../../img/project-1.jpg";
import img2 from "../../img/project-2.jpg";
import img3 from "../../img/project-3.jpg";
import img4 from "../../img/project-4.jpg";
import img5 from "../../img/project-5.jpg";
import img6 from "../../img/project-6.jpg";

const Projects = () => {
  return (
    <div className="projects__wrapper">
      <h3> MY PROJECTS</h3>
      <div className="projects">
        <div className="projects__items">
          <div className="projects__item">
            <img src={img1} alt="img1" />
          </div>
          <div className="projects__item">
            <img src={img2} alt="img2" />
          </div>
          <div className="projects__item">
            <img src={img3} alt="img3" />
          </div>
          <div className="projects__item">
            <img src={img6} alt="img6" />
          </div>
          <div className="projects__item">
            <img src={img5} alt="img5" />
          </div>
          <div className="projects__item">
            <img src={img4} alt="img4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
