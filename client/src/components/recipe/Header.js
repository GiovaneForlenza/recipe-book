import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineHeart, AiFillHeart, AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

import "../../style/recipe/recipe-header.scss";

function Header({ recipe, caller }) {
  const [isRecepieFavorite, setIsRecepieFavorite] = useState(false);
  function handleClick() {
    setIsRecepieFavorite(!isRecepieFavorite);
  }
  return (
    <div className="header">
      <div
        className="img"
        style={{ backgroundImage: `url(${recipe.img})` }}
      ></div>
      <div className="header-info">
        <div className="title">
          <h1>{recipe.title}</h1>
        </div>
        <div className="details">
          <div className="left">
            <div className="line">
              Level:{" "}
              <span>
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <BsStarHalf />
              </span>
            </div>
            <div className="line">
              Yield: <span>{recipe.servings} servings</span>
            </div>
          </div>
          <div className="right">
            <div className="line">
              Total: <span>{recipe.totalTime} min</span>
            </div>
            <div className="line">
              Cook: <span>{recipe.cookTime} min</span>
            </div>
            <div className="line">
              Prep: <span>{recipe.prepTime} min</span>
            </div>
          </div>
        </div>
        <div className="actions">
          {caller === "recipes" ? (
            <div className="view-recipe">
              <Link to={`/recipe/${recipe.id}`} className="link-btn">
                View full recipe
              </Link>
            </div>
          ) : (
            <div className="save-recipe" onClick={handleClick}>
              {isRecepieFavorite ? (
                <AiFillHeart className="heart-icon icon" />
              ) : (
                <AiOutlineHeart className="heart-icon icon" />
              )}
              <div className="text">Favorite recipe</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
