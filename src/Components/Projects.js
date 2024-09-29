import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () =>
    {
        return(
            <div className='Projects'>
                <Link to = "/" className='Return'>Home</Link>
                
                <h1> Projects </h1>
                <h3> Online Learning Management System(OLMS): </h3>
                <ul>
                  <li>Developed the backend architecture and APIs for an online learning management system (LMS), utilizing technologies like Spring Boot and MySQL to handle user authentication, course management, and content delivery.</li>
                  <li>Implemented features such as user enrollment, progress tracking, and assessment functionalities, ensuring seamless integration with the frontend components for a cohesive user experience.  </li>
                  <li>  Integrated third-party tools and services, such as payment gateways and analytics platforms, to enhance the functionality and performance of the LMS, while ensuring data security and compliance with industry standards </li>
                    </ul> 
         
                    <h3> Finding WheelChair Accessible Locations: </h3>
                <ul>
                    <li> Spearheaded the development of a robust backend system using technologies like wordpress and Mysql, facilitating the management of wheelchair-accessible locations, including data storage, retrieval, andmanipulation.</li>
                    <li>Implemented features such as geolocation services, search filters, and user authentication, enhancingthe accessibility and usability of the platform for users seeking wheelchair-friendly locations and relevant content. </li> 

                    </ul>
                    
                
            </div>
        );
    };

export default Projects;    