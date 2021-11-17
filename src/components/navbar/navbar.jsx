import { Link } from 'react-router-dom';

import './navbar.scss'

function Navbar() {
  return (
    <nav className="navbar">
      <input type="checkbox" id="menu-chk" />
      <ul>
        <li className="brand">
          <Link to="/">TODO</Link>
        </li>
        <li className="menu-btn">
          <label htmlFor="menu-chk" className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </label>
        </li>
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="menu-item">
          <Link to="/author">Author</Link>
        </li>
        <li className="menu-item menu-sec">
          <Link to="/signin">Signin</Link>
        </li>
        <li className="menu-item menu-sec">
          <Link to="/signin">Signout</Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar;