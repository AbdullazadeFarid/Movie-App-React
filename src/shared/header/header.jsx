

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './header.css'


export default function Header({ logo, title, subtitle, onSearchChange }) {
  const [activeLink, setActiveLink] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleNavLinkClick = (index) => {
    setActiveLink(index);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value); // Передаем значение в родительский компонент
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

<div className='header_input'>
      <input className='inp' placeholder="Search for movies..." type="text" name="text" id="text" value={searchTerm} onChange={handleInputChange} />

</div>
    </div>
  );
}

