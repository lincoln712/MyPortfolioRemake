import React from 'react';

function Footer(){

  return (
      <footer id="contact" className="footer" id="contact">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="contact-info text-center">
								<h3 className="titleFooter">contact info</h3>
								<p>lincolntheproud@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center">
					<a href="https://github.com/lincoln712" target="_blank"><i className="fab fa-github"></i></a>
					<hr className="socket"/>
					<strong>&copy; <span id="year">2020</span></strong>
				</div>
			</footer>
  )
}


export default Footer;