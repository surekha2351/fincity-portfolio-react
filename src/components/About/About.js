import React from 'react'
import {Link} from 'react-scroll'
import './About.css'

function About() {
  return (
    <div className='topContent' id="about">
        
        <div className="topContent_container">
            <p className='para'>UI/UX DESIGNER</p>
            <h1>Hello, my name is Madelyn Torff</h1>
            <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
          
            <button className='linkedinButton'>LinkedIn</button>
           
            <Link to="projects" smooth={true} duration={500}>
                <button className="projectsButton">Projects</button>
            </Link>
        </div>
        <div>
        <img src="https://res.cloudinary.com/drdjty87p/image/upload/v1704384129/image_hczd69.png" alt="" className="image"/>
        </div>
    </div>
  )
}

export default About