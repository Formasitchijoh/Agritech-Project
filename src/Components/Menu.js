import React, { useState } from 'react'
import '../style.css'
import { Link } from 'react-router-dom';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return (
      <div className="hamburger-menu">
          <div className="hamburger" onClick={toggleMenu}>
            <hr className="hamburger-line"></hr>
            <hr className="hamburger-line"></hr>
            <hr className="hamburger-line"></hr>
          {/* <div className="hamburger-line">-----</div>
          <div className="hamburger-line">----</div>
          <div className="hamburger-line">-----</div> */}
        </div>
        
        {menuOpen && (
          <div className="menu">
           <li><Link  to="/"> Home</Link> </li><hr className='menu-line'/>
           <li> <Link  to="/SignUpPage">SignUp Page </Link></li><hr className='menu-line'/>
             <li> <Link  to="/BuyerPage">Add Product </Link></li><hr className='menu-line'/>
           <li> <Link  to="/UploadProductPage">Update Product </Link></li><hr className='menu-line'/>
          < li> <Link  to="/SignUpPage">LogOut </Link></li>
           
          {/* </div> */}
          
          </div>
        )}
      </div>
    )
}

export default Menu