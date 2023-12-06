import React from "react";
import "./home.css";
import { juiceData } from "../juiceData";

function Home() {
  const juiceItem = juiceData.map((juice) => {
    return (
      <div className="home-item">
        <h2>{juice.title}</h2>
        <img src={juice.img} alt="juice" />
        <p>{juice.price}</p>
        <p>{juice.fruits.join(" + ")}</p>
        <p>{juice.description}</p>
      </div>
    );
  });

  return <div id="home">{juiceItem}</div>;
}

export default Home;
