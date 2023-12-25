import React, { useContext } from "react";
import "./juices.css";
import { juiceData } from "../juiceData";
// import {  fourJuicesCircled } from "../juiceData";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoInformationCircleOutline } from "react-icons/io5";
import { JuiceContext } from "../JuiceContext";
// import blackWhiteBg from "../assets/bg-s/black-white-bg.png";

function Juices() {
  const { favorites, filledInShop, toggleFavorite, toggleFilledInShop } =
    useContext(JuiceContext);

  const juiceItem = juiceData.map((juice) => {
    const isFilled = filledInShop[juice.id];
    const iconClass = `shopping-cart-icon ${isFilled ? "filled" : ""}`;

    const isFavorite = favorites[juice.id];
    const favoriteIconClass = `favorite-icon ${isFavorite ? "filled" : ""}`;

    const handleSearch = (event) => {
      event.preventDefault();
      window.open(
        `https://www.google.com/search?q=${juice.fruits} juice`,
        "_blank"
      );
    };

    return (
      <div
        className="juice-item"
        style={{ backgroundColor: "white" }}
        key={juice.id}
      >
        <h2 id="juice-title">{juice.title}</h2>
        <img src={juice.img} alt="juice" onClick={handleSearch} />
        <div onClick={() => toggleFilledInShop(juice.id)} className={iconClass}>
          {isFilled ? (
            <RiShoppingCartFill style={{ color: "black" }} />
          ) : (
            <RiShoppingCartLine style={{ color: "black" }} />
          )}
        </div>
        <div
          onClick={() => toggleFavorite(juice.id)}
          className={favoriteIconClass}
        >
          {isFavorite ? (
            <AiFillHeart style={{ color: "red" }} />
          ) : (
            <AiOutlineHeart style={{ color: "red" }} />
          )}
        </div>
        <div
          className="color-overlay"
          style={{
            background: `linear-gradient(to top, ${juice.color} ,white )`,
          }}
        >
          <div className="info-icon" onClick={handleSearch}>
            <IoInformationCircleOutline />
          </div>
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

  return (
    <div id="juices">
      <div className="fruit-container">
        <div className="black-white-bg"></div>
        {/* {fourJuicesCircled.map((fruit) => (
        ))} */}
        {/* <img src={blackWhiteBg} alt="fruit" className="black-white-bg" /> */}
      </div>
      <div className="juice-item-container">{juiceItem}</div>
    </div>
  );
}

export default Juices;
