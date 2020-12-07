import React from 'react';
import Project from './Project';

function ProjectList({projects}){

  return (
      <div className="project-list">
        <div className="row">
          {projects.map((project,i)=>(
              <Project key={i} project={project} index={i+1}/>
          ))}

        </div>
      </div>
  );
}


export default ProjectList;