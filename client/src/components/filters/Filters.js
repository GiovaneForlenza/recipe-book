import React, { useState, useContext } from "react";

import { FiltersContext } from "../../contexts/FiltersContext";

import "../../style/filters.scss";

const Filters = ({
  prevIndex,
  setPrevIndex,
  setItemsInMenu,
  setSelectedCategoryBtn,
  setSelectedIngredientBtn,
  prevSelectedCategory,
  prevSelectedIngredient,
  setPrevSelectedCategory,
  setPrevSelectedIngredient,
}) => {
  const { categories, ingredients, handleClick } = useContext(FiltersContext);
  // const allCategories = [
  //   "all",
  //   ...new Set(recipes.map((recipes) => recipes.category)),
  // ];
  // const [categories, setCategories] = useState(allCategories);

  // const [ingredients, setIngredients] = useState([
  //   "chicken",
  //   "beef",
  //   "pork",
  //   "pasta",
  //   "potato",
  // ]);

  // const [isAllSelected, setIsAllSelected] = useState(true);

  // const [categoryCheckboxesSelected, setCategoryCheckboxesSelected] = useState(
  //   []
  // );
  // const [ingredientCheckboxesSelected, setingredientCheckboxesSelected] =
  //   useState([]);

  // function handleClick(id, caller, category, index, ingredient) {
  //   let isSelected;
  //   if (caller === "category") {
  //     isSelected = categoryCheckboxesSelected.includes(id);
  //   } else {
  //     isSelected = ingredientCheckboxesSelected.includes(id);
  //   }

  //   if (!isSelected) {
  //     if (caller === "category") {
  //       setCategoryCheckboxesSelected([...categoryCheckboxesSelected, id]);
  //     } else {
  //       setingredientCheckboxesSelected([...ingredientCheckboxesSelected, id]);
  //     }
  //   } else {
  //     let checkedBoxes;
  //     if (caller === "category") {
  //       checkedBoxes = categoryCheckboxesSelected.filter(
  //         (checkBox) => checkBox !== id
  //       );
  //       setCategoryCheckboxesSelected(checkedBoxes);
  //     } else {
  //       checkedBoxes = ingredientCheckboxesSelected.filter(
  //         (checkBox) => checkBox !== id
  //       );
  //       setingredientCheckboxesSelected(checkedBoxes);
  //     }
  //   }
  //   document.getElementById(
  //     `${caller === "category" ? "category-" : "ingredient-"}${id}`
  //   ).checked = !isSelected;
  // }

  return (
    <div class="filters-container">
      <div className="filters-group">
        <h3 className="title">Categories</h3>
        {categories.map((category, id) => {
          return (
            <div
              className="filter"
              key={id}
              onClick={() => {
                handleClick(id, "category");
                // filterRecipes(category, id);
              }}
            >
              <input type="checkbox" id={`category-${id}`} className="cx-box" />
              <label>{category}</label>
            </div>
          );
        })}
      </div>
      <div className="filters-group">
        <h3 className="title">Ingredients</h3>
        {ingredients.map((ingredient, id) => {
          return (
            <div
              className="filter"
              key={id}
              onClick={() => {
                handleClick(id, "ingredient");
                // filterRecipes(undefined, id, ingredient);
              }}
            >
              <input
                type="checkbox"
                id={`ingredient-${id}`}
                className="cx-box"
              />
              <label>{ingredient}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
