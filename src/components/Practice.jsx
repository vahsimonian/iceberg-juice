import React, { useState } from "react";
import { RiShoppingCartFill, RiShoppingCartLine } from "icons-library"; // Ensure this import path is correct
import { juiceData } from "../juiceData";

// Define the JuiceItem component
const JuiceItem = ({ juice }) => {
  const [isInCart, setIsInCart] = useState(false);

  return (
    <div className="juice-item" style={{ backgroundColor: "white" }}>
      <h2 style={{ backgroundColor: juice.color }}>{juice.title}</h2>
      <img src={juice.img} alt="juice" />
      <div className="color-overlay" style={{ backgroundColor: juice.color }}>
        <div onClick={() => setIsInCart(!isInCart)}>
          {isInCart ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
        </div>
        <div className="juice-p">
          <p>{juice.price}</p>
          <p>{juice.fruits.join(" + ")}</p>
          <p>{juice.description}</p>
        </div>
      </div>
    </div>
  );
};

// Main Juices component
function Juices({ juiceData }) {
  // Check if juiceData is available and is an array
  if (!Array.isArray(juiceData)) {
    return <div>Loading or no data available...</div>;
  }

  return (
    <div id="juices">
      {juiceData.map((juice) => (
        <JuiceItem key={juice.title} juice={juice} />
      ))}
    </div>
  );
}

export default Juices;
