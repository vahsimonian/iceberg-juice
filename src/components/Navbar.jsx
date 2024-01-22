import whiteArrowDown from '../assets/icons/white-down-arrow.png';
import React, { useContext, useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import searchIcon from '../assets/icons/search-2-line.png';
import juiceIcon from '../assets/icons/juice-icon.png';
import { navbarItems } from '../juiceData';
import { JuiceContext } from '../JuiceContext';
import {
  BsBagHeartFill,
  BsBagHeart,
  BsBagPlus,
  BsBagPlusFill,
} from 'react-icons/bs';

function Navbar() {
  const { hasFavorites, hasCartItems } = useContext(JuiceContext);
  const [isFocused, setIsFocused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closeMenu);
    return () => {
      document.body.removeEventListener('click', closeMenu);
    };
  }, []);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <nav id="navbar" onClick={(e) => e.stopPropagation()}>
      <div className="bag-container">
        {hasFavorites() ? (
          <BsBagHeartFill className="icon-heart" />
        ) : (
          <BsBagHeart className="icon-heart" />
        )}
        {hasCartItems() ? (
          <BsBagPlusFill className="icon-plus" />
        ) : (
          <BsBagPlus className="icon-plus" />
        )}
      </div>
      <img src={juiceIcon} alt="juice" width={70} className="juice-icon" />
      <form action="" className="search-container">
        <input
          type="text"
          className={`search-input
          `}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <img
          src={searchIcon}
          className={`search ${isFocused ? 'search-focused' : ''}`}
          alt="search"
        />
      </form>
      <div className={`hamburger-menu`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`nav-link-container ${menuOpen ? 'show' : ''}`}>
        {navbarItems.map((item, index) => (
          <div
            className={`navbar-link-item-container ${
              index === 0 || index === 3 ? 'home-link' : ''
            }`}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            key={item.id}
          >
            <Link
              className="navbar-link-item"
              activeClass="active"
              to={item.to}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              // classID="nav-link-item"
              key={item.id}
            >
              {item.name}
              {item.name !== 'Home' && item.name !== 'Contact' && (
                <img
                  src={whiteArrowDown}
                  alt="arrow-down"
                  width={12.5}
                  style={{
                    backgroundColor: 'black',
                    borderRadius: '15px',
                  }}
                />
              )}
            </Link>
            {hoveredItem === index && item.listItems && (
              <div className="hover-div">
                {item.listItems.map((subItem, subIndex) => (
                  <div key={subIndex} className="list-item">
                    {subItem} <hr />{' '}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
