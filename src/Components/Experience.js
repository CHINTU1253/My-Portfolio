import React from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';

const Experience = () =>
    {
        return(
           
            <div className='Experience'>
                 
                <Link to = "/" className='Return'>Home</Link>
            
                <h1> Experience:</h1> 
                <div>
                <h2> LPL Financial  (Feb 2023 - Jun 2024) </h2>
                <h2> Full Stack Developer</h2>
                <h2> Roles and Responsiblities: </h2>
<ul>
 <li>Involved in Requirements gathering, Analysis, Design, Development and Testing of application using AGILE methodology 
(SCRUM) in a test-driven development (TDD) approach. </li>
 <li>Built Components using Angular 14 and worked on Angular directives. Implemented lazy loading and Dynamic loading in the 
Angular routers. Worked on Typescript for building the code. </li>
<li>Worked with unit testing of Angular applications using Jasmine and Karma and performed end to end testing.</li> 
<li>Strong experience on Devops essential tools like Kubernetes, GIT, Jenkins, Ant, Maven, and deployed/managed applications 
to OpenShift and managed cloud services in Azure and OpenShift.</li> 
<li>Implemented HTTP requests using RxJS Observable library to handle multiple values over time.</li> 
<li>Developed prototype and project layout skeletons using Angular, HTML5, and CSS3.</li> 
<li>Used tailwind CSS and material UI for building user interfaces and ensure consistency and responsiveness across different 
devices and screen sizes.</li> 
<li>Implemented Microservices into existing system architecture. Developed Microservices business components and RESTful 
service endpoints using Spring Boot.</li>  
<li>Worked on Java 8 Lambda expressions and Pipelines, Streams.</li> 
<li>Worked on Angular various versions.</li>   
 </ul>

 <h2> Cognizant (Jan 2022 - July 2022)  </h2>
<h2> Java Developer</h2>
<h2> Roles and Responsiblities: </h2>
<ul> 
    <li> Worked on server-side web applications using Node.js and involved in Construction of UI using JQuery, ReactJS, Next.JS, 
    Bootstrap and JavaScript</li>
    <li> Attended daily scrum meetings and worked in an Agile environment. </li>
    <li> Designed and developed the websites using HTML, CSS3, JAVASCRIPT, REACT </li>
    <li> Architected and implement REST API interfaces using JavaScript and Node.js </li>
    <li> Developed Single Page Web Application with React.js, Redux, Express.js, Node.js, REST API, and MongoDB. </li>
    <li> Designed responsive UI pages using HTML5, CSS, JavaScript, Vue.js, and react-bootstrap. </li>
    <li> Used Mongoose to write CRUD operations for retrieving and updating data. </li>
    <li> Used GIT as version control tool.</li>
    <li> Participated in Agile & TDD methodology for application development & used JIRA as project management tool. </li>
    <li> Used React, JavaScript, jQuery to create Controllers to handle events triggered by clients and send request to server. </li>
</ul>
            </div>
            </div>
            
        );
    };

export default Experience;    