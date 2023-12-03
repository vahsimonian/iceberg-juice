import React from "react";
import "./home.css";
import juiceData from "../juiceData";

function Home() {
  const juiceItem = juiceData.map((juice) => {
    return <img src={juice.img} alt="" />;
  });

  return <div id="home">{juiceItem}</div>;
}

export default Home;
