import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav id="navbar">
      <div>v</div>
      <form action="">
        <input type="text" />
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
          to="products"
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
          to="order"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          classID="nav-link-item"
        >
          Production
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
