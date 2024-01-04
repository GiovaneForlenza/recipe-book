import React, { useState } from "react";

import "../style/random-recipe.scss";
import "../style/navigation.scss";
import Navigation from "../components/Navigation";

function RandomRecipes() {
  const [numberOfRecipes, setNumberOfRecipes] = useState(1);
  return (
    <div className="random-recipe-container">
      <div className="header-btn">
        <Navigation />
      </div>
      <div className="main">
        <div className="numberOfRecipesHeader">
          <h1
            onClick={() => {
              alert(numberOfRecipes);
            }}
          >
            Number of recipes
          </h1>
          <div className="number-recipes">
            <div className="line">
              <button
                onClick={() => {
                  if (numberOfRecipes > 1)
                    setNumberOfRecipes(
                      (numberOfRecipes) => numberOfRecipes - 1
                    );
                }}
              >
                -
              </button>
              <span>{numberOfRecipes}</span>
              <button
                onClick={() => {
                  setNumberOfRecipes((numberOfRecipes) => numberOfRecipes + 1);
                }}
              >
                +
              </button>
            </div>
            <button>Get recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomRecipes;
