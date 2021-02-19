import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
        <div className="navbar__brand">
            <div className="navbar__logo">JV</div>
            <h2 className='navbar__name'>Joe Vasquez</h2>
        </div>
        <ul>
            <li>About</li>
            <li>Resume</li>
        </ul>
        </div>
    ) 
}

export default Navbar
