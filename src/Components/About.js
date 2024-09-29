import React from 'react';
import { Link } from 'react-router-dom';
import  './About.css';

const About = () =>
    {
        return(
            <div className='about-me'> 
            <Link to = "/" className='Return'>Home</Link>
                <h1> About Me</h1>
                <p>
                Hello! All I am a passionate developer with a background in full-stack development, 
                experienced in building scalable applications and designing seamless user experiences. 
                I enjoy working with modern web technologies and I am always eager to learn new things.
                </p>
                
                <p>
                My expertise includes Java, JavaScript, React, Angular, and cloud platforms like AWS 
                and GCP. I love solving complex problems and making efficient and reliable solutions.
                </p>
                <p>
                When I'm not coding, I like to spend time reading tech blogs, contributing to open-source 
                projects, and exploring new frameworks and tools to stay updated with the latest trends.   
                </p>
            </div>
        );
    };

export default About;    