import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Links from './Components/Links';
import About from './Components/About';


function App(){
return(
     <Router>
      <div>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/Projects" element = {<Projects/>}/>
          <Route path="/Skills" element = {<Skills/>}/>
          <Route path="/Experience" element = {<Experience/>}/>
          <Route path="/Links" element = {<Links/>}/>
          <Route path="/About" element = {<About/>}/>
        </Routes>
      </div>
     </Router>

);

}
export default App;