import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUserNinja, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

import './navbar.scss'

function Navbar() {

  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    console.log(`showMenu = ${showMenu}`);
  });

  return (
    <nav className={showMenu ? "navbar clearfix active" : "navbar clearfix"}>
      <Link className="menu-brand" to="/">TODO</Link>
      <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="menu-item">
        <Link to="/"><FaHome/> <span>Home</span></Link>
        <Link to="/about"><FaInfoCircle /> <span>About</span></Link>
        <Link to="/author"><FaUserNinja /> <span>Author</span></Link>
        <Link to="/signin"><FaSignInAlt /> <span>SignIn</span></Link>
        <Link to="/signup"><FaUserPlus /> <span>SignUp</span></Link>
      </div>
    </nav>
  )
}

export default Navbar;