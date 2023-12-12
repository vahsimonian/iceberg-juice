import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import searchIcon from "../assets/icons/search-2-line.png";
import juiceIcon from "../assets/icons/juice-icon.png";
import whiteArrowDown from "../assets/icons/white-down-arrow.png";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav id="navbar">
      <img src={juiceIcon} alt="juice" width={70} className="juice-icon" />
      <form action="" className="search-container">
        <input
          type="text"
          className={`search-input ${isHovered ? "" : "search-input"}`}
        />
        <img
          src={searchIcon}
          className="search"
          alt="search"
          onMouseEnter={() => setIsHovered(true)}
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
          Home <img src={whiteArrowDown} alt="arrow-down" width={13} />
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
          About iK <img src={whiteArrowDown} alt="arrow-down" width={13} />
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
          Products <img src={whiteArrowDown} alt="arrow-down" width={13} />
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
          Contact <img src={whiteArrowDown} alt="arrow-down" width={13} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
