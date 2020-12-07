import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import ProjectSection from './components/ProjectSection';
import About from './components/About';
import Footer from './components/Footer';

import project1Image from './components/img/project1.png';
import project2Image from './components/img/project2.png';

function App() {

  const [projects,setProjects] = useState([
    {
      title:"Single Player Tic Tac Toe Game",

      imageUrl:project1Image,

      runUrl: "https://thegreatone.netlify.app/",

      sourceCodeUrl: "https://github.com/lincoln712/ticTacToeNewTry",

      description: "This project is approaching about the classic <strong>tic tac toe</strong> game, it's built-in <strong>HTML,CSS</strong> and <strong>JS</strong>,always it's in updating process and soon it will offer the player vs non-player."
    },
    {
      title:"Lincoln's Bootcamp",
      
      imageUrl:project2Image,

      runUrl: "https://llbootcamp.netlify.app/",

      sourceCodeUrl: "https://github.com/lincoln712/myBootcamp",

      description: "This project is about a nice-looking web page that which I call as Lord Lincoln bootstrap,(perphaps a daydream about what can get it be in a far future).It's built-in <strong>HTML,CSS</strong> and <strong>JS</strong>."
    }
  ]);

  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <ProjectSection projects={projects}/>
        <About/>
        <Footer/>
    </div>
  );
}

export default App;
