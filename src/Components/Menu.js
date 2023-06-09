import React, { useState } from 'react'
import '../style.css'
const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return (
      <div className="hamburger-menu">
          
          <div className="hamburger" onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        
        {menuOpen && (
          <ul className="menu">
            <li>Home</li><hr className='menu-line'/>
            <li>Add Product</li><hr className='menu-line'/>
            <li>Update Product</li><hr className='menu-line'/>
            <li>Profile</li><hr className='menu-line'/>
            <li>LogOut</li>
          </ul>
        )}
      </div>
    )
}

export default Menu