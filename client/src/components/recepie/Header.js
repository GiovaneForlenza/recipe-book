import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineHeart, AiFillHeart, AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

import "../../style/recepie/recepie-header.scss";

function Header({ recepie, caller }) {
  const [isRecepieFavorite, setIsRecepieFavorite] = useState(false);
  function handleClick() {
    setIsRecepieFavorite(!isRecepieFavorite);
  }
  return (
    <div className="header">
      <div className="img">
        <img src={recepie.img} alt="" />
      </div>
      <div className="header-info">
        <div className="title">
          <h1>{recepie.title}</h1>
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
              Yield: <span>{recepie.servings} servings</span>
            </div>
          </div>
          <div className="right">
            <div className="line">
              Total: <span>{recepie.totalTime} min</span>
            </div>
            <div className="line">
              Cook: <span>{recepie.cookTime} min</span>
            </div>
            <div className="line">
              Prep: <span>{recepie.prepTime} min</span>
            </div>
          </div>
        </div>
        <div className="actions">
          {caller === "Recepies" ? (
            <div className="view-recepie">
              <Link to={`/recepie/${recepie.id}`} className="link-btn">
                View full recepie
              </Link>
            </div>
          ) : (
            <div className="save-recepie" onClick={handleClick}>
              {isRecepieFavorite ? (
                <AiFillHeart className="heart-icon icon" />
              ) : (
                <AiOutlineHeart className="heart-icon icon" />
              )}
              <div className="text">Favorite Recepie</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
