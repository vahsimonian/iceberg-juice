import React, { useState } from "react";
import "./juices.css";
import { juiceData } from "../juiceData";
import { RiShoppingCartFill } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";

function Juices() {
  const [hovered, setHovered] = useState(false);
  const [filledInShop, setFilledInShop] = useState(false);

  const orderButton = hovered ? "none" : "block";

  const shoppingCartToggle = filledInShop ? (
    <RiShoppingCartFill />
  ) : (
    <RiShoppingCartLine />
  );

  const juiceItem = juiceData.map((juice) => {
    return (
      <div
        className="juice-item"
        style={{ backgroundColor: "white" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(true)}
      >
        {/* <button className="orderButton"></button> */}
        <h2 style={{ backgroundColor: juice.color }}>{juice.title}</h2>
        <img src={juice.img} alt="juice" />
        <div className="color-overlay" style={{ backgroundColor: juice.color }}>
          <div onClick={() => setFilledInShop(!filledInShop)}>
            {shoppingCartToggle}
          </div>
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
