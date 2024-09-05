import React from 'react';
import Navbar from '../src/components/navbar';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Pastwork from './components/past-work';
import Education from './components/education';
import Manuscripts from './components/manuscripts';
import CurrentWork from './components/current-work';


function App() {
  return (
    <div className="App">   
        <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="currentWork">
        <CurrentWork />
      </div>
      <div id="manuscripts">
        <Manuscripts />
      </div>
      <div id = "current-work">
        <Education />
      </div>
      <div id="past-work">
        <Pastwork />
      </div>

      
      
      
    </div>
  );
}

export default App;
