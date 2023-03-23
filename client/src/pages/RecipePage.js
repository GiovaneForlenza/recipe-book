import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recepies from "../recepies";

// import Image from "../components/Image";
// import SingleRecepieInfo from "../components/recepie/SingleRecepieInfo";
// import Ingredients from "../components/Ingredients";
// import Steps from "../components/Steps";
// import Spacer from "../components/Spacer";

import "../style/global.scss";
import "../style/recipe/recipe-page.scss";
import "../style/recipe/recipe-img.scss";
import "../style/recipe/recipe-header.scss";
import Header from "../components/recipe/Header";
import Navigation from "../components/Navigation";

const SingleRecipe = () => {
  const { id } = useParams();
  const [singleRecipe, setRecepie] = useState({});
  const [foundRecepie, setFoundRecepie] = useState(false);
  const [checkboxesSelected, setcheckboxesSelected] = useState([]);

  useEffect(() => {
    recepies.map((recipe) => {
      if (recipe.id === id) {
        setRecepie(recipe);
        setFoundRecepie(true);
      }
    });
  }, [id]);

  if (!foundRecepie) return <h2>No recepie found</h2>;

  function handleCheckboxClick(id) {
    const isSelected = checkboxesSelected.includes(id);
    if (!isSelected) {
      setcheckboxesSelected([...checkboxesSelected, id]);
      document.getElementById(`checkbox${id}`).checked = true;
    } else {
      let checkedBoxes = checkboxesSelected.filter(
        (checkBox) => checkBox !== id
      );
      setcheckboxesSelected(checkedBoxes);
      document.getElementById(`checkbox${id}`).checked = false;
    }
  }

  return (
    <main>
      <section className="section recipe-page">
        <div className="page-header">
          <div className="page-title">
            <h2>Receita</h2>
            <div className="underline"></div>
          </div>
          <Navigation />
        </div>

        <div className="single-recepie">
          <Header recipe={singleRecipe} />
          <div className="content">
            <div className="ingredients">
              <div className="title">
                <h1>Ingredientes</h1>
              </div>
              {singleRecipe.ingredients.map((ingredient, id) => {
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
                      onClick={() => handleCheckboxClick(id)}
                    >
                      {ingredient}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="intructions">
              <div className="title">
                <h1>Modo de preparo</h1>
              </div>
              {singleRecipe.steps.map((step, id) => {
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
              <Image img={singleRecipe.img} />
              <div className="single-recepie-info">
                <SingleRecepieInfo recepie={singleRecipe} />
              </div>
            </div>
          </div>
          <Ingredients recepie={singleRecipe} />
          <div className="instructions">
          <Steps recepie={singleRecipe} />
          </div>
        </div> */}
      </section>
      {/* <Spacer /> */}
    </main>
  );
};

export default SingleRecipe;
