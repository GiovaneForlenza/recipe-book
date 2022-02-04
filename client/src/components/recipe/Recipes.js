import React, { useContext } from "react";

import "../../style/recipe/recipes.scss";
import Header from "./Header";

import { RecipesInMenuContext } from "../../contexts/RecipesInMenuContext";

const Recipes = ({}) => {
  const { recipesInMenu } = useContext(RecipesInMenuContext);
  if (recipesInMenu.length < 1) {
    return <h1>Nothing to see here</h1>;
  }
  return (
    <div className="recipes">
      {!recipesInMenu ? <h1>No recipes found</h1> : null}
      {recipesInMenu.map((recipe) => {
        return <Header recipe={recipe} key={recipe.id} caller={"recipes"} />;
      })}
    </div>
  );
};

export default Recipes;
