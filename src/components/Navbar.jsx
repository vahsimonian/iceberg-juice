import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="letter0-v">
        <img src="" alt="" />
        <div className="nav-link-container">
          <Link
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
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            classID="nav-link-item"
          >
            About me
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            classID="nav-link-item"
          >
            My works
          </Link>
          <Link
            activeClass="contact"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            classID="nav-link-item"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
