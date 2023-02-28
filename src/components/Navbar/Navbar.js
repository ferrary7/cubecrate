import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 600px)'});

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  document.onclick = (e) => {
    if (e.target.id !== "hemberg" && e.target.id !== "navlinks") {
      setShowMenu(false);
    }
  };

  // function MenuClick() {
  //   document.querySelector('.navlinks').classList.add('show');
  // }

  // function MenuUnclick() {
  //   if(document.querySelector('.navlinks').classList[2] === 'show') {
  //     document.querySelector('.navlinks').classList.remove('show');
  //   }
  // }

  return (
    <div className="navbar flex">
      <div>
        <Link to="/">
          <div className="logo flex">
            <img src="../../../assets/cclogo.svg" alt="logo" />
            CubeCrate
          </div>
        </Link>
        <img
          className="nav-icon"
          id="hemberg"
          src="../../../assets/nav-icon.svg"
          alt="menu"
          onClick={toggleMenu}
        />
      </div>
      <ul
        className={isMobile ? (showMenu ? "navlinks flex active" : "navlinks flex hidden") : "navlinks flex active"}
        id="navlinks"
      >
        <Link to="/services/web-development">
          <li>Services</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <a href="#contactus">
          <li>Contact Us</li>
        </a>
      </ul>
    </div>
  );

  // return (
  //   <nav className="navbar flex">
  //     <Link to='/'><div className='logo flex'>
  //          <img src='../../../assets/cclogo.svg' alt='logo' />
  //          CubeCrate
  //     </div></Link>
  //     <div className="navlinks flex">
  //       <a >Link 1</a>
  //       <a >Link 2</a>
  //       <a >Link 3</a>
  //     </div>
  //     <div className="nav-icon" onClick={toggleMenu}>
  //       {/* <div className="navbar-menu-icon"></div> */}
  //       <img src='../../../assets/nav-icon.svg' alt='menu' />
  //     </div>
  //     {showMenu && (
  //       <div className="navbar-dropdown">
  //         <a >Link 1</a>
  //         <a >Link 2</a>
  //         <a >Link 3</a>
  //       </div>
  //     )}
  //   </nav>
  // );
}

export default Navbar;
