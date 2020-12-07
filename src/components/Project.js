import React from 'react';
import Modal from './Modal';

function Project({project,index}){

  return (
      <div className="col-md-6 text-center">

        <div className="card" style={{width:"50%",margin:"0 auto"}}>
          <a href={project.imageUrl} target="_blank">
            <img className="card-img-top" src={project.imageUrl} alt="Card image cap"/>
          </a>
          <div className="card-body">
            <a href={project.runUrl} className="btn btn-success mt-1" target="_blank">Run</a>

            <a href={project.sourceCodeUrl} className="btn btn-primary mt-1" target="_blank">Source Code</a>

            <button type="button" class="btn btn-primary mt-1 btn-info" data-toggle="modal" data-target={"#project"+index}>Description</button>
          </div>
      </div>
      
      <Modal project={project} index={index}/>
    </div>
  );
}


export default Project;