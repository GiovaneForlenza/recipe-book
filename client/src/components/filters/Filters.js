import React, { useContext } from "react";

import { FiltersContext } from "../../contexts/FiltersContext";
import { RecipeInfoContext } from "../../contexts/RecipeInfoContext";
import { RecipesInMenuContext } from "../../contexts/RecipesInMenuContext";

import "../../style/filters.scss";

const Filters = ({ handleHamburgerClick }) => {
  const {
    categoryCheckboxesSelected,
    ingredientCheckboxesSelected,
    handleClick,
    resetFilters,
  } = useContext(FiltersContext);

  const { categories, ingredients } = useContext(RecipeInfoContext);

  const { filterRecipes } = useContext(RecipesInMenuContext);

  return (
    <div className="filters-container div-invisible" id="filters_container">
      <div className="line">
        <div className="filters-group" id="category-filter">
          <h3 className="title">Categories</h3>

          {categories.map((category, id) => {
            return (
              <div
                className="filter"
                key={id}
                onClick={() => {
                  handleClick(id, "category", category);
                  filterRecipes(category, id);
                  // handleHamburgerClick();
                }}
              >
                <input
                  type="checkbox"
                  id={`category-${id}`}
                  className="cx-box"
                />
                <label>{category}</label>
              </div>
            );
          })}
        </div>
        <div className="filters-group" id="ingredient-filter">
          <h3 className="title">Ingredients</h3>
          {ingredients.map((ingredient, id) => {
            return (
              <div
                className="filter"
                key={id}
                onClick={() => {
                  handleClick(id, "ingredient");
                  filterRecipes(undefined, id, ingredient);
                  // handleHamburgerClick();
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
      <div className="line button">
        {categoryCheckboxesSelected.length !== 0 ||
        ingredientCheckboxesSelected.length !== 0 ? (
          <div
            className="btn-reset"
            onClick={() => {
              resetFilters();
              filterRecipes("all");
              handleHamburgerClick();
            }}
          >
            Reset
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Filters;
