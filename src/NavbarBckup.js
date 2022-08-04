import React, { useState } from 'react'

function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>

    </nav>
  )
}

export default Navbar