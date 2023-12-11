import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import searchIcon from "../assets/icons/search-2-line.png";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const searchIconHover = () => {};

  return (
    <nav id="navbar">
      <div>Home</div>
      <form action="" className="search-container">
        <input type="text" className="search-input" />
        <img
          src={searchIcon}
          className="search"
          alt="search"
          onMouseEnter={setIsHovered(true)}
          onMouseLeave={setIsHovered(false)}
        />
      </form>
      <div className="nav-link-container">
        <Link
          className="navbar-link-item"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          classID="nav-link-item"
        >
          Home
        </Link>
        <Link
          className="navbar-link-item"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          classID="nav-link-item"
        >
          About iK
        </Link>
        <Link
          className="navbar-link-item"
          activeClass="active"
          to="juices"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          classID="nav-link-item"
        >
          Products
        </Link>
        <Link
          className="navbar-link-item"
          activeClass="contact"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          classID="nav-link-item"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
