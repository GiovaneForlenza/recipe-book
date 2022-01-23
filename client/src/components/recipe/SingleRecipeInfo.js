import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaPepperHot } from "react-icons/fa";

const SingleRecipeInfo = ({ recipe: recipe }) => {
  const [isSpicy, setIsSpicy] = React.useState(false);
  let spicyLevel = [];
  React.useEffect(() => {
    if (recipe.spicy !== 0) {
      setIsSpicy(true);
      defSpicyLevel();
    }
  }, [recipe.id]);

  const defSpicyLevel = () => {
    for (let i = 0; i < recipe.spicy; i++) {
      spicyLevel.push(i);
    }
  };
  return (
    <>
      <div className="recipe-name">
        <span>{recipe.title}</span>
      </div>
      <div className="recipe-information">
        <h3>
          <AiOutlineClockCircle /> Prep: {recipe.prepTime}
        </h3>
        <h3>
          <AiOutlineClockCircle /> Cook: {recipe.cookTime}
        </h3>
        {isSpicy ? (
          <h3>
            <FaPepperHot /> {recipe.spicy}
          </h3>
        ) : null}
        <h3>Servings: {recipe.servings}</h3>
      </div>
    </>
  );
};

export default SingleRecipeInfo;
