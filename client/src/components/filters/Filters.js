import React, { useContext } from "react";

import { FiltersContext } from "../../contexts/FiltersContext";
import { RecipeInfoContext } from "../../contexts/RecipeInfoContext";
import { RecipesInMenuContext } from "../../contexts/RecipesInMenuContext";

import "../../style/filters.scss";

const Filters = () => {
  const {
    categoryCheckboxesSelected,
    ingredientCheckboxesSelected,
    handleClick,
    resetFilters,
  } = useContext(FiltersContext);

  const { categories, ingredients } = useContext(RecipeInfoContext);

  const { filterRecipes } = useContext(RecipesInMenuContext);

  return (
    <div class="filters-container div-invisible" id="filters_container">
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
      {categoryCheckboxesSelected.length !== 0 ||
      ingredientCheckboxesSelected.length !== 0 ? (
        <div className="btn-reset" onClick={resetFilters}>
          Reset
        </div>
      ) : null}
    </div>
  );
};

export default Filters;
