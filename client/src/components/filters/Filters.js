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
    setLastSelectedFilter,
    lastSelectedFilter,
    filters,
    updateBoxSelected,
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
                  setLastSelectedFilter(category);
                }}
              >
                <div className="cx-box" id={`${category}-cxbox`}></div>
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
                  setLastSelectedFilter(ingredient);

                  // handleHamburgerClick();
                }}
              >
                <div className="cx-box" id={`${ingredient}-cxbox`}></div>
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

              // handleHamburgerClick();
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
