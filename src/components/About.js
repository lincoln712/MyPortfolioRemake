import React from 'react';
import my_resume from './docs/resume.pdf';

function About(){

  return (
    <div id="about" className="about" style={{textAlign:"center"}}>
				<div className="container mb-4">
					<div className="col-12 text-center">
						<h3 className="title">About</h3>
						<hr className="line"/>

						<p>
							Hey there, I'm Lincoln, I'm a confident junior Web Developer as well as a knowledge hunter, passionate for learning new things, chiefly if the subject was completely new and unknown for me. My long term goal in life is to learn and get all the knowledge and creativity in this universe, a challenge that's totally thrilling and boggles my mind on jubilation. I've got in the computer universe mainly because I was interested in organizing an unsurmountable amount of data. The question over how to structure data properly and in a comprehensible way always caught my interest, the thought process in order to come up with a scalable solution is also fascinating.<br/><br/>

							Ultimately about me, it's that I'm a broad-minded person, with huge objectives and passionate for unraveling a brand new knowledge.<br/>

							<br/>Self-improvement is one of the most valuable keys towards the Evolution!
						</p>

						 <a className="btn btn-primary text-capitalize btn-resume" href={my_resume} target="_blank">resume</a>
					</div>
				</div>
    </div>
  )
}


export default About;