import React, { useState, createContext, useContext, useEffect } from "react";

import recipes from "../recepies";
import { FiltersContext } from "./FiltersContext";
import { RecipeInfoContext } from "./RecipeInfoContext";

export const RecipesInMenuContext = createContext();
export const RecipesInMenuContextProvider = (props) => {
  const { categories, ingredients } = useContext(RecipeInfoContext);

  const { filters, lastSelectedFilter } = useContext(FiltersContext);

  const [allRecipes, setAllRecipes] = useState(recipes);

  const [recipesInMenu, setRecipesInMenu] = useState(recipes);
  let newRecipes = [];

  //#region THINGS I DONT NEED
  // const [isAllSelected, setIsAllSelected] = useState(true);
  // const [prevIndex, setPrevIndex] = useState(-1);
  // const [prevSelectedCategory, setPrevSelectedCategory] = useState("");
  // const [prevSelectedIngredient, setPrevSelectedIngredient] = useState("");

  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [selectedIngredient, setSelectedIngredient] = useState("");

  // const filterRecipes = (
  //   // category, index, ingredient
  //   selectedFilter
  // ) => {
  //   // setSelectedCategory(category);
  //   // setSelectedIngredient(ingredient);
  //   setLastSelectedFilter(selectedFilter);
  // };
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
  //#endregion

  useEffect(() => {
    if (!filters.length > 0) {
      setRecipesInMenu(allRecipes);
    } else {
      setRecipesInMenu([]);
      newRecipes = [];
      filters.map((filter) => {
        newRecipes = newRecipes.concat(
          allRecipes.filter((recipe) => recipe.category === filter)
        );
        allRecipes.forEach((recepie) => {
          recepie.ingredients.forEach((recIngredient) => {
            if (recIngredient.includes(filter)) {
              newRecipes.push(recepie);
            }
          });
        });
      });
      setRecipesInMenu(newRecipes);
    }
  }, [filters]);

  return (
    <RecipesInMenuContext.Provider
      value={{
        allRecipes,
        recipesInMenu,
        setRecipesInMenu,
        // filterRecipes,
        // setLastSelectedFilter,
      }}
    >
      {props.children}
    </RecipesInMenuContext.Provider>
  );
};
