import React from 'react';
import ProjectList from './ProjectList';

function ProjectSection({projects}){

  return (
      <div id="project-section" className="projects-section jumbotron jumbotron-fluid">
          <h1>Projects</h1>
          
          <div className="container">

             <ProjectList projects={projects}/>
          </div>
      </div>
  );
}


export default ProjectSection;