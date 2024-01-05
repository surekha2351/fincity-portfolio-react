
import React from 'react';
import { Element } from 'react-scroll';
import './Project.css';

const Project = ({ projects }) => {
  return (
    <Element className='projects-cont' id="projects">
      <h2 className='proj-heading'>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className='single-proj'>
          <div className='description-cont'>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="view-button">View Project</button>
            </a>
          </div>
         
          <img
            src={project.image}  
            alt={`Project ${index + 1}`}
            className={`image-size ${index % 2 === 0 ? 'order-reversed' : ''}`}
            placeholder='image'
          />
        </div>
      ))}
    </Element>
  );
}

export default Project;
