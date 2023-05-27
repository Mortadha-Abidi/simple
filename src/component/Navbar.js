import React from 'react'
import '../component/navabr.css'
import {FaBars} from "react-icons/fa"
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
    return (
       
            <div className='container'>
                <div className='logo'>
                <Link to="/" ><img src="https://wp.shsarker.xyz/dora/wp-content/themes/dora/assets/images/logo.png" alt="logo"/></Link>
                </div>
                 <div className='menu' onClick={handleMenuClick} >
                <FaBars/>
                </div>
                <div className='nav'>
                <ul className={`navigation ${isMenuOpen ? "open" : ""}`}>
                  <NavLink  to="/">  <li >Home</li></NavLink>
                  <NavLink to="/skills">  <li>Skills</li></NavLink>
                  <NavLink to="/projects">   <li>Project</li></NavLink>
                  <NavLink to="/contact"><li>contact</li></NavLink> 
                </ul>
               
                </div>
                
            </div>
      
    )
}
