import React from 'react';
import { Link } from 'react-router-dom';
import './Links.css';

const Links = () =>
    {
        return(
            <div className='links-component'> 
            <Link to = "/" className='Return'>Home</Link>
                <h1>Links</h1>
                <p> Check out my LinkedIn and GitHub profiles for more details about my work and projects.</p>

                <div className='links-container'>
                    <a 
                     href='https://www.linkedin.com/in/achyuth-r-612694271/'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='link'
                     >
                        LinkedIn
                     </a>
                     <a 
                     href='https://github.com/CHINTU1253'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='link'
                     >
                        GitHub
                     </a>
                </div>
            </div>
        );
    };

export default Links;    