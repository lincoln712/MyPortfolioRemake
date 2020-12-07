import React from 'react';

function Navbar(){

  return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      
          <h1><a class="navbar-brand" href="#">Lincoln's Portfolio</a></h1>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav ml-auto">

                <li class="nav-item">
                  <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#project-section">Projects</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#about">About</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#contact">Contact</a>
                </li>
                
              </ul>

          </div>
    </nav>
  )
}


export default Navbar;