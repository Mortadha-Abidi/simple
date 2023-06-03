import React from 'react'
import '../component/navabr.css'
import {FaBars} from "react-icons/fa"
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const toggleMenu = () => {
 
      setIsMenuOpen(!isMenuOpen);
  
   
    
  };

  
  
 
  return (
       
            <nav className='container'>
                <div className='logo'>
                <Link to="/" ><img src="https://wp.shsarker.xyz/dora/wp-content/themes/dora/assets/images/logo.png" alt="logo"/></Link>
                </div>
                 
               
                  <ul className={`nav ${isMenuOpen ? 'open' :"" } `} >
                    
                  <li><NavLink  to="/" >  Home</NavLink></li>
                 <li> <NavLink  to="/skills">  Skills</NavLink></li>
                 <li> <NavLink to="/projects">   Project</NavLink></li>
                 <li> <NavLink to="/contact" >contact</NavLink></li>
                  </ul>
                
                <div className='menu' onClick={toggleMenu} >
                <FaBars/>
                </div>
       
            </nav>
      
    )
}
