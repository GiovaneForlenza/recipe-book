import React, { useState, createContext } from "react";

import recipes from "../recepies";
export const FiltersContext = createContext();

export const FiltersContextProvider = (props) => {
  const allCategories = [
    "all",
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

  const [isAllSelected, setIsAllSelected] = useState(true);

  const [categoryCheckboxesSelected, setCategoryCheckboxesSelected] = useState(
    []
  );
  const [ingredientCheckboxesSelected, setingredientCheckboxesSelected] =
    useState([]);

  function handleClick(id, caller, category, index, ingredient) {
    let isSelected;
    if (caller === "category") {
      isSelected = categoryCheckboxesSelected.includes(id);
    } else {
      isSelected = ingredientCheckboxesSelected.includes(id);
    }

    if (!isSelected) {
      if (caller === "category") {
        setCategoryCheckboxesSelected([...categoryCheckboxesSelected, id]);
      } else {
        setingredientCheckboxesSelected([...ingredientCheckboxesSelected, id]);
      }
    } else {
      let checkedBoxes;
      if (caller === "category") {
        checkedBoxes = categoryCheckboxesSelected.filter(
          (checkBox) => checkBox !== id
        );
        setCategoryCheckboxesSelected(checkedBoxes);
      } else {
        checkedBoxes = ingredientCheckboxesSelected.filter(
          (checkBox) => checkBox !== id
        );
        setingredientCheckboxesSelected(checkedBoxes);
      }
    }
    document.getElementById(
      `${caller === "category" ? "category-" : "ingredient-"}${id}`
    ).checked = !isSelected;
  }
  return (
    <FiltersContext.Provider
      values={{
        allCategories,
        categories,
        setCategories,
        ingredients,
        setIngredients,
        isAllSelected,
        setIsAllSelected,
        categoryCheckboxesSelected,
        setCategoryCheckboxesSelected,
        ingredientCheckboxesSelected,
        setingredientCheckboxesSelected,
        handleClick,
      }}
    >
      {props.children}
    </FiltersContext.Provider>
  );
};
