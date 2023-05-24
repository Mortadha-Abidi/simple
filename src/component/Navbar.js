import React from 'react'
import '../component/navabr.css'
// import {FaBars} from "react-icons/fa"
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
    return (
       
            <div className='container'>
                <div className='logo'>
                <Link to="/" activeClassName="active"><h1>logo</h1></Link>
                </div>
                <div className='navigation'>
                <ul>
                  <NavLink to="/">  <li>Home</li></NavLink>
                  <NavLink to="/skills">  <li>Skills</li></NavLink>
                  <NavLink to="/projects">   <li>Project</li></NavLink>
                  <NavLink to="/contact"><li>contact</li></NavLink> 
                </ul>
               {/* <div>
                <FaBars/>
                </div> */}
                </div>
                 
            </div>
      
    )
}
