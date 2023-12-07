import React from "react";
import "./juices.css";
import { juiceData } from "../juiceData";

function Juices() {
  const juiceItem = juiceData.map((juice) => {
    return (
      <div className="juice-item" style={{ backgroundColor: "white" }}>
        <h2 style={{ backgroundColor: juice.color }}>{juice.title}</h2>
        <img src={juice.img} alt="juice" />
        {/* <button className="button"> */}
        <div
          className="color-overlay"
          style={{ backgroundColor: juice.color }}
        ></div>
        {/* </button> */}
        <p>{juice.price}</p>
        <p>{juice.fruits.join(" + ")}</p>
        <p>{juice.description}</p>
      </div>
    );
  });

  return <div id="home">{juiceItem}</div>;
}

export default Juices;
