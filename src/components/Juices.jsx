import React, { useState } from "react";
import "./juices.css";
import { juiceData } from "../juiceData";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";

function Juices() {
  const [filledInShop, setFilledInShop] = useState({});

  const juiceItem = juiceData.map((juice) => {
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
          <div onClick={toggleFilledInShop}>
            {filledInShop[juice.id] ? (
              <RiShoppingCartFill />
            ) : (
              <RiShoppingCartLine />
            )}
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
