import React from 'react'
import { Link } from 'react-scroll'
import './Header.css'

function Header() {

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        scrollToSection(selectedValue);
      };
    
      const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
      <div className="header">
          <div className="header_left">
              
              <h1>Madelyn <span>Torff</span></h1>
          </div>
  
          <div className='header_right'>
              <Link to="about" smooth={true} duration={500}>
                  <h4>About Me</h4>
              </Link>
             
              <Link to="projects" smooth={true} duration={500}>
                  <h4>Projects</h4>
              </Link>
              
              <Link to="contact" smooth={true} duration={500}>
                  <h4 ><button className="header_rightButton">Contact</button></h4>
              </Link>
              
          </div>
         
          <select className='header-right-select' onChange={handleSelectChange}>
            <option value="about">About Me</option>
            
            <option value="projects">Projects</option>
           
            <option value="contact">Contact</option>
         </select>

      
        
      </div>
    )
  }
  
  export default Header