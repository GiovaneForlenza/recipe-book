import React, { useState, useContext } from "react";
import Recipes from "../components/recipe/Recipes";
import Spacer from "../components/Spacer";

import { RecipesInMenuContext } from "../contexts/RecipesInMenuContext";

import "../style/home.scss";

import { BsFilterLeft } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Filters from "../components/filters/Filters";

function Home() {
  const { allRecipes, recipesInMenu } = useContext(RecipesInMenuContext);

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  function handleHamburgerClick() {
    setIsHamburgerOpen(!isHamburgerOpen);
    document
      .getElementById(`filters_container`)
      .classList.toggle("div-invisible");
  }

  return (
    <main>
      <section className="menu section padding">
        <Spacer />
        <div className="page-header">
          <div className="div-menu">
            <div className="filter" onClick={handleHamburgerClick}>
              {isHamburgerOpen ? (
                <IoMdClose className="icon" />
              ) : (
                <BsFilterLeft className="icon" />
              )}
            </div>
            <div className="">
              {!isHamburgerOpen ? <h2>Menu</h2> : <h2>Filters</h2>}
            </div>
          </div>
          <div className="div-filter">
            <Filters handleHamburgerClick={handleHamburgerClick} />
          </div>
        </div>
        <Recipes recipes={allRecipes} />
      </section>
    </main>
  );
}

export default Home;
