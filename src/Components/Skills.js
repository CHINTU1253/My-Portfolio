import React from 'react';
import './Skills.css';
import { Link } from 'react-router-dom';

const Skills = () =>
    {
        return(
            <div className='Skills'>
                <Link to = "/" className='Return'>Home</Link>
                <h1> Skills</h1>
                <h2> Front-End Development:</h2>
                <ul>
                    <li>Languages & Frameworks: JavaScript, TypeScript, HTML5, CSS3, ReactJS, Angular, Bootstrap, Tailwind CSS</li>
                    <li>Version Control: Git, GitHub</li>
                    <li> Build Tools: Webpack, Babel, NPM, Yarn </li>
                    <li>Responsive Design: CSS Flexbox, Grid, Media Queries</li>

                </ul>
                <h2> Back-End Development:</h2>
                <ul>
                    <li>Languages: Java (Java 8 and 11), Python, Node.js, C#</li>
                    <li>Frameworks: Spring Boot, Spring MVC, ASP.NET Core, Express.js, Hibernate (JPA)</li>
                    <li>Microservices: RESTful API Design, OAuth 2.0, OpenAPI/Swagger, Docker, Kubernetes, AWS Lambda</li>
                    <li>Database: SQL (MySQL, Oracle, SQL Server), NoSQL (MongoDB, Cassandra)</li>
                </ul>
                <h2> Cloud & DevOps:</h2>
                <ul>
                    <li> Cloud Providers: AWS (EC2, S3, ELB, IAM, Route53), Azure, Google Cloud Platform (GCP) </li>
                    <li>CI/CD Pipelines: Jenkins</li>
                    <li>Containerization & Orchestration: Docker, Kubernetes, OpenShift</li>
                    <li>Infrastructure as Code: Terraform, CloudFormation</li>


                </ul>
                <h2>Testing & Automation:</h2>
                <ul>
                    <li>Testing Frameworks: JUnit, Mockito, Jasmine, Karma, Selenium</li>
                    <li>Design Patterns: MVC, Singleton</li>
                   <li>Agile Methodologies: Scrum, TDD, BDD, Pair Programming</li>

                </ul>
        
                
            </div>
        );
    };

export default Skills;