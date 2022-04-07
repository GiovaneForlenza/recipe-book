import React, { useState, createContext, useContext, useEffect } from "react";

import recipes from "../recepies";
import { FiltersContext } from "./FiltersContext";
import { RecipeInfoContext } from "./RecipeInfoContext";

export const RecipesInMenuContext = createContext();
export const RecipesInMenuContextProvider = (props) => {
  const { categories, ingredients } = useContext(RecipeInfoContext);

  const { categoryCheckboxesSelected, ingredientCheckboxesSelected } =
    useContext(FiltersContext);

  const [allRecipes, setAllRecipes] = useState(recipes);

  const [recipesInMenu, setRecipesInMenu] = useState(recipes);

  // const [isAllSelected, setIsAllSelected] = useState(true);
  // const [prevIndex, setPrevIndex] = useState(-1);
  // const [prevSelectedCategory, setPrevSelectedCategory] = useState("");
  // const [prevSelectedIngredient, setPrevSelectedIngredient] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const filterRecipes = (category, index, ingredient) => {
    setSelectedCategory(category);
    setSelectedIngredient(ingredient);
  };
  //   category === "all" ? setIsAllSelected(true) : setIsAllSelected(false);

  //   if (
  //     (!isAllSelected && categories.indexOf(category) === prevIndex) ||
  //     (!isAllSelected && ingredients.indexOf(ingredient) === prevIndex)
  //   ) {
  //     category = "all";
  //   }

  //   typeof ingredient !== "undefined"
  //     ? setPrevSelectedIngredient(index)
  //     : setPrevSelectedCategory(index);

  //   if (category === "all") {
  //     setRecipesInMenu(recipes);
  //     setPrevIndex(-1);
  //     setIsAllSelected(true);
  //     setPrevSelectedIngredient("");
  //     setPrevSelectedCategory("");
  //     return;
  //   }

  //   let newRecepies = [];

  //   if (prevSelectedCategory && prevSelectedIngredient) {
  //   }

  //   if (typeof ingredient !== "undefined") {
  //     recipes.forEach((recepie) => {
  //       recepie.ingredients.forEach((recIngredient) => {
  //         if (recIngredient.includes(ingredient)) {
  //           newRecepies.push(recepie);
  //         }
  //       });
  //     });
  //   } else {
  //     newRecepies = recipes.filter((recepie) => recepie.category === category);
  //   }
  //   setPrevIndex(index);
  //   setRecipesInMenu(newRecepies);
  // };

  useEffect(() => {
    // if (categoryCheckboxesSelected.length > 0) {
    //   setFilteredRecipes([
    //     ...filteredRecipes,
    //     allRecipes.filter((recipe) => recipe.category === selectedCategory),
    //   ]);
    // }
    // console.log(filteredRecipes);
  }, [categoryCheckboxesSelected, ingredientCheckboxesSelected]);

  return (
    <RecipesInMenuContext.Provider
      value={{ allRecipes, recipesInMenu, setRecipesInMenu, filterRecipes }}
    >
      {props.children}
    </RecipesInMenuContext.Provider>
  );
};
