import React, { useState, createContext } from "react";

import recipes from "../recepies";

export const RecipeInfoContext = createContext();
export const RecipeInfoContextProvider = (props) => {
  const allCategories = [
    // "all",
    ...new Set(recipes.map((recipes) => recipes.category)),
  ];
  const [categories, setCategories] = useState(allCategories);
  const [ingredients, setIngredients] = useState([
    "chicken",
    "beef",
    "pork",
    "pasta",
    "potato",
  ]);
  return (
    <RecipeInfoContext.Provider value={{ categories, ingredients }}>
      {props.children}
    </RecipeInfoContext.Provider>
  );
};
