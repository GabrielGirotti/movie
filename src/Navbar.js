import React, { useState } from 'react';
import './Navbar.css';
import { HashLink as Link1 } from 'react-router-hash-link';



function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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
        
    
       

    


        



            <ul className={isMobile? 'nav-links-mobile' : 'nav-links'} onClick={()=> setIsMobile(false)}>
            
                <Link1 to='#originals' className='originals'>
                    <li>Originals</li>
                </Link1>
                <Link1 to='#trending' className='trending'>
                    <li>Trending</li>
                </Link1>
                <Link1 to='#toprate' className='toprate'>
                    <li>Top Rate</li>
                </Link1>
                <Link1 to='#mylist' className='mylist'>
                    <li>My List</li>
                </Link1>
            </ul>
 
            <button className='mobile-menu-icon' onClick={()=> setIsMobile(!isMobile)}>
            {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
        </button>


    </nav>
  )
}



export default Navbar



