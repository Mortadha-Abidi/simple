import React from 'react'
import '../component/navabr.css'
import {FaBars} from "react-icons/fa"
export const Navbar = () => {
    return (
       
            <div className='container'>
                <div className='logo'>
                <h1>logo</h1>
                </div>
                <div className='navigation'>
                <ul className='nav-links'>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Project</li>
                    <li>contact</li>
                </ul>
                <div>
                <FaBars/>
                </div>
                </div>
            </div>
      
    )
}
