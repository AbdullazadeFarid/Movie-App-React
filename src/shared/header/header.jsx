import React, { useState } from 'react'
import './header.css'
import { Link } from "react-router-dom";


export default function Header({logo , title ,  subtitle}) {
  const [activeLink, setActiveLink] = useState(0);

  const handleNavLinkClick = (index) => {
    setActiveLink(index);
  };





  return (
    <div className='header'>

      <div className='header_left'>

        <img className='header_img' src={logo} alt="" />
        <div className='header_desc'>
           <h2 className='header_title'>{title}</h2>
            <p className='header_subtitle'>{subtitle}</p>

        </div>
    </div>

    <div className='header_right'>
    <Link to="/" className={`link ${activeLink === 0 ? 'active' : ''}`} onClick={() => handleNavLinkClick(0)}>HOME</Link>
    <Link to="/populary" className={`link ${activeLink === 1 ? 'active' : ''}`} onClick={() => handleNavLinkClick(1)}>POPULARY</Link>





    </div>

    </div>
  )
}
