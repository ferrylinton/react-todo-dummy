import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUserNinja, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

import './navbar.scss';

function Navbar() {

  const [showMenu, setShowMenu] = React.useState(false);
  const toggle = () => setShowMenu(!showMenu);
  const hide = () => setShowMenu(false);
  const show = () => setShowMenu(true);

  React.useEffect(() => {
    console.log(`showMenu = ${showMenu}`);
  }, [showMenu]);

  return (
    <nav className={showMenu ? "navbar clearfix active" : "navbar clearfix"}>
      <Link className="menu-brand" to="/">TODO</Link>
      <button className="menu-btn" onClick={toggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="menu-item">
        <Link to="/" onClick={toggle} onBlur={hide} onFocus={show}><FaHome/> <span>Home</span></Link>
        <Link to="/about" onClick={toggle} onBlur={hide} onFocus={show}><FaInfoCircle /> <span>About</span></Link>
        <Link to="/author" onClick={toggle} onBlur={hide} onFocus={show}><FaUserNinja /> <span>Author</span></Link>
        <Link to="/signin" onClick={toggle} onBlur={hide} onFocus={show}><FaSignInAlt /> <span>SignIn</span></Link>
        <Link to="/signup" onClick={toggle} onBlur={hide} onFocus={show}><FaUserPlus /> <span>SignUp</span></Link>
      </div>
    </nav>
  )
}

export default Navbar;