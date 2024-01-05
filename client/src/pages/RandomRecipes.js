import React, { useState } from "react";

import "../style/random-recipe.scss";
import "../style/navigation.scss";
import Navigation from "../components/Navigation";

import recepies from "../recepies";

function RandomRecipes() {
  const CATEGORY = "lunch/dinner";
  const [numberOfRecipes, setNumberOfRecipes] = useState(1);
  const [selectedRandomRecipes, setSelectedRandomRecipes] = useState([]);

  function getListOfRecipes() {
    for (let index = 0; index < numberOfRecipes; index++) {
      setSelectedRandomRecipes((selectedRandomRecipes) => [
        ...selectedRandomRecipes,
        getRandomRecipe(),
      ]);
    }
    console.log(selectedRandomRecipes);
  }

  function getRandomRecipe() {
    return recepies[getRandomNumber()];
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * recepies.length + 1);
  }
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
          <div className="numberOfRecipes">
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
            <button className="getRecipes" onClick={getListOfRecipes}>
              Get recipes
            </button>
          </div>
        </div>
        <div className="randomRecipesContainer">
          {selectedRandomRecipes.length > 0 &&
            selectedRandomRecipes.map((randomRecipe, id) => {
              return <h1 key={id}>{randomRecipe.title}</h1>;
            })}
        </div>
      </div>
    </div>
  );
}

export default RandomRecipes;
