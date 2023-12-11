import React, { useState } from "react";
import "./juices.css";
import { juiceData } from "../juiceData";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoInformationCircleOutline } from "react-icons/io5";

function Juices() {
  const [filledInShop, setFilledInShop] = useState({});
  const [favorites, setFavorites] = useState({});
  const [hovered, setHovered] = useState({});

  const juiceItem = juiceData.map((juice) => {
    const isFilled = filledInShop[juice.id];
    const iconClass = `shopping-cart-icon ${isFilled ? "filled" : ""}`;

    const isFavorite = favorites[juice.id];
    const favoriteIconClass = `favorite-icon ${isFavorite ? "filled" : ""}`;

    const toggleFavorite = () => {
      setFavorites((prevState) => ({
        ...prevState,
        [juice.id]: !prevState[juice.id],
      }));
    };

    const toggleFilledInShop = () => {
      setFilledInShop((prevState) => ({
        ...prevState,
        [juice.id]: !prevState[juice.id],
      }));
    };

    const handleSearch = (event) => {
      event.preventDefault(); // Prevent default form submission
      window.open(
        `https://www.google.com/search?q=${juice.fruits} juice`,
        "_blank"
      );
    };

    return (
      <div className="juice-item" style={{ backgroundColor: "white" }}>
        <h2 style={{ backgroundColor: juice.color }}>{juice.title}</h2>
        <img src={juice.img} alt="juice" onClick={handleSearch} />
        <div className="color-overlay" style={{ backgroundColor: juice.color }}>
          <div onClick={toggleFilledInShop} className={iconClass}>
            {isFilled ? (
              <RiShoppingCartFill style={{ color: "black" }} />
            ) : (
              <RiShoppingCartLine style={{ color: "black" }} />
            )}
          </div>
          <div onClick={toggleFavorite} className={favoriteIconClass}>
            {isFavorite ? (
              <AiFillHeart style={{ color: "red" }} />
            ) : (
              <AiOutlineHeart style={{ color: "red" }} />
            )}
          </div>
          {hovered && (
            <div className="info-icon" onClick={handleSearch}>
              <IoInformationCircleOutline />
            </div>
          )}
          <div className="juice-p">
            <hr className="hr-price" />
            <p>{juice.price}</p>
            <hr className="hr-fruits" />
            <p>{juice.fruits.join(" + ")}</p>
            <hr className="hr-desc" />
            <p>{juice.description}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div id="juices">{juiceItem}</div>;
}

export default Juices;
