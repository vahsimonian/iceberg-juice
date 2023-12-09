import "./home.css";
import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";

function Home() {
  return (
    <div>
      <RiShoppingCartLine />
      <RiShoppingCartFill color="red" />
    </div>
  );
}

export default Home;
