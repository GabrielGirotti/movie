import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
        <img className='navbar__logo' src='https://i.ibb.co/DWxk6bD/qbs.png' alt='QBs Logo' />
        <div className='navbar__link'>
            <ul>
                <li>Originals</li>
                <li>Trending</li>
                <li>Top Rate</li>
                <li>My List</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar