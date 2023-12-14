import React, { createContext, useState } from "react";

export const JuiceContext = createContext();

export const JuiceProvider = ({ children }) => {
  const [filledInShop, setFilledInShop] = useState({});
  const [favorites, setFavorites] = useState({});

  const hasFavorites = () => Object.values(favorites).some((value) => value);
  const hasCartItems = () => Object.values(filledInShop).some((value) => value);

  const toggleFavorite = (juiceId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [juiceId]: !prevFavorites[juiceId],
    }));
  };

  const toggleFilledInShop = (juiceId) => {
    setFilledInShop((prevFilledInShop) => ({
      ...prevFilledInShop,
      [juiceId]: !prevFilledInShop[juiceId],
    }));
  };
  const value = {
    favorites,
    filledInShop,
    toggleFavorite,
    toggleFilledInShop,
    hasFavorites, // Make sure these are included
    hasCartItems,
  };

  return (
    <JuiceContext.Provider value={value}>{children}</JuiceContext.Provider>
  );
};
