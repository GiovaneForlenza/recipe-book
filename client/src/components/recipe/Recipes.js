import React from "react";

import "../../style/recipe/recipes.scss";
import Header from "./Header";

const recipes = ({ recipes }) => {
  if (recipes.length < 1) {
    return <h1>Nothing to see here</h1>;
  }
  return (
    <div className="recipes">
      {!recipes ? <h1>No recipes found</h1> : null}
      {recipes.map((recipe) => {
        return <Header recipe={recipe} key={recipe.id} caller={"recipes"} />;
      })}
    </div>
  );
};

export default recipes;
