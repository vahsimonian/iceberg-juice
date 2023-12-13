import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import searchIcon from "../assets/icons/search-2-line.png";
import juiceIcon from "../assets/icons/juice-icon.png";
import whiteArrowDown from "../assets/icons/white-down-arrow.png";
import { navbarItems } from "../juiceData";
import {
  BsBagHeartFill,
  BsBagHeart,
  BsBagPlus,
  BsBagPlusFill,
} from "react-icons/bs";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleInputFocus = () => {
    setIsHovered(false);
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <nav id="navbar">
      {/* <BsBagHeartFill /> */}
      {/* <BsBagPlusFill /> */}
      <div className="bag-container">
        <BsBagHeart className="icon-heart" />
        <BsBagPlus className="icon-plus" />
      </div>
      <img src={juiceIcon} alt="juice" width={70} className="juice-icon" />
      <form action="" className="search-container">
        <input
          type="text"
          className={`search-input ${
            isHovered || isFocused ? "" : "search-none"
          }`}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <img
          src={searchIcon}
          className={`search ${isFocused ? "search-focused" : ""}`}
          alt="search"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </form>
      <div className="nav-link-container">
        {navbarItems.map((item, index) => (
          <Link
            className="navbar-link-item navbar-link-item-container"
            activeClass="active"
            to={item.to}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            classID="nav-link-item"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            key={item.id}
          >
            {item.name} <img src={whiteArrowDown} alt="arrow-down" width={13} />
            {hoveredItem === index && <div className="hover-div"></div>}
          </Link>
          // </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
