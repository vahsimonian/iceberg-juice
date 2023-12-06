import React from "react";
import "./home.css";
import { juiceData } from "../juiceData";

function Home() {
  const juiceItem = juiceData.map((juice) => {
    return (
      <div id="home">
        <h2>{juice.name}</h2>
        {/* <img src={juice.img} alt="" />; */}
      </div>
    );
  });

  return <div id="home">{juiceItem}</div>;
}

export default Home;
