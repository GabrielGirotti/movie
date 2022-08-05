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



/* CODIGO PARA RESOLVER ----------------------------

    const toggleButton = document.getElementsByClassName('toggle-button');
    const navBarLink = document.getElementsByClassName('navbar__link');
    
    toggleButton.addEventListener('click', () =>{
        navBarLink.classList.toggle('active');
    }
    );

    */






  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
        <img className='navbar__logo' src='https://i.ibb.co/DWxk6bD/qbs.png' alt='QBs Logo' />
        
        
        <a href='#' className='toggle-button'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </a>


        
        <div className='navbar__link'>


            <ul>
                <li><a href='#originals'>Originals</a></li>
                <li><a href='#trending'>Trending</a></li>
                <li><a href='#toprate'>Top Rate</a></li>
                <li><a href='#'>My List</a></li>
            </ul>
        </div>



    </nav>
  )
}



export default Navbar




