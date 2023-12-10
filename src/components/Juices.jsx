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

    const infoIcon = () => {
      setHovered((prevState) => ({
        ...prevState,
        [juice.id]: !prevState[juice.id],
      }));
    };

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

    return (
      <div className="juice-item" style={{ backgroundColor: "white" }}>
        <h2 style={{ backgroundColor: juice.color }}>{juice.title}</h2>
        <img src={juice.img} alt="juice" />
        <div className="color-overlay" style={{ backgroundColor: juice.color }}>
          <div onClick={toggleFilledInShop} className={iconClass}>
            {isFilled ? (
              <RiShoppingCartFill style={{ color: "white" }} />
            ) : (
              <RiShoppingCartLine style={{ color: "white" }} />
            )}
          </div>
          <div onClick={toggleFavorite} className={favoriteIconClass}>
            {isFavorite ? (
              <AiFillHeart style={{ color: "white" }} />
            ) : (
              <AiOutlineHeart style={{ color: "white" }} />
            )}
          </div>
          {hovered && (
            <div className="info-icon" onClick={infoIcon}>
              <IoInformationCircleOutline />
            </div>
          )}
          <div className="juice-p">
            <p>{juice.price}</p>
            <p>{juice.fruits.join(" + ")}</p>
            <p>{juice.description}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div id="juices">{juiceItem}</div>;
}

export default Juices;
