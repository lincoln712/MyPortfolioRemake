import React from 'react';

function Modal({project,index}){

  return (
		  <div className="modal fade" id={"project"+index} tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      
								<div className="modal-dialog" role="document">
								<div className="modal-content">

                    <div className="modal-header">
                      <h5 className="modal-title text-capitalize" id="exampleModalLongTitle">{project.title}</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div className="modal-body">
                      <p dangerouslySetInnerHTML={{__html: project.description}}/>
									  </div>
							
								</div>
							</div>
		    </div>
  )
}


export default Modal;