import React from "react";
import Division from "./Division";
import ItemsList from "./ItemsList";

const Ingredients = ({ recepie }) => {
  const [ingredients, setIngredients] = React.useState(recepie.ingredients);
  return (
    <>
      {/* <Division text="Ingredients" /> */}
      <ItemsList items={ingredients} />
    </>
  );
};

export default Ingredients;
