import React, { useState, createContext, useContext } from "react";

import recipes from "../recepies";
import { RecipeInfoContext } from "./RecipeInfoContext";

export const RecipesInMenuContext = createContext();
export const RecipesInMenuContextProvider = (props) => {
  const { categories, ingredients } = useContext(RecipeInfoContext);

  const [allRecipes, setAllRecipes] = useState(recipes);

  const [recipesInMenu, setRecipesInMenu] = useState(recipes);

  // const [selectedCategoryBtn, setSelectedCategoryBtn] = useState(0);
  // const [selectedIngredientBtn, setSelectedIngredientBtn] = useState(null);

  const [isAllSelected, setIsAllSelected] = useState(true);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [prevSelectedCategory, setPrevSelectedCategory] = useState("");
  const [prevSelectedIngredient, setPrevSelectedIngredient] = useState("");

  // // Deals with the buttons to change the categories / ingredients shown
  // // Category - Title of the category pressed
  // // Index - Index of the btn pressed
  // // Ingredient - Title of the ingredient pressed. Undefined by default
  const filterRecipes = (category, index, ingredient) => {
    category === "all" ? setIsAllSelected(true) : setIsAllSelected(false);
    // Checks if the btn selected is not 'All', and if the current press is the same as the previous
    // Works for both the categories and ingredients btn
    // If true, change the category to All, triggering all the items to be shown

    if (
      (!isAllSelected && categories.indexOf(category) === prevIndex) ||
      (!isAllSelected && ingredients.indexOf(ingredient) === prevIndex)
    ) {
      category = "all";
    }

    typeof ingredient !== "undefined"
      ? setPrevSelectedIngredient(index)
      : setPrevSelectedCategory(index);

    // Shows all the items
    if (category === "all") {
      setRecipesInMenu(recipes);
      // setSelectedCategoryBtn(0);
      // setSelectedIngredientBtn(null);
      setPrevIndex(-1);
      setIsAllSelected(true);
      setPrevSelectedIngredient("");
      setPrevSelectedCategory("");
      return;
    }

    // If any other btn was pressed
    let newRecepies = [];

    if (prevSelectedCategory && prevSelectedIngredient) {
    }

    // If the btn was an ingredient
    if (typeof ingredient !== "undefined") {
      // Search for the ingredients in all the recepies
      recipes.forEach((recepie) => {
        // If the recepie has the ingredient pressed, add to the array
        recepie.ingredients.forEach((recIngredient) => {
          if (recIngredient.includes(ingredient)) {
            newRecepies.push(recepie);
          }
        });
      });
      // setSelectedIngredientBtn(index);
      // setSelectedCategoryBtn(null);
    } else {
      // Add all recepies with the same category to the array
      newRecepies = recipes.filter((recepie) => recepie.category === category);
      // setSelectedCategoryBtn(index);
      // setSelectedIngredientBtn(null);
    }
    setPrevIndex(index);
    setRecipesInMenu(newRecepies);
  };
  return (
    <RecipesInMenuContext.Provider
      value={{ allRecipes, recipesInMenu, setRecipesInMenu, filterRecipes }}
    >
      {props.children}
    </RecipesInMenuContext.Provider>
  );
};
