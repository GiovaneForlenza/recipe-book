import React from "react";

import "../style/categories.scss";

const Categories = ({
  categories,
  ingredients,
  filterItems,
  categoryBtn,
  ingredientBtn,
  onClick,
}) => {
  return (
    <div className="categories">
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              className={`${index === categoryBtn && "active-btn"} filter-btn`}
              key={index}
              onClick={() => {
                filterItems(category, index);
                onClick();
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="btn-container">
        {ingredients.map((ingredient, index) => {
          return (
            <button
              className={`${
                index === ingredientBtn && "active-btn"
              } filter-btn`}
              key={index}
              onClick={() => {
                filterItems(undefined, index, ingredient);
                onClick();
              }}
            >
              {ingredient}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
