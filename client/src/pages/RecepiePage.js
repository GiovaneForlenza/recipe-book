import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recepies from "../recepies";
import Image from "../components/Image";
import SingleRecepieInfo from "../components/SingleRecepieInfo";
import Ingredients from "../components/Ingredients";
import Steps from "../components/Steps";
import Spacer from "../components/Spacer";

import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

import "../style/global.scss";
import "../style/recepie/recepie-page.scss";
import "../style/recepie/recepie-img.scss";

const SingleRecepie = () => {
  const { id } = useParams();
  const [singleRecepie, setRecepie] = useState({});
  const [foundRecepie, setFoundRecepie] = useState(false);
  const [isRecepieFavorite, setIsRecepieFavorite] = useState(false);
  const [checkboxesSelected, setcheckboxesSelected] = useState([]);

  useEffect(() => {
    recepies.map((recepie) => {
      if (recepie.id === id) {
        setRecepie(recepie);
        setFoundRecepie(true);
      }
    });
  }, [id]);

  if (!foundRecepie) return <h2>No recepie found</h2>;

  function handleClick() {
    setIsRecepieFavorite(!isRecepieFavorite);
  }

  function handleCheckboxClick(id) {
    const isSelected = checkboxesSelected.includes(id);
    if (!isSelected) {
      setcheckboxesSelected([...checkboxesSelected, id]);
    } else {
      let checkedBoxes = checkboxesSelected.filter(
        (checkBox) => checkBox !== id
      );
      setcheckboxesSelected(checkedBoxes);
    }
  }

  return (
    <main>
      <section className="section">
        {/* <div className="page-header">
          <div className="page-title">
            <h2>Recepie</h2>
            <div className="underline"></div>
          </div>
          <Link to={`/`} className="link-btn">
            Back Home
          </Link>
        </div> */}

        <div className="single-recepie">
          <div className="header">
            <div className="img">
              <img src={singleRecepie.img} alt="" />
            </div>
            <div className="header-info">
              <div className="title">
                <h1>{singleRecepie.title}</h1>
              </div>
              <div className="details">
                <div className="left">
                  <div className="line">
                    Level: <span>{singleRecepie.dificulty}</span>
                  </div>
                  <div className="line">
                    Yield: <span>{singleRecepie.servings} servings</span>
                  </div>
                </div>
                <div className="right">
                  <div className="line">
                    Total: <span>{singleRecepie.totalTime} min</span>
                  </div>
                  <div className="line">
                    Cook: <span>{singleRecepie.cookTime} min</span>
                  </div>
                  <div className="line">
                    Prep: <span>{singleRecepie.prepTime} min</span>
                  </div>
                </div>
              </div>
              <div className="actions">
                <div className="save-recepie" onClick={handleClick}>
                  {isRecepieFavorite ? (
                    <AiTwotoneHeart className="heart-icon filled icon" />
                  ) : (
                    <AiOutlineHeart className="heart-icon icon" />
                  )}
                  <div className="text">Favorite Recepie</div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="ingredients">
              <div className="title">
                <h1>Ingredients</h1>
              </div>
              {singleRecepie.ingredients.map((ingredient, id) => {
                return (
                  <div className="line">
                    <input
                      type="checkbox"
                      id={`checkbox${id}`}
                      className="checkbox"
                      onClick={() => handleCheckboxClick(id)}
                    ></input>
                    <div
                      className={`ingredient ${
                        checkboxesSelected.includes(id) ? "crossed" : ""
                      }`}
                      id={`ingredient${id}`}
                    >
                      {ingredient}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="intructions">
              <div className="title">
                <h1>Intructions</h1>
              </div>
              {singleRecepie.steps.map((step, id) => {
                return (
                  <div className="step">
                    <div className="number">{id + 1}</div>
                    <div className="intruction">
                      <span>{step}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* <div className="recepie">
          <div className="recepie-header">
            <div className="header-container">
              <Image img={singleRecepie.img} />
              <div className="single-recepie-info">
                <SingleRecepieInfo recepie={singleRecepie} />
              </div>
            </div>
          </div>
          <Ingredients recepie={singleRecepie} />
          <div className="instructions">
          <Steps recepie={singleRecepie} />
          </div>
        </div> */}
      </section>
      <Spacer />
    </main>
  );
};

export default SingleRecepie;
