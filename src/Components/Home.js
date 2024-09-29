import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ()  => {
    return (
      
        <div className='home'>
          

            <h1> Welcome to My Portfolio </h1>
            
              
            <div className="right-sidebar">
        
        <div>
          <Link to="/projects">Projects</Link>
        </div>

        <div>
          <Link to="/skills">Skills</Link>
        </div>

        <div>
          <Link to="/Experience">Experience</Link>
        </div>

        <div>
          <Link to="/Links">Links</Link>
        </div>

        <div>
          <Link to="/About">About Me</Link>
        </div>
      </div>
      <div className='name'>
            <h1> Achyuth R</h1>
            <p> Full Stack Developer </p>
          </div>
          
         <footer className='footer'>
            <p> @ 2024 My Portfolio. All Rights Reserved.</p>
         </footer>
           
        </div>
        

    );

};

export default Home;